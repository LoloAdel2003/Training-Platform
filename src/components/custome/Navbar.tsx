"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExploreDropdown } from "./ExploreDropdown";
import { NavSearch } from "./NavSearch";
import { useSelector } from "react-redux";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";

import {
  IoMdNotificationsOutline,
  IoMdMoon,
  IoMdSunny,
} from "react-icons/io";
import { FiShoppingBag, FiSearch, FiMenu, FiLogIn, FiUserPlus, FiLogOut, FiCompass, FiUser, FiMessageSquare } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks/hooks";
import { ModeToggle } from "./ModeToggle";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
const cartCount = useAppSelector(
  (state) => state.cart.items.length
);
 const conversations = useSelector((state: RootState) => state.chat.conversations);

  // نجمع مجموع الرسائل غير المقروءة
  const unreadMessagesCount = conversations.reduce((total, conv) => total + (conv.unreadCount || 0), 0);

  // لو ما في رسائل غير مقروءة → نخفي الـ badge
  const showBadge = unreadMessagesCount > 0;

  const isSign = true;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowMobileSearch(false);
      }
    }
    if (showMobileSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileSearch]);

  return (
    // <nav className="flex items-center justify-between w-full fixed top-0 left-0 shadow-md px-4 md:px-10 lg:px-16 py-3 bg-white z-5000">
<nav className="flex items-center justify-between w-full fixed top-0 left-0 shadow-medium px-4 md:px-10 lg:px-16 py-3 bg-background border-b border-border z-[49]">

      {/* Left Section: Logo + Explore + Search */}
      <div className="flex cursor-pointer items-center gap-4 md:gap-6 flex-1">
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

        {/* Desktop Explore */}
        <div className="hidden md:flex">
          <ExploreDropdown />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <NavSearch />
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-3 md:gap-6">

        {/* 🔎 Mobile Search */}
        <button
          className="md:hidden cursor-pointer text-primary-background hover:text-primary text-xl"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        >
          <FiSearch />
        </button>

      {/* Desktop Only Icons */}
{isSign && (
  <div className="hidden md:flex items-center gap-4">
    {/* Toggle Mode */}
    {/* <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="text-foreground cursor-pointer hover:text-primary text-2xl transition-colors duration-200"
      title="Toggle Mode"
    >
      {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
    </button> */}
    <ModeToggle />

    {/* Notifications */}
    <Link href="/notifications" className="relative">
      <IoMdNotificationsOutline className="text-foreground hover:text-primary text-[20px] cursor-pointer transition-colors duration-200" />
       <span className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
      2
    </span>
    </Link>



<Link href="/profile/messages" className="relative">
  <HiOutlineChatBubbleLeftRight className="text-foreground hover:text-primary text-[20px] cursor-pointer transition-colors duration-200" />

 
     {showBadge && (
        <span className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
          {unreadMessagesCount}
        </span>
      )}
</Link>
    {/* Cart */}
   {/* Cart */}
<Link href="/cart" className="relative">
  <FiShoppingBag className="text-foreground hover:text-primary text-[20px] cursor-pointer transition-colors duration-200" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
      {cartCount}
    </span>
  )}
</Link>

    {/* Profile */}
    <Link href="/profile">
      <Avatar className="cursor-pointer w-7 h-7">
        <AvatarImage src="/imges/lolo.jpg" alt="profile" />
        <AvatarFallback>Me</AvatarFallback>
      </Avatar>
    </Link>
  </div>
)}

{
  !isSign && (
    <div className="hidden md:flex items-center gap-4">
      {/* Toggle Mode */}
      {/* <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="text-foreground cursor-pointer hover:text-primary text-2xl transition-colors duration-200"
        title="Toggle Mode"
      >
        {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
      </button> */}
      <Link href="/signin" className="text-foreground hover:text-primary font-medium transition-colors duration-200">
        Login
      </Link>
      <Link href="/signup" className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-200">
        Sign Up
      </Link>
    </div>
  )
}


        {/* Mobile Menu */}
       <DropdownMenu>
  <DropdownMenuTrigger className="md:hidden cursor-pointer text-2xl text-foreground hover:text-primary transition-colors duration-200">
    <FiMenu />
  </DropdownMenuTrigger>

  <DropdownMenuContent className="w-56 p-2 r-2 bg-popover text-popover-foreground border border-border shadow-large"
>
    <DropdownMenuLabel>Menu</DropdownMenuLabel>
    <DropdownMenuSeparator />

    {/* Mobile Profile */}
    {isSign && (
      <DropdownMenuItem asChild className="flex items-center gap-2">
        <Link href="/profile" className="cursor-pointer flex items-center gap-2">
          <FiUser className="text-foreground hover:text-primary" />
          <span>Profile</span>
        </Link>
      </DropdownMenuItem>
    )}

    {/* Toggle Mode */}
    <DropdownMenuItem
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <IoMdSunny className="text-foreground hover:text-primary" />
      ) : (
        <IoMdMoon className="text-foreground hover:text-primary" />
      )}
      <span>Toggle Mode</span>
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    {/* Explore */}
    <DropdownMenuItem asChild className="flex items-center gap-2">
      <Link href="#" className="cursor-pointer flex items-center gap-2">
        <FiCompass className="text-foreground hover:text-primary" />
        <span>Explore</span>
      </Link>
    </DropdownMenuItem>

    {isSign && (
      <>
        <DropdownMenuItem asChild className="flex items-center gap-2">
          <Link href="/notifications" className="cursor-pointer flex items-center gap-2">
            <IoMdNotificationsOutline className="text-foreground hover:text-primary" />
            <span>Notifications</span>
             <span className="ml-auto w-4 h-4 rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
       2


      </span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex items-center gap-2">
  <Link href="/cart" className="relative cursor-pointer flex items-center gap-2">
    <FiShoppingBag className="text-foreground hover:text-primary" />
    <span>Cart</span>

    {cartCount > 0 && (
      <span className="ml-auto w-4 h-4 rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
        {cartCount}
      </span>
    )}
  </Link>
</DropdownMenuItem>

 <DropdownMenuItem asChild className="flex items-center gap-2">
  <Link href="/profile/messages" className="relative cursor-pointer flex items-center gap-2">
    <HiOutlineChatBubbleLeftRight className="text-foreground hover:text-primary" />
    <span>Messages</span>

    {showBadge && (
      <span className="ml-auto w-4 h-4 rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
        {unreadMessagesCount}
      </span>
    )}
  </Link>
</DropdownMenuItem>


        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="flex items-center gap-2">
          <button className=" cursor-pointer w-full text-left text-red-600 flex items-center gap-2">
            <FiLogOut />
            Logout
          </button>
        </DropdownMenuItem>
      </>
    )}

    {!isSign && (
      <>
        <DropdownMenuItem asChild className="flex items-center gap-2">
          <Link href="/signup" className="flex items-center gap-2">
            <FiLogIn className="text-foreground hover:text-primary" />
            <span>Login</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex items-center gap-2">
          <Link href="/signup" className="flex items-center gap-2">
            <FiUserPlus className="text-foreground hover:text-primary" />
            <span>Sign Up</span>
          </Link>
        </DropdownMenuItem>
      </>
    )}
  </DropdownMenuContent>
</DropdownMenu>
      </div>

      {/* Mobile Search Panel */}
      {mounted && (
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[70px] left-0 w-full px-4 md:hidden z-50"
            >
<div className="p-3 bg-card shadow-medium rounded-xl border border-border">
                <NavSearch />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;
