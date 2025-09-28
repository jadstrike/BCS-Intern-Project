# Portfolio Deployment Guide

## Quick Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to the deploy area
3. Get instant live URL

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically

## Pre-Deployment Checklist

- [ ] Customize personal information in `index.html`
- [ ] Replace placeholder project data
- [ ] Update contact information
- [ ] Test all form validation
- [ ] Test dark mode toggle
- [ ] Verify responsive design on mobile/tablet
- [ ] Check accessibility with browser dev tools
- [ ] Run Lighthouse audit (aim for 90+ scores)

## Post-Deployment Testing

1. **Accessibility Testing:**

   - Use WAVE Web Accessibility Evaluator
   - Test keyboard navigation
   - Verify screen reader compatibility

2. **Performance Testing:**

   - Run Google Lighthouse audit
   - Check Core Web Vitals
   - Test on slow connections

3. **Cross-browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

## Customization Notes

Before deploying, remember to update:

- Your name in the hero section
- About section with your actual experience
- Project cards with real projects
- Skills section with your technologies
- Contact information (email, phone, location)
- Footer copyright year

## File Structure for Deployment

```
portfolio/
├── index.html          # Main page
├── styles.css          # All styles
├── script.js           # All JavaScript
├── README.md           # Documentation
└── DEPLOYMENT.md       # This file
```

That's it! Your portfolio is ready to deploy.
