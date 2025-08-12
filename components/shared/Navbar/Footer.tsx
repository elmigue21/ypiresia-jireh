import React from 'react'
import { MapPin, Phone } from "lucide-react";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-evenly p-5 shadow-2xl bg-yellow-50 border-1 gap-5">
      <div className='h-50 w-50 flex-shrink-0 relative'>
        <Image src='/photos/yj.jpg' fill alt='logo' className='object-cover'/>
      </div>

      <div className="flex gap-1 flex-1 h-full">
        <MapPin />
        <ul className="flex flex-col gap-5 sm:w-full">
          <li>Address #123 Street Barangay City lorem</li>
        </ul>
      </div>

      <div className="flex gap-1 flex-1 h-full">
        <Phone />
        <ul className="flex flex-col gap-5">
          <li>Globe: 099712739123</li>
          <li>Smart: 099712739123</li>
          <li>Landline : 099712739123</li>
        </ul>
      </div>

      <div className='flex-1 h-full'>
        <h2>Follow us on social media!</h2>
        <div className="flex gap-2">
          <div className="p-1 bg-amber-800 rounded-full hover:text-white hover:cursor-pointer hover:scale-120 transition-all">
            <LuFacebook />
          </div>
          <div className="p-1 bg-amber-800 rounded-full hover:text-white hover:cursor-pointer hover:scale-120 transition-all">
            <LuInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer