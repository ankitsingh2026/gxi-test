"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
  FaCloud,
  FaBriefcase,
  FaDatabase,
  FaUserFriends,
  FaLightbulb,
} from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";

export default function TitanX() {
  return (
    <>
      <Head>
        <title>Titan X - Data Transformation Solutions - GlobalXperts</title>
        <meta
          name="description"
          content="Unlock actionable insights with TitanX-powered data transformation by GlobalXperts."
        />
        <meta
          name="keywords"
          content="Data Transformation, Advanced Analytics, Automation, TitanX"
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/solutions/cloud-solutions/titanx-data-transformation"
        />
      </Head>

      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col lg:flex-row items-center px-6 lg:px-16">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Titan X - Data Transformation
              </h1>

              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 text-white py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full mt-10 lg:mt-20 p-4">
              <p className="text-white text-lg max-w-xl">
                A solution to protect and transform your data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Overview</h2>

      <p className="text-lg max-w-6xl mx-auto p-4">
        Are you concerned about the integrity of your data? Are you tired of
        worrying about the threat of breaches? Meet Titan X, a cloud-based
        storage service that provides a secure, scalable, and cost-effective
        way to store and retrieve data.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-8">

        <FeatureCard
          icon={<CgPerformance />}
          title="Cutting-Edge Performance"
          text="Say goodbye to delays and enjoy seamless access to your data whenever you need it. Experience lightning-fast upload and retrieval speeds, leveraging the cutting-edge infrastructure and network capabilities."
        />

        <FeatureCard
          icon={<FaCloud />}
          title="Reliability"
          text="With a track record of 99.99% durability, your data always remains safe and accessible. Focus on your core business while we take care of your data protection."
        />

        <FeatureCard
          icon={<FaBriefcase />}
          title="Flexibility and Scalability"
          text="Optimize your storage costs with flexible pricing models. Pay only for the storage you use, eliminating unnecessary expenses and maximizing your return on investment. Adjust and scale your storage as your business grows."
        />

        <FeatureCard
          icon={<FaUserFriends />}
          title="Data Management"
          text="Easily manage growing volumes of data, reduce storage costs, and improve efficiency in your business operations. Stay ahead in the data game!"
        />

        <FeatureCard
          icon={<FaLightbulb />}
          title="Rock Solid Security"
          text="Benefit from encryption of data in transit and at rest. Make use of access control features and compliance certifications as well as audit logs, notifications, and API monitoring features to ensure that your data is safe at all times."
        />

        <FeatureCard
          icon={<FaDatabase />}
          title="Compliance and Governance"
          text="Titan X adheres to industry-leading compliance standards, including HIPAA, GDPR, and PCI DSS. Rest assured that your data remains compliant with regulatory requirements, minimizing legal risks and protecting your company’s reputation."
        />
      </div>

      {/* Service Packages */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-4">
        Service Packages
      </h2>

      <p className="text-center mb-8">
        With Titan X, you have options for protecting and analyzing data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">

        <PackageCard
          title="Basic Tier – Data Assurance"
          items={[
            "Hybrid single backup plane",
            "Default restore within region",
            "Optional restore cross-region",
            "Sensitive data discovery",
            "Object storage monitoring",
          ]}
        />

        <PackageCard
          title="Advanced Tier – Data Analytics"
          items={[
            "Data transformation",
            "Data cleanup",
            "Lakehouse architecture",
            "SQL queries",
            "Dashboard analytics",
          ]}
        />

        <PackageCard
          title="Premium Tier – Data Insights"
          items={[
            "Data insights",
            "Use-case models",
            "Custom ML models",
            "Domain-specific LLMs",
          ]}
        />

      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center">

        <div className="max-w-lg">
          <h3 className="text-3xl font-bold">
            Why Choose GlobalXperts for <span className="text-blue-600">Titan X</span>
          </h3>

          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
            <li>Global coverage across 120+ countries</li>
            <li>24x7 availability</li>
            <li>Cost-efficient technical resources</li>
          </ul>

          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Titan+X+Brochure.pdf.pdf"
            target="_blank"
            className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Download Brochure
          </a>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/OngoingSupport.avif"
            alt="Titan X"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

/* Reusable Components */

function FeatureCard({ icon, title, text }: any) {
  return (
    <div className="bg-white shadow-xl p-8 text-center rounded-lg">
      <div className="text-green-600 text-3xl mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm text-left">{text}</p>
    </div>
  );
}

function PackageCard({ title, items }: any) {
  return (
    <div className="bg-white shadow-xl p-8 rounded-xl">
      <h3 className="text-xl text-blue-700 font-semibold text-center">
        {title}
      </h3>

      <div className="border-b-2 border-blue-700 my-4"></div>

      <ul className="list-disc ml-6 text-gray-600">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}