# Working Notes — Lauren Brodsky Personal Landing Page

> **Internal document. Not intended for public audiences.**
> This file is a developer journal and AI assistant briefing document.
> It should be updated at the end of every working session.

---

## How to Use This File (For AI Assistants)

1. Read this entire file before suggesting changes or writing any code.
2. Read `README.md` for the public-facing project description, and `PRD.md` for full requirements.
3. Do not change the folder structure or file naming conventions without discussing it first.
4. Follow all conventions listed in the Conventions section exactly — do not invent new patterns.
5. Do not suggest any approach listed in the "What Was Tried and Rejected" section.
6. Ask clarifying questions before making large structural changes (e.g., adding a framework, reorganizing files, splitting the stylesheet).
7. This project was built with AI assistance (Replit Agent). Refactor conservatively — do not rewrite working sections without a clear reason.

---

## Current State

**Last Updated:** 2026-03-10

The project is a fully functional, visually polished static personal landing page. All core sections are built, styled, animated, and responsive. The only outstanding item is confirming the correct LinkedIn profile URL.

### What Is Working
- [x] Sticky navigation bar with scroll progress indicator
- [x] Hero section with headshot, name, tagline, and intro paragraph
- [x] Hero headshot parallax effect on scroll
- [x] About section with fade-up scroll animation
- [x] Education section with University of Iowa logo, card layout, GPA, and Dean's List details
- [x] Experience section with organization logos (CJA, TRAIL), card layout, and staggered slide-in animation
- [x] Skills section with pill tags, staggered fade-up animation on scroll, and hover fill effect
- [x] Contact section with LinkedIn, GitHub, and Email buttons with inline SVG icons
- [x] Scroll-triggered animations: section headings slide in from left, cards and paragraphs fade up, skills and contact buttons stagger in
- [x] Fully responsive layout (desktop, tablet, mobile — breakpoints at 600px and 480px)
- [x] Footer with copyright and degree/school credit
- [x] Static deployment configured (`publicDir: "."`)
- [x] Python HTTP server workflow running on port 5000

### What Is Partially Built
- [ ] LinkedIn URL — currently set to `https://www.linkedin.com/in/laurenbrodsky` (unconfirmed placeholder); real URL needs to be verified by Lauren

### What Is Not Started
- [ ] Nothing — all PRD-required sections are complete

---

## Current Task

**What I was working on when I last stopped:**
Added organization logos (`CJA-logo.jpg`, `Trail.png`) to the Experience section cards using a flex layout that mirrors the Education card pattern. Also added inline SVG icons (LinkedIn, GitHub, envelope) to the three Contact buttons so each displays an icon alongside its label text.

**The very next step is:**
Confirm Lauren's real LinkedIn profile URL and replace the placeholder `https://www.linkedin.com/in/laurenbrodsky` in `index.html` (line 111).

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | — | Required by STANDARDS.md; semantic elements for accessibility and structure |
| CSS3 | — | Required by STANDARDS.md; all styles in one file, no framework overhead |
| Vanilla JavaScript | ES2020+ | Required by STANDARDS.md; IntersectionObserver and scroll events for animations |
| Inter (Google Fonts) | 400/500/600/700 | Specified in STANDARDS.md; clean, modern, professional sans-serif |
| Python `http.server` | Python 3 | Lightweight dev server with zero dependencies; serves static files on port 5000 |
| Replit Static Deployment | — | Configured via `.replit`; no build step needed for a pure static site |

---

## Project Structure Notes

```
/
├── index.html            # Single-page application — the only HTML file
├── css/
│   └── stylesheet.css    # All styles — do not add other CSS files
├── js/
│   └── scripts.js        # All JavaScript — scroll progress, parallax, IntersectionObservers
├── images/
│   ├── headshot.jpg      # Lauren's professional headshot (circular crop applied in CSS)
│   ├── Iowa.png          # University of Iowa logo (Education section)
│   ├── CJA-logo.jpg      # Chicago Jewish Alliance logo (Experience section)
│   └── Trail.png         # TRAIL of Johnson County logo (Experience section)
├── PRD.md                # Product requirements — defines required content
├── STANDARDS.md          # Technical standards — must be read before coding
├── README.md             # Public-facing project description
├── replit.md             # Replit agent memory file — keep updated alongside this file
└── WORKING_NOTES.md      # This file
```

**Non-obvious decisions:**
- There is only one HTML file. Do not create additional pages.
- `css/stylesheet.css` contains everything — base reset, layout, components, animations, and responsive rules in that order. Do not split into multiple CSS files.
- All animation initial states (`opacity: 0`, `transform`) live in the CSS. JavaScript only adds/removes the `.visible` class — it never sets `style` properties directly for animations (except `transitionDelay` for stagger timing).
- `replit.md` is Replit's agent memory file and should be kept in sync with `WORKING_NOTES.md` when architecture changes.

