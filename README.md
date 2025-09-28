# Khant Zwe Naing - Portfolio Website

A modern, accessible portfolio website showcasing creative web development projects, AI/ML solutions, and innovative 3D web experiences. Built with vanilla HTML, CSS, and JavaScript following WCAG 2.2 AA guidelines and modern web development best practices.

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
- Success modal with JavaScript animations
- Form submission with loading states

### ⚡ Performance Optimized

- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with minimal overhead
- Lazy loading for images
- Smooth scrolling and transitions

## Featured Projects

### 🚀 Astrafinix Startup Website

- **Tech Stack**: React, Three.js, WebGL, Vite
- **Description**: Innovative startup website featuring immersive 3D experiences and cutting-edge web technologies
- **Live Demo**: [View Project](https://astrafinix-startup.vercel.app/)

### 🏥 Medical X-Ray Image Classification

- **Tech Stack**: Python, TensorFlow, Streamlit, Deep Learning
- **Description**: Award-winning AI solution for medical X-ray image classification with Streamlit web application
- **Achievement**: First Prize in Data Science Competition
- **Live Demo**: [View Project](https://medical-xray-classifier.streamlit.app)

### 🌌 Galaxy Links Tree Website

- **Tech Stack**: Three.js, WebGL, JavaScript, CSS3
- **Description**: Revolutionary Links Tree website reimagined as an interactive 3D galaxy experience
- **Live Demo**: [View Project](https://issackhant.vercel.app/)

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore file
├── README.md          # Project documentation
├── DEPLOYMENT.md       # Deployment guide
├── PROJECT_WRITEUP.md  # 250-word project write-up
├── FINAL_REVIEW.md     # Final review document
└── 01-style.md to 08-acceptance-checks.md  # BCS guidelines
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Customize the content in `index.html` with your information

## Customization

### Personal Information

The portfolio is already customized with:

- **Name**: Khant Zwe Naing
- **Title**: Frontend Developer & UI/UX Designer, Creative Developer
- **Location**: Hatfield, United Kingdom
- **Email**: issaciscoding@gmail.com
- **Phone**: 07304152699
- **Projects**: Three featured projects with live demos

### Styling

Modify CSS custom properties in `styles.css`:

- Colors: Update `--color-primary` and other color variables
- Typography: Adjust font sizes and weights
- Spacing: Modify spacing variables for different layouts

### Form Integration

The contact form currently shows a success modal after 2 seconds. To integrate with a real backend:

1. Replace the setTimeout in `script.js` with an actual API call
2. Add proper error handling for failed submissions
3. Consider adding CSRF protection and rate limiting
4. The success modal provides better UX than inline messages

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

## Skills & Technologies

### Frontend Development

- HTML5, CSS3, JavaScript (ES6+)
- React, Three.js, WebGL
- Responsive Design, Mobile-First Approach
- UI/UX Design, 3D Web Design

### AI/ML & Data Science

- Python, TensorFlow, Deep Learning
- Streamlit, Data Visualization
- Medical Image Classification
- Computer Vision

### Tools & Practices

- Git, GitHub, Version Control
- WCAG 2.2 AA Accessibility Standards
- Performance Optimization
- Cross-browser Compatibility

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

## Contact

- **Email**: issaciscoding@gmail.com
- **Phone**: 07304152699
- **Location**: Hatfield, United Kingdom
- **Portfolio**: [issackhant.vercel.app](https://issackhant.vercel.app/)

## Support

For questions or issues, please refer to the [BCS Code of Conduct](https://bcs.org/code-of-conduct).
