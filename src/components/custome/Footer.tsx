"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

// react-icons
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="w-full radial-primary-bg text-primary-foreground pt-12 pb-6 px-6 md:px-16">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold">Subscribe to our newsletter</h2>
          <p className="text-white/70 text-sm">
            Subscribe to our newsletter to stay updated with the latest courses and offers
          </p>
        </div>

        <div className="flex items-center bg-white/20 px-2 py-1 rounded-lg backdrop-blur-md gap-2 w-full md:w-[350px] lg:w-[400px]">
          <Input
            placeholder="Enter your email address"
            className="bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0"
          />
          <Button className="bg-white text-[#1F2A60] hover:bg-white/90 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mt-12 grid grid-cols-2  md:grid-cols-4 gap-10">
        {/* EduQuest Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">EduQuest</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            EduQuest empowers learners to achieve their goals through flexible, 
            expert-led online, recorded, and in person courses
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <BsFacebook className="hover:text-white/90 cursor-pointer" />
            <RxCross2 className="hover:text-white/90 cursor-pointer" />
            <BsLinkedin className="hover:text-white/90 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-white/70">
            <li>Home</li>
            <li>Courses</li>
            <li>Instructors</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-white/70">
            <li>Engineering</li>
            <li>Business</li>
            <li>Marketing</li>
            <li>Data Science</li>
            <li>Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex gap-2 items-center">
              <LuMapPin className="text-white" /> 
              Gaza
            </li>
            <li className="flex gap-2 items-center">
              <LuMail className="text-white" /> 
              alaa@gmail.com
            </li>
            <li className="flex gap-2 items-center">
              <LuPhone className="text-white" /> 
              +0599541339
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <Separator className="bg-white/30 my-8" />

      <div className="flex flex-col items-center md:flex-row md:justify-between text-white/70 text-sm">
        <p>Copyright © 2025 EduQuest. All rights reserved</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span>Terms of use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
