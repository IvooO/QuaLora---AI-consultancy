# Qualora — AI Consultancy & Automation for Food Companies

Landing page and interactive AI diagnostic tool for **Qualora** (AI consultancy and workflow automation tailored for the food industry).

## Features

- **Multilingual Support**: Instant real-time language switching between English (EN), Dutch (NL), and French (FR) with local storage persistence and URL preservation.
- **Interactive Food AI Readiness Quiz**: 5-step operational diagnostic calculating readiness tier, potential weekly hours saved, priority recommendations, and seamless audit booking.
- **Discovery Call Booking**: Interactive modal with food subsector categorization, input validation, and immediate confirmation.
- **Responsive & Accessible**: Built with Tailwind CSS, clean semantic HTML, and Dark / Light theme options with WCAG AA contrast.
- **GitHub Pages Ready**: Configured with relative base asset paths (`base: './'`) and automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## Publishing to GitHub Pages (2 Steps)

This project is pre-configured for automated continuous deployment to GitHub Pages via GitHub Actions.

### Step 1: Push code to your GitHub Repository

Initialize and push to your GitHub repository:

```bash
git init
git add .
git commit -m "Initial release of Qualora landing page"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Actions Deployment

1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

GitHub Actions will automatically build the site and deploy it to:
`https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## Local Development & Manual Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static bundle for GitHub Pages
npm run build
```

The production output is located in `dist/`.
