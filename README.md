# Supabase Functions with Vercel Web Analytics

This project combines Vercel Serverless Functions with Vercel Web Analytics for tracking user interactions.

## Features

- 🚀 **Vercel Serverless Functions**: API endpoints deployed on Vercel's edge network
- 📊 **Vercel Web Analytics**: Real-time analytics tracking for page views and user interactions
- 💳 **Stripe Integration**: Webhook handling for payment processing
- ⚡ **Fast & Scalable**: Optimized for performance on Vercel's infrastructure

## Project Structure

```
.
├── api/
│   └── webhook.js          # Stripe webhook handler
├── public/
│   └── index.html          # Landing page with analytics
├── package.json            # Dependencies including @vercel/analytics
└── README.md              # This file
```

## Analytics Integration

This project uses Vercel Web Analytics to track:
- Page views
- User sessions
- Performance metrics
- Custom events (if configured)

The analytics script is integrated in `public/index.html` using the standard HTML5 implementation:

```html
<script>
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A Vercel account
- Vercel CLI (optional, for local development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run locally (with Vercel CLI):
```bash
npm run dev
```

### Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Enable Analytics

1. Navigate to your project in the Vercel dashboard
2. Go to the Analytics tab
3. Click the "Enable" button
4. Deploy your project
5. Analytics data will start appearing after users visit your site

## API Endpoints

- `POST /api/webhook` - Stripe webhook handler for payment events

## Environment Variables

For production use, configure these environment variables in your Vercel dashboard:

- `YOUR_SECRET_KEY` - Stripe secret key
- `YOUR_WEBHOOK_SECRET` - Stripe webhook signing secret

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)

## License

MIT
