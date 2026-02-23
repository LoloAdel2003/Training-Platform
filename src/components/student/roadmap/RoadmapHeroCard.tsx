"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Layers,
  Award,
  LucideIcon,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

/* =====================================
   1️⃣ META COMPONENT
===================================== */

interface MetaInfoProps {
  icon: LucideIcon;
  label: string | number;
}

const MetaInfo = ({ icon: Icon, label }: MetaInfoProps) => (
  <div className="flex items-center gap-1.5 text-white/90 text-sm">
    <Icon className="w-4 h-4 text-yellow-400" />
    <span>{label}</span>
  </div>
);

/* =====================================
   2️⃣ ROADMAP DATA
===================================== */

const roadmapData = {
  id: "frontend-roadmap-01",
  type: "Complete Learning Path",
  title:
    "Frontend Developer Roadmap – From Zero to Job-Ready Professional.",
  description:
    "A complete structured roadmap including multiple courses, hands-on projects, and career guidance. Master HTML, CSS, JavaScript, React, and advanced frontend architecture step by step.",
  image: "/imges/course.png",
  author: "Adel Alabed",
  level: "Beginner → Advanced",
  price: {
    current: "$149",
    old: "$499",
  },
  rating: {
    value: 4.9,
    count: "8,254 Students",
  },
  stats: {
    courses: 12,
    projects: 8,
    totalHours: "120+ hours",
  },
  meta: [
    { icon: Clock, label: "120+ hours" },
    { icon: Users, label: "8,254 Students" },
  ],
};

/* =====================================
   3️⃣ COMPONENT
===================================== */

export const RoadmapHeroCard = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === roadmapData.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      const item: CartItem = {
        id: roadmapData.id,
        title: roadmapData.title,
        price: parseFloat(roadmapData.price.current.replace("$", "")),
        image: roadmapData.image,
        type: "roadmap",
        instructor: roadmapData.author,
      };
      dispatch(addToCart(item));
      toast("Added successfully", {
        description: "Roadmap added to cart",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl radial-primary-bg text-primary-foreground shadow-large flex flex-col md:flex-row min-h-[340px]">

      {/* LEFT CONTENT */}
      <div className="flex-[1.6] px-10 py-6 flex flex-col justify-center text-white space-y-3 relative z-10">

        {/* Top Badges */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="bg-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-widest">
            {roadmapData.type}
          </span>

          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Award className="w-3 h-3" />
            Best Value
          </span>
        </div>

        <h2 className="text-xl md:text-3xl font-bold leading-tight max-w-2xl">
          {roadmapData.title}
        </h2>

        <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed">
          {roadmapData.description}
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-6 pt-2">

          <MetaInfo icon={BookOpen} label={`${roadmapData.stats.courses} Courses`} />
          <MetaInfo icon={Layers} label={`${roadmapData.stats.projects} Projects`} />
          <MetaInfo icon={Clock} label={roadmapData.stats.totalHours} />

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold">
              {roadmapData.rating.value}
            </span>
            <span className="text-xs text-white/60">
              ({roadmapData.rating.count})
            </span>
          </div>

          <span className="text-sm font-bold border-l pl-4 border-white/20">
            {roadmapData.author}
          </span>
        </div>

        {/* Level */}
        <div className="pt-1">
          <span className="text-xs bg-white/10 px-3 py-1 rounded-md">
            Level: {roadmapData.level}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 flex-wrap">

          <Button
            className=" font-bold px-8 shadow-md"
            onClick={handleAddToCart}
            disabled={isInCart}
            variant={isInCart ? "outline" : "default"}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </Button>

          {/* <Button
            variant="outline"
            className="border-white/40 text-white gap-2"
          >
            View Full Roadmap <ArrowRight className="w-4 h-4" />
          </Button> */}

          <div className="flex items-baseline gap-2 ml-4">
            <span className="text-3xl font-bold">
              {roadmapData.price.current}
            </span>
            <span className="text-sm text-white/50 line-through">
              {roadmapData.price.old}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 relative min-h-[220px] md:min-h-full">
        <Image
          src={roadmapData.image}
          alt="Roadmap Preview"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(32,45,111,1)] to-transparent hidden md:block" />
      </div>
    </div>
  );
};