"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { Clock, Users, Star, ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface CourseMetaInfoProps {
  icon: LucideIcon;
  label: string | number;
}

const CourseMetaInfo = ({ icon: Icon, label }: CourseMetaInfoProps) => (
  <div className="flex items-center gap-1.5 text-white/90 text-sm">
    <Icon className="w-4 h-4 text-orange-400" />
    <span>{label}</span>
  </div>
);

/* =====================================
   DATA
===================================== */

const heroData = {
  id: "react-course-01",
  type: "Recorded Course",
  title:
    "From beginner to advanced – learn React by building real-world projects.",
  description:
    "This course takes you from the basics of React to advanced concepts like hooks, context, and performance optimization. You'll learn by building interactive projects step by step.",
  image: "/imges/course.png",
  author: "Adel Alabed",
  price: {
    current: "Free",
    old: "$200",
  },
  rating: {
    value: 4.8,
    count: "451,444 Ratings",
  },
  meta: [
    { icon: Clock, label: "50 hours" },
    { icon: Users, label: "2,252 Students" },
  ],
};

/* =====================================
   COMPONENT
===================================== */

export const CourseHeroCard = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === heroData.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      const item: CartItem = {
        id: heroData.id,
        title: heroData.title,
        price: parseFloat(heroData.price.current.replace("$", "")) || 0,
        image: heroData.image,
        type: "course",
        instructor: heroData.author,
      };
      dispatch(addToCart(item));
      toast("Added successfully", { description: "Course added to cart" });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl radial-primary-bg text-primary-foreground shadow-2xl flex flex-col md:flex-row min-h-[340px]">

      {/* LEFT CONTENT */}
      <div className="flex-[1.5] px-10 py-6 flex flex-col justify-center text-white space-y-3 relative z-10">

        {/* Badge */}
        <div className="flex items-center gap-3">
          <span className="bg-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-widest">
            {heroData.type}
          </span>

          {heroData.price.current === "Free" && (
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
              100% Free
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-2xl">
          {heroData.title}
        </h2>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed">
          {heroData.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 pt-2 items-center border-t border-white/10 pt-4">

          {heroData.meta.map((item, index) => (
            <CourseMetaInfo
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span className="text-sm font-bold">
              {heroData.rating.value}
            </span>
            <span className="text-xs text-white/60">
              ({heroData.rating.count})
            </span>
          </div>

          <span className="text-sm font-semibold border-l pl-4 border-white/20">
            {heroData.author}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 pt-6 flex-wrap">

          <Button
            className=" font-bold px-8 py-3 shadow-lg hover:scale-105 transition"
            onClick={handleAddToCart}
            disabled={isInCart}
             variant={isInCart ? "outline" : "default"}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </Button>

          {/* <Button
            variant="outline"
            className="border-white/40 text-white gap-2 px-6 py-3"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Button> */}

          <div className="flex items-baseline gap-2 ml-4">

            {heroData.price.current === "Free" ? (
              <span className="text-3xl font-bold text-green-400">
                Free
              </span>
            ) : (
              <>
                <span className="text-3xl font-bold">
                  {heroData.price.current}
                </span>
                <span className="text-sm text-white/50 line-through">
                  {heroData.price.old}
                </span>
              </>
            )}

          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 relative min-h-[240px] md:min-h-full">
        <Image
          src={heroData.image}
          alt="Course Preview"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(32,45,111,1)] to-transparent hidden md:block" />
      </div>
    </div>
  );
};