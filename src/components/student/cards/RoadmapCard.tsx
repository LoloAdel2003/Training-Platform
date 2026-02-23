"use client";

import React from "react";
import { CardContent } from "../../ui/card";
import {
  FaRegClock,
  FaUser,
  FaStar,
  FaCartPlus,
  FaHeart,
  FaLayerGroup,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { toast } from "sonner";
import Link from "next/link";

export type RoadmapCardType = {
  id: string;
  image: string;
  title: string;
  description: string;
  InstuctorName: string;
  level: string;
  type: string;
  price: string;
  time: string;
  star: number;
  coursesCount?: number; // ✅ added
};

type RoadmapCardProps = {
  card: RoadmapCardType;
  showAddToCart?: boolean;
};

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  card,
  showAddToCart = true,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === card.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      const item: CartItem = {
        id: card.id,
        title: card.title,
        price: parseFloat(card.price.replace("$", "")),
        image: card.image,
        type: "roadmap",
        instructor: card.InstuctorName,
      };
      dispatch(addToCart(item));
      toast("Added successfully", {
        description: "Roadmap added to cart",
      });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md border border-border/40 transition-all duration-300 max-w-sm w-full cursor-pointer hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* ❤️ Save Icon */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full border border-border bg-card/70 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110">
          <FaHeart className="text-primary text-sm" />
        </button>

        {/* 🏆 Roadmap Badge */}
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Full Roadmap
        </span>

        {/* Level + Type */}
        <p className="absolute bottom-14 left-2 text-foreground text-sm font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm">
          {card.level}
        </p>

        <p className="absolute bottom-14 right-2 text-foreground text-sm font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm">
          {card.type}
        </p>

        {/* Title */}
        <p className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap max-w-[85%] truncate bottom-2 text-foreground text-sm font-semibold bg-card/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-border shadow-sm">
          {card.title}
        </p>
      </div>

      {/* CONTENT */}
      <CardContent className="p-4 relative bg-card">

        {/* 👇 Courses Count Section */}
        {card.coursesCount && (
          <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground bg-muted/40 px-3 py-2 rounded-lg border border-border">
            <span className="flex items-center gap-2">
              <FaLayerGroup className="text-primary" />
              {card.coursesCount} Courses Included
            </span>
          </div>
        )}

        {/* Instructor + Time + Rating */}
        <div className="flex justify-between text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <FaUser className="text-primary" /> {card.InstuctorName}
          </span>

          {/* <span className="flex items-center gap-1">
            <FaRegClock className="text-primary" /> {card.time}
          </span> */}

          <span className="flex items-center gap-1 text-yellow-400">
            <FaStar /> {card.star}
          </span>
            <span className="text-primary font-bold text-lg">{card.price}</span>
        </div>

        {/* Price */}
        {/* <div className="flex justify-between items-center mb-2 text-primary font-bold text-lg">
          <span className="opacity-70 line-through">{card.price}</span>
          <span>{card.price}</span>
        </div> */}

        {/* Slide Up Buttons */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 p-4 flex flex-col items-center gap-2 bg-card/95 backdrop-blur-lg border-t border-border">
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`w-full py-2 cursor-pointer rounded-full bg-primary text-primary-foreground hover:brightness-110 transition ${
                isInCart ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              <FaCartPlus className="inline mr-2" />
              {isInCart ? "In Cart" : "Add To Cart"}
            </button>
          )}

          <Link
            href={`/roadmaps/${card.id}`}
            className="w-full text-center py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            More Details
          </Link>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default RoadmapCard;