"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { FaTools } from "react-icons/fa";
import { SiBento } from "react-icons/si";

export default function OmniBot() {
  return (
    <>
      <Head>
        <title>OmniBot - GlobalXperts</title>
        <meta
          name="description"
          content="OmniBot from GlobalXperts uses AWS SageMaker for GenAI-powered conversations and workflows."
        />
        <meta
          name="keywords"
          content="OmniBot GenAI, AWS generative AI, chatbot automation, AI analytics"
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/solutions/aws-solutions/omnibot-genai"
        />
      </Head>

      {/* HERO */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center px-6 lg:px-16">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                OmniBot
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
                Omnibot is a GenAI-driven interaction platform built by
                GlobalXperts using Amazon SageMaker.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 max-w-7xl mx-auto mt-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/image+(9).png"
            alt="OmniBot"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:pl-6">
          <h2 className="text-3xl font-bold text-gray-800">OmniBot</h2>

          <p className="mt-4 text-gray-600">
            Imagine an interactive AI assistant customized for your business.
            OmniBot enables companies to build intelligent AI assistants for
            support, analytics, automation, and decision making.
          </p>

          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Omnibot+Brochure.pdf"
            target="_blank"
            className="inline-block mt-8 px-6 py-3 border border-blue-900 text-blue-700 rounded-xl hover:bg-blue-900 hover:text-white"
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* BENEFITS + FEATURES */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="bg-white shadow-xl p-8 text-center">
          <div className="text-green-600 text-3xl mb-4 flex justify-center">
            <SiBento />
          </div>

          <h3 className="text-xl font-semibold">Benefits</h3>

          <ul className="mt-4 list-disc text-gray-600 text-left ml-6">
            <li>Increase productivity</li>
            <li>Gain customer insights</li>
            <li>Conversational chatbots</li>
            <li>Decision recommendations</li>
            <li>Advanced analytics</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl p-8 text-center">
          <div className="text-green-600 text-3xl mb-4 flex justify-center">
            <FaTools />
          </div>

          <h3 className="text-xl font-semibold">Features</h3>

          <ul className="mt-4 list-disc text-gray-600 text-left ml-6">
            <li>Front-end using AWS Amplify</li>
            <li>Conversational interface using Amazon Lex</li>
            <li>Data storage with Amazon S3</li>
            <li>Text insights via Amazon Comprehend</li>
            <li>LLM generation using Amazon SageMaker</li>
            <li>Query processing with AWS Lambda</li>
          </ul>
        </div>
      </div>

      {/* PLATFORM FEATURES */}
      <div className="max-w-7xl mx-auto mt-12 bg-white border rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-center border-b pb-4">
          Platform Capabilities
        </h3>

        <ul className="mt-6 list-disc text-gray-600 ml-6 space-y-2">
          <li>Conversational AI interface</li>
          <li>Enterprise knowledge management</li>
          <li>Customer sentiment workflows</li>
          <li>Omni-channel communication</li>
          <li>Generative AI on AWS</li>
          <li>AWS Chatbot integration</li>
        </ul>
      </div>

      {/* WHAT OMNIBOT CAN DO */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-6">

        <Card
          title="Document Insights"
          items={[
            "Spell checking",
            "Document classification",
            "Key phrase extraction",
            "PII detection",
            "Sentiment analysis",
          ]}
        />

        <Card
          title="Chatbot"
          items={[
            "Natural conversations",
            "Customer support assistant",
            "Employee assistant",
            "Decision support",
            "Business insights",
          ]}
        />

      </div>

      {/* USERS */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-6">

        <Card
          title="Management Teams"
          items={[
            "Customer churn analysis",
            "Customer satisfaction scores",
            "Inventory insights",
          ]}
        />

        <Card
          title="Sales Teams"
          items={[
            "Lead generation",
            "Propensity-to-buy models",
            "Marketing personalization",
          ]}
        />

        <Card
          title="Customer Care"
          items={[
            "Feedback analysis",
            "Automated chat assistance",
          ]}
        />

      </div>
    </>
  );
}

function Card({ title, items }: any) {
  return (
    <div className="border rounded-lg p-6 text-center">
      <h3 className="font-semibold text-lg">{title}</h3>

      <ul className="mt-4 text-gray-600 list-disc ml-6 text-left">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}