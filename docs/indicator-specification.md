# Indicator Specification

Use one entry per indicator. Do not add an indicator to production scoring until its definition, source, direction, and missing-data treatment are agreed.

## Indicator record template

| Field | Description |
|---|---|
| ID / name | Stable identifier and user-facing name |
| Domain | e.g. safety, access, environment, affordability |
| Definition | Exact quantity measured and population/geography covered |
| Unit | Native unit and any display unit |
| Direction | Whether higher values improve or reduce the score |
| Geography | Source geography and aggregation to the project geography |
| Source | Publisher, dataset/API, license, and retrieval URL |
| Cadence | Update frequency and expected publication lag |
| Period | Reference period represented by a value |
| Quality checks | Valid ranges, completeness, and anomaly checks |
| Missing/stale policy | Exclusion, imputation, or score confidence treatment |
| Limitations | Bias, coverage gaps, and interpretation cautions |

## Candidate domains

- Safety and emergency response
- Access to services and daily needs
- Transportation and connectivity
- Environment and public space
- Housing affordability and stability

These are starting points, not an approved indicator set. See `decisions.md` for unresolved choices.
