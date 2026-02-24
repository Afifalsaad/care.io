import Stripe from "stripe";
import { headers } from "next/headers";
import mysql from "mysql2/promise";
import { dbConnect } from "@/lib/dbConnect";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

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
        (stripe_session_id, stripe_payment_intent_id, customer_email, amount, currency, payment_status)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          session.id,
          session.payment_intent,
          session.customer_details.email,
          session.amount_total,
          session.currency,
          session.payment_status,
        ]
      );
    }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
