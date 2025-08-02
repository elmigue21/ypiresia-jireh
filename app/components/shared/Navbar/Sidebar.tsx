'use client'
import { devLog } from "@/app/helpers/generalHelpers";
import { useNavbar } from "@/app/providers/NavbarProvider";
import React, { useEffect } from "react";

export const Sidebar = () => {

   const { isOpen , navbarHeight} = useNavbar();
  const sidebarValues = [
    { label: "Home", link: "" },
    { label: "About", link: "" },
    { label: "Book now", link: "" },
    { label: "Packages", link: "" },
    { label: "Contact us", link: "" },
  ];

  useEffect(()=>{
    devLog('IS OPEN' , isOpen)
  },[isOpen])

  return (
    <div
      className={`absolute ${
        isOpen ? "block" : "hidden"
      } z-50 h-[100vh] left-0 flex-1 w-full bg-white sm:w-[500px]`}
       style={{paddingTop:navbarHeight}}
    >
      {sidebarValues.map((val, index) => {
        return (
          <div key={index} className="p-10 border-1 hover:bg-slate-200 hover:cursor-pointer">
            <h1 className="text-2xl text-center">{val.label}</h1>
          </div>
        );
      })}
      <div className="w-full">Logo</div>
    </div>
  );
};
