export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Dynamically import Stripe to ensure fresh instance per request
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia',
    });

    const origin = req.headers.origin || req.headers.referer || 'https://openclaw-faststart.vercel.app';
    const baseUrl = origin.replace(/\/$/, ''); // Remove trailing slash
    
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'OpenClaw Fast Start',
              description: 'Complete setup guide + templates + 5 use cases',
            },
            unit_amount: 1700, // $17.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ 
      error: 'Payment processing error',
      details: error.message,
      type: error.type,
      hasKey: !!process.env.STRIPE_SECRET_KEY
    });
  }
}
