import Stripe from "stripe";
import { dbConnect } from "@/lib/dbConnect";
import { headers } from "next/headers";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const header = await headers();
  const sig = header.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // MySQL Connection
    await dbConnect.execute(
      `INSERT INTO payment_history
            (user_id, order_id, transaction_id, amount, currency, payment_status)
            VALUES (?, ?, ?, ?, ?, ?)`,
      [
        session.id,
        session.metadata.serviceID,
        session.payment_intent,
        session.amount_total,
        session.currency,
        session.payment_status,
      ]
    );
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
