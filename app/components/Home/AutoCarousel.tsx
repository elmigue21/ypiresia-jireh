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
      className="w-full h-[500px] bg-blue-500"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-[500px] aspect-[16/9]">
            <div className=" h-full">
              <Card className="bg-transparent rounded">
                <CardContent className="flex items-center justify-center h-full">
                  <Image
                    src="/photos/1.jpg"
                    alt="img"
                    className="h-full w-auto object-contain rounded"
                    width={0} // Required by next/image to prevent layout shift
                    height={0}
                    sizes="100vw"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="absolute right-0" />
    </Carousel>
  );
}
