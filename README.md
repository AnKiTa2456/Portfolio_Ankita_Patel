# Ankita Patel — Portfolio

A modern, production-ready personal portfolio built with **Angular 21** and TypeScript.

## Quick Start

```bash
npm install
npm start          # → http://localhost:4200
```

Production build:
```bash
npm run build
```

---

## Project Structure

```
src/
├── app/
│   ├── directives/
│   │   └── scroll-reveal.directive.ts   # IntersectionObserver-based scroll animations
│   ├── models/
│   │   └── index.ts                     # Shared TypeScript interfaces
│   ├── services/
│   │   ├── theme.service.ts             # Dark/light mode toggle (localStorage)
│   │   └── data.service.ts             # ← Edit here to update portfolio content
│   ├── header/                          # Sticky navbar + hamburger menu
│   ├── hero/                            # Full-viewport intro section
│   ├── about/                           # Summary + stats + highlights
│   ├── projects/
│   │   ├── project-card/               # Reusable card component
│   │   └── projects.*                  # Projects grid section
│   ├── skills/                          # Categorized skill chips
│   ├── experience/                      # Timeline layout
│   ├── contact/                         # Reactive Form with validation
│   └── footer/
└── styles.scss                          # Global CSS custom properties + theme system
```

## Customizing Content

All portfolio data lives in one file — **[src/app/services/data.service.ts](src/app/services/data.service.ts)**.
Edit the `projects`, `skills`, and `experiences` arrays to update the site.

### Profile Image
In [src/app/hero/hero.ts](src/app/hero/hero.ts), replace `profileImageUrl` with your actual GitHub avatar:
```ts
readonly profileImageUrl = 'https://avatars.githubusercontent.com/u/<YOUR_GITHUB_ID>?v=4';
```

### Project Screenshots
In `data.service.ts`, set each project's `imageUrl` to a raw GitHub-hosted image:
```ts
imageUrl: 'https://raw.githubusercontent.com/<user>/<repo>/main/screenshots/preview.png'
```

### Social Links
Replace placeholder URLs in:
- [src/app/hero/hero.html](src/app/hero/hero.html) — GitHub, LinkedIn, email
- [src/app/contact/contact.html](src/app/contact/contact.html) — LinkedIn, GitHub
- [src/app/footer/footer.html](src/app/footer/footer.html) — all three

### Contact Form Backend
The form currently logs to console. To send real emails, replace the `setTimeout` block in
[src/app/contact/contact.ts](src/app/contact/contact.ts) with a call to:
- **Formspree** — `fetch('https://formspree.io/f/<ID>', { method:'POST', ... })`
- **EmailJS** — `emailjs.send(serviceId, templateId, formData, publicKey)`
- **Custom API** — any REST endpoint you control

---

## Features

| Feature | Implementation |
|---|---|
| Dark / Light theme | CSS custom properties + `ThemeService` + `localStorage` |
| Scroll animations | `ScrollRevealDirective` using `IntersectionObserver` |
| Active nav tracking | Scroll spy via `IntersectionObserver` |
| Reactive form | Angular `FormBuilder` + validators + error messages |
| Responsive layout | SCSS grid/flexbox, mobile hamburger menu |
| Accessibility | Semantic HTML, ARIA labels, `aria-current`, `role` attributes |
| SEO | Meta tags, OG/Twitter cards in `index.html` |
| Performance | No external JS libs, lazy CSS, `will-change` only on animated elements |

---

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
# Set build command: ng build
# Set output directory: dist/temp/browser
```

### Netlify
```bash
# Build command:  ng build
# Publish dir:    dist/temp/browser
# Add _redirects file with:  /*  /index.html  200
```

### GitHub Pages
```bash
ng add @angular/fire   # or use angular-cli-ghpages
ng deploy --base-href="/<repo-name>/"
```

---

Built with Angular 21 · TypeScript 5.9 · SCSS
