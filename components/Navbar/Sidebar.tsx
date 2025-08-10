'use client'
// import { devLog } from "@/app/helpers/generalHelpers";
import { devLog } from "@/helpers/generalHelpers";
import { useNavbar } from "@/providers/NavbarProvider";
import React, { useEffect } from "react";
import { navValues } from "@/lib/constants/constants";
import Link from "next/link";
import Image from "next/image";
export const Sidebar = () => {

   const { isOpen , navbarHeight, toggleNavbar} = useNavbar();
  useEffect(()=>{
    devLog('IS OPEN' , isOpen)
  },[isOpen])

  return (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } z-80 h-[100vh] left-0 flex-1 w-full bg-white sm:w-[500px]`}
      style={{ paddingTop: navbarHeight }}
    >
      {navValues.map((val, index) => {
        return (
          <Link href={val.link} key={index} onClick={toggleNavbar}>
            <div className="p-10 border border-gray-300 hover:bg-slate-200 hover:cursor-pointer active:scale-95">
              <h1 className="text-2xl text-center">{val.label}</h1>
            </div>
          </Link>
        );
      })}
      <div className="flex-1 relative w-auto h-[200px] aspect-square flex items-center justify-center">
        <Image
          src="/photos/yj.jpg"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
