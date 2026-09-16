# UPA Kids Market

Family marketplace by UPA Entertainment.

## Current launch model
- Products + services
- One-time seller registration: USD 5
- UPA marketplace commission: 0%
- Stripe hosted checkout

## Stripe seller registration
Payment Link: https://buy.stripe.com/aFadRa1iPcTI9lk8Uv14400

## Local development
```bash
npm install
npm run dev
```

## Deployment
Designed for Vercel with the Next.js App Router.

After production deployment, configure the Stripe Payment Link's post-payment redirect to:
`https://YOUR-DOMAIN/success`
