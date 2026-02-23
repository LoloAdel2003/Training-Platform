"use client";
import React from "react";
import { usePathname } from "next/navigation";

const PageTitle = ({ title }: { title?: string }) => {
  const pathname = usePathname();

  // إذا ما تم تمرير title، نأخذ آخر جزء من الـ URL
  const dynamicTitle =
    title ||
    pathname
      ?.split("/") // نفصل الـ URL إلى أجزاء
      .filter(Boolean) // نتخلص من الفراغات
      .pop() // نأخذ آخر جزء
      ?.replace(/-/g, " ") // استبدال - بمسافة
      .replace(/\b\w/g, (c) => c.toUpperCase()); // نجعل أول حرف كبير
  

  return (
    <div className="relative inline-block">
      <h1 className="text-primary text-xl font-bold pb-2">
        {dynamicTitle}
      </h1>
      {/* الخط السفلي المخصص */}
      <div className="absolute bottom-0 left-0 w-10 h-1 bg-primary"></div>
    </div>
  );
};

export default PageTitle;
