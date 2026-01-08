# Deploying to Vercel - Step by Step Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com - it's free!)
- Your code pushed to a GitHub repository

## Step 1: Push Code to GitHub

\`\`\`bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Erika Echevarri website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/erika-echevarri.git
git branch -M main
git push -u origin main
\`\`\`

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js

## Step 3: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

\`\`\`
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=erika@example.com
\`\`\`

## Step 4: Deploy!

Click "Deploy" and Vercel will:
- Build your Next.js application
- Deploy it to a production URL
- Give you a live link (e.g., `your-project.vercel.app`)

## Step 5: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `erikaechavarri.com`)
4. Follow Vercel's instructions to update DNS settings

## Automatic Deployments

Once connected, every push to your `main` branch will automatically deploy!

## Troubleshooting

**Build Failed?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify TypeScript has no errors: `npm run build`

**Environment Variables Not Working?**
- Make sure they're added in Vercel dashboard
- Redeploy after adding new variables

**Forms Not Working?**
- Verify Resend API key is correct
- Check function logs in Vercel dashboard

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
