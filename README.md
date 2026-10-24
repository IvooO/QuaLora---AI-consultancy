# Qualora — AI Consultancy & Automation for Food Companies

Landing page and interactive AI diagnostic tool for **Qualora** (AI consultancy and workflow automation tailored for the food industry).

## Features

- **Multilingual Support**: Instant real-time language switching between English (EN), Dutch (NL), and French (FR) with local storage persistence and URL preservation.
- **Interactive Food AI Readiness Quiz**: 5-step operational diagnostic calculating readiness tier, potential weekly hours saved, priority recommendations, and seamless audit booking.
- **Discovery Call Booking**: Interactive modal with food subsector categorization, input validation, and immediate confirmation.
- **Responsive & Accessible**: Built with Tailwind CSS, clean semantic HTML, and Dark / Light theme options with WCAG AA contrast.
- **GitHub Pages Ready**: Configured with relative base asset paths (`base: './'`), a pre-built static `/docs` folder, and an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## Why GitHub Pages may show a 404 or blank screen (and how to fix it)

1. **Deploying from `/ (root)` instead of `/docs`**:
   The root directory contains raw React/TypeScript source code (`src/main.tsx`), which standard web browsers cannot execute without compilation.
   - **Fix**: Use the pre-built `/docs` folder or GitHub Actions (see below).
2. **Missing `.nojekyll`**:
   Without `.nojekyll`, GitHub Pages processes files with Jekyll, which ignores directory names starting with `_` or certain asset patterns. This has been added to `/docs` and `/public`.
3. **CI Dependency Conflict**:
   The `esbuild` peer dependency conflict has been resolved in `package.json` and a clean `package-lock.json` has been generated.

---

## Two Easy Ways to Publish to GitHub Pages

### Method 1 (Fastest & Guaranteed): Deploy via the `/docs` folder

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Qualora landing page"
   git push origin main
   ```
2. In your GitHub repository:
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, keep or select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`), and in the folder dropdown select **`/docs`**.
   - Click **Save**.
3. Your site will be live at `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/` in under a minute!

---

### Method 2: Deploy via Automated GitHub Actions

1. In your GitHub repository:
   - Click **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
2. Push any commit to `main` (or `master`).
3. GitHub Actions runs `.github/workflows/deploy.yml` automatically to build and deploy.

---

## Local Development & Manual Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Re-build static bundle into both dist/ and docs/
npm run build
```
