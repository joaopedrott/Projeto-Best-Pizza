"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { useCart } from "@/context/cart-context";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const appearance = {
  rules: {
    ".Input": {
      borderRadius: "0.375rem",
      paddinTop: "0.5rem",
      paddinBottom: "0.5rem",
      paddinLeft: "0.75rem",
      paddinRight: "0.75rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      borderColor: "#e2e8f0",
    },
    ".Label": {
      fontWeight: "500",
      color: "#050a17",
      marginButtom: "0.375rem",
    },
    ".Input:focus": {
      boxShadow: "0 0 0 2px #fff, 0 0 0 4px #050a17",
      borderColor: "#e2e8f0",
    },
  },
};

export default function Checkout() {
  const { total } = useCart();

  return (
    <Elements
      stripe={stripe}
      options={{
        appearance,
        loader: "auto",
        locale: "pt-BR",
        mode: "payment",
        currency: "brl",
        amount: total,
      }}
    >
      <CheckoutForm />
    </Elements>
  );
}
