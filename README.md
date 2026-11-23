# Larva Coding Academy — Website

A responsive website for **Larva Coding Academy**, a tech training school in Ibadan and Abuja, Nigeria.
Visitors can browse courses, view course details and curriculum, and go through a registration and payment flow.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **React Router** and **Motion**.

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, partners, features, courses, testimonials, upcoming classes |
| `/about` | About the academy and becoming an instructor |
| `/courses` | All courses |
| `/course/:id` | Course details, schedule and course content |
| `/course-registration/:id` | Course cart |
| `/course-regs/:id` | Registration form (personal details) |
| `/reg-pay/:id` | Order summary and payment method |
| `/pay-page/:id` | Card payment, success message and receipt |
| `/faq` | Frequently asked questions |
| `/contact` | Contact details, map and contact form |

> The payment and contact forms are front-end only for now. No payments are processed and no messages are sent.

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

## Project structure

```
Public/            Static files served from the site root (e.g. /Image/Vector.png)
src/
  Pages/           One component per route
  components/      Reusable sections (Navbar, Footer, PageHero, CourseCard, ...)
  data/            Course, module, testimonial and FAQ content
  assets/          Images imported by components
```

**Editing content:** course details, prices and modules are in `src/data/data.js`, and FAQ answers are in `src/data/faq.js`.

## Deployment

Run `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).
The site uses client-side routing, so configure the host to serve `index.html` for all routes. On Netlify, add a `_redirects` file containing `/* /index.html 200`; on Vercel, add a rewrite for all paths to `/index.html`.
