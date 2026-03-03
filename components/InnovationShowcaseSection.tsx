"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/Assets/da.png",
    title: "AI and Machine Learning",
    description:
      "We integrate AI and machine learning into enterprise solutions to deliver powerful, future-ready innovation.",
    showButton: true,
    link: "/solutions/ai-ml-solutions",
  },
  {
    image: "/Assets/img1.png",
    title: "Data Analytics",
    description:
      "Our advanced analytics solutions transform raw data into strategic insights that drive smarter decisions.",
    showButton: false,
  },
];

export default function InnovationShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="flex items-center justify-center bg-white relative py-8">
      <div className="relative w-[90%] max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 min-w-full"
            >
              {/* Image Section */}
              <div className="relative h-[40vh] md:h-[70vh] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-6 md:p-12 bg-white">
                <span className="uppercase text-xs text-gray-500 tracking-widest">
                  Innovation
                </span>

                <h5 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                  {slide.title}
                </h5>

                <p className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed">
                  {slide.description}
                </p>

                {slide.showButton && slide.link && (
                  <Link
                    href={slide.link}
                    className="mt-5 px-5 py-2 border border-blue-800 hover:text-white font-semibold rounded-lg hover:bg-cyan-500 text-black transition duration-300 inline-block"
                  >
                    Get ahead →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}