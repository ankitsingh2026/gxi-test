"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoSection() {
  const PRIMARY = "#010c41";

  return (
    <section className="w-full">
      {/* -------------------- JOIN TEAM SECTION -------------------- */}

      <div className="bg-[#0c2d3a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join our team of experts
            </h2>

            <p className="text-gray-200 max-w-xl mb-6 leading-relaxed">
              If you have a restless curiosity and a drive for ingenuity, join
              our team and help shape the industry of IT. We're redefining
              digital transformation and work culture.
            </p>

            <Link
              href="company/careers"
              className="inline-block px-6 py-3 rounded-full font-semibold text-sm bg-white text-black hover:bg-gray-200 transition"
            >
              Explore Open Roles
            </Link>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIML.png"
              alt="team"
              width={160}
              height={160}
              className="rounded-full object-cover"
            />

            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/img2.png"
              alt="team"
              width={160}
              height={160}
              className="rounded-full object-cover"
            />

            {/* <Image
              src="/images/team3.jpg"
              alt="team"
              width={160}
              height={160}
              className="rounded-full object-cover"
            /> */}

            {/* <Image
              src="/images/team4.jpg"
              alt="team"
              width={160}
              height={160}
              className="rounded-full object-cover"
            /> */}
          </div>
        </div>
      </div>

      {/* -------------------- WHAT WE DO SECTION -------------------- */}

      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2  items-center">
          {/* Left Image */}
          <div className="flex justify-center  w-60 h-60 lg:w-96 lg:h-96">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/glo2.avif"
              alt="AI globe"
              width={900}
              height={920}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-4xl font-bold mb-6">What We Do</h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              At GlobalXperts, we excel in providing advanced engineering and
              technology solutions that harness the power of Artificial
              Intelligence (AI) and Machine Learning (ML).
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission is to drive digital transformation and innovation,
              building a digital, autonomous and sustainable future. We proudly
              partner with over 300 global customers, including 40% of the top
              100 innovators.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our commitment extends beyond technology. We foster a culturally
              inclusive environment while prioritizing sustainability and
              responsible innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