**Files that must not be changed without discussion:**
- `PRD.md` and `STANDARDS.md` — course-provided requirement documents
- `images/headshot.jpg` — Lauren's actual photo; do not replace or rename

---

## Data / Database

This project has no persistent data, no database, and no backend. All content is hardcoded in `index.html`. There are no API calls, no forms that submit data, and no cookies or local storage in use.

---

## Conventions

### Naming
- HTML file: `index.html` (lowercase)
- CSS file: `css/stylesheet.css` (lowercase)
- JS file: `js/scripts.js` (lowercase)
- Image files: original filenames preserved as uploaded (`Iowa.png`, `CJA-logo.jpg`, `Trail.png`, `headshot.jpg`) — note mixed case, reference exactly
- CSS class names: lowercase hyphenated (e.g., `.education-item`, `.skill-tag`, `.nav-brand`, `.experience-logo`)
- Section IDs match nav anchor targets exactly: `#hero`, `#about`, `#education`, `#experience`, `#skills`, `#contact`

### Code Style
- No inline `style=""` attributes anywhere in HTML (exception: `transitionDelay` set by JS for stagger timing)
- No `<style>` tags inside HTML files
- All CSS custom properties defined in `:root` at the top of the stylesheet
- CSS organized top-to-bottom: reset → `:root` variables → `body` → header/nav → scroll progress → hero → sections → headings → Education → Experience → Skills → Contact → scroll animations → footer → responsive
- JavaScript uses `const` and `let`; no `var`
- Each IntersectionObserver is a separate named `const` (`observer`, `expObserver`, `skillObserver`, `contactObserver`)
- Scroll event listeners use `{ passive: true }`

### CSS Custom Properties (current values)
```css
--color-bg: #F5F7FB          /* page background */
--color-surface: #ffffff      /* card/section background */
--color-text: #1F2937         /* primary body text */
--color-muted: #6B7280        /* secondary/muted text */
--color-primary: #1F3A8A      /* nav, headings, footer */
--color-secondary: #3B82F6    /* accent lines, buttons, org labels */
--color-accent-light: #E8F0FE /* skill pill backgrounds */
--color-border: #E2E8F0       /* default borders */
--color-hero-bg: #EDF2FB      /* hero section background */
--max-width: 820px
```

### Responsive Breakpoints
- `max-width: 600px` — mobile: reduced hero padding, stacked education/experience cards, smaller headings
- `max-width: 480px` — small mobile: nav brand hidden, nav links fill full width
- `max-width: 320px` — tiny screens: smaller hero `h1`

### Animation Pattern
All scroll animations follow the same pattern:
1. CSS sets the element's initial hidden state (e.g., `opacity: 0; transform: translateY(22px)`)
2. CSS defines the `.visible` state (e.g., `opacity: 1; transform: translateY(0)`)
3. JavaScript's IntersectionObserver adds `.visible` when the element enters the viewport
4. JavaScript never sets `style` properties for animations — only class toggling (except `transitionDelay` for stagger timing)

---

## Decisions and Tradeoffs

- **No framework chosen:** STANDARDS.md explicitly prohibits frameworks. This keeps the project simple and avoids build tooling. Do not suggest adding React, Vue, Tailwind, or any framework.
- **Single stylesheet:** All styles are in one file per STANDARDS.md. This is intentional — do not propose splitting into component files.
- **Inline SVG icons for contact buttons:** Avoids external icon library dependencies (Font Awesome, Heroicons CDN). Icons use `currentColor` so they inherit button text color and invert to white on hover automatically.
- **IntersectionObserver for animations:** Chosen over scroll event listeners for performance. Each section type has its own observer so stagger timing can be tuned independently.
- **Python `http.server` as dev server:** Zero-dependency, built into Python 3. No Node.js or npm needed for a pure static project.
- **CSS `clip-path` on hero:** Creates a diagonal bottom edge without extra HTML elements or JavaScript.
- **CSS custom properties for all colors:** Makes palette changes a single-point edit in `:root`. All component colors reference variables, not hardcoded hex values.
- **`#1F3A8A` primary / `#3B82F6` secondary blue palette:** Replaced the original harsh `#000080`. The two-blue split gives headings and nav a deep authoritative feel while interactive elements (buttons, accent lines, org labels) use the lighter, friendlier secondary blue.
- **`max-width: 820px`:** Slightly wider than the original 800px from STANDARDS.md to give cards more breathing room at mid-screen sizes.

