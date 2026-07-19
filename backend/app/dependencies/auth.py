from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from supabase import create_client

from app.config import settings

security = HTTPBearer()

supabase = create_client(
    settings.supabase_url,
    settings.supabase_service_key,
)


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> dict:

    token = credentials.credentials

    try:

        user = supabase.auth.get_user(token)

    except Exception as e:
        print("AUTH ERROR:", e)

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token tidak valid",
        )

    if user is None or user.user is None:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User tidak ditemukan",
        )

    return {

        "id": user.user.id,

        "email": user.user.email,

    }