"use client";

import React from "react";
import { useAppDispatch } from "@/store/hooks/hooks";
import { removeFromCart, CartItem } from "@/store/slices/cartSlice";
import { FaTrash } from "react-icons/fa";

type CartItemCardProps = {
  item: CartItem;
};

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b border-border py-3">
      {/* الصورة */}
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex flex-col">
                    <span className="font-medium text-gray-400 dark:text-gray-200">{item.title}</span>

          <span className="text-sm text-gray-600 dark:text-gray-400">Instructor: {item.instructor}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400  capitalize">Type: {item.type}</span>
          <span className="text-red-500 dark:text-red-400  font-semibold">${item.price}</span>
        </div>
      </div>

      {/* زر الحذف */}
      <button
        onClick={handleRemove}
        className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 cursor-pointer transition-colors"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default React.memo(CartItemCard);
