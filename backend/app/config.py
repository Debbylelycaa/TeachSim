from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    # ==========================
    # Supabase
    # ==========================
    supabase_url: str
    supabase_service_key: str
    supabase_jwt_secret: str

    # ==========================
    # Gemini
    # ==========================
    gemini_api_key: str

    # ==========================
    # Simulation
    # ==========================
    simulation_duration: int = 180

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()