"use client";

import { useEffect } from "react";
import {
  FaChartLine,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaCogs,
  FaLaptopCode,
  FaRocket,
  FaExchangeAlt,
} from "react-icons/fa";

export default function GlobalXpertsProvides() {
  const services = [
    {
      id: "01",
      title: "GCC Strategy & Business Case",
      desc: "Location, mandate, and operating model definition aligned to board priorities.",
      icon: <FaChartLine className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: "02",
      title: "Location & Ecosystem Advisory",
      desc: "City selection, ecosystem mapping, and partner shortlisting in India and beyond.",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      id: "03",
      title: "GCC Setup & Incorporation",
      desc: "Entity, regulatory approvals, infrastructure, and shared services setup.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      id: "04",
      title: "Talent Build & Leadership Hiring",
      desc: "Leadership, niche skills, and scaled hiring programs tailored to GCC charters.",
      icon: <FaUsers className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      id: "05",
      title: "Operating Model & Governance",
      desc: "Operating rhythms, SLAs, governance forums, and global integration.",
      icon: <FaCogs className="text-2xl" />,
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      id: "06",
      title: "Digital & Tech Build-Out",
      desc: "Cloud, data, engineering, and cybersecurity capability build-out.",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      id: "07",
      title: "GCC Transformation Programs",
      desc: "Productivity, innovation, and operating model transformation for existing GCCs.",
      icon: <FaRocket className="text-2xl" />,
      color: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
    {
      id: "08",
      title: "M&A, Carve-Outs & BOT",
      desc: "Design and execution of BOT, captive carve-outs, and GCC-related M&A.",
      icon: <FaExchangeAlt className="text-2xl" />,
      color: "from-violet-500 to-fuchsia-500",
      bgGradient: "from-violet-50 to-fuchsia-50",
    },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.isIntersecting && e.target.classList.add("show")
        ),
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-up").forEach((el) =>
      obs.observe(el)
    );

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.7s ease-out;
        }
        .show {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>

      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#010c41] mt-6">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                GlobalXperts
              </span>{" "}
              Provides
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  <div
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                  >
                    {service.id}
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}