// app/not-found.tsx or pages/404.tsx (depending on router)

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-dirtywhite">
      <h2 className='text-2xl'>Hi! We could not find the page you are looking for.</h2>
      {/* <span className='flex'>
        <h2 className="text-4xl font-bold">404</h2>
        <p className="mt-4">Page not found</p>
      </span> */}
      <Link href="/">
        <Button className="bg-transparent border-1 border-black text-black hover:cursor-pointer active:scale-90 rounded-full">Go back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
