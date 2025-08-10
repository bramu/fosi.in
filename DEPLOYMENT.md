# Deployment Guide

This guide will walk you through deploying your Hume EVI + Supabase authentication project to Vercel.

## Prerequisites

1. **GitHub Account** - to host your code
2. **Vercel Account** - for deployment
3. **Supabase Account** - for authentication and database

## Step 1: Set up Supabase

### 1.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `fosi-evi-app` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"

### 1.2 Configure Authentication

1. In your Supabase dashboard, go to **Authentication** → **Settings**
2. Under **Site URL**, add your Vercel domain (you'll get this after deployment)
3. Under **Redirect URLs**, add:
   ```
   https://your-domain.vercel.app/auth/callback
   http://localhost:3001/auth/callback
   ```
4. Save changes

### 1.3 Get API Keys

1. Go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key
3. Keep these safe - you'll need them for environment variables

### 1.4 Set up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `supabase-schema.sql` from this project
3. Paste and run the SQL commands
4. This will create the necessary tables and security policies

## Step 2: Prepare Your Code

### 2.1 Update Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   HUME_API_KEY=your-hume-api-key
   HUME_SECRET_KEY=your-hume-secret-key
   ```

### 2.2 Test Locally

1. Run `npm run dev`
2. Open `http://localhost:3001`
3. Test authentication flow
4. Ensure everything works before deploying

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub

1. Initialize git if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit with authentication"
   ```

2. Create a new repository on GitHub
3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### 3.2 Deploy with Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### 3.3 Set Environment Variables

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   HUME_API_KEY=your-hume-api-key
   HUME_SECRET_KEY=your-hume-secret-key
   ```
3. Make sure to set them for **Production**, **Preview**, and **Development** environments

### 3.4 Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Your app will be available at `https://your-project.vercel.app`

## Step 4: Post-Deployment

### 4.1 Update Supabase URLs

1. Go back to your Supabase dashboard
2. Update **Site URL** with your Vercel domain
3. Add your production domain to **Redirect URLs**

### 4.2 Test Production

1. Visit your deployed app
2. Test the authentication flow
3. Test the voice interface
4. Ensure all features work correctly

### 4.3 Set up Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Update Supabase redirect URLs with your custom domain

## Troubleshooting

### Common Issues

1. **Authentication not working**
   - Check Supabase redirect URLs include your Vercel domain
   - Verify environment variables are set correctly
   - Check browser console for errors

2. **Build failures**
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors
   - Verify environment variables are set

3. **Database connection issues**
   - Verify Supabase project is active
   - Check API keys are correct
   - Ensure database schema is properly set up

### Getting Help

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to git
2. **API Keys**: Keep your Hume AI keys secure
3. **Database**: Supabase handles most security automatically
4. **HTTPS**: Vercel provides HTTPS by default

## Monitoring

1. **Vercel Analytics**: Monitor performance and errors
2. **Supabase Dashboard**: Monitor database usage and auth
3. **Logs**: Check Vercel function logs for API issues

## Updates and Maintenance

1. **Regular Updates**: Keep dependencies updated
2. **Security Patches**: Monitor for security updates
3. **Backup**: Supabase handles database backups automatically
4. **Monitoring**: Set up alerts for critical issues

---

Your Hume EVI app with Supabase authentication is now deployed and ready to use! 🚀 