"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group flex items-center bg-gradient-to-r from-greenCustomColor2 to-green-900 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        aria-label="Go to top"
        style={{ padding: "0.6rem", transition: "padding 0.4s ease-in-out" }}
      >
        <FaArrowUp className="text-xl transition-transform duration-700 group-hover:rotate-12" />
        <span
          className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-3 transition-all duration-700 ease-in-out delay-100 text-sm"
          style={{
            textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default GoToTopButton;
