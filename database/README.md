# Database

The project uses PostgreSQL for local development. `init.sql` is mounted into the Postgres container and runs only when the data volume is first initialized. Keep subsequent schema changes in versioned migrations rather than editing an already initialized database in place.
