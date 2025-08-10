import React from 'react'
// import { AutoCarousel } from './components/Home/AutoCarousel';
import { AutoCarousel } from '@/components/shared/carousel/AutoCarousel';
import HeightWithNavbarDiv from '../components/Navbar/HeightWithNavbarDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { MapPin, Phone } from "lucide-react";
import { navValues } from '@/lib/constants/constants';
import Link from 'next/link';
import BookingForm from '@/components/shared/forms/BookingForm';


const feedbacks = [
  { src: "/photos/feedbacks/feedback1.jpg", alt: "" },
  { src: "/photos/feedbacks/feedback2.jpg", alt: "" },
  { src: "/photos/feedbacks/feedback3.jpg", alt: "" },
];
const landingBg = [
  { src: "/photos/1.jpg", alt: "" },
  { src: "/photos/1.jpg", alt: "" },
  { src: "/photos/1.jpg", alt: "" },
];

export default function Home() {
  return (
    <>
      <HeightWithNavbarDiv navbarPadding>
        <div className="bg-transparent flex items-center justify-center absolute h-full w-full flex-col z-40">
          <h1 className="text-2xl">Celebrate to your heart&rsquo;s content</h1>
          <p>
            Experience <strong>worry free</strong> catering for all kinds of
            events!
          </p>
          <Button className="rounded-full bg-transparent text-black border-1 border-black">
            Book Now!
          </Button>
        </div>
        <AutoCarousel images={landingBg} />
      </HeightWithNavbarDiv>
      <HeightWithNavbarDiv>
        <div className="h-full flex w-full">
          <div className="relative aspect-[4/3] p-10 w-2/5 h-auto ">
            <Image
              src="/photos/1.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10 flex flex-col gap-5 w-3/5">
            <h1>ABOUT US</h1>
            <Separator className="text-2xl" />
            <p className="text-wrap break-words">
              ansdfklansdfkjansdfkljnasdkfjan
              skdfjnaskldfnaskljdfnasljdfnasldfnalsjdfnaklsdjfnkasndfkja dfkj
              asdfkasdf jasdj faksd fkads f
            </p>
            <h2>{"Read More >"}</h2>
          </div>
        </div>
      </HeightWithNavbarDiv>
      <HeightWithNavbarDiv>
        <div className="w-full h-full gap-5 flex flex-col">
          <h1 className="w-full text-center bg-orange-500 p-2">PACKAGES</h1>
          <p className="text-center w-full">
            Each one comes with a customizable menu and a variety of event
            inclusions depending on the size of your event
          </p>
          <div className="flex items-center w-full gap-4">
            <Separator className="flex-1" />
            <Button className="bg-transparent border-1 border-black text-black rounded-full hover:bg-red-500 hover:cursor-pointer">
              Book Now!
            </Button>
            <Separator className="flex-1" />
          </div>
          <h2 className="w-full text-center">
            What people are saying about us
          </h2>
          <div className="flex flex-1">
            <div className="hidden md:block md:w-1/2 relative h-full">
              <Image
                src="/photos/yj.jpg"
                alt="Your alt text"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <AutoCarousel images={feedbacks} half className="max-h-[60vh] " />
            </div>
          </div>
        </div>
      </HeightWithNavbarDiv>

      <div className="flex flex-col items-center justify-center h-full">
        <Separator
          className="w-3/4 mx-auto my-2 shrink-0"
          orientation="horizontal"
        />
        <h1 className="text-2xl w-3/4 my">Book Now</h1>
        <p className="w-3/4">
          We would love an opportunity to cater for your events. If you have any
          questions, call us or drop us an email.
        </p>
        <div className='w-1/2'>
          <BookingForm />
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full overflow-x-hidden">
        {navValues.map((val, index) => {
          return (
            <React.Fragment key={index}>
              <Link
                href={val.link}
                className="hover:bg-slate-200 flex-1 text-center p-20 transition-all rounded hover:scale-105 hover:shadow-2xl"
              >
                {val.label}
              </Link>
              {index !== navValues.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-6 mx-2 font-bold my-2"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div>
        <div className="flex items-center justify-center flex-col">
          <div>
            <div className="flex">
              <MapPin />
              <ul>
                <li>Address #123 Street Barangay City lorem</li>
              </ul>
            </div>
            <div className="flex">
              <Phone />
              <ul>
                <li>Globe: 099712739123</li>
                <li>Smart: 099712739123</li>
                <li>Landline : 099712739123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
