"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Heart, ShieldCheck, Users } from "lucide-react";

export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const slides = [
    {
      title: "Caring for Your Little Ones",
      quote: "Children are not things to be molded, but people to be unfolded.",
      description:
        "Expert babysitting services you can trust, giving your child the love and attention they deserve.",
      image: "/elderly care.jpg.png",
      buttonText: "Find a Sitter",
      accent: "text-blue-300",
    },
    // {
    //   title: "Dignity in Golden Years",
    //   quote:
    //     "To care for those who once cared for us is one of the highest honors.",
    //   description:
    //     "Professional elderly care that focuses on health, companionship, and respect.",
    //   image:
    //     "/Tan and Mint Illustrated Senior Citizen's Party Banner Landscape.png",
    //   buttonText: "Explore Elder Care",
    //   accent: "text-green-300",
    // },
  ];

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {/* Responsive Heights: মোবাইলে 60vh, ল্যাপটপে 80vh */}
              <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] min-h-[450px] overflow-hidden">
                {/* Background Image */}
                <Image
                  alt={slide.title}
                  src={slide.image}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center scale-105" // সামান্য জুম ইফেক্ট
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
