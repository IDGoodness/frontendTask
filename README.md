# Tobams Group - Training & Development (Frontend Assessment)

A pixel-perfect, responsive static page implementation for **Tobams Group** built with **Next.js 16 (App Router)** and **Tailwind CSS**, based on the official Figma design.

---

## Links

- **Figma Design Reference:** [Frontend Intern Assessment (Figma)](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)
- **Live Deployment URL:** `[Your Live Deployment URL Here - e.g. https://intern-task-tobams.vercel.app]`
- **GitHub Repository:** `[Your Public GitHub Repository URL Here]`

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Font & Image Optimization:** `next/font/google` (Plus Jakarta Sans) & `next/image`
- **Deployment:** Vercel

---

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd frontendTask
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## Responsive Layout & Breakpoints

The application is engineered to look pixel-perfect across all screen sizes using standard Tailwind CSS responsive modifiers:

- **Mobile (`425px`):** Stacked layouts, mobile navigation drawer with hamburger toggle, centered hero copy, and single-card testimonial carousel.
- **Tablet (`768px` - `md:`):** 2-column alternating grid layouts, adjusted padding, and two-card testimonial layout.
- **Desktop (`1280px+` - `lg:` / `xl:`):** Multi-column full-width layouts, double-tier header navigation, side-by-side training showcases, and 3-card testimonial carousel.

---

## Component Architecture

The codebase adheres to a clean, modular structure located under `src/components/`:

- `Navbar.tsx`: Double-tier desktop navigation with active indicators, Account menu, Take Assessment CTA, and mobile hamburger drawer.
- `Hero.tsx`: High-impact hero section with dark gradient backdrop, "WHAT WE DO" pill badge, and consultation CTA.
- `LearningManagement.tsx`: Circular image showcase with course offerings card and "Learn More ↗" button.
- `TrainingPrograms.tsx`: 3-row alternating grid (Corporate Trainings, Personalised Individual Training, Capacity Development) with custom asymmetrical rounded top-left corner styling and 4-point sparkle bullets (`✦`).
- `ManagementDevelopment.tsx`: Dark wine brand container with tall image and stacked lightning bolt (`⚡`) benefit cards.
- `TransformationHub.tsx`: Soft peach container featuring CEO webinar highlight, 2-column benefit grid, and "Learn More ↗" CTA.
- `TrainingConsultant.tsx`: Soft lilac section with 2x2 dark purple feature grid (Expert-Led Learning, Interactive Workshops, Comprehensive Curriculum, Global Recognition).
- `AccelerationCTA.tsx`: Full-width acceleration banner with responsive desktop/mobile copy.
- `Testimonials.tsx`: Dynamic client review carousel with red/coral accent border and cycling navigation controls.
- `PreFooterCTA.tsx`: Pre-footer call-to-action banner.
- `Footer.tsx`: Comprehensive footer with brand bio, social links, multi-column navigation links, registered office locations (UK & Nigeria), and copyright legal bar.

---

## Design Decisions & Technical Assumptions

1. **Semantic HTML & Accessibility (a11y):** Standard semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) are used throughout, with meaningful `alt` text on all images, `aria-label`s on icon buttons, and accessible focus outlines.
2. **Asymmetrical Corner Radii:** As specified in the Figma design for the Training Programs section, images feature a custom accentuated top-left radius (`rounded-tl-[40px]`) with standard rounded corners on remaining angles.
3. **Typography & Brand Palette:** Loaded `Plus Jakarta Sans` via `next/font/google` for clean modern typography, with Tobams brand tokens (Wine `#501339`, Dark Purple `#2D0B23`, Light Mauve `#EBE4EB`, Peach `#FDECEB`, and Coral Red `#EE4857`).
4. **Interactive Carousels:** Implemented a lightweight React state carousel for the testimonials section ensuring fast load times and zero heavy external libraries.

---

## AI Tool Usage Disclosure

In accordance with the assessment instructions, AI assistance (Google DeepMind Antigravity / Gemini) was utilized during development for code structuring, asset layout translation, and initial component scaffolding. All code and styling have been thoroughly verified and customized to match the Figma design requirements.
