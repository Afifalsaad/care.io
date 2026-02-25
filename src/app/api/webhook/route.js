import Stripe from "stripe";
import { dbConnect } from "@/lib/dbConnect";
import { headers } from "next/headers";

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
    console.log("from webhook session", session);

    // MySQL Connection
    await dbConnect.execute(
      `INSERT INTO payment_history
            (user_email, user_name, order_id, service_name, transaction_id, amount, currency, payment_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        session.metadata.userEmail,
        session.metadata.userName,
        session.metadata.serviceID,
        session.metadata.serviceName,
        session.payment_intent,
        session.amount_total,
        session.currency,
        session.payment_status,
      ]
    );

    try {
      await dbConnect.execute("update bookings set status = ? where id = ?", [
        session.payment_status,
        session.metadata.serviceID,
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
