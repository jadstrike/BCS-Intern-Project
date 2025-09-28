# Portfolio Website

A modern, accessible portfolio website built with vanilla HTML, CSS, and JavaScript following WCAG 2.2 AA guidelines and modern web development best practices.

## Features

### 🎨 Modern UI/UX

- Clean, professional design with smooth animations
- Responsive layout that works on all devices
- Dark/light mode toggle with system preference detection
- Modern color scheme with CSS custom properties

### ♿ Accessibility First

- WCAG 2.2 AA compliant
- Full keyboard navigation support
- Screen reader friendly with proper ARIA labels
- Skip link for quick navigation
- High contrast mode support
- Reduced motion preferences respected

### 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 640px and 1024px
- Touch-friendly interface (44px minimum touch targets)
- Optimized for all screen sizes

### 📝 Contact Form

- Real-time validation for all fields
- Required fields: First Name, Last Name, Email, Message
- Optional field: Phone Number
- Accessible error messages with aria-live regions
- Form submission with loading states

### ⚡ Performance Optimized

- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with minimal overhead
- Lazy loading for images
- Smooth scrolling and transitions

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Customize the content in `index.html` with your information

## Customization

### Personal Information

Update the following in `index.html`:

- Replace "Your Name" with your actual name
- Update the hero subtitle and description
- Add your actual email and phone number
- Replace placeholder project information

### Styling

Modify CSS custom properties in `styles.css`:

- Colors: Update `--color-primary` and other color variables
- Typography: Adjust font sizes and weights
- Spacing: Modify spacing variables for different layouts

### Form Integration

The contact form currently shows a success message after 2 seconds. To integrate with a real backend:

1. Replace the setTimeout in `script.js` with an actual API call
2. Add proper error handling for failed submissions
3. Consider adding CSRF protection and rate limiting

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility Testing

Before deploying, ensure:

- [ ] Keyboard navigation works end-to-end
- [ ] Skip link focuses #main
- [ ] Focus ring visible on all controls
- [ ] Contrast passes required ratios (4.5:1 for normal text, 3:1 for large text)
- [ ] Form uses aria-live and per-field messages
- [ ] Lighthouse a11y score ≥ 95
- [ ] Screen reader testing completed

## Performance Testing

- [ ] Lighthouse Performance score ≥ 90 on mobile
- [ ] All images have width/height attributes
- [ ] No blocking resources above the fold
- [ ] CSS and JS are optimized

## Deployment

This is a static website that can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

## Development Guidelines

This project follows the BCS Code of Conduct and development standards:

- Semantic HTML5 structure
- Mobile-first responsive design
- Accessibility-first approach
- Performance optimization
- Security best practices
- Clean, maintainable code

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the [BCS Code of Conduct](https://bcs.org/code-of-conduct).
