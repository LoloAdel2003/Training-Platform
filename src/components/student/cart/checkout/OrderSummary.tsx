"use client";

import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/hooks/hooks";
// import CheckoutItem from "./checkoutItem";
import CheckoutItem from "./CheckoutItem";

const OrderSummary = () => {
 const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const discount = 0; // جاهزة لأي كوبون
  const finalTotal = totalPrice - discount;

  return (
    <div className="md:w-1/3 p-6 border-l border-border">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      {/* Courses */}
      <div className="space-y-3">
        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item: CartItem) => (
            <CheckoutItem key={item.id} item={item} />
          ))
        )}
      </div>

      {/* Totals */}
      <div className="mt-6 border-border border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)} USD</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Coupon Discount</span>
            <span>- ${discount.toFixed(2)} USD</span>
          </div>
        )}

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)} USD</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
