// File: app/solutions/iot-healthcare/page.jsx
"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
  FaSearchLocation,
  FaNetworkWired,
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaShieldAlt,
  FaVideo,
  FaMicrochip,
} from "react-icons/fa";
import { MdInventory } from "react-icons/md";


export default function IotHealthCare() {
  return (
    <>
      <Head>
        <title>Smart Asset Tracking - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts delivers IoT-in-healthcare solutions – real-time monitoring, connected devices and secure cloud analytics to boost patient care and operational efficiency."
        />
        <meta
          name="keywords"
          content="smart asset tracking, IoT solutions, healthcare facilities, inventory management, compliance, patient care"
        />
        <link rel="canonical" href="https://globalxperts.net/solutions/smart-asset-tracking" />
      </Head>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Smart Asset Tracking
              </h1>
              <div className=" px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right  lg:mt-20 mt-8 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Hospitals lose an estimated $4000 per bed annually due to
                inefficient asset tracking and equipment misplacement.
                Disorganized inventory management leads to equipment loss,
                inflated replacement costs and increased staff frustrations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  py-4 space-y-8 bg-gray-100 text-gray-900 p-2">
        <h2 className="text-3xl font-bold text-center">
          Challenges in Inventory and Asset Tracking
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <FaSearchLocation className="text-blue-500 w-12 h-12 mx-auto" />
              ),
              title: "Outdated Asset Location Insights",
              description:
                "Hospitals struggle to locate critical equipment quickly due to limited or outdated tracking systems, leading to delays in care and inefficient workflows.",
            },
            {
              icon: (
                <FaNetworkWired className="text-blue-500 w-12 h-12 mx-auto" />
              ),
              title: "Integration with Legacy Systems",
              description:
                "Many healthcare facilities use outdated infrastructure, making it difficult to integrate modern tracking solutions without disrupting existing operations.",
            },
            {
              icon: <FaShieldAlt className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Compliance and Data Security",
              description:
                "Ensuring asset tracking systems meet HIPAA and other regulatory standards while protecting sensitive location and usage data remains a critical concern.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center">The Solution</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <FaMapMarkedAlt className="text-green-500 w-12 h-12 mx-auto" />
              ),
              title: "Implement Sensor-Enabled Location Tracking",
              description:
                "GX is providing ‘cost effective’, accurate tracking of assets across healthcare facilities, improving utilization and reducing loss.",
            },
            {
              icon: (
                <FaProjectDiagram className="text-green-500 w-12 h-12 mx-auto" />
              ),
              title: "Adopt Interoperable, Scalable Platforms",
              description:
                "Use asset tracking systems designed with open APIs and HL7/FHIR compatibility to seamlessly integrate with existing hospital infrastructure and EHRs.",
            },
            {
              icon: (
                <FaShieldAlt className="text-green-500 w-12 h-12 mx-auto" />
              ),
              title: "Ensure Enterprise-Grade Security & Compliance",
              description:
                "Leverage end-to-end encryption, role-based access, and regular audits to maintain HIPAA compliance and protect against cybersecurity threats.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 max-w-7xl mx-auto py-4 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Solution Components
        </h2>

        <div className="space-y-10 ">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div className="flex justify-center">
              <div className="bg-white  p-8 rounded-md shadow-md  transition-shadow hover:shadow-2xl duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-white   text-green-600 text-2xl mb-4">
                    <FaMicrochip />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Sensors and Tag Based Infrastructure
                  </h3>
                  <ul className="text-gray-600 list-disc text-base space-y-3 text-left">
                    <li>
                      <strong className="text-gray-800">IoT & Sensor Technology:</strong>{" "}
                      Utilize RFID, BLE, or UWB tags and sensors attached to
                      medical equipment to track location and movement in real
                      time.
                    </li>
                    <li>
                      <strong className="text-gray-800">Wireless Network Integration:</strong>{" "}
                      RTLS relies on robust Wi-Fi or dedicated networks to
                      ensure consistent data transmission across the facility.
                    </li>
                    <li>
                      <strong className="text-gray-800">Scalable Coverage:</strong>{" "}
                      Designed to cover diverse environments—from patient rooms
                      to storage areas—ensuring full visibility throughout the
                      healthcare facility.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center">
              <img
                 src="/assets/SensorsandTagBased.png"
                alt="Sensor and Tag Based"
                className="w-full  h-[375px] rounded-md shadow-md object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="flex justify-center order-1 md:order-none">
              <img
                 src="/assets/assetsManagement.png"
                alt="Asset Management"
                className="w-full  h-[330px] rounded-md shadow-md object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex justify-center">
              <div className="bg-white rounded-md shadow-md p-8   transition-shadow hover:shadow-2xl duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-white  text-green-600 text-2xl mb-6">
                    <MdInventory />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Asset Management
                  </h3>
                  <ul className="text-gray-600 list-disc text-base space-y-3 text-left">
                    <li>
                      <strong className="text-gray-800">Centralized Dashboard:</strong>{" "}
                      Real-time view of all tracked assets, including location,
                      status, and maintenance schedules.
                    </li>
                    <li>
                      <strong className="text-gray-800">Data Analytics & Reporting:</strong>{" "}
                      Actionable insights on asset utilization, idle time, and
                      demand forecasting.
                    </li>
                    <li>
                      <strong className="text-gray-800">Mobile & Role-Based Access:</strong>{" "}
                      Role-specific access for clinicians and operations teams
                      on the go.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center">
            {/* Content */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-md shadow-md   transition-shadow hover:shadow-2xl duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-white  text-green-600 text-2xl mb-6">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Security & Compliance
                  </h3>
                  <ul className="text-gray-600 list-disc text-base space-y-3 text-left">
                    <li>
                      <strong className="text-gray-800">HIPAA-Compliant Architecture:</strong>{" "}
                      Protection of patient-associated data through federal
                      privacy standards.
                    </li>
                    <li>
                      <strong className="text-gray-800">End-to-End Encryption:</strong>{" "}
                      Data security in transit and at rest to prevent breaches.
                    </li>
                    <li>
                      <strong className="text-gray-800">Audit Trails & Monitoring:</strong>{" "}
                      Logs of asset movements, user actions, and access history
                      for audits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center">
              <img
                 src="/assets/SecurityCompliance.png"
                alt="Security and Compliance"
                className="w-full h-[330px] rounded-md shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}