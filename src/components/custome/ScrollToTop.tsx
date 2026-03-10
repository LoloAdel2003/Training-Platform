"use client";

import { ArrowUp, ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed   bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg cursor-pointer hover:bg-primary/80 transition"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTop;