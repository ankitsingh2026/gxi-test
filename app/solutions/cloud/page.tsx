"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FcCustomerSupport } from "react-icons/fc";
import {
  CloudCog,
  CloudUpload,
  CloudLightning,
  Server,
} from "lucide-react";

export default function Cloud() {
  const images = [
    "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/aws2.jpg",
    "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/cloud.avif",
  ];

  const texts = [
    "Amazon Partner Information",
    "Microsoft Azure",
  ];

  const subTexts = [
    "Software and Services Staff Members – AWS Technology Competencies are a way for AWS.",
    "Overview Microsoft Azure – Optimize across workloads and environments with a comprehensive cloud platform.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFAQs = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question:
        "How does GlobalXperts support cloud migrations and optimization?",
      answer:
        "As an AWS Partner, we help clients plan, migrate, and optimize workloads using Well-Architected Frameworks, secure landing zones, and automation to reduce cloud costs while improving performance and scalability.",
    },
    {
      question: "Can GlobalXperts support hybrid environments?",
      answer:
        "Absolutely. We manage mixed environments from legacy data centers to modern cloud-native infrastructure and seamlessly integrate VMware, Cisco, Microsoft, AWS, and more.",
    },
    {
      question:
        "How can GlobalXperts help leverage AI and machine learning?",
      answer:
        "We identify practical AI/ML use cases such as generative AI, intelligent alerting, automation, and customer behavior modeling using scalable cloud-native tools.",
    },
    {
      question:
        "How can these technologies improve operational performance?",
      answer:
        "By applying AI/ML insights, automation, and DevOps practices, we reduce downtime, improve utilization, accelerate deployments, and enable data-driven decisions.",
    },
    {
      question:
        "Can GlobalXperts integrate advanced tech into legacy environments?",
      answer:
        "Yes. We design hybrid strategies using APIs, microservices, containerization, and automation layers to modernize gradually and securely.",
    },
    {
      question:
        "What ongoing support does GlobalXperts provide after migration?",
      answer:
        "We provide optimization, security monitoring, cost management, compliance, and 24/7 managed services support.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#010c41] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h1 className="text-5xl font-bold mb-6">Cloud</h1>

            <div className="flex gap-6">
              <Link
                href="/contact-us"
                className="bg-green-500 px-6 py-3 rounded-full font-bold"
              >
                Contact Us
              </Link>

              <button
                onClick={scrollToFAQs}
                className="bg-gray-300 text-black px-6 py-3 rounded-full font-bold"
              >
                FAQs →
              </button>
            </div>
          </div>

          <p className="max-w-xl text-lg">
            GlobalXperts delivers expert cloud solutions, from consulting
            and migration to DevOps and 24/7 support.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Overview</h2>
        <p className="text-gray-700 text-lg mb-4">
          GlobalXperts is your one-stop shop for cloud computing, offering
          expertise from strategy development to workload migration.
        </p>
        <p className="text-gray-700 text-lg">
          We align your people, processes, and technology ensuring visibility
          and resilience as your cloud infrastructure scales.
        </p>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 pb-20">
        <ServiceCard
          icon={<Server className="w-6 h-6 text-blue-600" />}
          title="Amazon Web Services (AWS)"
          link="/solutions/cloud/aws"
        />
        <ServiceCard
          icon={<CloudCog className="w-6 h-6 text-purple-600" />}
          title="Multi Cloud"
          link="/solutions/cloud/multi-cloud"
        />
        <ServiceCard
          icon={<CloudLightning className="w-6 h-6 text-yellow-500" />}
          title="Hybrid Cloud"
          link="/solutions/cloud/aws-hybrid-cloud"
        />
        <ServiceCard
          icon={<CloudUpload className="w-6 h-6 text-green-600" />}
          title="Cloud Migration"
          link="/solutions/cloud/cloud-solution"
        />
      </section>

      {/* PARTNERS */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={images[currentIndex]}
          alt="Cloud Partner"
          className="rounded-xl shadow-xl transition-all duration-500"
        />

        <div>
          <h3 className="text-3xl font-bold mb-4">
            {texts[currentIndex]}
          </h3>
          <p className="text-gray-600 mb-6">
            {subTexts[currentIndex]}
          </p>

          <div className="flex gap-4">
            <Link
              href="/solutions/cloud/aws"
              className="bg-green-500 text-white px-6 py-3 rounded"
            >
              Discover Solution
            </Link>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded"
            >
              <FcCustomerSupport />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto bg-gray-100 rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-blue-600">GlobalXperts</span>
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Global Coverage:</strong> 120+ countries supported.</li>
            <li><strong>24x7 Availability:</strong> Round-the-clock support.</li>
            <li><strong>Cost Efficiency:</strong> Access skilled IT resources when needed.</li>
          </ul>
        </div>

        <img
          src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/mainMigration.png"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3
              onClick={() =>
                setActiveQuestion(activeQuestion === index ? null : index)
              }
              className="text-xl font-bold cursor-pointer text-blue-600"
            >
              {faq.question}
            </h3>

            {activeQuestion === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>

      <div ref={contactRef}></div>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </Link>
  );
}