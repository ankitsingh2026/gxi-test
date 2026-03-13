"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import {
  FaChartLine,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaCogs,
  FaLaptopCode,
  FaRocket,
  FaExchangeAlt,
  FaShieldAlt,
  FaBrain,
  FaCode,
  FaStar,
  FaCheckCircle,
  FaGlobeAsia,
  FaCog,
} from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import GlobalXpertsProvides from "./GlobalXpertsProvides";

export default function GCCServicesPage() {
  /* Scroll animation (used by multiple sections) */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show"),
        ),
      { threshold: 0.2 },
    );

    document
      .querySelectorAll(".fade-up, .fade-left, .fade-right")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show"),
        ),
      { threshold: 0.2 },
    );

    document
      .querySelectorAll(".fade-left, .fade-right, .fade-up")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
  /* ================= RETURN ================= */
  return (
    <>
      {/* ================= HERO ================= */}
      <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 shadow-sm">
                  GCC Strategy • Build • Transform
                </span>
                <span className="text-xs font-medium bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 px-4 py-2 rounded-full border border-indigo-200 shadow-sm">
                  India, GCCs, Digital
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Future-Ready
                </span>
                <br />
                Global Capability Centers
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Partner with GCC specialists who blend{" "}
                <span className="font-semibold text-gray-800">
                  India advantage
                </span>
                , regulatory confidence, and deep technology expertise to
                design, build, and transform your global capability center.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    GCCs in India
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">1.5M+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Professionals
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">$40B+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Industry Value
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  Connect to Build Your GCC
                  <GiClick className="group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="flex justify-center lg:justify-end mb-20">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <video
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/gcc-bg-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl object-cover w-full h-[420px] lg:h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ABOUT GLOBALXPERTS ================= */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    Who We Are
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    GlobalXperts
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                  Specialists in strategy, build, and transformation of Global
                  Capability Centers in India and beyond.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  {
                    title: "End-to-End GCC Lifecycle",
                    description:
                      "Strategy, design, setup, scaling, and transformation - your complete partner from day one.",
                    icon: "🚀",
                  },
                  {
                    title: "Deep Tech Expertise",
                    description:
                      "Digital, product engineering, data & AI, cybersecurity, cloud, and operations capabilities.",
                    icon: "💡",
                  },
                  {
                    title: "India & GCC Hub Focus",
                    description:
                      "Strong local ecosystems and talent pools across key strategic locations.",
                    icon: "🌏",
                  },
                  {
                    title: "Flexible Operating Models",
                    description:
                      "Captive, BOT, and hybrid models tuned to your risk appetite and growth objectives.",
                    icon: "⚙️",
                  },
                  {
                    title: "Innovation-Driven",
                    description:
                      "Proven playbooks for CXOs and boards to unlock innovation, not just cost savings.",
                    icon: "✨",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Trusted by Global Leaders
                  </p>
                  <p className="text-sm text-gray-600">
                    Delivering excellence across Fortune 500 companies
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl opacity-40 blur-3xl"></div>

              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    What Sets Us Apart
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our unique strengths and capabilities
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {[
                    {
                      icon: <FaChartLine className="text-2xl" />,
                      number: "6+",
                      label: "Core tech domains",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: <FaCog className="text-2xl" />,
                      number: "BOT",
                      label: "Build-Operate-Transfer expertise",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: <FaCheckCircle className="text-2xl" />,
                      number: "360°",
                      label: "Transformation lens",
                      color: "from-green-500 to-teal-500",
                    },
                    {
                      icon: <FaShieldAlt className="text-2xl" />,
                      number: "Risk",
                      label: "Compliance-first, regulator aware",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 group-hover:scale-110 transition-transform`}
                      >
                        {item.icon}
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {item.number}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Success Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600 mt-1">GCCs Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-xs text-gray-600 mt-1">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY GCCs MATTER ================= */}
      {/* ---------- Inline Animations ---------- */}
      <style jsx>{`
        .fade-left,
        .fade-right,
        .fade-up {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .fade-left {
          transform: translateX(-40px);
        }
        .fade-right {
          transform: translateX(40px);
        }
        .fade-up {
          transform: translateY(30px);
        }
        .show {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border-radius: 1rem;
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <section className="w-full bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] text-white py-24 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Strategic Innovation Hubs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why GCCs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Matter Today
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div className="fade-left space-y-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                GCCs have evolved far beyond traditional support centers. Today,
                they operate as
                <span className="font-semibold text-white">
                  {" "}
                  strategic innovation hubs
                </span>{" "}
                that accelerate enterprise transformation and unlock competitive
                advantage.
              </p>

              {/* Capability Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: <FaRocket className="text-xl" />,
                    text: "Driving digital transformation at enterprise scale",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <FaCode className="text-xl" />,
                    text: "Building world-class product engineering capabilities",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <FaBrain className="text-xl" />,
                    text: "Accelerating Data & AI adoption across functions",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <FaShieldAlt className="text-xl" />,
                    text: "Enhancing cybersecurity readiness & resilience",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    icon: <FaCogs className="text-xl" />,
                    text: "Strengthening operational excellence & global processes",
                    color: "from-indigo-500 to-violet-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-2 group-hover:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="gradient-border p-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Value Creation at Scale
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Modern GCCs contribute directly to business growth,
                      innovation velocity, and enterprise-wide value creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="fade-right flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                    alt="GCC Innovation"
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010c41]/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GCC SETUP MODELS ================= */}
      {/* ---------- Inline Animation CSS ---------- */}
      <style jsx>{`
        .fade-left,
        .fade-right,
        .fade-up {
          opacity: 0;
          transition: all 0.7s ease-out;
        }
        .fade-left {
          transform: translateX(-30px);
        }
        .fade-right {
          transform: translateX(30px);
        }
        .fade-up {
          transform: translateY(30px);
        }
        .show {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .step-connector {
          position: relative;
        }

        @media (min-width: 1024px) {
          .step-connector::after {
            content: "→";
            position: absolute;
            right: -1.25rem;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(0, 0, 0, 0.2);
            font-size: 1.5rem;
            font-weight: bold;
          }

          .step-connector:last-child::after {
            content: "";
          }
        }
      `}</style>

      {/* ================= TOP SECTION - SETUP MODELS ================= */}
      <section className="bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-up">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Setup Options
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              GCC{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Setup Models
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Captive GCC",
                icon: <FaBuilding className="text-2xl" />,
              },
              {
                title: "Build-Operate-Transfer (BOT)",
                icon: <FaExchangeAlt className="text-2xl" />,
              },
              {
                title: "Hybrid GCC + Partner",
                icon: <FaUsers className="text-2xl" />,
              },
              {
                title: "Managed Services Extension",
                icon: <FaCog className="text-2xl" />,
              },
            ].map((model, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 fade-up"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform mb-4">
                  {model.icon}
                </div>

                <h3 className="font-bold text-xl text-white">{model.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalXpertsProvides/>

      {/* ================= SETUP FRAMEWORK ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
              Implementation Process
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#010c41] mt-6">
              GCC{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Setup Framework
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {[
              "Vision & Charter",
              "Location & Model",
              "Regulatory & Structure",
              "Talent & Leadership",
              "Digital & Tech Stack",
              "Scale & Integration",
              "Optimize & Transform",
            ].map((title, i) => (
              <div
                key={i}
                className="step-connector group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 fade-up border border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="font-bold text-base text-gray-900 mb-2">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#010c41] px-14 py-4 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* ================= GLOBALXPERTS PROVIDES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#010c41]">
            What GlobalXperts Provides
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            "GCC Strategy",
            "Location Advisory",
            "Setup & Incorporation",
            "Talent Build",
            "Operating Model",
            "Digital Build-Out",
            "Transformation Programs",
            "M&A & BOT",
          ].map((service, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 border">
              <FaChartLine className="text-blue-600 text-xl mb-3" />
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact-us"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
