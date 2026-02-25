import React from "react";

const PayButton = ({ data }) => {
  // console.log(data);
  const handlePayment = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(data);

    window.location.assign(result.url);
  };
  return (
    <div>
      <div onClick={handlePayment}>Pay</div>
    </div>
  );
};

export default PayButton;
