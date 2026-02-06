# Deployment Guide

This portfolio website can be deployed to various platforms. Below are the instructions for the most popular deployment options.

## Prerequisites

Before deploying, make sure you have:
- Node.js (v16 or higher) installed
- npm or yarn package manager
- All dependencies installed: `npm install`

## Option 1: GitHub Pages (Recommended)

GitHub Pages is a free hosting service directly from GitHub, perfect for static websites.

### Setup Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your application (`npm run build`)
   - Deploy the `build` folder to the `gh-pages` branch
   - Make your site available at: `https://thathsara1999.github.io/Nawanka-portforlio`

3. **Enable GitHub Pages** (one-time setup)
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select the `gh-pages` branch
   - Click Save
   - Your site will be live in a few minutes!

### Updating Your Site
Simply run `npm run deploy` again whenever you want to publish changes.

## Option 2: Vercel

Vercel offers fast, global deployments with automatic CI/CD.

### Deployment Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Website**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect Create React App settings
   - Click "Deploy"

3. **Or Deploy via CLI**
   ```bash
   vercel
   ```

### Configuration
Vercel will automatically:
- Detect it's a React app
- Run `npm run build`
- Deploy the `build` folder
- Provide you with a custom URL

## Option 3: Netlify

Netlify offers easy drag-and-drop deployment and continuous deployment from Git.

### Method 1: Drag and Drop

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://www.netlify.com)
   - Drag and drop your `build` folder onto the Netlify dashboard
   - Your site is live!

### Method 2: Continuous Deployment

1. **Connect to Git**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

2. **Automatic Updates**
   - Every push to your main branch will trigger a new deployment

## Option 4: AWS Amplify

AWS Amplify provides hosting with AWS infrastructure.

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `build`
5. Click "Save and deploy"

## Option 5: Manual Deployment to Any Static Host

You can deploy to any static hosting service (Firebase Hosting, Surge, Render, etc.)

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder**
   - The `build` folder contains all the static files
   - Upload this folder to your hosting provider
   - Configure your server to serve `index.html` for all routes (for React Router support)

## Build Configuration

### Environment Variables

If you need environment variables:

1. Create a `.env` file in the root directory
2. Add variables prefixed with `REACT_APP_`:
   ```
   REACT_APP_API_URL=https://api.example.com
   REACT_APP_ANALYTICS_ID=your-id-here
   ```

3. Access in your code:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

### Custom Domain

After deployment, you can add a custom domain:

**GitHub Pages:**
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS with your domain provider

**Vercel/Netlify:**
1. Go to your project settings
2. Add custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### 404 Errors on Refresh (React Router)
If you get 404 errors when refreshing pages, your server needs to redirect all routes to `index.html`:

- **GitHub Pages**: Add a 404.html that redirects to index.html
- **Netlify**: Add a `_redirects` file or netlify.toml
- **Vercel**: Add a vercel.json configuration

### Blank Page After Deployment
- Check browser console for errors
- Verify the `homepage` field in package.json is correct
- Ensure all assets are loading correctly

## Deployment Checklist

Before deploying, ensure:
- [ ] All dependencies are installed
- [ ] Code builds successfully (`npm run build`)
- [ ] All tests pass (`npm test`)
- [ ] No console errors in development mode
- [ ] Environment variables are configured (if needed)
- [ ] Custom domain is configured (if needed)
- [ ] Analytics/monitoring is set up (optional)

## Quick Deploy Commands

```bash
# GitHub Pages
npm run deploy

# Vercel
vercel --prod

# Netlify (requires netlify-cli)
netlify deploy --prod

# Build only (for manual upload)
npm run build
```

## Support

For more detailed information:
- [Create React App Deployment Docs](https://create-react-app.dev/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Note**: The easiest way to get started is with GitHub Pages using `npm run deploy`!
