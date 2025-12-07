# Personal Portfolio Website

A modern, single-page Angular application showcasing my professional experience, projects, and contact information. Built with Angular 15 and designed for deployment on GitHub Pages.

## Features

- ✨ **Modern Design**: Clean, professional interface with smooth animations and transitions
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent preference storage
- 📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- 🎯 **Smooth Navigation**: Sticky header with smooth scrolling to sections
- 🎨 **Gradient Accents**: Beautiful gradient colors and glassmorphism effects
- ⚡ **Fast Performance**: Optimized production build for quick loading

## Sections

1. **About**: Personal introduction and professional summary
2. **Experience**: Work history with detailed project cards
3. **Projects**: Showcase of personal and open-source projects
4. **Contact**: Links to email, GitHub, and LinkedIn

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15)

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm start

# Or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Building for Production

```bash
# Standard production build
npm run build

# Build for GitHub Pages (with correct base href)
npm run build:gh-pages
```

The build artifacts will be stored in the `dist/` directory.

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build:gh-pages
   ```

2. Create a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   ```

3. Copy the contents of the `dist/` folder to the root of the `gh-pages` branch

4. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. Go to your repository settings on GitHub and enable GitHub Pages from the `gh-pages` branch

### Option 2: Using angular-cli-ghpages

1. Install the deployment tool:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   ng build --configuration production --base-href /your-repo-name/
   npx angular-cli-ghpages --dir=dist
   ```

### Option 3: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build:gh-pages
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Customization

### Update Personal Information

1. **Name and Introduction**: Edit `src/app/app.component.html` in the About section
2. **Experience**: Update the Experience section with your work history
3. **Projects**: Modify the Projects section with your own projects
4. **Contact Links**: Update email, GitHub, and LinkedIn URLs in the Contact section

### Change Colors

Edit the CSS custom properties in `src/styles.css`:

```css
:root {
  --accent-primary: #6366f1;  /* Primary accent color */
  --accent-secondary: #8b5cf6; /* Secondary accent color */
  /* ... other colors */
}
```

### Modify Base Href

If your repository name is different from `plasma-andromeda`, update the `build:gh-pages` script in `package.json`:

```json
"build:gh-pages": "ng build --configuration production --base-href /your-repo-name/"
```

## Technologies Used

- **Angular 15**: Frontend framework
- **TypeScript**: Programming language
- **CSS3**: Styling with custom properties and modern features
- **Google Fonts**: Inter font family
- **GitHub Pages**: Hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
