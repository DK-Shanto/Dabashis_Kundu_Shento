# Dabashis Kundu Shento — Portfolio Site

Personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Deployed on Vercel (free tier).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

---

## How to Add a New Demo Project

Projects are stored in [`/data/projects.json`](./data/projects.json). To add a new project:

1. **Open** `data/projects.json`

2. **Add a new object** to the array following this structure:

```json
{
  "id": 4,
  "title": "Your Project Name",
  "platform": "Shopify",
  "description": "A short description of the project — what it does and what makes it notable.",
  "demoUrl": "https://your-demo-site.com",
  "image": "/images/demo4.jpg",
  "tags": ["Shopify", "E-commerce", "Fashion"]
}
```

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique ID — increment from the last entry |
| `title` | string | Project display name |
| `platform` | string | `"Shopify"`, `"Wix"`, or `"WordPress"` |
| `description` | string | 1–2 sentence description shown on the card |
| `demoUrl` | string | Full URL to the live demo site |
| `image` | string | Path to image in `/public/images/` (optional — a placeholder is shown if the file is missing) |
| `tags` | string[] | 2–4 short tags shown as chips on the card |

3. **Add the project screenshot** (optional) to `/public/images/` matching the `image` path you used.

4. **Redeploy** — push the change to your connected Vercel repo. Vercel automatically rebuilds on push.

> **That's it.** No database, no CMS, no backend — just edit the JSON and redeploy.

---

## Project Structure

```
/app
  layout.tsx        — Root layout, Google Fonts (Syne + Outfit), metadata
  page.tsx          — Single-page assembly of all section components
  globals.css       — Tailwind v4 theme tokens, animations, custom utilities

/components
  Navbar.tsx        — Sticky nav with scroll detection + mobile menu
  Hero.tsx          — Full-height hero with animated gradient background
  About.tsx         — Bio, stats cards, platform icons
  Services.tsx      — Service cards (Shopify, Wix, WordPress)
  Portfolio.tsx     — Project grid loaded from projects.json
  Testimonials.tsx  — Client review cards
  Contact.tsx       — Contact form + email/Upwork links
  Footer.tsx        — Footer with nav links and copyright

/data
  projects.json     — Demo project data (edit to add/remove projects)

/public
  /images           — Project screenshot images
```

## Customization

- **Colors**: Edit CSS custom properties in `app/globals.css` under `:root`
- **Content**: All copy is inline in each component file
- **Fonts**: Change `Syne` and `Outfit` in `app/layout.tsx` to any Google Font
- **Upwork URL**: Search for `https://www.upwork.com` and replace with your profile URL
- **Email**: Update `mailto:` and email address in `components/Contact.tsx`

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Future pushes to `main` auto-deploy.
