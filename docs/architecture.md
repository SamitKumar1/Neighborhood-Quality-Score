# Architecture

## System shape

- **Frontend (`frontend/`)** — presentation, page layouts, reusable UI components, and typed API clients.
- **Backend (`backend/app/`)** — HTTP API, configuration, database access, domain models, request/response schemas, and scoring/data services.
- **PostgreSQL (`database/`)** — persistent source observations, geographic entities, and versioned score outputs as the data model is defined.
- **Documentation (`docs/`)** — product scope, indicator contracts, scoring rules, data provenance, and decisions.

## Request and data flow

The frontend calls the backend API. Backend services validate and transform source data, persist it through the database layer, and calculate scores using a versioned methodology. API responses should include score components, source/reference metadata, and coverage context.

## Local runtime

`docker-compose.yml` currently provides PostgreSQL. The API and frontend can be added as services once their frameworks and entry points are selected. Configuration belongs in environment variables; `.env.example` documents local settings without containing secrets.

## Design constraints

- Keep scoring logic independent of HTTP handlers.
- Keep source provenance and reference periods attached to indicator values.
- Version scoring configuration so results remain reproducible.
- Treat geographic boundary and indicator changes as explicit data/version decisions.
