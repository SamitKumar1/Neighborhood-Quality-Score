"""Application settings loaded from environment variables."""

import os
from functools import lru_cache

from dotenv import load_dotenv

load_dotenv()


class Settings:
    """Configuration values used to initialize the application."""

    def __init__(self) -> None:
        self.app_name = os.getenv("APP_NAME", "Neighborhood Quality Score API")
        self.environment = os.getenv("APP_ENV", "development")
        self.frontend_origin = [
            origin.strip()
            for origin in os.getenv("FRONTEND_ORIGIN", "http://localhost:5173").split(",")
            if origin.strip()
        ]
        self.database_url = os.getenv(
            "DATABASE_URL",
            "postgresql://nqs_user:change-me@localhost:5432/neighborhood_quality",
        )


@lru_cache
def get_settings() -> Settings:
    """Return cached application settings."""
    return Settings()
