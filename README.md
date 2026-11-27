# Neighborhood Quality Score

A full-stack project for exploring and scoring neighborhood quality using documented indicators and data sources.

## Project structure

- `frontend/` — user interface source code
- `backend/` — API, application services, data models, and tests
- `database/` — database initialization and notes
- `docs/` — implementation plan, indicator definitions, scoring method, and architecture decisions

## Local development

1. Copy `.env.example` to `.env` and set a secure local `POSTGRES_PASSWORD`.
2. Start PostgreSQL with `docker compose up -d db`.
3. Create a Python virtual environment, install `backend/requirements.txt`, and run the API from the backend package once its entry point is added.

The frontend scaffold is intentionally unopinionated; add the chosen framework and package manager when implementation begins.
