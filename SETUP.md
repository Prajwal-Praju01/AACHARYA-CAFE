# AACHARYA CAFE - Setup Guide

Complete step-by-step guide to set up and deploy the AACHARYA CAFE website.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended)

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies

Open terminal in the project directory and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 2. Create Environment File

Copy the example environment file:

```bash
# Windows (PowerShell)
Copy-Item .env.local.example .env.local

# Mac/Linux
cp .env.local.example .env.local
```

Or manually create `.env.local` with:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+919019936889
NEXT_PUBLIC_WHATSAPP=919019936889
NEXT_PUBLIC_SWIGGY_URL=https://www.swiggy.com/direct/brand/741309
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**You're ready! 🎉**

---

## 📦 Detailed Setup Instructions

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd "AACHARYA CAFE"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   **Packages Installed:**
   - next (14.2.3)
   - react (18.3.1)
   - typescript (5.4.5)
   - tailwindcss (3.4.3)
   - framer-motion (11.0.28)
   - lucide-react (0.372.0)

3. **Verify Installation**
   ```bash
   npm run dev
   ```
   Should start server at http://localhost:3000

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` in root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Information
NEXT_PUBLIC_PHONE=+919019936889
NEXT_PUBLIC_WHATSAPP=919019936889

# Online Ordering
NEXT_PUBLIC_SWIGGY_URL=https://www.swiggy.com/direct/brand/741309
```

**Important Notes:**
- Do NOT commit `.env.local` to Git
- Use `.env.local.example` as template
- For production, update `NEXT_PUBLIC_SITE_URL` to your domain

### Update Restaurant Information

Edit `lib/constants.ts`:

```typescript
export const RESTAURANT_INFO = {
  name: "AACHARYA CAFE",
  tagline: "Your Custom Tagline",
  address: {
    full: "Your Full Address",
    // ... other fields
  },
  contact: {
    phone: "+91 YOUR PHONE",
    whatsapp: "91XXXXXXXXXX",
  },
  // ... customize other fields
};
```

---

## 🖼️ Adding Images

### Recommended Image Sizes:

1. **Hero/OG Image:** 1200x630px
2. **Menu Items:** 800x600px
3. **Logo:** 512x512px

### Image Locations:

```
public/
├── images/
│   ├── og-image.jpg          # Open Graph image (1200x630)
│   ├── restaurant-hero.jpg   # Hero section image
│   ├── masala-dosa.jpg       # Menu item images
│   └── ...
```

### Image Optimization:

- Use WebP format for better performance
- Compress images before uploading
- Use Next.js Image component (already implemented)

**Tools:**
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Convert to WebP

---

## 🏗️ Build & Test

### Development Build

```bash
npm run dev
```

Access at: http://localhost:3000

### Production Build

```bash
npm run build
```

This creates optimized production build in `.next/` folder.

### Test Production Build Locally

```bash
npm run build
npm start
```

### Lint Check

```bash
npm run lint
```

---

## 🌐 Deployment to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/aacharya-cafe.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
     NEXT_PUBLIC_PHONE = +919019936889
     NEXT_PUBLIC_WHATSAPP = 919019936889
     NEXT_PUBLIC_SWIGGY_URL = <your-swiggy-url>
     ```

4. **Redeploy:**
   - Go to Deployments → ⋮ → Redeploy

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Production Deployment:**
   ```bash
   vercel --prod
   ```

### Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your domain (e.g., aacharyacafe.com)

2. **Update DNS Records:**
   
   **For Apex Domain (aacharyacafe.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variable:**
   ```
   NEXT_PUBLIC_SITE_URL = https://aacharyacafe.com
   ```

---

## 🚀 Alternative Deployment Options

### Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Install Plugin:** Next.js Runtime

### DigitalOcean App Platform

1. Connect GitHub repository
2. Auto-detect Next.js
3. Deploy

### AWS Amplify

1. Connect repository
2. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

---

## 📊 Post-Deployment Checklist

### SEO Setup

- [ ] Submit sitemap to Google Search Console
  - URL: `https://yourdomain.com/sitemap.xml`
- [ ] Add Google Analytics (if needed)
- [ ] Set up Google My Business
- [ ] Verify Open Graph tags (Facebook Debugger)
- [ ] Test rich snippets (Google Rich Results Test)

### Performance Testing

- [ ] Run Lighthouse audit (Target 90+ score)
- [ ] Test on mobile devices
- [ ] Check page load speed (PageSpeed Insights)
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Test all CTAs (call, WhatsApp, Swiggy)

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🔍 Troubleshooting

### Issue: "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001
```

Or kill the process using port 3000.

### Issue: Images not loading

**Solution:**
- Check image path is correct
- Ensure images are in `public/` directory
- Verify file extensions

### Issue: Build fails

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Issue: Environment variables not working

**Solution:**
- Ensure variables start with `NEXT_PUBLIC_`
- Restart dev server after changing `.env.local`
- Rebuild for production: `npm run build`

---

## 📞 Support

For technical assistance:
- Check documentation: README.md
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

For restaurant inquiries:
- **Phone:** +91 90199 36889
- **Location:** Jayanagar, Bengaluru

---

## 🎯 Next Steps

After successful deployment:

1. **Monitor Performance:**
   - Set up Google Analytics
   - Monitor Core Web Vitals
   - Track user behavior

2. **SEO Optimization:**
   - Submit to search engines
   - Build backlinks
   - Local SEO optimization

3. **Marketing:**
   - Social media integration
   - Email marketing setup
   - Online advertising

4. **Maintenance:**
   - Regular updates
   - Monitor user feedback
   - Content updates

---

**Congratulations! Your website is live! 🎉**
