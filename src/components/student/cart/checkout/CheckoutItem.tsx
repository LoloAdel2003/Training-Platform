// components/checkout/CartCourseItem.jsx
import { CartItem } from "@/store/slices/cartSlice";
import React from "react";
type CartItemCardProps = {
  item: CartItem;
};
const CheckoutItem = ({ item }: CartItemCardProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 rounded object-cover"
      />

      <div className="flex-1">
        <h3 className="text-sm font-medium">{item.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gary-400">by {item.instructor}</p>
        <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
