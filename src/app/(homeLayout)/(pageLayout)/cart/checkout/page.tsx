"use client";
// app/checkout/page.jsx  OR  pages/checkout.jsx

import React from "react";

// import PaymentForm from "@/components/cart/checkout/PaymentForm";
import OrderSummary from "@/components/student/cart/checkout/OrderSummary";
import PaymentForm from "@/components/student/cart/checkout/PaymentForm";
const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-card shadow-lg rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        <PaymentForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
