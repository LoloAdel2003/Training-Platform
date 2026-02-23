"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

const sections = [
//   { title: "Home", href: "#hero" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Features", href: "#features" },
//   { title: "Courses", href: "#courses" },
  { title: "Why Choose Us", href: "#why-choose-us" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full fixed top-0 left-0 shadow-medium px-4 md:px-10 lg:px-16 py-3 bg-background border-b border-border z-[49]">
      {/* Left: Logo */}
      <div className="flex items-center gap-4 flex-1">
        <Link href="/">
          <Image
            src="/imges/logo 22.png"
            alt="logo"
            width={130}
            height={50}
            className="object-contain dark:hidden"
            priority
          />
          <Image
            src="/imges/logodark.png"
            alt="logo"
            width={130}
            height={50}
            className="object-contain hidden dark:block"
            priority
          />
        </Link>
      </div>
<div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
  {sections.map((sec, i) => (
    <a
      key={i}
      href={sec.href}
      className="text-foreground hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
    >
      {sec.title}
    </a>
  ))}
</div>

      {/* Right: Login / Sign Up */}
      <div className="hidden md:flex gap-4 items-center">
        <Link
          href="/signin"
          className="text-foreground hover:text-primary font-medium transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden cursor-pointer text-2xl text-foreground hover:text-primary transition-colors duration-200">
          <FiMenu />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 p-2 bg-popover text-popover-foreground border border-border shadow-large">
          {sections.map((sec, i) => (
            <DropdownMenuItem key={i} asChild>
              <a href={sec.href} className="cursor-pointer w-full text-left">
                {sec.title}
              </a>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/signin" className="w-full text-left">
              Login
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/signup" className="w-full text-left">
              Sign Up
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;