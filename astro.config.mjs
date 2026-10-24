// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Hosting configuration
 * ---------------------
 * The public URL and base path are read from environment variables so the same
 * source code can be deployed to GitHub Pages (repository subpath) and later to
 * Apache / Nginx (root domain or subdomain) without code changes.
 *
 *   SITE_URL   Full origin of the site, e.g. https://gecris.eu or https://<user>.github.io
 *   BASE_PATH  Subpath the site is served from, e.g. /gecris-website  (use "/" for a root domain)
 *
 * The GitHub Actions workflow sets both automatically. See README.md → Deployment.
 */
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Produces /about/index.html etc. — works on GitHub Pages, Apache and Nginx.
    format: 'directory',
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
