"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  FaServer,
  FaCloud,
  FaCogs,
  FaArrowAltCircleUp,
} from "react-icons/fa";

import { DiModernizr } from "react-icons/di";
import { GiLevelTwoAdvanced } from "react-icons/gi";

import {
  SiAmazoncloudwatch,
  SiAmazons3,
  SiAmazoneks,
  SiAwslambda,
  SiAmazonec2,
  SiAmazondocumentdb,
} from "react-icons/si";

export default function AWSPage() {

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index:number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  /* SERVICES */

  const awsServices = [
    {
      title: "Amazon EC2",
      description:
        "Build scalable virtual machines in the cloud with 99.99% availability.",
      icon: SiAmazonec2,
      color: "text-blue-500",
    },
    {
      title: "Amazon S3",
      description:
        "Secure object storage that scales infinitely and stores data reliably.",
      icon: SiAmazons3,
      color: "text-red-500",
    },
    {
      title: "Amazon EKS",
      description:
        "Managed Kubernetes platform for containerized workloads.",
      icon: SiAmazoneks,
      color: "text-green-500",
    },
    {
      title: "AWS Lambda",
      description:
        "Run serverless functions without managing infrastructure.",
      icon: SiAwslambda,
      color: "text-yellow-500",
    },
    {
      title: "AWS Glue",
      description:
        "Build scalable ETL pipelines and data lakes with serverless tools.",
      icon: SiAmazoncloudwatch,
      color: "text-orange-500",
    },
    {
      title: "Amazon Bedrock",
      description:
        "Build generative AI applications using foundation models.",
      icon: SiAmazondocumentdb,
      color: "text-purple-500",
    },
  ];

  /* SOFTWARE */

  const software = [
    {
      title: "Data Storage & Analytics",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/DataStorage.webp",
      link: "/solutions/cloud-solutions/titanx-data-transformation"
    },
    {
      title: "High Performance Storage",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/HighPerformanceStorage.webp",
      link: "/solutions/aws-solutions/piosa-high-performance-storage"
    },
    {
      title: "Virtual Machines",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/VirtualMachine.webp",
      link: "/solutions/cloud-solutions/amazon-elastic-vmware-service"
    },
    {
      title: "AI & Machine Learning",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/AiMLinsight.webp",
      link: "/solutions/ai-ml-solutions"
    },
    {
      title: "Video Streaming",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/StreamingVideo.webp",
      link: "/solution/aws-solutions/opsis-live-streaming"
    },
    {
      title: "Contact Center",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/gxConnect.webp",
      link: "/solutions/aws-solutions/customer-collaboration"
    },
  ];

  /* FAQ */

  const faqs = [
    {
      q: "What AWS services does GlobalXperts provide?",
      a: "We offer consulting, migration, DevOps automation, architecture design and 24/7 managed cloud services."
    },
    {
      q: "How does cloud migration work?",
      a: "We analyze your infrastructure and migrate workloads using AWS migration frameworks."
    },
    {
      q: "What is Amazon S3?",
      a: "Amazon S3 is scalable object storage used for backups, files and analytics data."
    },
    {
      q: "What is Amazon EC2?",
      a: "EC2 provides scalable compute servers in the cloud."
    }
  ];

  return (
    <>
      <Head>
        <title>AWS Cloud Solutions | GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts delivers AWS consulting, migration and managed cloud services."
        />
      </Head>

      {/* HERO */}

      <section className="bg-blueCustomColor text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h1 className="text-5xl font-bold">AWS Solutions</h1>

            <p className="mt-6 text-lg">
              Build scalable, resilient and globally distributed cloud
              applications using Amazon Web Services.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/contact-us"
                className="bg-greenCustomColor2 px-6 py-3 rounded-full"
              >
                Contact Us
              </Link>

              <button
                onClick={scrollToFAQ}
                className="bg-gray-200 text-black px-6 py-3 rounded-full"
              >
                FAQs →
              </button>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            AWS provides the most comprehensive cloud platform in the world.
            GlobalXperts helps organizations design, migrate and manage AWS
            infrastructure with optimized cost and performance.
          </p>

        </div>
      </section>

      {/* OUR SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Service
            icon={<FaServer className="text-green-500 text-5xl" />}
            title="Customized Cloud Solutions"
            text="We design scalable AWS architectures tailored to your business."
          />

          <Service
            icon={<FaCloud className="text-green-500 text-5xl" />}
            title="Cloud Assessment"
            text="Analyze infrastructure and create optimized cloud strategies."
          />

          <Service
            icon={<FaCogs className="text-green-500 text-5xl" />}
            title="Cloud Integration"
            text="Seamless integration of AWS with your current infrastructure."
          />

          <Service
            icon={<FaArrowAltCircleUp className="text-green-500 text-5xl" />}
            title="Migration Services"
            text="Smooth migration to AWS with minimal downtime."
          />

          <Service
            icon={<GiLevelTwoAdvanced className="text-green-500 text-5xl" />}
            title="Optimization"
            text="Improve performance while reducing cloud costs."
          />

          <Service
            icon={<DiModernizr className="text-green-500 text-5xl" />}
            title="Modernization"
            text="Leverage AI, ML and analytics to modernize applications."
          />

        </div>

      </section>

      {/* AWS SERVICES */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Popular AWS Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {awsServices.map((service,i)=>{
              const Icon = service.icon
              return(
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                  <Icon className={`text-5xl mb-4 ${service.color}`} />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            })}

          </div>

        </div>

      </section>

      {/* SOFTWARE */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Software
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {software.map((item,i)=>(
            <Link
              key={i}
              href={item.link}
              className="border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <img src={item.img} className="h-48 w-full object-cover"/>
              <div className="p-4 text-center font-semibold">
                {item.title}
              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* FAQ */}

      <section ref={faqRef} className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {faqs.map((faq,i)=>(
            <div key={i}>
              <h3
                className="cursor-pointer font-semibold text-blue-600"
                onClick={()=>toggleFAQ(i)}
              >
                {faq.q}
              </h3>

              {activeQuestion===i && (
                <p className="text-gray-600 mt-2">{faq.a}</p>
              )}

            </div>
          ))}

        </div>

      </section>

    </>
  );
}


/* reusable component */

function Service({icon,title,text}:{icon:any,title:string,text:string}){

  return(
    <div className="flex gap-4">
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )

} 