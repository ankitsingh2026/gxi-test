"use client";

import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";

function MultiCloud() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqSectionRef = useRef<HTMLDivElement | null>(null);
 
  const handleToggle = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
 
  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const faqs = [
    {
      question: "What is multi-cloud?",
      answer:
        "Multi-cloud refers to the use of multiple cloud services from different providers such as AWS, Azure, and Google Cloud to avoid vendor lock-in and optimize performance and cost.",
    },
    {
      question: "Why is multi-cloud important?",
      answer:
        "Multi-cloud provides resilience, flexibility, and performance optimization by distributing workloads across multiple cloud environments.",
    },
    {
      question: "How does multi-cloud improve security?",
      answer:
        "Using multiple cloud providers allows organizations to apply redundant security controls and reduce the risk of single-provider failures.",
    },
    {
      question: "What are the challenges of multi-cloud?",
      answer:
        "Managing multiple providers introduces complexity in orchestration, security management, monitoring, and cost optimization.",
    },
    {
      question: "How can organizations optimize costs?",
      answer:
        "Companies can choose the best pricing models from each provider, use reserved instances, and dynamically scale workloads.",
    },
    {
      question: "Best practices for multi-cloud?",
      answer:
        "Have a clear strategy, unified security policies, centralized monitoring, and automation for deployment and management.",
    },
  ];

  return (
    <>
      <Head>
        <title>Multi-Cloud Solutions in USA - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts delivers expert multi-cloud solutions including AWS, Azure and GCP environments."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/solutions/cloud/multi-cloud"
        />
      </Head>

      <div>
        {/* HERO SECTION */}
        <div className="bg-blueCustomColor w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
              <div className="w-full text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                  Multi-Cloud Solutions
                </h2>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact-us"
                    className="bg-greenCustomColor2 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>

                  <button
                    className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={scrollToFAQs}
                  >
                    FAQs →
                  </button>
                </div>
              </div>

              <div className="w-full text-center lg:text-right mt-10">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto">
                  Revitalize your business with our Multi Cloud Solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="bg-white min-h-screen py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 lg:pr-8">
              <p className="mt-8 text-xl text-gray-500">
                At GlobalXperts, we build solutions that combine services from
                AWS, Azure, and Google Cloud to optimize performance, cost, and
                security while avoiding vendor lock-in.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <img
                className="w-full rounded-lg object-cover"
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/cloudSpace.png"
                alt="Server room engineer"
              />
            </div>
          </div>

          {/* BIG 3 */}
          <div className="bg-gray-100 p-4 mt-10">
            <h1 className="text-3xl font-bold text-center mb-8">The Big 3</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* AWS */}
              <CloudCard
                icon={<FaAws />}
                title="AWS"
                text="AWS provides the most comprehensive cloud ecosystem including AI, ML, storage, and global infrastructure."
              />

              {/* AZURE */}
              <CloudCard
                icon={<VscAzure />}
                title="Azure"
                text="Azure integrates perfectly with Microsoft services and offers excellent hybrid-cloud capabilities."
              />

              {/* GCP */}
              <CloudCard
                icon={<SiGooglecloud />}
                title="Google Cloud"
                text="GCP excels in big data, analytics, and machine learning applications."
              />
            </div>
          </div>

          {/* FAQ */}
          <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
              Frequently Asked Questions
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h2
                    className="text-xl font-bold cursor-pointer text-blue-500"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                  </h2>

                  {activeQuestion === index && (
                    <p className="text-lg mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiCloud;

function CloudCard({ icon, title, text }) {
  return (
    <div className="bg-white shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-6">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

        <p className="text-sm text-gray-600 text-center">{text}</p>
      </div>
    </div>
  );
}