from supabase import create_client, Client
from app.config import settings

# Client ini pakai service_role key = akses penuh, bypass RLS.
# Aman karena ini di backend (server), bukan kekirim ke browser.
# Dipakai buat operasi backend seperti simpan hasil AI, dll.
supabase: Client = create_client(
    settings.supabase_url,
    settings.supabase_service_key,
)
