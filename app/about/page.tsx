import HeightWithNavbarDiv from '@/components/Navbar/HeightWithNavbarDiv'
import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator';
import AboutEventCard from '@/components/about/AboutEventCard';

const About = () => {
  return (
    <div className='flex flex-col gap-5'>
      <HeightWithNavbarDiv navbarPadding>
        <div className="w-full h-full">
          <Image src="/photos/1.jpg" fill alt="50" />
        </div>
      </HeightWithNavbarDiv>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="w-full text-center">ABOUT US</h1>
          <Separator className="!w-[200px] mx-auto" />
          <h2 className="w-full text-center">
            Celebrate to your heart&rsquo;s content
          </h2>
        </div>
        <p className="w-1/2 text-justify text-wrap bg-red-500 p-20">
          Aasdfas asdfalskd fl sflasdfl asdlkf asdklf lsd flksdf lkasdfkl a sdlf
          asdlf asldjf saljdf df asdfasdfasdf asdfasdfasdfasdf asdfasdfasdfasdf
          asdfasdfasdfasdf asdfasdfasdfasdf asdfasdfasdfasdf asdfasdfdf fdfdfdf
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="w-full text-center">OUR SERVICES</h1>
          <Separator className="!w-[200px] mx-auto" />
        </div>
        <div className="flex flex-wrap gap-5 w-1/2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <AboutEventCard className="flex-1" key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default About