"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  FaBook,
  FaBolt,
  FaMoneyBill,
  FaHeartbeat,
  FaShoppingBag,
  FaFilm,
  FaLandmark,
  FaCogs,
  FaPlane,
} from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const industries = [
  { name: "Aviation", icon: <FaPlane />, path: "/industries/aviation" },
  { name: "Education", icon: <FaBook />, path: "/industries/education" },
  { name: "Energy", icon: <FaBolt />, path: "/industries/energy" },
  { name: "Financial", icon: <FaMoneyBill />, path: "/industries/financial" },
  { name: "Healthcare", icon: <FaHeartbeat />, path: "/industries/healthcare" },
  { name: "Retail", icon: <FaShoppingBag />, path: "/industries/retail" },
  {
    name: "Media & Entertainment",
    icon: <FaFilm />,
    path: "/industries/media-entertainment",
  },
  { name: "Government", icon: <FaLandmark />, path: "/industries/government" },
  {
    name: "Service Provider",
    icon: <FaCogs />,
    path: "/industries/service-provider",
  },
];

export default function IndustrySolutionsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 py-16">

      {/* Heading */}
      <div className="text-center px-4 mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Industry-Specific Solutions
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore tailored solutions designed for various industries, helping
          businesses thrive with cutting-edge technology.
        </p>
      </div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-200"
        >
          <MdChevronLeft size={22} />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-200"
        >
          <MdChevronRight size={22} />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.path}
              className="group relative min-w-[260px] snap-center p-12 rounded-xl bg-[#0c2d3a] flex flex-col items-center justify-center text-center transition duration-500 shadow-md hover:shadow-xl"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#010c41] to-[#0ea5a4] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl text-gray-200 mb-4 group-hover:scale-110 transition">
                {industry.icon}
              </div>

              {/* Title */}
              <p className="relative z-10 text-lg font-semibold text-gray-200">
                {industry.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}