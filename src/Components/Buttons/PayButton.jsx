import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const PayButton = ({ data }) => {
  const handlePayment = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("from PayButton", result);

    // const stripe = await loadStripe(
    //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    // );
    window.location.assign(result.url);
  };
  return (
    <div>
      <div onClick={handlePayment}>Pay</div>
    </div>
  );
};

export default PayButton;
