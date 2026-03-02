# AACHARYA CAFE - Restaurant Website

A modern, high-conversion restaurant website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![AACHARYA CAFE](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🍽️ About

AACHARYA CAFE is a premium South Indian restaurant located in Jayanagar, Bengaluru. This website provides a complete digital presence with online ordering, menu browsing, customer reviews, and contact information.

**Restaurant Details:**
- **Location:** 493/K, Krishna Rajendra Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
- **Contact:** +91 90199 36889
- **Hours:** 6:00 AM – 1:00 AM (Daily)
- **Rating:** 4.1 ⭐ (203 Google reviews)
- **Price Range:** ₹1–200 per person

## 🚀 Features

### Core Features
- ✅ Fully responsive design (Mobile-first approach)
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion animations
- ✅ SEO optimized with metadata
- ✅ JSON-LD structured data
- ✅ Server-side rendering

### Pages
- 🏠 **Home Page** - Hero section, features, popular dishes, reviews, CTA, location
- 📋 **Menu Page** - Categorized menu with filtering
- ℹ️ **About Page** - Restaurant story, values, statistics
- ⭐ **Reviews Page** - Customer testimonials and ratings
- 📞 **Contact Page** - Contact form, map, business information
- 🛒 **Order Page** - Multiple ordering options

### Conversion Features
- 📱 Floating WhatsApp button
- 📞 Floating call button
- ⬆️ Scroll to top button
- 🟢 "Open Now" dynamic status indicator
- 🎯 Multiple CTAs throughout the site
- 📍 Google Maps integration
- 🔗 Direct Swiggy ordering link

### Technical Features
- 🔍 SEO optimized (metadata, Open Graph, Twitter cards)
- 📱 Progressive Web App ready
- ⚡ Optimized performance
- ♿ Accessible (ARIA labels)
- 🎨 Custom ShadCN UI components
- 🔄 Smooth animations and transitions

## 📁 Project Structure

```
AACHARYA CAFE/
├── app/
│   ├── (routes)/
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── AboutPageContent.tsx
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── ContactPageContent.tsx
│   │   ├── menu/
│   │   │   ├── page.tsx
│   │   │   └── MenuPageContent.tsx
│   │   ├── order/
│   │   │   ├── page.tsx
│   │   │   └── OrderPageContent.tsx
│   │   └── reviews/
│   │       ├── page.tsx
│   │       └── ReviewsPageContent.tsx
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── sitemap.ts        # Sitemap generation
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MenuSection.tsx
│   ├── ReviewCard.tsx
│   ├── ReviewsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── CTASection.tsx
│   ├── LocationMap.tsx
│   └── FloatingButtons.tsx
├── lib/
│   ├── constants.ts      # Restaurant data & menu
│   ├── schema.ts         # JSON-LD schemas
│   └── utils.ts          # Utility functions
├── public/
│   ├── images/           # Image assets
│   └── robots.txt        # SEO robots file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **UI Components:** Custom ShadCN-inspired components
- **Font:** Inter (Google Fonts)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://aacharyacafe.com
NEXT_PUBLIC_PHONE=+919019936889
NEXT_PUBLIC_WHATSAPP=919019936889
NEXT_PUBLIC_SWIGGY_URL=https://www.swiggy.com/direct/brand/741309
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Add Restaurant Images (Recommended)

To add real images from your Google Maps listing:

1. **Download images** from [your Google Maps page](https://maps.app.goo.gl/mek44PbHPFk4mYy69)
2. **Organize them** into folders:
   ```
   public/images/
   ├── hero/          # Exterior, wide shots
   ├── food/          # Dish photos
   └── restaurant/    # Interior, ambiance
   ```
3. **Follow the guide** in `IMAGE_SETUP_GUIDE.md` for detailed instructions

The website works perfectly without images, but adding real photos increases conversion by 30%!

### Step 4: Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Environment Variables on Vercel:**
   Add these in Vercel Dashboard → Settings → Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_PHONE`
   - `NEXT_PUBLIC_WHATSAPP`
   - `NEXT_PUBLIC_SWIGGY_URL`

4. **Custom Domain:**
   - Add your domain in Vercel Dashboard → Settings → Domains
   - Update DNS records as instructed

### Alternative Deployment Options

- **Netlify:** Use the Next.js plugin
- **AWS Amplify:** Connect your GitHub repo
- **DigitalOcean App Platform:** One-click Next.js deployment

## 🎨 Customization

### Update Restaurant Information

Edit `lib/constants.ts`:

```typescript
export const RESTAURANT_INFO = {
  name: "YOUR RESTAURANT NAME",
  tagline: "Your tagline here",
  // ... update other fields
};
```

### Add Menu Items

Edit `lib/constants.ts`:

```typescript
export const MENU_ITEMS = {
  breakfast: [
    {
      id: "1",
      name: "Item Name",
      description: "Item description",
      price: 100,
      isVeg: true,
      isPopular: true,
    },
    // ... add more items
  ],
};
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B00", // Change primary color
  },
  secondary: {
    DEFAULT: "#4A2C1A", // Change secondary color
  },
}
```

### Add Google Analytics

Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 📊 SEO Optimization

### Implemented SEO Features:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Restaurant, LocalBusiness)
- ✅ Sitemap.xml generation
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Fast page load times
- ✅ Mobile-friendly design
- ✅ Accessible (WCAG compliant)

### Google Search Console Setup:
1. Verify ownership via HTML tag
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing status

## 🎯 Performance

Target Lighthouse Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Tips:
- Images should be in WebP format
- Use Next.js Image component for lazy loading
- Minimize third-party scripts
- Enable compression on server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a custom website for AACHARYA CAFE. For modifications or enhancements, please contact the development team.

## 📄 License

© 2026 AACHARYA CAFE. All rights reserved.

## 📞 Support

For technical support or inquiries:
- **Website:** [aacharyacafe.com](https://aacharyacafe.com)
- **Phone:** +91 90199 36889
- **Location:** Jayanagar, Bengaluru

---

**Built with ❤️ for authentic South Indian food lovers**
