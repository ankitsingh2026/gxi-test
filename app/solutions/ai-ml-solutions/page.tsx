// File: app/solutions/gen-ai/page.jsx
"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaChartLine, FaAngleDoubleUp, FaAdjust } from "react-icons/fa";


export default function GenAI() {
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
      question: "What is GenAI and how can it help my business?",
      answer:
        "Generative AI (GenAI) produces novel content (text, images, code, audio) and can be integrated to automate content creation, agent assist, summarization, and many other workflows to reduce manual effort and improve customer & employee experiences.",
    },
    {
      question: "Do you provide hosted or on-prem AI solutions?",
      answer:
        "We offer flexible deployment models: fully cloud-hosted (AWS), hybrid (on-prem + cloud), or air-gapped/offline deployments when strict data governance is required.",
    },
    {
      question: "How do you protect sensitive data when using AI?",
      answer:
        "We implement data governance, encryption, tokenization, differential privacy strategies and careful model access controls to reduce exposure of sensitive information when building AI solutions.",
    },
    {
      question: "Can GenAI integrate with our existing contact center?",
      answer:
        "Yes — GenAI can be integrated as agent-assist, real-time summarization, auto-response bots or an intelligent routing layer, compatible with platforms like Amazon Connect, Cisco, Genesys and others.",
    },
  ];

  return (
    <>
      <Head>
        <title>AI/ML Solutions - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts unlocks value with AI & ML solutions - build, deploy and scale intelligent systems that drive insights, automation and growth for US businesses."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/solutions/ai-ml-solutions"
        />
      </Head>

      {/* HERO */}
      <div className="w-full">
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  AI Solutions
                </h1>

                <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact-us"
                    className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>

                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={scrollToFAQs}
                  >
                    FAQs <span className="ml-2">→</span>
                  </button>
                </div>
              </div>

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  Innovative artificial intelligence solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN: IMAGE + SUMMARY */}
      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-gray-100 rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/genaii.webp"
            loading="lazy"
            alt="AI and ML Solutions"
            className="object-cover h-auto w-auto rounded-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-800">AI Solutions</h2>
          </div>

          <p className="text-lg leading-relaxed text-gray-600">
            GlobalXperts can build AI/ML solutions for a wide range of
            capabilities. These capabilities can improve businesses in many
            meaningful ways.
          </p>

          <div className="mt-8">
            <Link
              href="/AI-Machine-Learning-on-AWS"
              className="px-6 py-3 bg-greenCustomColor text-white border border-green-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-16 inline-block"
            >
              AI & Machine Learning on AWS
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="bg-gray-100 2xl:bg-white p-4 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-8 text-center">
          GlobalXperts AI Solutions
        </h1>

        <div className="bg-gray-100 2xl:bg-white flex items-center justify-center 2xl:mt-8 mb-12 md:p-8 lg:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/* Card 1 */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <AiOutlineLineChart />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Improve Business Operations
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  And to ensure a seamless workflow, GlobalXperts also offers
                  AI/ML tools that can improve the internal operations of your
                  business, from management to security.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Document processing and insights</li>
                  <li>Content moderation</li>
                  <li>Data augmentation</li>
                  <li>Predictive maintenance</li>
                  <li>Quality control</li>
                  <li>Fraud detection</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <MdOutlineContentPaste />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Creativity and Content Creation
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  Our AI/ML tools can also help in enhancing your creative
                  content as well.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Text, image, and video generation</li>
                  <li>Product design</li>
                  <li>Music creation</li>
                  <li>Media enhancement</li>
                  <li>Modeling</li>
                  <li>Creating animations</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaChartLine />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Boosting Employee Productivity
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  We can also improve productivity within your business by
                  deploying AI/ML tools that can help employees accomplish their
                  tasks in an effective manner.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Conversational search</li>
                  <li>Agent assist</li>
                  <li>Content creation</li>
                  <li>Code generation</li>
                  <li>Text summarization</li>
                  <li>Sales scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization + CX section */}
        <div className="bg-gray-100 2xl:bg-white flex flex-col items-center justify-center 2xl:mt-8 mb-4 md:p-8 lg:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl">
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaAdjust />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                  Optimization
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  Our AI/ML offerings can be used to construct event-driven
                  workflows, rearchitect apps, modernize code, and build SaaS
                  platforms or SaaSify applications.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Event-driven workflows</li>
                  <li>App rearchitecture</li>
                  <li>Rapid modernization</li>
                  <li>SaaS platform builds</li>
                </ul>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaAngleDoubleUp />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Enhancing Customer Experience
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  GenAI can power chatbots, virtual assistants, post-call
                  analytics, personalization and identity verification.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Chatbots</li>
                  <li>Virtual assistants</li>
                  <li>Post-call analytics</li>
                  <li>Personalization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="max-w-7xl mx-auto p-8 bg-blue-300 rounded-lg shadow-xl mt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Industries That Benefit From AI
          </h2>
          <p className="text-lg text-gray-600">
            With GlobalXperts’s suite of AI/ML services, the following
            industries can leverage our solutions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Healthcare and Life Sciences
            </h3>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Industrial and Manufacturing
            </h3>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-lg p-7 text-center">
            <h3 className="text-xl font-semibold text-white">
              Financial Services
            </h3>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg p-9 text-center">
            <h3 className="text-xl font-semibold text-white">Retail</h3>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-pink-400 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Media and Entertainment
            </h3>
          </div>
        </div>

        <p className="text-gray-800 text-center mt-8 max-w-3xl mx-auto text-lg">
          AI and machine learning solutions can greatly benefit your business.
          Contact us today to learn more about the AI solutions we can build for
          you.
        </p>
      </div>

      {/* Why choose + brochure */}
      <div className="relative mt-8 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8 flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto">
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> AI Solutions</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong> Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>

          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/AI-ML+Brochure.pdf"
            download="AI_ML_Brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/aiSolutions.webp"
              loading="lazy"
              alt="AI and ML Solutions"
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto p-4 mt-10">
        <div ref={faqSectionRef}>
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Frequently Asked Questions
          </h1>

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
      </div>
    </>
  );
}