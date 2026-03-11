# Lauren Brodsky Personal Landing Page

## Overview
A personal professional landing page for Lauren Brodsky, a Business Analytics & Information Systems student at the University of Iowa graduating May 2026.

## Architecture
- **Type**: Pure static website (no backend, no framework, no build step)
- **Languages**: HTML5, CSS3, vanilla JavaScript
- **Fonts**: Inter (Google Fonts)

## Project Structure
```
/
├── index.html          # Main (and only) page
├── css/
│   └── stylesheet.css  # All styles
├── js/
│   └── scripts.js      # Placeholder JS file (currently empty)
├── images/
│   └── headshot.jpg    # Profile photo (to be added by user)
├── PRD.md              # Product requirements
├── STANDARDS.md        # Project standards and design system
└── README.md
```

## Running the App
The app is served using Python's built-in HTTP server:
```
python3 -m http.server 5000 --bind 0.0.0.0
```
Workflow: "Start application" on port 5000 (webview)

## Deployment
Configured as a static deployment with `publicDir: "."`.

## Design System (from STANDARDS.md)
- Background: #F8F9FA
- Primary Text: #212529
- Accent: #0D6E6E
- Secondary Background: #E9ECEF
- Max content width: 800px
- Font: Inter
