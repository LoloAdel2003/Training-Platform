"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-card rounded-2xl border-primary shadow-md max-w-4xl w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-lg text-primary">
           <Image src="/imges/logo 2.png" alt="Logo" width={150} height={70} className="dark:hidden"/>
            <Image
                 src="/imges/logodark.png"
                 alt="logo"
                 width={150}
                 height={70}
                 className="object-contain hidden dark:block"
                 priority
               />

          </div>

          {/* <h1 className="text-3xl font-bold text-gray-900">Oops....</h1> */}
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Page not found</p>
          <p className="text-sm text-muted-foreground max-w-md">
            This page doesn’t exist or was removed! We suggest you go back to
            home.
          </p>

          <Link href="/">
            <Button className="mt-4"> Back to home</Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/imges/error/error.png"
            alt="404 Error"
            width={420}
            height={320}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

