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
import Partners from "@/components/Partners";
import WhatWeDoSection from "@/components/WhatWeDoSection";
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
  />;
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <ServicesOverview />
      <SliderSection />
      {/* Technologies Marquee */}
      <div className="relative overflow-hidden w-full h-24 bg-white mt-14 max-w-7xl mx-auto">
        <div className="absolute flex animate-slide">
          <div className="flex items-center gap-12 py-4">
            {/* AWS */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/awsi.svg"
                alt="AWS"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Google */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/google1.png"
                alt="Google"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Azure */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/azure.png"
                alt="Azure"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* AI */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/ai.jpg"
                alt="AI"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* ARIS */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/aris.webp"
                alt="Aris"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Cisco */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/cisco.jpg"
                alt="Cisco"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Docker */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/docker.png"
                alt="Docker"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Git */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/git.png"
                alt="Git"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Jenkins */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/jen.png"
                alt="Jenkins"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Kubernetes */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/kub.png"
                alt="Kubernetes"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Mongo */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/mongo.png"
                alt="MongoDB"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* OpenAI */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/openai.png"
                alt="OpenAI"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* React */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/reactIcon.png"
                alt="React"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Terraform */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/terraform.png"
                alt="Terraform"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Express */}
            <div className="w-[110px] h-[50px] flex items-center justify-center">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/expressjsIcon.jpg"
                alt="Express"
                width={110}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <InnovationShowcaseSection />
      <IndustrySolutionsSection />
      <Partners />    
      <WhatWeDoSection/>
      <KnowledgeCenterSection />

     
    </div>
  );
}
