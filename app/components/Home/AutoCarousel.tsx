"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function AutoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full relative flex justify-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="bg-transparent rounded border-0 p-0 m-0 shadow-none">
              <CardContent className="flex items-center justify-center w-full border-0 shadow-none m-0 p-0">
                <Image
                  src="/photos/1.jpg"
                  alt="img"
                  className="h-full w-auto object-contain opacity-40"
                  width={0} // Required by next/image to prevent layout shift
                  height={0}
                  sizes="100vw"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 z-10 hidden sm:flex hover:cursor-pointer active:scale-80" />
      <CarouselNext className="absolute right-2 z-10 hidden sm:flex hover:cursor-pointer active:scale-80" />
    </Carousel>
  );
}
