"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/* -------- Types -------- */
export type TabItem = {
  label: string;
  href: string;
  count?: number;
};

type TabsProps = {
  items: TabItem[];
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ items, className }) => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "flex items-center bg-gray-100 p-2 rounded-full w-fit",
        className
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium",
              isActive
                ? "bg-white text-black shadow-md"
                : "text-gray-600 hover:text-black"
            )}
          >
            {item.label}
            {item.count !== undefined && (
              <span className="ml-2 opacity-70">({item.count})</span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
