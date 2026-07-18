import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.config import settings

security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> dict:
    """
    Dependency ini yang bikin endpoint "protected".
    Cukup tambahkan `user: dict = Depends(get_current_user)` di parameter
    endpoint manapun, otomatis butuh token valid buat akses.

    Frontend kirim token di header: Authorization: Bearer <token>
    """
    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            settings.supabase_jwt_secret,
            algorithms=["HS256"],
            audience="authenticated",
        )
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token kadaluarsa")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token tidak valid")

    # payload["sub"] = user id (uuid) dari Supabase auth.users
    return {"id": payload["sub"], "email": payload.get("email")}
