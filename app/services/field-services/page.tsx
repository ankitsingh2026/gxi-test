"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiRefreshCw } from "react-icons/fi";
import { RiRouterLine } from "react-icons/ri";

const FieldServicesPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };

  const faqs = [
    {
      question: "Do you offer on-site support and repairs?",
      answer:
        "Yes, we do. Through our field services network, we offer rapid, SLA-backed on-site troubleshooting, equipment replacement, and repairs; often within 4 hours in 120+ countries worldwide. This service is a must for multinationals with remote locations.",
    },
    {
      question: "How does your team handle technology upgrades or refreshes?",
      answer:
        "Our engineers conduct technology refreshes by assessing your current infrastructure, replacing outdated equipment, and upgrading systems to ensure your network stays up-to-date with minimal disruption to business continuity.",
    },
    {
      question: "Can you assist with network equipment rack-and-stack services?",
      answer:
        "We provide expert network rack-and-stack services, ensuring proper installation, configuration, and testing of equipment to optimize performance and reduce downtime.",
    },
    {
      question: "Do you offer site assessments before starting a project?",
      answer:
        "We perform detailed site assessments to understand your current IT setup and identify any improvements needed for better efficiency, scalability, and performance.",
    },
    {
      question: "How do you ensure smooth equipment moves and migrations?",
      answer:
        "Our team plans and executes equipment moves and migrations with precision, minimizing downtime and ensuring a seamless transition of your systems from one location to another.",
    },
    {
      question: "What kind of support can we expect during 'Device deployment'?",
      answer:
        "We provide end-to-end device deployment services, from configuring and installing hardware to testing and ensuring everything works as intended. Our goal is to make the deployment process as efficient and smooth as possible.",
    },
  ];

  const FieldServicesPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Field Services",
    description:
      "we empower businesses by delivering expert Field Services to maintain, optimize, and upgrade your IT infrastructure.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/field-service-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ServicesVid.mp4",
    embedUrl: "https://www.globalxperts.net/service/Field-Services",
  };

  return (
    <>
      <Head>
        <title> Onsite IT Support & Field Services USA - GlobalXperts</title>

        <meta
          name="keywords"
          content="GlobalXperts provides nationwide field services across the USA - expert onsite IT support, hardware deployment, and maintenance for seamless business operations."
        />
        <meta
          name="Description"
          content="Field Engineering Services, IT Field Support, On-Site IT Services, GlobalXperts Field Engineers"
        />
        <meta name="author" content="GlobalXperts Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="GlobalXperts Field Services" />
        <meta
          property="og:description"
          content="Professional Field Engineering Services to support your IT infrastructure needs. Expertise delivered on-site."
        />
        <meta
          property="og:image"
          content="https://globalxperts.com/images/field-services.jpg"
        />
        <meta
          property="og:url"
          content="https://globalxperts.com/field-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GlobalXperts Field Services" />
        <meta
          name="twitter:description"
          content="On-site IT Field Services from certified engineers to ensure your infrastructure operates smoothly."
        />
        <meta
          name="twitter:image"
          content="https://globalxperts.com/images/field-services.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(FieldServicesPageJsonLd),
          }}
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/service/field-services"
        />
      </Head>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-between  lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                GlobalXperts Field Services
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4 ">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full w-full sm:w-auto"
                >
                  Contact Us
                </Link>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full w-full sm:w-auto"
                  onClick={scrollToFAQs}
                >
                  FAQs <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 text-left">
                At GlobalXperts, we empower businesses by delivering
                expert Field Services to maintain, optimize, and upgrade your IT
                infrastructure—whether it’s on-premises, cloud-based, or hybrid
                environments. With a proven global reach and 24/7 operational
                capabilities, we ensure your IT systems remain reliable, secure,
                and efficient.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-2xl hover:rounded-lg hover:shadow-xl transition-shadow duration-300  max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8 2xl:mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 mr-10">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ServicesVid.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="rounded-xl shadow-md object-cover h-auto w-full"
          ></video>
        </div>

        {/* Right Section - Text */}
        <div className=" w-full md:w-1/2 flex flex-col justify-center">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h3 className="text-3xl font-bold text-gray-800"> Field Services</h3>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            From remote support to on-site assistance, our technicians and
            engineers deliver results that minimize downtime and keep your
            operations running seamlessly.
          </p>
        </div>
      </div>

      <div className="bg-white max-w-7xl mx-auto flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-3xl">
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <FiRefreshCw />
              </div>
              <h5 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Technology Refresh
              </h5>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Stay ahead with our Technology Refresh services. We upgrade
                hardware and software, ensuring your IT infrastructure is
                current and optimized. Our seamless transitions enhance
                performance, security, and scalability while minimizing
                disruption to your operations.
              </p>
            </div>
            <Link
              href="/services/field-services/technology-refresh"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <RiRouterLine />
              </div>
              <h5 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Dispatch Services{" "}
              </h5>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Get on-site IT support for your routers, switches, and WiFi! Our
                expert technicians provide quick installation, configuration,
                maintenance, and repair services. With competitive pricing and
                flexible plans, we tailor solutions to minimize downtime and
                ensure your network runs smoothly.
              </p>
            </div>
            <Link
              href="/services/field-services/field-engineering-services"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-6">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
            Field Services Offerings
          </h3>
          <p className="text-lg text-gray-600">
            GlobalXperts provides comprehensive Field Services to meet your IT
            needs, whether remote, on-site, or technology refresh services. With
            a global presence and 24x7 availability, we deliver expert solutions
            to keep your business running smoothly.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-white shadow-xl rounded-none p-8 max-w-7xl mx-auto space-y-6">
          {/* Service Group */}
          {[
            {
              title: "Remote Services",
              description:
                "Our Remote Services provide businesses with instant, expert IT support, reducing response time and enabling efficient issue resolution—no matter where you are located.",
              points: [
                "Streamline new software rollouts with confidence. We ensure accurate and efficient deployments to prevent disruptions and improve productivity.",
                "Gain visibility into your IT environment. Our IT discovery services identify assets, systems, and dependencies to streamline optimization and upgrades.",
                "Customers and Smart Hands technicians that we dispatch can access our subject matter experts remotely to solve complex IT issues quickly, minimizing downtime and risk to your critical systems.",
              ],
            },
            {
              title: "On-Site Services",
              description:
                "When remote support isn’t enough, GlobalXperts dispatches expert engineers to provide hands-on solutions.",
              points: [
                "IT issues don’t wait, and neither do we. Our\u00a0four-hour on-site response\u00a0ensures critical problems are addressed immediately—day or night.",
                "From hardware failures to network disruptions, our skilled engineers resolve issues efficiently, minimizing downtime and restoring system functionality.",
              ],
            },
            {
              title: "Technology Refresh",
              description:
                "Outdated IT infrastructure hinders performance and increases costs. GlobalXperts handles end-to-end technology refresh projects with ease.",
              points: [
                "Device Replacement:  Upgrade routers, servers, switches, and other aging devices to optimize performance.",
                "Global Reach: With resources in over\u00a0120 countries, we simplify the technology refresh process for multinational organizations.",
                "Efficient Management: Seamlessly replace, configure and commission outdated hardware with minimal disruption to your operations.",
              ],
            },
            {
              title: "Smart Hands Support",
              description:
                "Our Smart Hands technicians act as your on-demand, on-site IT team to handle critical tasks.",
              points: [
                "Deploy and optimize IT infrastructure with precision. From servers to network devices, we ensure everything is installed, organized, and functional.",
                "Keep systems secure and up-to-date with upgrades, patching, and proactive management.",
                "Prevent downtime with scheduled visits that identify and address potential issues before they escalate.",
              ],
            },
            {
              title: "On-Site Troubleshooting",
              description:
                "GlobalXperts’ Smart Hands technicians are the eyes and boots on the ground for our subject matter experts (SMEs). From our NOC, SMEs can direct the efforts of our technicians and answer their questions on troubleshooting any time—day or night.",
              points: [],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-lg md:bg-white md:p-4  transition-shadow"
            >
              <h3 className="text-3xl font-semibold text-blue-700 mb-0">
                {service.title}
              </h3>
              <div className="border-t-2 border-blue-700 mt-2 mb-2"></div>
              <p className="text-black mb-2">{service.description}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                {service.points.map((point, i) => (
                  <li key={i} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Field Services?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over\u00a0120 countries\u00a0supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>
          {/* Download Brochure Button */}
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/Field+Services+brochure+2025.pdf"
            download="field_services.pdf"
            target="_blank"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          {/* Embedded image */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/FieldEngServices.png"
              alt="Field Services"
            />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
        <h5 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h5>
        <div className="border border-blue-700 rounded-lg  mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h5
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h5>
              {activeQuestion === index && (
                <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    
    </>
  );
};

export default FieldServicesPage;