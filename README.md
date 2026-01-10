# Chandan Kumar

Full-Stack Engineer & AI/ML Developer

## Professional Summary

Modern, responsive portfolio website showcasing professional experience, technical projects, and thought leadership. Built with vanilla JavaScript, HTML5, and CSS3.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### Core Pages
- **Homepage** - Hero section with typewriter effect and gradient text
- **About** - Professional story, highlights, and skills overview
- **Portfolio** - Filterable project showcase (AI-ML, Cloud, Mobile, Web)
- **Resume** - Professional timeline with experience, education, and awards
- **Blog** - Articles on AI/ML, cloud computing, and software engineering
- **Contact** - Multiple contact methods with form validation

### Technical Features
- **Dark/Light Theme Toggle** - Smooth theme switching with localStorage persistence
- **Fully Responsive** - Mobile-first design with hamburger menu
- **Scroll Animations** - Fade-in effects and parallax backgrounds
- **Typewriter Effect** - Dynamic role titles
- **Gradient Accents** - Modern design system
- **SEO Optimized** - Semantic HTML with meta tags
- **Accessible** - ARIA labels and keyboard navigation

## Quick Start

### Option 1: Open Locally (No Server Required)

Simply open `index.html` in your browser:

```bash
# Navigate to the project folder
cd portfolio-website

# Open in default browser (macOS)
open index.html

# Or open directly in specific browser
open -a "Google Chrome" index.html
open -a "Safari" index.html
```

### Option 2: Use a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
portfolio-website/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css          # All styles with CSS variables
├── js/
│   ├── data.js            # Portfolio, resume, and blog data
│   └── main.js            # Interactive functionality
├── assets/
│   └── Chandan_Kumar_Resume.pdf  # Downloadable resume
└── README.md              # This file
```

## Customization Guide

### 1. Update Personal Information

**Edit `index.html`:**
- Line 7-10: Update meta tags (description, keywords)
- Line 11: Change page title
- Line 34-36: Update navigation brand (initials/logo)
- Line 55: Change name in hero title
- Line 87-102: Update social media links
- Line 311-320: Update contact information
- Line 390-398: Update footer info

### 2. Modify Projects

**Edit `js/data.js` - `projects` array:**

```javascript
{
    id: 1,
    title: "Your Project Name",
    category: ["ai-ml", "cloud", "web", "mobile"], // Pick relevant
    date: "Jan 2026 - Present",
    description: "Brief project description...",
    technologies: ["Python", "React", "AWS"],
    highlights: [
        "Achievement 1",
        "Achievement 2"
    ],
    links: {
        live: "https://yourproject.com",
        github: "https://github.com/yourusername/project"
    }
}
```

### 3. Update Resume Timeline

**Edit `js/data.js` - `resumeData` array:**

```javascript
{
    type: "experience", // or "education", "award"
    title: "Job Title",
    organization: "Company Name",
    location: "City, Country",
    date: "Jan 2026 - Present",
    description: "Role description...",
    highlights: [
        "Bullet point 1",
        "Bullet point 2"
    ]
}
```

### 4. Add Blog Posts

**Edit `js/data.js` - `blogPosts` array:**

```javascript
{
    id: 1,
    title: "Your Blog Post Title",
    date: "Jan 15, 2026",
    readTime: "8 min",
    category: "AI/ML", // or Cloud, Mobile, etc.
    excerpt: "Brief excerpt...",
    slug: "blog-post-url-slug"
}
```

### 5. Customize Colors & Theme

**Edit `css/styles.css` - CSS Variables (lines 7-29):**

```css
:root {
    --accent-primary: #6366f1;      /* Primary color */
    --accent-secondary: #8b5cf6;    /* Secondary color */
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    /* Modify other colors as needed */
}
```

### 6. Update Typewriter Text

**Edit `js/main.js` - line 74:**

```javascript
const texts = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
];
```

### 7. Replace Hero Image

Currently uses a placeholder gradient circle. To add a real photo:

**Edit `index.html` - line 100:**

```html
<div class="image-placeholder">
    <img src="assets/your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
    <!-- Keep or remove floating shapes -->
</div>
```

## Deployment Options

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be at `https://yourusername.github.io/portfolio/`

### Netlify (Free)

1. Visit [netlify.com](https://netlify.com)
2. Drag and drop the `portfolio-website` folder
3. Your site is live instantly with HTTPS
4. Optional: Connect GitHub for automatic deployments

### Vercel (Free)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   cd portfolio-website
   vercel
   ```

### Cloudflare Pages (Free)

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Configure build:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy

## Analytics Integration

Add Google Analytics to track visitors:

**Add before closing `</head>` in `index.html`:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Advanced Customizations

### Add Contact Form Backend

The contact form currently shows an alert. To actually send emails:

**Option 1: Formspree (Free)**

Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Netlify Forms**

Add to form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Add More Sections

Copy section structure and add to `index.html`:

```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">Testimonials</h2>
        <!-- Your content -->
    </div>
</section>
```

Update navigation:
```html
<li><a href="#testimonials" class="nav-link">Testimonials</a></li>
```

### Enable Blog Content

To add full blog post pages:

1. Create `blog/` directory
2. Add individual HTML files for each post
3. Update blog card links in `js/data.js` to point to actual files

## SEO Optimization

### Update Meta Tags

**Edit `index.html` head section:**

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Keywords, Here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/preview.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta name="twitter:card" content="summary_large_image">
```

### Add Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2026-01-09</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Theme not persisting:**
- Check browser localStorage is enabled
- Clear browser cache

**Animations not working:**
- Check JavaScript console for errors
- Ensure `data.js` loads before `main.js`

**Mobile menu not opening:**
- Check `mobileMenuToggle` ID exists in HTML
- Verify JavaScript is running (check console)

**Projects/Blog not displaying:**
- Open browser console and check for errors
- Verify `data.js` arrays are properly formatted
- Ensure no trailing commas in JSON-like structures

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

This is a personal portfolio template, but suggestions are welcome:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Contact

**Chandan Kumar**
- Email: Ckumar5@hawk.iit.edu
- Phone: 312-296-4209
- GitHub: [@AgentQ1](https://github.com/AgentQ1)
- LinkedIn: [linkedin.com/in/chandnnn](https://www.linkedin.com/in/chandnnn/)

---

Built with vanilla JavaScript - No frameworks, just pure web fundamentals.

*Last updated: January 2026*
