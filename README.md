# GECRIS project website

Official website of **GECRIS: Green, Ethical and Sustainable Computing**, an Erasmus+ Capacity Building in Higher Education (CBHE) project, project number **101325094**.

It is a fast, accessible, fully static website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). All content lives in plain local files (TypeScript, JSON and Markdown), so it can be updated without a CMS or a database: edit a file, commit, and the site redeploys.

> **Before publishing:** the site ships with clearly marked **placeholder content**: partner names, work packages, deliverables, dates, the EU emblem and the funding disclaimer. Look for `[square brackets]`, amber "Placeholder" badges and `"placeholder": true` in the data files, and replace them with verified information from the Grant Agreement.

---

## Contents

1. [Technologies](#technologies)
2. [Prerequisites](#prerequisites)
3. [Installation and local development](#installation-and-local-development)
4. [Project structure](#project-structure)
5. [Editing content](#editing-content)
   - [Project information](#edit-project-information)
   - [EU funding acknowledgement and disclaimer](#eu-funding-acknowledgement-and-disclaimer)
   - [Add a consortium partner](#add-a-consortium-partner)
   - [Edit work packages](#edit-work-packages)
   - [Upload a deliverable](#upload-a-deliverable)
   - [Add a news article or event](#add-a-news-article-or-event)
   - [Add gallery photographs](#add-gallery-photographs)
   - [Add a resource](#add-a-resource)
   - [Feedback form](#feedback-form)
6. [Deploy to GitHub Pages](#deploy-to-github-pages)
7. [Migrate to Apache or Nginx](#migrate-to-apache-or-nginx)
8. [Quality checklist](#quality-checklist)

---

## Technologies

| Purpose | Tool |
| --- | --- |
| Static site generator | Astro 7 (static output) |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) and `@tailwindcss/typography` |
| Icons | Lucide (`@lucide/astro`), rendered to inline SVG at build time |
| Font | Inter, self-hosted via `@fontsource-variable/inter` (no Google Fonts requests, GDPR-friendly) |
| Content | TypeScript and JSON data files, Markdown content collection for news |
| SEO | `@astrojs/sitemap`, generated `robots.txt`, Open Graph and Twitter meta tags |
| Deployment | GitHub Actions to GitHub Pages; output also runs on any static web server |

The site ships almost no JavaScript: only small inline scripts for the mobile menu, the gallery lightbox and filter, and anchor handling. Everything works without JavaScript except the lightbox (images then open directly).

## Prerequisites

- **Node.js 22.23.4 or later** (Node 24 LTS recommended; see `.nvmrc`)
- **npm** (bundled with Node.js)
- **Git**

## Installation and local development

```bash
git clone https://github.com/<your-account>/<your-repository>.git
cd <your-repository>
npm install
npm run dev
```

Open <http://localhost:4321>. The page reloads automatically when you save a file.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally |

To test a build exactly as it will appear under a GitHub Pages subpath:

```bash
SITE_URL=https://<user>.github.io BASE_PATH=/<repository> npm run build
npm run preview
```

On Windows PowerShell use `$env:SITE_URL="..."; $env:BASE_PATH="/<repository>"; npm run build`. In Git Bash prefix the command with `MSYS_NO_PATHCONV=1`, otherwise Git Bash rewrites `/<repository>` into a Windows path.

## Project structure

```
├── .github/workflows/deploy.yml   GitHub Pages build & deploy
├── deploy/                        Example Nginx / Apache configuration
├── public/                        Copied as-is to the site root
│   ├── documents/deliverables/    Public deliverable PDFs
│   ├── documents/resources/       Public resource files
│   ├── images/banners/            Hero banner
│   ├── images/gallery/            Gallery photographs
│   ├── images/partners/           Partner logos
│   ├── logos/                     Project logo and EU emblem
│   └── favicon.svg
├── src/
│   ├── components/                Reusable UI components
│   ├── content/news/              News & event articles (Markdown)
│   ├── content.config.ts          News collection schema
│   ├── data/                      ← Most content is edited here
│   │   ├── project.ts             Project facts, objectives, contact, funding text, navigation
│   │   ├── partners.json          Consortium partners
│   │   ├── workpackages.json      Work packages
│   │   ├── deliverables.json      Public deliverables
│   │   ├── resources.json         Resources and links
│   │   └── gallery.json           Gallery photos
│   ├── layouts/BaseLayout.astro   Shared page layout, SEO tags
│   ├── lib/                       Helpers (base-path URLs, data access, news sorting)
│   ├── pages/                     One file per page (routes)
│   └── styles/global.css          Design tokens and global styles
├── astro.config.mjs               Site URL / base path (from environment variables)
└── package.json
```

**Components:** `Header`, `Navbar`, `Footer`, `Hero`, `PageHeader`, `SectionHeading`, `PartnerCard`, `WorkPackageCard`, `NewsCard`, `EventCard`, `DeliverableTable`, `ResourceCard`, `GalleryGrid`, `FundingAcknowledgement`, `FeedbackForm`, `Logo`, `Icon`.

**Pages:** Home, About, Consortium, Work Packages, Deliverables, News & Events (plus one page per article), Gallery, Resources, Contact, Privacy policy, Accessibility statement, 404.

---

## Editing content

All paths to files inside `public/` are written **without** a leading slash or base path, e.g. `images/partners/uni-x.svg`. The site adds the correct base path automatically.

After editing, check locally with `npm run dev`, then commit and push. GitHub Actions rebuilds and redeploys the site within a few minutes.

### Edit project information

Open `src/data/project.ts`. It holds the project title, description, background, objectives, scope, target groups, expected outcomes and impact, coordinator and contact details, and the main navigation.

```ts
startDate: '2026-12-01',        // ISO date; null shows "To be confirmed"
endDate: '2029-11-30',
durationMonths: 36,

coordinator: {
  institution: 'University of Example',
  contactPerson: 'Prof. Jane Doe',
  role: 'Project Coordinator',
  address: 'Street 1, 12345 City, Country',
  website: 'https://www.example.edu',
},

contact: { email: 'gecris@example.edu', phone: '' },
```

The values above are only an example of the format. Do not publish them.

Objective icons use [Lucide](https://lucide.dev/icons) names. If you use an icon that is not yet listed in `src/components/Icon.astro`, add it to the import and to the `icons` map in that file.

### EU funding acknowledgement and disclaimer

The `funding` object in `src/data/project.ts` controls the funding block shown on the home, About and Contact pages, every news article, and the footer.

1. Download the official **"Co-funded by the European Union"** emblem from the European Commission / EACEA visual identity pages referenced in your Grant Agreement. Save it in `public/logos/`, e.g. `public/logos/co-funded-by-the-eu.svg`.
2. Copy the **verified** acknowledgement and disclaimer wording required by the Grant Agreement (Article 17 and Annex 5) and the EACEA communication guidelines.
3. Update `src/data/project.ts`:

```ts
export const funding = {
  verified: true,                       // hides the placeholder warning
  acknowledgement: '<official acknowledgement text>',
  disclaimer: '<official disclaimer text>',
  emblem: 'logos/co-funded-by-the-eu.svg',
  emblemAlt: 'Co-funded by the European Union',
};
```

Placeholder text is included on purpose. Do not write your own disclaimer wording.

### Add a consortium partner

1. Save the partner logo (SVG or PNG, transparent background, about 480×240 px) to `public/images/partners/`, e.g. `uni-example.svg`.
2. Add an entry to `src/data/partners.json`:

```json
{
  "id": "uni-example",
  "name": "University of Example",
  "shortName": "UEX",
  "country": "Portugal",
  "region": "EU Member State",
  "role": "Partner",
  "description": "A public university with expertise in energy-efficient computing and digital ethics.",
  "website": "https://www.uni-example.edu",
  "logo": "images/partners/uni-example.svg"
}
```

- `id` must be unique; it is used as the anchor on the consortium page (`/consortium/#uni-example`).
- `role`: `"Coordinator"` is always listed first and highlighted in green.
- `region` controls grouping. To group by country or role instead, change `GROUP_BY` at the top of `src/pages/consortium.astro` to `'country'`, `'role'` or `'none'`.
- Remove `"placeholder": true` once the details are verified.

### Edit work packages

Edit `src/data/workpackages.json`. Each work package has `number`, `title`, `lead`, `objectives[]`, `activities[]`, `outcomes[]` and `deliverables[]` (deliverable IDs such as `"D3.1"`). Deliverable IDs that match a public deliverable are linked automatically.

The included work packages are an **indicative** CBHE structure. Replace them with the official work packages from Annex I of the Grant Agreement.

### Upload a deliverable

1. Save the approved **public** PDF to `public/documents/deliverables/`, for example `D2.1-needs-analysis-report.pdf`. Use lowercase file names without spaces.
2. Update or add the entry in `src/data/deliverables.json`:

```json
{
  "id": "D2.1",
  "title": "Needs analysis report",
  "workPackage": 2,
  "description": "Analysis of curricula and skills needs at partner institutions.",
  "dueDate": "2027-06-30",
  "publishedDate": "2027-07-15",
  "file": "documents/deliverables/D2.1-needs-analysis-report.pdf",
  "public": true
}
```

- Only entries with `"public": true` are displayed. Set `"public": false` for sensitive deliverables.
- **Never put confidential or internal documents in `public/`.** Every file in that folder is downloadable by anyone who knows its URL, even if it is not linked.
- Leave `"file": ""` to list a deliverable as "Not yet available".

### Add a news article or event

Create a Markdown file in `src/content/news/`. The file name becomes the URL, so `2027-03-12-training-week.md` is published at `/news/2027-03-12-training-week/`.

Put images next to the article in `src/content/news/images/`. They are resized and converted to WebP automatically.

```markdown
---
title: "Training week on sustainable software engineering"
description: "Thirty lecturers from partner universities took part in a five-day training programme."
date: 2027-03-12              # publication date (sorting: newest first)
type: event                   # "news" or "event"
image: ./images/training-week.jpg
imageAlt: "Participants working in groups during the training week"
eventDate: 2027-03-06         # optional (events)
eventEndDate: 2027-03-10      # optional
location: "Lisbon, Portugal"  # optional
photos:                       # optional photo gallery under the article
  - src: ./images/training-week-2.jpg
    alt: "A trainer presenting energy measurement tools"
    caption: "Hands-on session on energy profiling"
draft: false                  # true hides the article
---

Article text in **Markdown**. You can use headings, lists, links and images:

![Group photo of participants](./images/group-photo.jpg)
```

The home page automatically shows the three latest articles, and events with a future `eventDate` appear under "Upcoming events". The example articles have `placeholder: true`; delete them or replace their content.

### Add gallery photographs

1. Resize photos to about 1600 px wide (JPG or WebP, under 400 KB) and save them in `public/images/gallery/`.
2. Add an entry to `src/data/gallery.json`:

```json
{
  "src": "images/gallery/kickoff-2026-group.jpg",
  "alt": "Consortium members standing in front of the host university",
  "caption": "Kick-off meeting, Lisbon",
  "category": "meetings",
  "date": "2026-11-20",
  "width": 1600,
  "height": 1067
}
```

`category` must be one of the IDs in `categories` (`meetings`, `workshops`, `training`, `activities`, `dissemination`); you can add new categories there. `width` and `height` are the real pixel size of the image, which prevents layout shift. Always write meaningful `alt` text, and make sure you have consent from identifiable people before publishing their photos.

Then remove the `placeholder-*.svg` entries.

### Add a resource

Add an entry to `src/data/resources.json`. Use `file` for a document in `public/`, or `url` for an external link:

```json
{ "category": "training", "title": "Module 1: Green software engineering", "description": "Slides and exercises.", "file": "documents/resources/module-1.pdf", "date": "2027-05-01" }
{ "category": "publications", "title": "Paper title", "description": "Authors, Journal, 2027.", "url": "https://doi.org/10.xxxx/xxxxx" }
```

Categories without entries are hidden automatically.

### Feedback form

The Contact page includes a feedback form. Because the site is static, it has no database or server of its own. Submissions are handled in one of two ways, configured in `src/data/project.ts → feedback`:

- **Default (no setup):** `endpoint: ''`. Submitting opens the visitor's email program with the message addressed to `contact.email`.
- **External form service:** set `endpoint` to the form URL of a service such as Formspree, Getform or Basin (or a script on your own server later). The service stores submissions in its database and emails the team. Optionally set `successUrl` to a thank-you page. Mention the service in the privacy policy.

```ts
feedback: { endpoint: 'https://formspree.io/f/xxxxxxx', successUrl: '' },
```

The form includes a hidden honeypot field (`_gotcha`) for spam protection, which most services support.

---

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `gecris-website`) and push this project to its `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial GECRIS website"
   git branch -M main
   git remote add origin https://github.com/<account>/gecris-website.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main` (or manually from the **Actions** tab). It:
   - reads the Pages URL and repository subpath from GitHub (`https://<account>.github.io` and `/gecris-website`),
   - runs `npm ci` and `npm run build` with `SITE_URL` and `BASE_PATH` set,
   - publishes `dist/` to GitHub Pages.
4. The site is available at `https://<account>.github.io/gecris-website/`.

The repository URL is not hard-coded anywhere. All internal links, images and downloads use the base path through the `url()` helper in `src/lib/utils.ts`.

**Custom domain on GitHub Pages:** add the domain under Settings → Pages, then create repository **variables** (Settings → Secrets and variables → Actions → Variables) `SITE_URL=https://www.gecris.eu` and `BASE_PATH=/`.

## Migrate to Apache or Nginx

The build output in `dist/` is plain HTML, CSS, images and PDFs. It needs no Node.js, database or GitHub service at runtime.

1. **Build for the new address.** Only two environment variables change:

   | Hosting | `SITE_URL` | `BASE_PATH` |
   | --- | --- | --- |
   | Root domain `https://gecris.eu` | `https://gecris.eu` | `/` |
   | Subdomain `https://gecris.university.edu` | `https://gecris.university.edu` | `/` |
   | Subfolder `https://university.edu/gecris/` | `https://university.edu` | `/gecris` |

   ```bash
   SITE_URL=https://gecris.eu BASE_PATH=/ npm run build
   ```

   You can also put these values in a `.env` file (see `.env.example`).

2. **Upload** the contents of `dist/` to the web root, for example:

   ```bash
   rsync -avz --delete dist/ user@server:/var/www/gecris/
   ```

3. **Configure the server** using the examples in `deploy/`:
   - **Nginx:** `deploy/nginx.conf.example` (`try_files`, 404 page, asset caching, gzip).
   - **Apache:** copy `deploy/.htaccess.example` to the web root as `.htaccess`. If the site is in a subfolder, change `ErrorDocument 404 /404.html` to `/gecris/404.html`.

4. Enable HTTPS (for example with Let's Encrypt). Then disable the GitHub Pages workflow, or keep it for a staging copy.

## Quality checklist

Before each release:

- [ ] `npm run build` completes without errors
- [ ] No `[placeholder]` text, amber badges or sample articles remain
- [ ] EU emblem and verified disclaimer are in place (`funding.verified: true`)
- [ ] All PDFs in `public/documents/` are approved for public release
- [ ] New images have meaningful `alt` text
- [ ] Privacy policy reviewed by the coordinator's data protection officer
- [ ] Lighthouse check (Chrome DevTools → Lighthouse) for performance, accessibility, best practices and SEO
