"""Health check endpoint."""

from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    """Confirm that the backend application is running."""
    return {
        "status": "healthy",
        "service": "neighbourhood-quality-score",
    }
