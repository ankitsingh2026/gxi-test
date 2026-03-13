"use client";

import Link from "next/link";

import ServicesSection from "@/components/Gx-connect/ServicesSection";
import ThreeTierSolution from "@/components/Gx-connect/ThreeTierSolution";
import GXPartnersShowcase from "@/components/Gx-connect/GXPartnersShowcase";
import FloatingDownloadSlider from "@/components/Gx-connect/FloatingDownloadSlider";
import AvatarCard from "@/components/Gx-connect/AvatarCard";

type Avatar = {
  name: string;
  desc?: string;
  badge?: string;
  size?: number;
  imageUrl: string;
};

export default function CollaborationTechnologies() {
  const sampleAvatars: Avatar[] = [
    {
      name: "97% CSAT Score",
      desc: "Customer Satisfaction",
      imageUrl:
        "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg",
    },
    {
      name: "Omnibot Live",
      desc: "Automated Response Enabled",
      size: 72,
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/omnibot.jpg",
    },
    {
      name: "Call Analytics",
      badge: "chart",
      imageUrl:
        "https://images.pexels.com/photos/7567553/pexels-photo-7567553.jpeg",
    },
    {
      name: "47 Sec",
      desc: "Response Time",
      badge: "timer",
      imageUrl:
        "https://images.pexels.com/photos/7681985/pexels-photo-7681985.jpeg",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-[#052A5B] via-[#07224b] to-[#03183a] text-white overflow-hidden">

        {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute left-0 top-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 600"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#06345b" />
                <stop offset="100%" stopColor="#03204a" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#g1)" />

            <g opacity="0.04">
              <path
                d="M0 120 C 400 40, 800 200, 1440 80"
                stroke="#7ee3d7"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 260 C 400 180, 800 340, 1440 240"
                stroke="#8b5cf6"
                strokeWidth="3"
                fill="none"
              />
            </g>
          </svg>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20 py-24 flex flex-col items-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight max-w-4xl">
            Transform customer engagement through smart automation
          </h1>

          <p className="mt-6 text-center text-lg max-w-2xl text-slate-200">
            Leverage GX’s AI-driven solutions to optimize every stage of the
            customer journey.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-4">

            <button
              onClick={() =>
                window.open(
                  "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Customer%20Connect%20Brochure.pdf",
                  "_blank"
                )
              }
              className="bg-teal-400 text-slate-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              Brochure
            </button>

            <Link
              href="/contact-us"
              className="border border-slate-400 px-6 py-3 rounded-lg hover:bg-white/5"
            >
              Contact us
            </Link>

          </div>

          {/* Avatar Cards */}
          <div className="mt-[-60px] w-full relative">

            <div className="absolute -left-8 top-0 flex flex-col gap-12">
              <AvatarCard {...sampleAvatars[0]} />
              <AvatarCard {...sampleAvatars[1]} />
            </div>

            <div className="absolute right-8 top-12 flex flex-col gap-12">
              <AvatarCard {...sampleAvatars[2]} />
              <AvatarCard {...sampleAvatars[3]} />
            </div>

            {/* Brand placeholders */}
            <div className="mt-48 py-12 flex justify-center opacity-30">
              <div className="grid grid-cols-6 gap-8 items-center w-full max-w-4xl">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 flex items-center">
                    <div className="h-6 w-full bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom curve */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Floating logos */}
        <FloatingDownloadSlider />

      </div>

      {/* Services */}
      <ServicesSection />

      {/* Solution tiers */}
      <ThreeTierSolution />

      {/* Partners */}
      <div className="p-6">
        <GXPartnersShowcase />
      </div>

    </>
  );
}