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
// import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
// import { AutoCarousel } from '@/components/Home/AutoCarousel';

interface ImageData {
  src: string;
  alt: string;
}

interface AutoCarouselProps {
  images: ImageData[];
  className?: string;
  half?: boolean;
}



export function AutoCarousel({ images, className, half }: AutoCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // const isSmall = useIsSmallScreen();
  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full h-full relative flex justify-center ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="bg-transparent rounded border-0 p-0 m-0 shadow-none">
              <CardContent className="flex items-center justify-center w-full border-0 shadow-none m-0 p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-auto object-contain opacity-40"
                  width={0} // Required by next/image to prevent layout shift
                  height={0}
                  sizes={ half ? '50vw' : "100vw"}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 hidden sm:flex hover:cursor-pointer active:scale-80 z-50" />
      <CarouselNext className="absolute right-2 hidden sm:flex hover:cursor-pointer active:scale-80 z-50" />
    </Carousel>
  );
}
