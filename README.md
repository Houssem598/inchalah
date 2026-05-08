# BeyondMed Group — Corporate Website

Modern, refined corporate website for BeyondMed Group Ltd, designed to project institutional credibility for banks, payment providers (Stripe), and regulators.

---

## What's inside

This is a production-ready React website built with:

- **React 18** + **TypeScript**
- **Vite** (fast build system)
- **Tailwind CSS** (refined corporate styling)
- **Framer Motion** (subtle, professional animations)
- **Lucide React** (clean icons)

The design is **editorial-corporate** — think Pictet, Lazard, KKR. Refined typography, generous whitespace, and precise grid layouts that signal seriousness to financial institutions.

---

## Quick Start (Development)

You need **Node.js 18 or higher** installed. If you don't have it, download from nodejs.org.

```bash
# 1. Open a terminal in this folder
cd beyondmed-website

# 2. Install dependencies (one time only)
npm install

# 3. Start development server
npm run dev
```

The site will open at **http://localhost:5173**

---

## Build for Production

When ready to upload the site:

```bash
npm run build
```

This creates a `dist/` folder containing the complete static website ready for upload anywhere.

---

# Deployment Guide

You have two options. Both are fully covered below.

---

## OPTION 1 — Deploy on OxaHost (your current host)

This is the simplest approach since you already have OxaHost.

### Step 1 — Build the site

```bash
npm install
npm run build
```

This creates a `dist/` folder.

### Step 2 — Upload via cPanel

1. Log in to your OxaHost cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or the folder for your domain)
4. **Important:** if there's existing files, back them up first
5. Upload **everything inside the `dist/` folder** (not the dist folder itself — its contents)
6. Make sure `index.html` is in the root

### Step 3 — Verify

Visit your domain — the site should be live within minutes.

### Step 4 — Set up domain

In OxaHost cPanel, point your domain (e.g., `beyondmedgroup.com`) to the `public_html/` folder where you uploaded the files.

### Step 5 — Enable HTTPS

In cPanel, find **SSL/TLS** or **Let's Encrypt** and enable a free SSL certificate for your domain. This is critical for institutional credibility.

---

## OPTION 2 — Deploy on Google Cloud Console (Firebase Hosting)

Free, fast (Google's CDN), and looks professional. Recommended if you want premium hosting.

### Step 1 — Create a Google account if you don't have one

Use your business email: houssem@beyondmedclinic.com

### Step 2 — Set up Firebase

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"**
3. Name: `beyondmed-corporate`
4. Disable Google Analytics for now (you can add later)
5. Click **Create project**

### Step 3 — Install Firebase CLI

In your terminal:

```bash
npm install -g firebase-tools
```

### Step 4 — Login to Firebase

```bash
firebase login
```

A browser will open. Log in with your Google account.

### Step 5 — Initialize Firebase in your project

In your project folder:

```bash
firebase init hosting
```

When prompted:
- Select your project (`beyondmed-corporate`)
- Public directory: type **`dist`**
- Configure as single-page app: type **`y`** (yes)
- Set up automatic builds with GitHub: type **`n`** (no)

### Step 6 — Build and deploy

```bash
npm run build
firebase deploy
```

After a few seconds, you'll see:

```
✔ Deploy complete!
Hosting URL: https://beyondmed-corporate.web.app
```

### Step 7 — Connect your custom domain

1. In Firebase Console → **Hosting** → **Add custom domain**
2. Enter your domain (e.g., `beyondmedgroup.com`)
3. Firebase will give you DNS records (A records) to add
4. Go to your domain registrar (where you bought the domain) and add those DNS records
5. Wait 24-48 hours for propagation
6. Firebase auto-provisions SSL certificate

### Step 8 — Future updates

To update the site later:

```bash
npm run build
firebase deploy
```

That's it.

---

## Recommended Approach

**For institutional credibility (banks, Stripe, etc.) — use Firebase Hosting.**

Reasons:
- Faster (Google's global CDN)
- Free SSL automatically
- Professional `https://yourdomain.com` from day one
- Better SEO performance
- Banks and Stripe love seeing fast, professional sites

OxaHost is fine but Firebase is more polished for what you need.

---

## File Structure Explained

```
beyondmed-website/
├── public/                # Static files (favicon, images)
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable components
│   │   └── Header.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Operations.tsx
│   │   ├── Governance.tsx
│   │   └── Contact.tsx
│   ├── App.tsx            # Main app
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

---

## Customization

### Change a section's text

Open the relevant file in `src/sections/`. All text is plain English in JSX - just edit the strings.

Example: To change the hero headline, open `src/sections/Hero.tsx` and find:
```tsx
Connecting global<br />
patients with{' '}
```

Edit those lines directly.

### Change colors

Open `tailwind.config.js` and modify the colors object. The current scheme:
- **Ink** — dark navy/black tones
- **Cream** — off-white background
- **Gold** — accent color (#c9a96e)

### Add a new section

1. Create a new file in `src/sections/` (e.g., `Testimonials.tsx`)
2. Import it in `src/App.tsx`
3. Add `<Testimonials />` to the JSX

---

## SEO & Performance

The site is already optimized for:
- ✅ Mobile responsive (all screen sizes)
- ✅ Semantic HTML (proper headings, sections)
- ✅ ARIA labels (screen reader friendly)
- ✅ Fast loading (Vite + production build)
- ✅ Open Graph + Twitter Card meta tags
- ✅ Proper heading hierarchy (H1 → H2 → H3)

---

## Need Help?

If you get stuck during deployment, the most common issues are:

**"Command not found: npm"** → Install Node.js from nodejs.org

**"Firebase command not found"** → Run `npm install -g firebase-tools`

**Site looks broken after upload** → Make sure you uploaded the **contents** of `dist/`, not the `dist` folder itself

**Domain not working** → DNS changes take 24-48 hours to propagate. Be patient.

---

© 2026 BeyondMed Group Ltd · Companies House Reg. No. 17063347
