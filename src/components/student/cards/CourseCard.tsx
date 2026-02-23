"use client";

import React from "react";
import { Card, CardContent } from "../../ui/card";
import { FaRegClock, FaUser, FaStar, FaCartPlus, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { toast } from "sonner";
import Link from "next/link";

export type Course = {
  id: string;
  title: string;
  description: string;
  coverImg: string;
  category: string;
  type: string;
  level: string;
  time: string;
  name: string;
  star: number;
  newPrice: string;
  oldPrice: string;
};

type CourseCardProps = {
  card: Course;
showAddToCart?: boolean;
};

const CourseCard: React.FC<CourseCardProps> = ({ card, showAddToCart = true }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === card.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      const item: CartItem = {
        id: card.id,
        title: card.title,
        price: parseFloat(card.newPrice.replace("$", "")),
        image: card.coverImg,
        type: "course",
        instructor: card.name,
      };
      dispatch(addToCart(item));
      toast("Added successfully", { description: "Course added to cart" });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-md border border-border/40  transition-all duration-300 max-w-sm w-full cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={card.coverImg}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Save Icon */}
        <button className="absolute top-2 right-2 w-9 h-9 rounded-full border border-border bg-card/70 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110">
          <FaHeart className="text-primary text-sm" />
        </button>

        {/* Title floating */}
       
         <p className="absolute bottom-14 left-4 text-foreground text-md font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm transition duration-300">
          {card.level}
        </p>
         <p className="absolute bottom-14 right-4 text-foreground text-md font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm  transition duration-300">
          {card.type}
        </p>
          <p className="absolute left-1/2  -translate-x-1/2 whitespace-nowrap max-w-[85%] truncate bottom-2 text-foreground text-md font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm  transition duration-300 ">
          {card.title}
        </p>
      </div>

      {/* CONTENT */}
      <CardContent className="p-4 relative bg-card">
        {/* Prices */}
        
        {/* Instructor + Time + Rating */}
       {/* Instructor — Time — Rating */}
<div className="flex items-center justify-between text-[16px] text-muted-foreground mb-3">

  <span className="flex items-center gap-1.5">
    <FaUser className="text-primary text-[13px]" />
    <span className="truncate max-w-[90px]">{card.name}</span>
  </span>

  <span className="flex items-center gap-1.5">
    <FaRegClock className="text-primary text-[13px]" />
    {card.time}
  </span>

  <span className="flex items-center gap-1  ">
    <FaStar className="text-[13px] text-primary" />
    {card.star}
  </span>
</div>

{/* Prices */}
<div className="flex items-end justify-between mb-2">
  <span className="text-sm text-muted-foreground line-through">
    {card.oldPrice}
  </span>

  <span className="text-primary font-bold text-xl tracking-tight">
    {card.newPrice}
  </span>
</div>



        {/* Slide Up Buttons */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 p-4 flex flex-col items-center gap-2 bg-card/95 backdrop-blur-lg border-t border-border">
         {showAddToCart && (
    <button
      onClick={handleAddToCart}
      disabled={isInCart}
      className={`w-full py-2 cursor-pointer  rounded-full bg-primary text-primary-foreground hover:bg-primary/50 hover:brightness-110 transition ${
        isInCart ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <FaCartPlus className="inline mr-2" />
      {isInCart ? "In Cart" : "Add To Cart"}
    </button>
  )}

          <Link
            href={`student/courses/${card.id}`}
            className="w-full text-center py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            More Details
          </Link>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default CourseCard;
