"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const texts = [
    "Smart Deployment",
    "Cloud Migration",
    "Cyber Security",
    "SaaS Applications",
    "DevOps Automation",
    "Media Live Streaming",
    "Network Infrastructure",
    "Artificial Intelligence",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentTextIndex((i) => (i + 1) % texts.length);
        setOpacity(1);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp"
        alt="GlobalXperts Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-8 pt-24">
        <div className="p-2 md:p-5 w-full md:w-[80%] lg:w-[90%] xl:w-[70%]">
          <h1 className="text-black font-figtree text-xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-2">
            Discover Services and Solutions for
          </h1>

          <div className="border-2 border-greenCustomColor rounded-full px-6 py-2 inline-block bg-white/50 transition-opacity duration-700">
            <p
              className="text-black font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center font-figtree transition-opacity duration-500"
              style={{ opacity }}
            >
              {texts[currentTextIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}