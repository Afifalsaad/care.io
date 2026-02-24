import Stripe from "stripe";

const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Please pay for ${body.service} USD`,
          },
          unit_amount: body.totalCost * 100, // cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: body.customerEmail,
    metadata: {
      serviceName: body.service,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/myOrders`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return Response.json({ id: session.id, url: session.url });
}
