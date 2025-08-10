"use client";
import { useNavbar } from "@/providers/NavbarProvider";
import React from "react";
import { LuAlignJustify } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";


// create navbar provider
const Navbar = () => {
  const {toggleNavbar, navbarHeight} = useNavbar();

  return (
    <div
      className={`w-full flex justify-between p-5 bg-[#996515] items-center z-99 fixed`}
      style={{ height: navbarHeight }}
    >
      <button className="z-99">
        <LuAlignJustify
          className="text-2xl active:scale-90 transition:all hover:cursor-pointer hover:text-white"
          onClick={toggleNavbar}
        />
      </button>
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image src="/photos/yj.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="flex items-center justify-center">
        <Link href="https://www.facebook.com/profile.php?id=100064320511497">
          <LuFacebook className="text-2xl text-white hover:text-black hover:cursor-pointer active:scale-90 transition-transform" />
        </Link>
        <Link href="https://www.instagram.com/jingjingcip/?hl=en">
          <LuInstagram className="text-2xl text-white hover:text-black hover:cursor-pointer active:scale-90 transition-transform" />
        </Link>
      </div>
    </div>
  );
};


export default Navbar;
