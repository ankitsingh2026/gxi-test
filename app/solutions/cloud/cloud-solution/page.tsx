"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

const CloudSolution = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleToggle = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the AWS Migration Acceleration Program (MAP)?",
      answer:
        "The AWS Migration Acceleration Program (MAP) provides financial support and best practices to assist organizations in migrating to AWS efficiently and cost-effectively."
    },
    {
      question: "How does AWS support cloud migration?",
      answer:
        "AWS facilitates migration using tools like AWS Application Migration Service (MGN) and Database Migration Service (DMS) along with expert AWS guidance."
    },
    {
      question: "What is the Prolific I/O – Storage Accelerator?",
      answer:
        "A solution designed for workloads requiring high throughput or IOPS during peak periods while reducing idle infrastructure costs."
    },
    {
      question: "How can I save money during migration to AWS?",
      answer:
        "Organizations can use the AWS Migration Acceleration Program and tools like the Prolific I/O Storage Accelerator to optimize resources."
    },
    {
      question: "What if my workloads experience performance issues on AWS?",
      answer:
        "Using solutions like the Prolific I/O Storage Accelerator can improve throughput and performance for heavy workloads."
    }
  ];

  const services = [
    {
      title: "Amazon Web Services (AWS)",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/AWservice.jfif",
      description:
        "AWS is ideal when applications require extremely high performance or low latency across global regions.",
      bullets: [
        "AI & Machine Learning",
        "High-performance storage",
        "Greatest variety of services",
        "Widest global distribution",
        "Excellent cost-savings plans"
      ],
      link: "/solutions/cloud/aws"
    },
    {
      title: "Microsoft Azure",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/MicrosoftAzure.png",
      description:
        "Azure integrates perfectly with Microsoft services like Office 365 and is excellent for hybrid cloud solutions.",
      bullets: [
        "Integrates with Office 365",
        "Hybrid-cloud friendly",
        "Robust Security"
      ]
    },
    {
      title: "Google Cloud Platform (GCP)",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/google2.jpg",
      description:
        "GCP is well known for big data analytics and machine learning capabilities.",
      bullets: [
        "AI & machine learning",
        "Data and analytics",
        "High-performance capabilities"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Migration, Optimization, and Modernization</title>
        <meta
          name="description"
          content="Migration, Optimization, and Modernization"
        />
      </Head>

      {/* HERO */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">

            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Cloud Solutions
              </h1>

              <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full mt-10 p-4">
              <p className="text-lg text-white max-w-xl">
                Are you planning to migrate your business to the cloud? Do you
                have existing infrastructure in need of optimization or modernization?
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* PROVIDERS */}
      <div className="py-10 px-5 md:px-20 bg-gray-100 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">
          Choosing a provider
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              {service.link ? (
                <Link href={service.link}>
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="h-32 mx-auto mb-4"
                  />
                </Link>
              ) : (
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="h-32 mx-auto mb-4"
                />
              )}

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="text-gray-600 mt-2 text-left">
                {service.description}
              </p>

              <ul className="text-left mt-4 space-y-1 text-gray-700">
                {service.bullets.map((bullet, index) => (
                  <li key={index}>
                    ✔ {bullet}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>

      {/* MIGRATION + SUPPORT */}
      <div className="bg-white py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Migration Execution</h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Data Migration:</strong> Safely transferring workloads
                using AWS migration services.
              </li>
              <li>
                <strong>Application Migration:</strong> Rehosting or refactoring
                applications for AWS.
              </li>
              <li>
                <strong>Testing:</strong> Ensuring functionality and
                performance.
              </li>
            </ul>

          </div>

          <div className="lg:w-1/2">

            <h2 className="text-3xl font-bold mb-4">Post-Migration Support</h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>24/7 monitoring and support</li>
              <li>Cost optimization</li>
              <li>Performance improvement</li>
              <li>AWS partnership collaboration</li>
            </ul>

          </div>

        </div>

      </div>

      {/* WHY CHOOSE */}
      <div className="relative mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row justify-between max-w-6xl mx-auto">

        <div className="max-w-lg">

          <h5 className="text-3xl font-bold mb-6">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Cloud Solutions?</span>
          </h5>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Support across 120+ countries.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Around-the-clock IT support.
            </li>
            <li>
              <strong>Cost Efficiency:</strong> Access skilled IT professionals
              without staffing overhead.
            </li>
          </ul>

        </div>

        <div className="mt-10 lg:w-1/2">

          <img
            className="w-full aspect-video rounded-md shadow-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/mainMigration.png"
            alt="cloud migration"
          />

        </div>

      </div>

      {/* FAQ */}
      <div
        ref={faqSectionRef}
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h1 className="text-3xl font-bold mb-8">FAQs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {faqData.map((faq, index) => (

            <div key={index}>

              <h2
                className="text-xl font-bold cursor-pointer text-blue-500"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </h2>

              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}

            </div>

          ))}

        </div>

      </div>
    </>
  );
};

export default CloudSolution;
