"use client";

import Image from "next/image";
import CareersPage from "./CareersPage";

export default function Careers() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Home /{" "}
              <span className="rounded-full text-sm text-gray-600">
                Career
              </span>
            </p>
          </div>

          {/* Description + Images */}
          <div className="flex flex-col lg:flex-row items-start gap-6 bg-gray-50 rounded-tr-xl rounded-br-xl">

            {/* LEFT TEXT */}
            <div className="flex-1 space-y-6 text-gray-800 p-2">

              <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-[#001846] pt-6 pl-6">
                  Discover Your Next Career Opportunity
                </h1>
              </div>

              <p className="text-[16px] text-gray-900 pt-0 pl-6">
                At GlobalXperts, we are building a future powered by innovation,
                collaboration, and expertise. Whether you are an experienced
                professional or just beginning your journey, this is where your
                skills create real-world impact.
              </p>

              <p className="text-[16px] text-gray-900 mt-[-8px] pl-6">
                Browse current job openings across various industries. Find
                roles that match your skills and career goals.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex md:w-1/2">

              <Image
                src="/Assets/careers/careers-logo.png"
                alt="careers team"
                className="rounded-tr-lg rounded-br-lg"
                priority
              />

            </div>

          </div>
        </div>
      </section>

      {/* Careers List Component */}
      <CareersPage />
    </>
  );
}