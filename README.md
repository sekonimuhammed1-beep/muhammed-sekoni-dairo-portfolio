# Muhammed Sekoni-Dairo: Portfolio

A personal portfolio built with React and Vite. Plain CSS, no backend, no environment variables, no secrets.

Suggested repository name: `muhammed-sekoni-dairo-portfolio`

## Tech

- React 18 + Vite 5
- Plain CSS (`src/styles/global.css`)
- Hosted on Vercel (configured in `vercel.json`)

## 1. Run locally

Requires Node.js 18.18 or newer (https://nodejs.org, choose LTS).

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

Always run `npm run build` once before deploying. If it finishes without errors, Vercel will build it too.

## 2. Update your content

Almost everything lives in **`src/config/site.js`**: contact links, skills, projects, experience, education.

- Contact: fill in `email`, `linkedin`, `github`. Empty fields display "Coming soon", never a dead link.
- Projects: set `link` only when you have a real URL.
- Screenshots: put images in `public/screenshots/`, then set `image: "./screenshots/name.png"`.
- Photo: replace `public/images/muhammed.jpg` (4:5 portrait, about 800x1000).
- Experience dates: set `period` on the Chalite Tech entry.

## 3. Push to GitHub

1. Create a GitHub account at https://github.com if you don't have one.
2. Click **New repository**. Name it `muhammed-sekoni-dairo-portfolio`. Keep it **empty** (do not tick README, .gitignore or license). Public is fine; private also works with Vercel.
3. In a terminal, inside the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/muhammed-sekoni-dairo-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If GitHub asks you to sign in, use the browser prompt or a personal access token (GitHub no longer accepts account passwords for git).

`node_modules/` and `dist/` are excluded by `.gitignore`. `package-lock.json` is created by `npm install`; **commit it** so builds are reproducible.

## 4. Deploy on Vercel

1. Go to https://vercel.com and choose **Sign Up → Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find `muhammed-sekoni-dairo-portfolio` and click **Import**. If it isn't listed, click **Adjust GitHub App Permissions** and grant Vercel access to the repository.
4. Check the settings (Vercel should detect all of these; `vercel.json` also sets them):
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   - **Environment Variables:** none needed
5. Click **Deploy**. It takes about a minute.
6. Vercel shows your live address, something like `https://muhammed-sekoni-dairo-portfolio.vercel.app` (the exact name may differ if it's taken). Open it and check every section on your phone.

That URL is what you share on your CV, LinkedIn and WhatsApp.

## 5. Updating the live site

Vercel is connected to your GitHub repository:

- Every push to `main` triggers a new **production** deployment automatically.
- Pushes to other branches and pull requests get their own **preview** URLs.
- A failed build never replaces the live site; the previous version stays up.

```bash
git add .
git commit -m "Add LinkedIn and GitHub links"
git push
```

## 6. Custom domain (later)

1. Buy a domain from a registrar (Namecheap, Cloudflare, GoDaddy, etc.).
2. In Vercel: your project → **Settings → Domains → Add**, then enter the domain.
3. Vercel shows the DNS records to add at your registrar (usually an `A` record for the root domain and a `CNAME` for `www`). Add them there.
4. Wait for DNS to update (minutes to a few hours). Vercel issues the HTTPS certificate automatically.
5. Optional: in **Settings → Environment Variables**, add `SITE_URL` = `https://yourdomain.com` and redeploy, so link previews use your domain instead of the `.vercel.app` address.

## Production notes

- **Routing:** this is a single-page site that navigates with in-page anchors (`#about`, `#projects`, ...), so no SPA rewrite rule is needed. If you later add real routes such as `/blog`, add this to `vercel.json`: `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`.
- **Link previews:** `og-image.png` (1200x630) is used by WhatsApp, LinkedIn and others. The absolute URL is filled in automatically from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. Chat apps cache previews, so after changes you may need to re-share the link or use LinkedIn's Post Inspector to refresh.
- **Performance:** the photo is resized and compressed (about 50 KB), images are lazy-loaded where appropriate, built assets are fingerprinted and cached for a year, and no source maps are shipped.
- **Security headers** are set in `vercel.json`.

## Still to supply

- Email address, LinkedIn URL, GitHub URL (`contact` in `site.js`)
- The live portfolio URL, once deployed (the Portfolio Website project `link`)
- Real screenshots for both project cards
- A Chalite Tech link, if it has one
- Chalite Tech start date (`period`)
- The full name of your TechCrush programme (currently "Technology training programme")
