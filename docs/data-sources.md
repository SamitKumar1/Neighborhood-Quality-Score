# Geographic Data Source Inventory (Ghaziabad Pilot)

This inventory evaluates the 7 required geographic datasets for the Phase-1 pilot localities: **Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, and Crossings Republik**.

---

## Source Inventory Matrix

### 1. Schools & Educational Facilities
- **Source Name:** Unified District Information System for Education Plus (UDISE+) / Data.gov.in
- **Source URL:** https://udiseplus.gov.in
- **Information Provided:** School name, category, board (CBSE/ICSE/State), operational status, student-teacher ratio, coordinates.
- **Pilot Localities Covered:** Complete coverage across all 5 localities.
- **Geographic Resolution:** Point coordinates (Latitude/Longitude).
- **Update Frequency:** Annual government audit.
- **Historical Availability:** Available from 2018 to present.
- **Licence & Usage Restrictions:** Open Government Data (OGD) License India (free for public/commercial use with attribution).
- **Manual Collection Required:** Minimal (~10% GPS pin verification).
- **Known Limitations:** Informal preschools and coaching academies are excluded.

### 2. Hospitals & Healthcare
- **Source Name:** Ayushman Bharat Digital Mission (ABDM) Facility Registry / National Health Portal
- **Source URL:** https://facility.abdm.gov.in
- **Information Provided:** Registered hospitals, clinics, bed capacities, clinical specialties, accreditation status.
- **Pilot Localities Covered:** Complete coverage across urban Ghaziabad.
- **Geographic Resolution:** Pin-code and facility coordinates.
- **Update Frequency:** Quarterly dynamic registry.
- **Historical Availability:** Comprehensive from 2021 onwards.
- **Licence & Usage Restrictions:** Open directory access for verification.
- **Manual Collection Required:** Moderate (verifying 24/7 emergency readiness vs daytime clinics).
- **Known Limitations:** In rural outskirts, coordinates may default to the post-office centroid.

### 3. Parks & Green Spaces
- **Source Name:** OpenStreetMap (leisure=park, leisure=garden) & GDA Master Plan 2031
- **Source URL:** https://www.openstreetmap.org | https://gdaghaziabad.com
- **Information Provided:** Public park boundaries, green belts, walking paths, public access tags.
- **Pilot Localities Covered:** Strong in Vaishali (Central Park), Indirapuram (Swarna Jayanti Park); moderate in Raj Nagar Extension.
- **Geographic Resolution:** Polygon geometries.
- **Update Frequency:** Continuous crowd-sourced updates.
- **Historical Availability:** 10+ years of revision history.
- **Licence & Usage Restrictions:** Open Database License (ODbL).
- **Manual Collection Required:** High (separating public municipal parks from gated society private lawns).
- **Known Limitations:** Does not reflect maintenance quality or nocturnal lighting.

### 4. Metro & Rapid Transit
- **Source Name:** DMRC & NCRTC (Namo Bharat RRTS)
- **Source URL:** https://www.delhimetrorail.com | https://ncrtc.in
- **Information Provided:** Blue Line metro stations (Vaishali, Kaushambi), Red Line stations, Namo Bharat RRTS stations (Sahibabad, Ghaziabad).
- **Pilot Localities Covered:** Direct stations in Vaishali/Sahibabad; 3–6 km transit access for Indirapuram and Vasundhara.
- **Geographic Resolution:** Exact entrance gate coordinates and multi-modal interchanges.
- **Update Frequency:** Real-time GTFS feeds.
- **Historical Availability:** Historical route and schedule data available.
- **Licence & Usage Restrictions:** Public operational timetables.
- **Manual Collection Required:** None for stations; slight for feeder auto/e-rickshaw stands.
- **Known Limitations:** Proposed future extensions (e.g. Blue line to Indirapuram) must be labeled as *Planned*, not *Active*.

### 5. Road Networks & Hierarchy
- **Source Name:** OpenStreetMap Highway Layer
- **Source URL:** https://www.openstreetmap.org
- **Information Provided:** Road hierarchy (trunk, primary, secondary, residential), flyovers (NH-9 / DME), one-way restrictions, lane counts.
- **Pilot Localities Covered:** 100% complete coverage across all 5 localities.
- **Geographic Resolution:** Vector line strings.
- **Update Frequency:** Near-daily commits.
- **Historical Availability:** Complete history since 2012.
- **Licence & Usage Restrictions:** ODbL.
- **Manual Collection Required:** Low.
- **Known Limitations:** Lacks real-time surface quality and illegal street parking bottlenecks.

### 6. Locality & Planning Boundaries
- **Source Name:** Ghaziabad Development Authority (GDA) Master Plan 2031 & Survey of India
- **Source URL:** https://gdaghaziabad.com
- **Information Provided:** Master plan zoning polygons, revenue village lines, municipal ward boundaries.
- **Pilot Localities Covered:** Indirapuram, Vaishali, Vasundhara, Raj Nagar Ext., Crossings Republik.
- **Geographic Resolution:** Zonal vector polygons.
- **Update Frequency:** Multi-year statutory cycles.
- **Historical Availability:** Master Plan 2021 and 2031.
- **Licence & Usage Restrictions:** Official citation required.
- **Manual Collection Required:** Moderate (aligning formal municipal ward boundaries with popular real-estate search boundaries).
- **Known Limitations:** Homebuyers treat "Indirapuram" as one locality, but municipality splits it into Nyay Khand, Niti Khand, Ahinsa Khand.

### 7. Housing Societies & High-Rise Complexes
- **Source Name:** UP Real Estate Regulatory Authority (UP RERA)
- **Source URL:** https://www.up-rera.in
- **Information Provided:** Registered project names, developer identity, approved units, completion certificates, site boundaries.
- **Pilot Localities Covered:** Complete coverage of high-rises in Crossings Republik, Raj Nagar Extension, and Indirapuram.
- **Geographic Resolution:** Project site address and plot survey numbers.
- **Update Frequency:** Monthly filings.
- **Historical Availability:** 2017 to present.
- **Licence & Usage Restrictions:** Public statutory registry.
- **Manual Collection Required:** High (converting plot descriptions to polygon coordinates).
- **Known Limitations:** Societies built before May 2017 (pre-RERA) are not in the database.

---

## Critical OpenStreetMap Verification Protocol
To ensure data accuracy, do not rely on raw OSM nodes without this 4-step check:
1. **Cross-Reference:** Check schools against UDISE+ and clinics against ABDM.
2. **Satellite Verification:** Confirm building footprint on recent high-res satellite imagery.
3. **Timestamp Check:** Discard nodes that have not had active edits within the last 24 months.
4. **License Compliance:** Ensure ODbL attribution is respected in all frontend views.