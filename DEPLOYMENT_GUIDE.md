# GitHub Pages Deployment Guide with Custom Domain

## Prerequisites
- GitHub repository: https://github.com/BarterNW/Frontend.git
- gh-pages package installed ✓
- Static export configured ✓
- Custom domain (replace `yourdomain.com` in `public/CNAME`)

## Step 1: Update CNAME File
Replace `yourdomain.com` in `public/CNAME` with your actual domain:
```
barterno.com
```
Or use a subdomain:
```
www.barterno.com
```

## Step 2: Build and Deploy
Run the deployment command:
```bash
npm run deploy
```

This command will:
1. Build your Next.js app (`next build`)
2. Deploy the `out` folder to the `gh-pages` branch

## Step 3: Configure GitHub Repository
1. Go to https://github.com/BarterNW/Frontend/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root` (or `/(root)`)
3. Click "Save"

## Step 4: Configure Custom Domain on GitHub
1. In the same GitHub Pages settings
2. Under "Custom domain":
   - Enter your domain: `barterno.com` (or your actual domain)
   - Click "Save"
3. Wait for DNS check to complete (this may take a few minutes)
4. Once verified, check "Enforce HTTPS"

## Step 5: Configure DNS Settings
Go to your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare) and add these DNS records:

### Option A: Apex Domain (barterno.com)
Add these A records:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option B: Subdomain (www.barterno.com)
Add a CNAME record:
```
Type: CNAME
Name: www
Value: barternw.github.io
```

### Option C: Both Apex and WWW
Add both sets of records above, plus:
```
Type: CNAME
Name: www
Value: barterno.com
```

## Step 6: Verify Deployment
1. Wait 5-10 minutes for DNS propagation
2. Visit your custom domain
3. Verify HTTPS is working
4. Check that all pages load correctly

## Troubleshooting

### Build Fails
- Run `npm run build` locally first to check for errors
- Fix any TypeScript or linting errors
- Ensure all dependencies are installed

### 404 on Page Refresh
- Next.js static export should handle this automatically
- GitHub Pages serves `404.html` for unknown routes
- Next.js creates this file during build

### DNS Not Working
- DNS changes can take 24-48 hours to propagate fully
- Use https://dnschecker.org to verify DNS records
- Clear your browser cache
- Try accessing from an incognito window

### Images Not Loading
- Ensure `images: { unoptimized: true }` is in `next.config.ts` ✓
- Check that image paths are correct (relative to public folder)
- Verify images are in the `out` folder after build

### CSS Not Loading
- Check browser console for 404 errors
- Verify `basePath` is not set in `next.config.ts` (should be removed for custom domains)
- Clear browser cache and hard refresh (Ctrl+F5)

## Continuous Deployment
To update your site:
1. Make changes to your code
2. Commit and push to GitHub
3. Run `npm run deploy`

## Alternative: GitHub Actions (Recommended for Teams)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

This will automatically deploy when you push to main branch.

## Current Configuration Status
- ✓ Next.js 15.5.6 with static export
- ✓ Images unoptimized for static hosting
- ✓ gh-pages package installed
- ✓ Deploy script configured
- ⚠ CNAME file created (update with your actual domain)
- ⚠ DNS records not configured (requires your domain registrar access)

## Next Steps
1. Update `public/CNAME` with your actual domain
2. Run `npm run deploy`
3. Configure GitHub Pages settings
4. Configure DNS at your domain registrar
5. Wait for DNS propagation
6. Verify deployment

## Support
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- DNS Checker: https://dnschecker.org
