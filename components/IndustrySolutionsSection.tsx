"use client";

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
  return (
    <div className="bg-white text-gray-700 py-12">
      <div className="text-center px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Industry-Specific Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
          Explore tailored technology solutions designed to help businesses
          thrive across industries.
        </p>
      </div>

      {/* Scrollable Slider */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.path}
              className="min-w-[220px] snap-center p-10 rounded-lg shadow-lg flex flex-col items-center justify-center bg-blueCustomColor text-white transition-all duration-500 ease-in-out overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <span className="text-5xl mb-3 relative z-10">
                {industry.icon}
              </span>

              <p className="text-lg font-semibold text-gray-200 relative z-10 text-center">
                {industry.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}