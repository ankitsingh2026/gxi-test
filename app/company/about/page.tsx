"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { SiTransmission } from "react-icons/si";
import { GiNightVision } from "react-icons/gi";



export default function About() {
  const router = useRouter();

  const AboutVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "About GlobalXperts",
    description:
      "We provide tailored IT solutions designed to meet your unique needs.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/imageAbout.webp",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About3.mp4",
    embedUrl: "https://www.globalxperts.net/Company/About-us",
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AboutVideoJsonLd) }}
      />

      {/* Hero Section */}
      <div
        className="bg-blueCustomColor text-white min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/imageAbout.webp)`,
        }}
      >
        <div className="2xl:max-w-7xl w-full mx-auto text-left px-8">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-64">
            Discover how the world works with <br />
            GlobalXperts
          </h1>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center 2xl:mt-96">
            <button
              onClick={() => router.push("/insights/media-library")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Read Brochures
            </button>

            <button
              onClick={() => router.push("/insights/caseStudies")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* About Video Section */}
      <div className="2xl:max-w-7xl 2xl:mx-auto w-full flex flex-col md:flex-row p-5 mt-10 gap-4">
        <div className="w-full rounded-lg">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About3.mp4"
            className="h-full w-full object-cover rounded-md"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>

        <div className="w-full mx-5 mt-5 md:mt-0">
          <h1 className="text-3xl sm:text-4xl text-center py-5 text-black font-bold">
            About GlobalXperts
          </h1>

          <p className="text-lg px-2 font-medium">
           At GlobalXperts, we understand that no two businesses are the same. That’s why we provide tailored solutions designed to meet your unique needs, whether it’s improving operational efficiency, securing your infrastructure, or scaling your IT capabilities, our commitment to excellence ensures that we don’t just meet expectations—we exceed them.
          </p>
        </div>
      </div>

      {/* Blue Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="2xl:max-w-7xl 2xl:mx-auto w-full flex flex-col md:flex-row p-5 mt-10 gap-4 2xl:py-16">
          <div className="w-full flex justify-center items-center">
            <p className="text-lg text-white sm:text-xl text-center">
              Welcome to GlobalXperts, your trusted partner in managed IT solutions. Based in the heart of Raleigh, North Carolina, we specialize in delivering comprehensive IT services that empower businesses to thrive in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About.webp"
              alt="People in an office setting"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="2xl:max-w-7xl 2xl:mx-auto mt-10 bg-gray-100 py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What We Do
            </h2>
            <p className="text-lg">As a full-service Managed Service Provider (MSP), we deliver a wide range of IT solutions designed to simplify technology and enable growth:</p>
            <ul className="list-disc list-inside text-black space-y-4">
              <li>
                <strong>Proactive IT Management:</strong> End-to-end monitoring, maintenance, and support to keep your business running seamlessly.
              </li>
              <li>
                <strong>Cybersecurity Services:</strong> Advanced protection against evolving threats, ensuring your data and systems are secure.
              </li>
              <li>
                <strong>Cloud Solutions:</strong> Expertise in migrations, optimization, and management for AWS, Azure, and hybrid environments.
              </li>
              <li>
                <strong>Backup & Disaster Recovery:</strong> Robust strategies to safeguard your data and minimize downtime in any scenario.
              </li>
            </ul>

            <button
              onClick={() => router.push("/contact-us")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact
            </button>
          </div>

          <div className="md:w-1/2">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/CollegrationAbout.webp"
              alt="People talking"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="2xl:max-w-7xl 2xl:mx-auto mt-16 px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col items-center text-center md:w-1/2">
            <div className="bg-green-200 rounded-full p-6 mb-4">
              <SiTransmission size={30} />
            </div>
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p>
              To empower businesses with innovative, reliable IT solutions.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col items-center text-center md:w-1/2">
            <div className="bg-blue-200 rounded-full p-6 mb-4">
              <GiNightVision size={30} />
            </div>
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p>
              To be the go-to MSP for trusted, transformative IT partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      
    </>
  );
}