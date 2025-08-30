import Image from 'next/image'
import React from 'react'

const AboutEventCard = ({className}:{className:string}) => {
  return (
    <div
      className={`min-h-[200px] ${className} basis-[30%] relative flex hover:scale-110 hover:cursor-pointer transition-all duration-[500ms]`}
    >
      <Image src="/photos/1.jpg" alt="" fill className="object-cover opacity-30 hover:opacity-90 transition-all duration-[500ms]" />
      <p className="absolute text-black shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Wedding
      </p>
    </div>
  );
}

export default AboutEventCard