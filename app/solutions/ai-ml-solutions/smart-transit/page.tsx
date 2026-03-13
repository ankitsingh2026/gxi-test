// File: app/solutions/smart-transit/page.jsx
"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import {
  FaEyeSlash,
  FaCogs,
  FaUsers,
  FaVideo,
  FaShieldAlt,
  FaMicrochip,
  FaChartLine,
  FaBell,
} from "react-icons/fa";
import { FaRobot, FaSyncAlt, FaClipboardList } from "react-icons/fa";


export default function SmartTransit() {
  return (
    <>
      <Head>
        <title>Smart Transit Solutions - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts’ Smart Transit solutions empower mobility networks—real-time data, connected systems & scalable infrastructure for modern transit operations."
        />
        <link rel="canonical" href="https://globalxperts.net/solutions/smart-transit" />
      </Head>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Smart Transit
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
                As population growth in our great cities increases, the strain
                on public transit increases. A crowded transit system can
                experience breakdowns, delays, and hazards to public safety.
                GlobalXperts presents Smart Transit – a solution that uses the
                power of AI, machine learning, and data analytics to provide key
                insights that can solve these problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  py-4 space-y-8 bg-gray-100 text-gray-900 p-2">
        <h2 className="text-3xl font-bold text-center">
          Today’s Transit Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaEyeSlash className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Limited Visibility",
              description:
                "Transit agencies lack real-time insights into passenger flow, asset utilization, and potential safety hazards.",
            },
            {
              icon: <FaCogs className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Inefficient Operations",
              description:
                "Manual data collection hinders proactive decision-making and resource allocation.",
            },
            {
              icon: <FaUsers className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Passenger Experience",
              description:
                "Passenger satisfaction has degraded due to inaccurate ETAs, overcrowding, and safety concerns.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center">The Solution</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaChartLine className="text-green-500 w-12 h-12 mx-auto" />,
              title: "Passenger Counting & Predictive Flow Analysis",
              description:
                "Expecting a rush hour at a particular station? With Smart Transit, you can monitor passenger numbers in real time and receive predictive analytics to optimize vehicle deployment.",
            },
            {
              icon: <FaCogs className="text-green-500 w-12 h-12 mx-auto" />,
              title: "Operational Efficiency & Planning",
              description:
                "Gain insights into asset utilization, route optimization, and predictive maintenance to optimize costs.",
            },
            {
              icon: <FaBell className="text-green-500 w-12 h-12 mx-auto" />,
              title: "Automated Incident Detection",
              description:
                "Detect and respond to incidents like overcrowding, suspicious activity, and safety hazards in real time.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-5">Solution Components</h2>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Section 1: Video Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Carousel */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3500 }}
                  loop={true}
                  className="w-full h-96"
                >
                  {["Subway_outside.png", "traffic2.jpg", "traffic3.jpg"].map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/smart-transit/${img}`}
                        alt={`Slide ${i + 1}`}
                        className="w-full h-[22rem] md:h-[24rem] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Card */}
              <div className="flex justify-center">
                <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-xl transition-shadow hover:shadow-2xl duration-300 flex flex-col justify-between md:min-h-[380px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="flex items-center justify-center bg-white  text-green-600 text-2xl mb-6">
                      <FaVideo />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Video Analytics</h3>
                    <ul className="text-gray-600 list-disc list-inside text-base space-y-3 text-left">
                      <li>
                        Smart Transit video analytics can detect anomalies, and identify patterns in real-time, providing valuable data for operations, security, and business intelligence.
                      </li>
                      <li>
                        Analyze traffic patterns, dwell times, and queue lengths to improve station layout and improve the overall passenger experience.
                      </li>
                      <li>
                        Detect suspicious activity, identify potential threats, and enable faster response times in public spaces.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Physical Security */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Card */}
              <div className="flex justify-center">
                <div className="bg-white shadow-xl p-7  rounded-2xl w-full max-w-xl transition-shadow hover:shadow-2xl duration-300 flex flex-col justify-between md:min-h-[380px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="flex items-center justify-center bg-white  text-green-600 text-2xl mb-6">
                      <FaShieldAlt />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Physical Security</h3>
                    <ul className="text-gray-600 list-disc list-inside text-base space-y-3 text-left">
                      <li>
                        Our services for Smart Transit include the supply, installation, and support of cameras, access control systems, and emergency response systems tailored to the needs of your transit system. We provide end-to-end support, from initial consultation and system design to installation, training, and ongoing maintenance.
                      </li>
                      <li>
                        Secure your transit system with IP cameras, thermal cameras, panoramic cameras, biometric scanners, card readers, and mobile credentials. Smart Transit is a scalable solution which we can seamlessly integrate with your existing infrastructure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Carousel */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl  order-1 md:order-2">
                <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true} className="w-full h-full">
                  {["Key_card_scanner.png", "Subway_camera1.png", "Subway_camera2.png"].map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/smart-transit/${img}`}
                        alt={`Slide ${i + 1}`}
                        className="w-full h-[22rem] md:h-[380px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Section 3: IoT Sensors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Carousel */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop={true} className="w-full h-full">
                  {["Model_cars.png", "Traffic_intelligence.png"].map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/smart-transit/${img}`}
                        alt={`Slide ${i + 1}`}
                        className="w-full h-[22rem] md:h-[24rem] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Card */}
              <div className="flex justify-center">
                <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-xl transition-shadow hover:shadow-2xl duration-300 flex flex-col justify-between md:min-h-[380px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="flex items-center justify-center bg-white  text-green-600 text-2xl mb-6">
                      <FaMicrochip />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">IoT Sensors</h3>

                    <ul className="text-gray-600 list-disc list-inside text-base space-y-3 text-left">
                      <li>
                        For Smart Transit, we can install and manage IoT sensors, and we can help you collect, analyze, and interpret data from these sensors to optimize operations, improve efficiency, and drive business decisions.
                      </li>
                      <li>
                        Environmental conditions such as temperature, humidity, and air quality can be monitored by the Smart Transit sensors, and this data can be used to optimize building management systems, improve energy efficiency, and ensure occupant comfort.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-gray-100 py-2 px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">AI & Machine Learning Solutions</h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="md:w-1/2 w-full">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/aimodels.webp"
                alt="AI Model"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full">
              <p className="text-lg text-gray-800">
                Machine Learning (ML) is the driving force behind modern AI solutions, transforming industries with intelligent automation and data-driven insights. Our expertise includes:
              </p>
              <ul className="list-disc ml-6 text-md mt-4 text-gray-700">
                <li>Large Language Models (LLMs) for advanced text understanding</li>
                <li>Small Language Models (SLMs) for lightweight applications</li>
                <li>Foundation Models for general-purpose AI tasks</li>
                <li>Custom ML Models tailored to specific business needs</li>
              </ul>
              <p className="text-md text-gray-800 mt-4">
                Machine learning enables many different types of solutions. Here are just a few examples below
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Smart Assistants</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRobot className="text-blue-600 w-12 h-12" />,
              title: "Document Transformations & Problem Solving",
              content: [
                "Generate real-time suggested responses and actions.",
                "Generate summarizations of content & knowledge bases.",
                "Help support teams solve customer problems quickly and accurately.",
              ],
            },
            {
              icon: <FaSyncAlt className="text-green-600 w-12 h-12" />,
              title: "Enhanced Manager Assist",
              content: [
                "Deliver concise contact summarization.",
                "Reduce time spent taking/reviewing notes or sharing context during agent transfers.",
                "Provide further insights into support performance.",
              ],
            },
            {
              icon: <FaClipboardList className="text-purple-600 w-12 h-12" />,
              title: "Improved Customer Self-Service Experience",
              content: [
                "Easily understand a customer's intent.",
                "Deliver LLM-powered recommendations for automated workflow configurations.",
                "Chatbots that act as customer-server agents.",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <ul className="text-gray-600 text-left list-disc list-inside">
                {item.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}