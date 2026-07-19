from supabase import create_client, Client
from app.config import settings
import jwt

payload = jwt.decode(
    settings.supabase_service_key,
    options={"verify_signature": False},
)

print("ROLE:", payload.get("role"))

supabase: Client = create_client(
    settings.supabase_url,
    settings.supabase_service_key,
)