"use client";

import Image from "next/image";
import { FaChevronCircleDown } from "react-icons/fa";

function FAQSection() {
  const faqs = [
    {
      question: "What types of IT services does GlobalXperts offer?",
      answer:
        "GlobalXperts provides comprehensive IT solutions: cloud services, professional consulting, 24×7 managed services via global NOC, and field services delivering on-site support in over 120 countries.",
    },
    {
      question: "How do you ensure service quality and accountability?",
      answer:
        "We use standardized frameworks (ITIL, ISO, AWS Well-Architected), assign service managers, and leverage KPIs and reporting to ensure transparency and measurable results.",
    },
    {
      question: "What’s your approach to security and compliance?",
      answer:
        "We build secure-by-design solutions with layered protection, 24×7 monitoring, threat detection, and compliance support for HIPAA, PCI-DSS, SOC 2, and more.",
    },
    {
      question: "How do we get started with GlobalXperts?",
      answer:
        "Contact us for a consultation. We assess your needs, propose a customized solution, and guide you through cloud onboarding, managed services, or field support.",
    },
    {
      question: "What is orchestration and automation?",
      answer:
        "Automation eliminates repetitive IT tasks using Infrastructure as Code (IaC) and CI/CD pipelines to improve efficiency and reduce human error.",
    },
    {
      question: "Do you offer DevOps consulting?",
      answer:
        "Yes. We implement DevOps pipelines using Jenkins, GitLab, Docker, Kubernetes, Terraform, and AWS-native services.",
    },
  ];

  return (
    <div className="bg-white p-6 flex-1">
      <h2 className="text-3xl font-semibold text-center mb-2">
        If you have <span className="italic">questions</span>, we have answers
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <details key={index} className="group border-t border-gray-300">
            <summary className="flex justify-between items-center p-2 cursor-pointer group-hover:bg-gray-100 mt-3">
              <span className="font-medium text-left w-full">
                {item.question}
              </span>
              <FaChevronCircleDown className="ml-2" />
            </summary>

            <div className="p-4 text-gray-700">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

function FeaturedInsightCard() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex-1">
      <Image
        src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/ld10.jpg"
        alt="AI Digital Tools Impact"
        width={600}
        height={400}
        className="w-full rounded-lg mb-4 object-cover"
      />

      <h3 className="text-xl font-semibold mb-2">
        How AI Digital Tools Are Transforming Business Operations
      </h3>

      <p className="text-gray-600 text-sm">
        Discover how automation and AI-powered cloud platforms are reshaping
        workflows and improving decision-making across industries.
      </p>
    </div>
  );
}

export default function KnowledgeCenterSection() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 mt-2 mb-8">
      <div className="flex-1 md:w-2/3">
        <FAQSection />
      </div>

      <div className="flex-1 md:w-1/3">
        <FeaturedInsightCard />
      </div>
    </div>
  );
}