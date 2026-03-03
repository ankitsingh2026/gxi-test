"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import ContactCard from "@/components/layout/ContactCard";
import { FiRefreshCw } from "react-icons/fi";
import { RiRouterLine } from "react-icons/ri";

const faqsData = [
  {
    question: "Do you offer on-site support and repairs?",
    answer:
      "Yes, we do. Through our field services network, we offer rapid, SLA-backed on-site troubleshooting, equipment replacement, and repairs; often within 4 hours in 120+ countries worldwide.",
  },
  {
    question: "How does your team handle technology upgrades or refreshes?",
    answer:
      "Our engineers assess your infrastructure, replace outdated equipment, and upgrade systems to ensure minimal disruption.",
  },
  {
    question: "Can you assist with network equipment rack-and-stack services?",
    answer:
      "We provide expert rack-and-stack services ensuring proper installation and optimized performance.",
  },
];

const servicesData = [
  {
    title: "Technology Refresh",
    description:
      "Upgrade hardware and software seamlessly to improve performance, security, and scalability.",
    link: "/service/field-services/technology-refresh",
    icon: <FiRefreshCw />,
  },
  {
    title: "Dispatch Services",
    description:
      "On-site IT support for routers, switches, WiFi, installation and maintenance.",
    link: "/service/field-services/field-engineering-services",
    icon: <RiRouterLine />,
  },
];

export default function FieldServicesPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToFAQs = () => {
    faqSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Field Services",
    description:
      "GlobalXperts delivers expert Field Services to maintain and optimize IT infrastructure.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/field-service-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ServicesVid.mp4",
  };

  return (
    <>
      <Script
        id="field-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                GlobalXperts Field Services
              </h1>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>

                <button
                  onClick={scrollToFAQs}
                  className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
                >
                  FAQs →
                </button>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 max-w-xl text-white">
              <p>
                We deliver expert Field Services to maintain, optimize, and
                upgrade your IT infrastructure globally with 24/7 capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="shadow-2xl p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl text-green-600 mb-6">
                {service.icon}
              </div>
              <h5 className="text-lg font-semibold mb-4">
                {service.title}
              </h5>
              <p className="text-sm text-gray-600 text-left">
                {service.description}
              </p>
            </div>

            <Link
              href={service.link}
              className="text-blue-700 text-sm font-medium hover:underline mt-6 text-center"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
        <h5 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h5>

        <div className="grid md:grid-cols-2 gap-6">
          {faqsData.map((faq, index) => (
            <div key={index}>
              <h5
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === index ? null : index
                  )
                }
                className="text-xl font-bold cursor-pointer text-blue-500"
              >
                {faq.question}
              </h5>

              {activeQuestion === index && (
                <p className="text-lg text-gray-700 mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <ContactCard />
    </>
  );
}