---

## What Was Tried and Rejected

- **Tinted alternating section backgrounds:** Made the page feel busy. Reverted to white surfaces (`#ffffff`) on a soft neutral page background (`#F5F7FB`).
- **Solid `#000080` navy navigation bar:** Too harsh and visually heavy. Replaced first with a white nav, then settled on `#1F3A8A`.
- **White nav bar:** Tried as a cleaner alternative but felt disconnected from the rest of the page. Reverted to the primary blue nav.
- **`scale(0.8) → scale(1)` animation for skill pills:** Felt cheap and slightly disorienting. Replaced with `translateY(14px) → translateY(0)` which reads more naturally as a scroll reveal.
- **Heavy `box-shadow` on the nav header:** `0 2px 8px rgba(0,0,128,0.25)` made the header look chunky. Removed in favor of no shadow on the colored nav.
- **Very small caps `h2` label style at `0.75rem`:** Was too subtle — section headings barely registered. Increased to `1.35rem` with moderate letter-spacing.
- **4px left `border-left` accent on every card:** Education and Experience cards initially used a heavy left-side navy border as the primary card styling. Replaced with full rounded borders and a blue-tinted shadow for a more modern look.

---

## Known Issues and Workarounds

- **LinkedIn URL is unconfirmed:** The `href` value `https://www.linkedin.com/in/laurenbrodsky` in `index.html` (line 111) is a placeholder guess. No workaround is in place — the link is live but may point to the wrong profile. Must be confirmed by Lauren before sharing the site publicly.

---

## Browser / Environment Compatibility

**Tested in:** Replit's built-in preview (Chromium-based)

**Expected to work in:** All modern evergreen browsers — Chrome, Firefox, Safari, Edge (current versions)

**Known incompatibilities:**
- `clip-path: polygon(...)` on the hero is not supported in IE11, which is not a target browser
- `IntersectionObserver` is not supported in IE11 — scroll animations will not trigger, but all page content remains visible in the DOM regardless

**Environment:**
- OS: NixOS (Replit Linux container)
- Python 3 (version managed by Replit nix environment)
- No Node.js or npm dependencies
- Dev server command: `python3 -m http.server 5000 --bind 0.0.0.0`
- Production: Replit static deployment (`publicDir: "."`)

---

## Open Questions

- **What is Lauren's actual LinkedIn profile URL?** The current placeholder `https://www.linkedin.com/in/laurenbrodsky` has not been confirmed. Verify before publishing or sharing the page.

---

## Session Log

### 2026-03-10
- **Accomplished:**
  - Built the full page from scratch: sticky nav with scroll progress bar, hero with parallax headshot, About, Education, Experience, Skills, Contact, and Footer sections
  - Added University of Iowa logo to Education card (flex layout: logo left, text right; stacks on mobile)
  - Added organization logos (`CJA-logo.jpg`, `Trail.png`) to Experience cards using the same flex layout pattern
  - Added inline SVG icons (LinkedIn, GitHub, envelope) to all three Contact buttons
  - Implemented complete scroll animation system: heading slide-in from left, section fade-up, paragraph stagger, education card fade-up, experience card stagger, skill pill stagger (fade up from below), contact button stagger
  - Iteratively refined design: color palette evolved from `#000080` → white nav → `#1F3A8A` primary with `#3B82F6` secondary; card styles evolved from left-border accent to full rounded card with blue-tinted shadow; `h2` size evolved from 0.75rem label to 1.35rem; hero padding reduced; skill pill animation changed from scale to translateY
  - Configured Python HTTP server workflow on port 5000
  - Configured Replit static deployment with `publicDir: "."`
- **Left incomplete:**
  - LinkedIn URL not confirmed — using placeholder value
- **Decisions made this session:**
  - No framework; pure HTML/CSS/JS per STANDARDS.md
  - Inline SVGs for contact icons to avoid CDN dependencies
  - Two-blue palette split: deep primary for structure, bright secondary for interactive elements
  - CSS-only animation states; JS only toggles `.visible` class
- **Next step when resuming:** Confirm Lauren's LinkedIn URL and update line 111 of `index.html`

---

## Useful References

- [Inter font — Google Fonts](https://fonts.google.com/specimen/Inter)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN — clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [MDN — CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Replit Static Deployment Docs](https://docs.replit.com/hosting/deployments/static-deployments)
- **AI usage note:** This project was built entirely with Replit Agent (AI-assisted development). All HTML structure, CSS styling, and JavaScript animation logic was generated and iteratively refined through AI prompting. Code should be treated as AI-generated and reviewed accordingly.
