<div align="center">
  <img src="https://storage.googleapis.com/hume-public-logos/hume/hume-banner.png">
  <h1>EVI Next.js App Router Example with Authentication</h1>
</div>

![preview.png](preview.png)

## Overview

This project features a sample implementation of Hume's [Empathic Voice Interface](https://hume.docs.buildwithfern.com/docs/empathic-voice-interface-evi/overview) using Hume's React SDK with **Supabase authentication**. Here, we have a simple EVI that uses the Next.js App Router and includes user authentication.

## Features

- 🔐 **User Authentication** with Supabase
- 🎤 **Voice Interface** powered by Hume AI
- 😊 **Emotional Intelligence** analysis
- 🌙 **Dark/Light Theme** support
- 📱 **Responsive Design** for all devices
- 🚀 **Vercel Ready** deployment

## Quick Start

### Prerequisites

1. **Supabase Account** - [Sign up here](https://supabase.com)
2. **Hume AI Account** - [Get access here](https://hume.ai)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fosi.in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   HUME_API_KEY=your_hume_api_key
   HUME_SECRET_KEY=your_hume_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3001`

## Supabase Setup

1. **Create a new project** at [supabase.com](https://supabase.com)
2. **Enable Authentication** in your project settings
3. **Copy your project URL and anon key** from the API settings
4. **Add them to your `.env.local` file**

## Hume AI Setup

1. **Get your API credentials** from [Hume AI Portal](https://beta.hume.ai/settings/keys)
2. **Add them to your `.env.local` file**

## Project deployment

Click the button below to deploy this example project with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,HUME_API_KEY,HUME_SECRET_KEY)

### Vercel Deployment Steps

1. **Fork/Clone** this repository
2. **Connect to Vercel** and import your repository
3. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `HUME_API_KEY`
   - `HUME_SECRET_KEY`
4. **Deploy** your application

## Project Structure

```
fosi.in/
├── app/                    # Next.js App Router
├── components/            # React components
│   ├── AuthForm.tsx      # Authentication UI
│   ├── AuthProvider.tsx  # Auth context
│   ├── ProtectedRoute.tsx # Route protection
│   └── ...               # Other components
├── utils/                 # Utility functions
│   ├── supabase.ts       # Supabase client
│   └── ...               # Other utilities
├── middleware.ts          # Auth middleware
└── vercel.json           # Vercel configuration
```

## Support

If you have questions, require assistance, or wish to engage in discussions pertaining to this starter template, [please reach out to us on Discord](https://link.hume.ai/discord).
