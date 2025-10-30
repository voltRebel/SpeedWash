# SpeedWash - Modern Laundry Service Website

A beautiful, modern, and responsive laundry service website with a stunning purple color scheme and eco-friendly focus.

## 🌟 Features

- **Modern Purple Design**: Eye-catching gradient purple theme matching the latest design trends
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Real Images**: Uses high-quality Unsplash images for professional appearance
- **Interactive Components**: 
  - Smooth scrolling navigation with backdrop blur
  - Animated service cards with image overlays
  - Team member showcase with social links
  - Blog section with latest articles
  - Professional contact form
  - Pricing plans with featured option
  - Customer testimonials with star ratings

## 🎨 Design Highlights

- **Color Scheme**: Purple (#6366F1) with gradient variations (#4F46E5 to #8B5CF6)
- **Typography**: Modern sans-serif font stack for optimal readability
- **Cards**: Beautiful hover effects with shadows, transforms, and scale animations
- **Glassmorphism**: Backdrop blur effects on navigation and feature cards
- **Sections**:
  - Hero section with family-friendly imagery
  - Quick services slider for easy navigation
  - About section with purple gradient background
  - 4-step process explanation
  - Comprehensive services showcase with real images
  - Team members profiles with professional photos
  - Customer testimonials with ratings
  - Flexible pricing plans
  - Blog articles on eco-friendly cleaning practices
  - Contact form with business information

## 🚀 Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: 
  - Custom CSS properties (variables)
  - CSS Grid & Flexbox layouts
  - CSS animations and transitions
  - Backdrop filters for modern effects
- **JavaScript (Vanilla)**: 
  - Theme toggling
  - Mobile menu
  - Form handling
  - Intersection Observer for scroll animations
  - Smooth scrolling
- **Font Awesome 6.4.0**: Comprehensive icon library
- **Unsplash API**: High-quality, royalty-free images

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full multi-column layout)
- **Tablet**: 768px - 1199px (adjusted grid layouts)
- **Mobile**: < 767px (stacked single-column layout)

## 🎯 Key Sections

1. **Navigation Bar**: Fixed glass-morphic header with logo, menu, theme toggle, and "Book A Call" CTA
2. **Hero Section**: Eye-catching intro with real family image and service stats
3. **Quick Services**: Horizontal scrolling service tags (Moping, Vacuum, Sweeping, etc.)
4. **About Section**: Purple gradient section with glassmorphic feature cards
5. **Process**: Visual 4-step process explanation (Pickup → Service → Delivery → Loading)
6. **Services**: Main service offerings with high-quality images:
   - Wash & Fold
   - Personalized Care
   - Eco-Friendly Cleaning
7. **Testimonials**: Customer reviews with 5-star ratings
8. **Team Section**: Meet the dedicated team members with photos and social links
9. **Pricing**: Three transparent pricing tiers (Basic, Premium, Business)
10. **Blog**: Educational articles about eco-friendly cleaning practices
11. **Contact**: Professional form with business details and map-ready section
12. **Footer**: Comprehensive links, services, and newsletter signup

## 💻 Local Development

Simply open `index.html` in your browser. No build process required!

For a better development experience with auto-reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366F1;
    --primary-dark: #4F46E5;
    --primary-light: #818CF8;
    --text-color: #1a1a2e;
    --text-secondary: #64748b;
}
```

### Images
Replace Unsplash URLs in `index.html` with your own images:

```html
<!-- Current format -->
<img src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop" alt="Description">

<!-- Replace with your images -->
<img src="images/your-image.jpg" alt="Description">
```

### Content
Edit text content directly in `index.html` to update:
- Business name and contact information
- Service descriptions and pricing
- Team member information
- Blog article content
- Testimonials

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Interactive Features

### Theme Toggle
- Light/Dark mode switcher
- Saves preference in localStorage
- Smooth color transitions
- Icon updates dynamically

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-closes on link click
- Responsive icon toggle

### Smooth Scrolling
- Navigation links scroll smoothly
- Adjusts for fixed navbar height
- Active section highlighting

### Form Handling
- Contact form with validation
- Newsletter subscription ready
- Success/error messaging
- Ready for backend integration

### Scroll Animations
- Intersection Observer API
- Cards fade in on scroll
- Staggered animation timing
- Performance-optimized

## 📊 Performance Features

- Optimized images with proper sizing
- Minimal JavaScript dependencies
- CSS custom properties for dynamic theming
- Efficient event listeners
- Debounced resize handlers

## 🔧 TODO for Production

- [ ] Replace Unsplash images with actual business photos
- [ ] Integrate backend API for form submissions
- [ ] Add Google Maps integration for location
- [ ] Implement payment gateway for online booking
- [ ] Add WhatsApp chat widget
- [ ] Set up Google Analytics or similar
- [ ] Add proper favicon and meta tags
- [ ] Implement actual booking/scheduling system
- [ ] Add loading states and spinners
- [ ] Create comprehensive error handling
- [ ] Add email notification system
- [ ] Implement blog CMS
- [ ] Add customer portal/login
- [ ] Optimize images with WebP format
- [ ] Add service worker for offline capability

## 📞 Contact Information

**SpeedWash**
- Location: Kumasi, Ashanti Region, Ghana
- Email: info@speedwash.com
- Phone: +233 XX XXX XXXX
- Hours: Mon - Sat: 7:00 AM - 8:00 PM

## 📝 License

Free to use for personal and commercial projects.

## 🙏 Credits

- **Images**: [Unsplash](https://unsplash.com) - High-quality free images
- **Icons**: [Font Awesome](https://fontawesome.com) - Icon library
- **Design Inspiration**: Modern web design trends 2025

---

Built with ❤️ for professional laundry services | SpeedWash © 2025
