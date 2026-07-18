from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    Semua config app ada di sini. Kalau butuh env var baru
    (misal GEMINI_API_KEY), tambah di sini — jangan panggil
    os.getenv() langsung di file lain, biar 1 sumber kebenaran.
    """
    supabase_url: str
    supabase_service_key: str  # service_role key, BUKAN anon key (backend butuh akses penuh)
    supabase_jwt_secret: str   # buat verifikasi token user

    class Config:
        env_file = ".env"


settings = Settings()
