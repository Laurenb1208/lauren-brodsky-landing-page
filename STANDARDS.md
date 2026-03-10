# STANDARDS.md

## BAIS:3300 - Digital Product Management · Module 8 | Personal Landing Page Project

This file contains technical instructions for this project. Every time you begin a coding session, ask your LLM to read this file before writing any code. The LLM will follow these standards automatically without needing to repeat them in every prompt.

To start a session, paste this into your LLM:

"Please read my STANDARDS.md file before we begin. I will be asking you to build and modify my personal landing page."

---

## 1. Project Overview

This project is a personal landing page for **Lauren Brodsky**, a Business Analytics & Information Systems student at the University of Iowa graduating in **May 2026**.

The website provides a professional page where hiring managers and networking connections can quickly learn about education, technical skills, and experience.

A successful outcome is a clean, professional site that clearly communicates background, technical skills, and career interests while providing links to **LinkedIn, GitHub, and contact information**.

---

## 2. Technical Standards

These rules apply to every file in this project.

### Languages and Versions

- **HTML5** — use semantic elements such as `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- **CSS3** — all styles must be written in `css/stylesheet.css`
- No inline `style=""` attributes
- No `<style>` tags inside HTML files

---

### Folder Structure

```
/lauren-brodsky-landing-page
│
├── index.html
├── PRD.md
├── STANDARDS.md
├── README.md
│
├── css/
│   └── stylesheet.css
│
├── js/
│   └── scripts.js
│
└── images/
    └── headshot.jpg
```

---

### Framework

No framework will be used.

The site should use **vanilla HTML and CSS only**.

---

### Architecture

- Static website
- One main page: `index.html`
- External stylesheet located in `css/stylesheet.css`
- Images stored in the `images` folder
- Images referenced using relative paths

Example:

```
<img src="images/headshot.jpg" alt="Lauren Brodsky professional headshot">
```

The website will **not include**:

- Databases
- Server-side code
- Backend systems

Do not link to or embed the resume anywhere on the site.

---

### Responsiveness

The website must be responsive and work on:

- Desktop
- Tablet
- Mobile devices

Minimum supported screen width:

```
320px
```

There must be **no horizontal scrolling**.

---

### Accessibility — WCAG 2.2 Level AA

Accessibility requirements include:

- All images must include descriptive `alt` attributes
- Headings must follow logical hierarchy (`h1 → h2 → h3`)
- Text must have strong color contrast
- Links must use descriptive text
- Interactive elements must be keyboard accessible

---

### Compatibility

The website must render correctly in:

- Google Chrome
- Safari
- Firefox

---

### Security

External links should open in a new tab using:

```
target="_blank" rel="noopener noreferrer"
```

---

## 3. Design Standards

These visual rules apply to the entire site.

### Color Palette

| Role | Hex Code | Usage |
|-----|-----|-----|
| Background | #F8F9FA | Page background |
| Primary Text | #212529 | Body text |
| Accent | #0D6E6E | Section headings and links |
| Secondary Background | #E9ECEF | Section backgrounds |

The overall design should feel **clean, minimal, and professional**.

---

### Typography

Font: **Inter (Google Fonts)**

Body text:

- Font size: **16px**
- Line height: **1.6**

Headings:

- **H1** — Page title
- **H2** — Section headings
- **H3** — Subsections

---

### Imagery

Only one image should be used:

- Professional headshot

Rules:

- No stock photos
- No clip art
- No emojis

---

### Layout

Maximum content width:

```
800px
```

Content should be centered on the page.

Page sections should appear in this order:

1. Hero (name, tagline, headshot)
2. About
3. Skills
4. Experience
5. Contact

Spacing between sections should be consistent.

---

### Component Styles

**Profile Photo**

- Circular crop
- Approximately **160px diameter**
- Centered in the hero section

**Skill Tags**

Skills should appear as simple badge-style labels.

Example:

```
Python   SQL   Excel   Azure
```

**Contact Links**

Contact links should include:

- LinkedIn
- GitHub
- Email

All external links should open in a new tab.

---

### Tone

The tone of the website should be:

- Professional
- Approachable
- Data-driven

Writing should be clear, direct, and professional without unnecessary buzzwords.

---

This document defines the standards that must be followed when building or modifying the landing page.
