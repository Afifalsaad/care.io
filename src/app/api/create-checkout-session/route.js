import Stripe from "stripe";

const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "BDT",
          product_data: {
            name: `Please pay for ${body.service}`,
          },
          unit_amount: body.totalCost * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: body.customerEmail,
    metadata: {
      serviceID: body.id,
      serviceName: body.service,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/myOrders`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/myOrders`,
  });

  return Response.json({ id: session.id, url: session.url });
}
