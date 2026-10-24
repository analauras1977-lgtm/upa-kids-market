# UPA Kids Market

Family marketplace by UPA Entertainment.

## Current seller model
- Products + services
- Seller listing: USD 5 for one listing for 12 months
- UPA marketplace commission: 15% on applicable sales or reservations
- Featured Category: USD 15 for 30 days
- Featured Home: USD 35 for 30 days
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
