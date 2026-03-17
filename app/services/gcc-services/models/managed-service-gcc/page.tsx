
  "use client";

import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function managedServiceGCC() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010c41] to-[#021a7a] text-white px-6">

      <div className="text-center max-w-xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-6 rounded-full">
            <FaRocket size={40} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-gray-200 mb-8 text-lg">
          We're working hard to bring this feature to life.  
          Stay tuned for something amazing!
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-white text-[#010c41] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}