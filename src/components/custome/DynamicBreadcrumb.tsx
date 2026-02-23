"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
  
} from "../ui/breadcrumb";
import React from "react";
export function DynamicBreadcrumb() {
  const pathname = usePathname(); // مثال: "/docs/components/button"
  const segments = pathname.split("/").filter(Boolean); // ["docs", "components", "button"]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* دائماً الصفحة الرئيسية */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/"); // بناء الرابط الجزئي
          const isLast = index === segments.length - 1; // آخر عنصر

          return (
            <React.Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{segment.replace(/-/g, " ")}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={path}>{segment.replace(/-/g, " ")}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
