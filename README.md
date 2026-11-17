# Dhouha Ben Rhouma — React Portfolio

**Stack:** React 19 · Vite · Tailwind CSS v4 · Node.js & Express (optional server)

---

## 🚀 Quick Start (Development)

Run the Vite development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates all minified static assets in the `dist/` directory.

---

## 🌐 Deploy for Free (Recommended)

Since the frontend is a pure static React application with client-side Formspree/mailto handling, it deploys **100% free** on:

### Option 1 — Vercel
1. Push your repository to GitHub.
2. Sign in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset: **Vite** (auto-detected).
5. Root Directory: `portfolio-react` (or repository root).
6. Click **Deploy**.

### Option 2 — Netlify
1. Sign in to [netlify.com](https://netlify.com).
2. Connect your GitHub repository or drag-and-drop the `dist/` folder directly to [netlify.com/drop](https://netlify.com/drop).
3. If connecting GitHub:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**.

---

## 🖥️ Running with Node.js & Express (Optional)

If you wish to serve the application and the contact endpoint via Express:

1. Build the frontend:
   ```bash
   npm run build
   ```
2. Start the Express server:
   ```bash
   npm start
   ```
3. Visit [http://localhost:5000](http://localhost:5000).

---

## 📝 Customizing Content & Placeholders

All your content, project details, experience, events, and placeholders are centralized in:

📂 `src/data/content.js`

To update:
- Your name, bio, email, social links → `meta` object
- Project descriptions & roles → `projects` array
- Experience & internships → `experience` array
- Hackathons & events → `events` array
- Skills & tags → `skillGroups` array
- Creative gallery items → `galleryItems` array

All design tokens and color variables (light & dark mode) are in:
📂 `src/index.css`
