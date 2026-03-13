"use client";

import { useRef, useState } from "react";
import Link from "next/link";


import { FaServicestack, FaClipboardList } from "react-icons/fa";

export default function FieldServiceEng() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    faqSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const faqs = [
    {
      question:
        "What types of on-site services does your Field Engineering team provide?",
      answer:
        "We offer comprehensive on-site services, including equipment installation, network setup, structured cabling, site assessments, and troubleshooting for IT infrastructure.",
    },
    {
      question: "How does your team handle technology upgrades or refreshes?",
      answer:
        "Our engineers conduct technology refreshes by assessing your current infrastructure, replacing outdated equipment, and upgrading systems.",
    },
    {
      question: "Can you assist with network equipment rack-and-stack services?",
      answer:
        "We provide expert network rack-and-stack services ensuring proper installation, configuration, and testing.",
    },
    {
      question: "Do you offer site assessments before starting a project?",
      answer:
        "We perform detailed site assessments to understand your current IT setup and identify improvements.",
    },
    {
      question: "How do you ensure smooth equipment moves and migrations?",
      answer:
        "Our team plans and executes equipment moves and migrations with precision minimizing downtime.",
    },
    {
      question: "What kind of support can we expect during Device deployment?",
      answer:
        "We provide end-to-end device deployment services including configuration, installation, and testing.",
    },
  ];

  return (
    <>

      {/* HERO */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Field Engineering Services
              </h1>

              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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

            <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed mt-8 text-left">
                With over 5,000 highly skilled professionals positioned in
                120+ countries and 750+ cities, GlobalXperts is helping
                businesses across industries maintain high performance while
                reducing operational burdens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/image+(9).png"
            alt="Field Engineering Service"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h2 className="text-3xl font-bold text-gray-800">
            GlobalXperts Field Engineering Services
          </h2>

          <p className="mt-4 text-gray-600">
            Managing today’s complex IT environments demands agility,
            expertise, and a commitment to minimizing downtime. We provide
            unparalleled Field Engineering Services designed to seamlessly
            integrate with your business operations.
          </p>

          <button className="px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12">
            Download Brochure
          </button>
        </div>
      </div>

      {/* APPROACH */}
      <div className="bg-gray-100 max-w-7xl mx-auto py-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-12">
          Our Approach to IT Field Engineering Services
        </h2>

        <div className="flex items-center justify-center p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">

            <Card
              icon={<FaServicestack />}
              title="Service Solutions for Rapid Response"
            >
              At GlobalXperts, we emphasis speed and consistency. Downtime can
              significantly impact operations which is why our team is
              structured for swift mobilization.
            </Card>

            <Card
              icon={<FaClipboardList />}
              title="Onboarding and Alignment with Your Needs"
            >
              Our dedicated project managers work closely with your
              stakeholders to understand your business environment and IT
              infrastructure.
            </Card>

          </div>
        </div>
      </div>

      {/* CORE SERVICES */}
      <div className="bg-gray-100 py-2 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800">Our Core Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 py-4">
          {[
            {
              title: "Deployment and Installation",
              points: [
                "Rack and stack services for servers.",
                "Installation of SD-WAN, VoIP and Wi-Fi.",
                "Hardware and software installations.",
              ],
            },
            {
              title: "Specialized Telecom Solutions",
              points: [
                "Fiber optics and SD-WAN technologies.",
                "Network optimization services.",
              ],
            },
            {
              title: "Break-Fix and Troubleshooting",
              points: [
                "Emergency response for outages.",
                "Troubleshooting connectivity issues.",
              ],
            },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                  {box.title}
                </h3>

                <div className="border-t-2 border-blue-700 mt-2 mb-4"></div>

                <ul className="list-disc pl-6 space-y-2 text-gray-800 text-left">
                  {box.points.map((point, i) => (
                    <li key={i} className="text-md">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h1>

        <div className="border border-blue-700 rounded-lg mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h2>

              {activeQuestion === index && (
                <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

     
    </>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-2xl p-12 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[450px]">
      <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}