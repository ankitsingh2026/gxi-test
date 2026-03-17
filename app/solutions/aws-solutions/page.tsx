// app/solutions/aws/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaDatabase, FaAngleDoubleUp, FaAdjust } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

 const metadata = {
  title: "AWS Cloud Migration​ & Managed Services in USA - GlobalXperts",
  description:
    "GlobalXperts delivers expert AWS solutions - design, migrate and manage your AWS environment from Raleigh, NC to businesses across the USA for secure, scalable growth.",
  keywords:
    "AWS cloud solutions, AWS migration, AWS security, AWS data solutions, AWS AI/ML solutions, AWS hybrid cloud implementation",
  authors: [{ name: "GlobalXperts" }],
  robots: "index, follow",
};

const Card = ({ title, link }: { title: string; link: string }) => (
  <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
    <a href={link} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
      {title}
    </a>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-3xl font-bold text-gray-900 mt-12">{title}</h2>
);

export default function AwsSolutionsPage() {
  return (
    <>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                AWS Solutions
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 text-left">
                Is your organization looking for a cloud solution? Have you poured over mountains of documentation
                and found yourself no closer to the system you need? At GlobalXperts, we build cloud solutions.
                Choose a branded solution or let us build a custom solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-8 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Our Cloud Solutions</h1>
          <p className="text-lg text-gray-600">Unlock the full potential of the cloud with our tailored solutions.</p>
        </div>

        {/* Cloud Solutions Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Titan X – Data Transformation" link="/solutions/cloud-solutions/titan-x-data-transformation" />
          <Card title="Customer Connect – Contact Center" link="/solutions/aws-solutions/collaboration-technologies" />
          <Card title="OmniBot – Chatbot" link="/solutions/AWS-solutions/omni-bot-genai" />
          <Card title="Opsis Streaming" link="/solutions/cloud-solutions/opsis-live-streaming" />
          <Card
            title="Prolific I/O Storage Accelerator"
            link="/solutions/aws-solutions/piosa-high-performance-storage"
          />
        </div>

        {/* Our Approach Section */}
        <SectionTitle title="Our Approach – Migration, Optimization, and Modernization" />
        <p className="mt-4 text-lg text-gray-700">
          We propose a new approach to cloud management that aligns with your people, processes, and technologies.
          This approach simplifies achieving the visibility and resilience needed to scale your cloud infrastructure
          seamlessly alongside your business growth.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Unlock the full power of the cloud by leveraging cutting-edge services and solutions tailored to your specific
          business goals. This will empower you to reach new heights of success.
        </p>

        {/* Why Choose GlobalXperts Section */}
        <SectionTitle title="Why Choose GlobalXperts?" />
        <p className="mt-4 text-lg text-gray-700">
          GlobalXperts stands out from traditional consultants, boutique firms, and cloud providers. We’re a one-stop shop
          for all your cloud computing needs, offering independent expertise and services throughout the entire journey –
          from crafting a winning strategy to migrating your workloads and continuously optimizing your cloud environment.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Our unmatched experience is built upon two decades of designing, deploying, integrating, and securing complex
          multi-cloud, data center, and networking solutions for industry leaders. We leverage this knowledge to bring
          together the best of all worlds – leading cloud providers, independent software vendors, and original equipment
          manufacturers – into a collaborative ecosystem.
        </p>

        {/* Business Outcomes Section */}
        <SectionTitle title="Business Outcomes of Cloud Transformation" />
        <ul className="mt-4 list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Save money:</strong> Maximize cost savings, explore new revenue channels, and streamline operations by
            minimizing infrastructure maintenance.
          </li>
          <li>
            <strong>Be more agile and flexible:</strong> Elastically scale cloud infrastructure to accommodate peak and
            off-peak periods.
          </li>
          <li>
            <strong>Collaborate better:</strong> Break down geographical barriers by offering instant access to essential
            resources and data for workers and customers everywhere.
          </li>
          <li>
            <strong>Speed time to market:</strong> Accelerate developers’ ability to design, test and deploy new products
            through automated infrastructure and delivery.
          </li>
          <li>
            <strong>Make data resilient:</strong> Leverage automated infrastructure and delivery pipelines to streamline the
            design, testing, and deployment of new products for developers.
          </li>
          <li>
            <strong>Enable innovation:</strong> Prepare your IT foundation for the transformative power of AI, machine learning,
            and the next wave of innovations.
          </li>
        </ul>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8 flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-12">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> AWS Solutions?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while accessing skilled IT professionals when and where
              you need them.
            </li>
          </ul>

          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GX+Migration+Services+Brochure.pdf"
            download="hybrid.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-8 mt-8 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/mainMigration.png"
              alt="AWS migration"
            />
          </div>
        </div>
      </div>

    </>
  );
}