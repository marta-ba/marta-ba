# Marta Blanco Arévalo — Portfolio

Static portfolio site, ready to deploy on **GitHub Pages** (`username.github.io`).

## 📁 Structure

```
portfolio/
├── index.html              ← Home page (hero + project grid + about)
├── styles.css              ← Shared styles (used by all pages)
├── script.js               ← Shared JS (cursor, scroll reveal, filter)
├── projects/
│   ├── project-1.html      ← Purchase intent prediction
│   ├── project-2.html      ← A/B testing & causal inference
│   ├── project-3.html      ← Customer segmentation
│   ├── project-4.html      ← Brazil public revenue
│   ├── project-5.html      ← Wholesale paradox
│   └── project-6.html      ← BI implementation
└── images/
    ├── project1/           ← Put your charts/screenshots here
    ├── project2/
    ├── project3/
    ├── project4/
    ├── project5/
    └── project6/
```

## 🚀 How to deploy on GitHub Pages

1. Create a repo named **`yourusername.github.io`** (or any repo with Pages enabled).
2. Copy ALL files from this folder into the root of your repo.
3. Commit + push.
4. Your site will be live at `https://yourusername.github.io/` in ~1 minute.

## 🖼️ How to add images to a project page

GitHub Pages is static — there's **no upload dashboard possible**. The standard workflow is:

### Option A — Add images via your repo (recommended)

1. Save your chart/screenshot (PNG or JPG) into the matching folder, e.g. `images/project1/feature-importance.png`.
2. Open the project HTML file (e.g. `projects/project-1.html`).
3. Find the section marked `<!-- 📷 ADD IMAGES HERE -->`.
4. Replace this placeholder block:

```html
<div class="visual-item visual-half">
  <div class="visual-placeholder">Image — feature importance chart</div>
  <div class="visual-caption">Feature importance: ...</div>
</div>
```

with:

```html
<div class="visual-item visual-half">
  <img src="../images/project1/feature-importance.png" alt="Feature importance chart">
  <div class="visual-caption">Feature importance: ...</div>
</div>
```

5. Commit and push. The image goes live automatically.

### Option B — Use external image hosting

If you don't want to commit large images to git, upload them to:
- **Cloudinary** (free tier, generous)
- **Imgur** (free, fast)
- A separate GitHub repo

Then use the full URL in `src="..."`.

## 🔧 How to edit text

All copy lives directly in the HTML files. Open with any text editor (VS Code, Sublime, even GitHub's web editor) and change the text inside the tags.

## 📐 Visual layout options

The image grid uses these classes:

| Class | Width |
|---|---|
| `visual-full` | Full width |
| `visual-half` | Half width (2 per row) |
| `visual-third` | One third (3 per row) |

Mix and match to get the layout you want.

## ✅ What's included

- Custom animated cursor (auto-disabled on touch devices)
- Smooth scroll-reveal animations
- Sticky nav with blur on scroll
- Responsive (mobile-first)
- Accessible nav and links
- SEO meta tags on every page
- Hover tooltip on the name (Bla → Blanco, re → Arévalo)
- Working project filter on home page
- Inter-project navigation (next project links)

---

⚠️ **About the "image upload dashboard" you asked about:** GitHub Pages can only serve static files — it has no server, no database, no auth. A real upload dashboard requires a backend. If you ever want one, the easiest path is hosting on Lovable (or Netlify + a CMS like Decap/Sanity) instead of GitHub Pages.
