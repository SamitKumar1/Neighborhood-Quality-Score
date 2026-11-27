"""SQLAlchemy engine, session factory, and connectivity check."""

import os
from collections.abc import Generator

from dotenv import load_dotenv
from sqlalchemy import URL, create_engine, text
from sqlalchemy.engine import Engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

load_dotenv()


def _database_url() -> str | URL:
    """Read the database URL from the environment, with local defaults."""
    return os.getenv(
        "DATABASE_URL",
        URL.create(
            drivername="postgresql+psycopg",
            username=os.getenv("POSTGRES_USER", "nqs_local"),
            password=os.getenv("POSTGRES_PASSWORD", ""),
            host=os.getenv("POSTGRES_HOST", "localhost"),
            port=int(os.getenv("POSTGRES_PORT", "5432")),
            database=os.getenv("POSTGRES_DB", "neighbourhood_score"),
        ),
    )


class Base(DeclarativeBase):
    """Base class for ORM models."""


engine: Engine = create_engine(_database_url(), pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def get_db() -> Generator[Session, None, None]:
    """Yield a database session and close it after use."""
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()


def check_database_connection() -> None:
    """Raise the driver's connection error if PostgreSQL is unavailable."""
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
