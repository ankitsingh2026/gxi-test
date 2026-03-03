"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import KeyServiceSection from "@/components/KeyServicesSection";
import SliderSection from "@/components/SliderSection";
import KnowledgeCenterSection from "@/components/KnowledgeCenterSection";
import InnovationShowcaseSection from "@/components/InnovationShowcaseSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection";
// import SliderSection from "@/components/SliderSection";
// import Slider2 from "@/components/Slider2";
// import TeamGrid from "@/components/TeamGrid";
// import FAQWithImpactFilm from "@/components/FAQSection";
// import CompaniesLogos from "@/components/CompaniesLogos";
// import Partners from "@/components/Partners";
// import Trial from "@/components/Trial";
// import GoToTopButton from "@/components/Contact/GoToTopButton";
// import ContactUs from "@/components/ContactUs";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GlobalXperts Inc.",
      url: "https://www.globalxperts.net",
    }),
  }}
/>
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <ServicesOverview/>
      <SliderSection/>
      {/* Technologies Marquee */}
      <div className="relative overflow-hidden w-full h-20 bg-white mt-14 max-w-7xl mx-auto">
        <div className="absolute flex whitespace-nowrap animate-slide">
          <div className="flex items-center gap-10 mt-2">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/awsi.svg"
              alt="AWS"
              width={80}
              height={48}
            />
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/google1.png"
              alt="Google"
              width={62}
              height={48}
            />
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/azure.png"
              alt="Azure"
              width={237}
              height={48}
            />
          </div>
        </div>
      </div>

<KnowledgeCenterSection/>
<InnovationShowcaseSection/>
<IndustrySolutionsSection/>
    


      {/* Join Team Section */}
      <div className="w-full bg-blueCustomColor p-6 md:p-10 py-10 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h5 className="text-white text-4xl font-semibold mb-4">
              Join our team of experts
            </h5>
            <p className="text-white text-base md:text-lg font-semibold mb-6">
              If you have a restless curiosity and a drive for ingenuity,
              join our team and help shape the industry of IT.
            </p>

            <Link
              href="/careers"
              className="bg-white text-black font-bold hover:bg-green-800 hover:text-white rounded-full px-4 py-2 transition"
            >
              Explore Open Roles
            </Link>
          </div>

          <div className="flex gap-6 mt-10 md:mt-0">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIML.png"
              alt="AI ML"
              width={160}
              height={160}
              className="rounded-full"
            />
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/img2.png"
              alt="Team"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* <CompaniesLogos />
      <ContactUs />
      <GoToTopButton /> */}
    </div>
  );
}