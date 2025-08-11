import React from 'react'
import Link from 'next/link'
import { FaFacebookMessenger } from "react-icons/fa";

const MessengerBubble = () => {
  return (
    <Link
      href="https://m.me/100064320511497
"
    >
      <div className="fixed bottom-5 right-5 bg-blue-500 active:scale-80 rounded-full w-15 h-15 z-99 active-scale-80 hover:cursor-pointer flex items-center justify-center">
        <FaFacebookMessenger className="text-white text-2xl" />
      </div>
    </Link>
  );
}

export default MessengerBubble