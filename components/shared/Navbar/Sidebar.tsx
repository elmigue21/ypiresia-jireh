'use client'
// import { devLog } from "@/helpers/generalHelpers";
// import { useNavbar } from "@/providers/NavbarProvider";
import { devLog } from "@/helpers/generalHelpers";
import React, { useEffect } from "react";
// import { navValues } from "@/lib/constants/constants";
import { useNavbar } from "@/providers/NavbarProvider";
import {navValues} from '@/lib/constants/constants'
import Link from "next/link";

export const Sidebar = () => {

   const { isOpen , navbarHeight} = useNavbar();
  // const sidebarValues = [
  //   { label: "Home", link: "" },
  //   { label: "About", link: "" },
  //   { label: "Book now", link: "" },
  //   { label: "Packages", link: "" },
  //   { label: "Contact us", link: "" },
  // ];

  useEffect(()=>{
    devLog('IS OPEN' , isOpen)
  },[isOpen])

  return (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } z-80 h-[100vh] left-0 flex-1 w-full bg-white sm:w-[500px]`}
       style={{paddingTop:navbarHeight}}
    >
      {navValues.map((val, index) => {
        return (
          <Link href={val.link} key={index}>
            <div className="p-10 border border-gray-300 hover:bg-slate-200 hover:cursor-pointer active:scale-95">
              <h1 className="text-2xl text-center">{val.label}</h1>
            </div>
          </Link>
        );
      })}
      <div className="w-full">Logo</div>
    </div>
  );
};
