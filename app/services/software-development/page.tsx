"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  Code,
  Smartphone,
  Cloud,
  Globe,
  Database,
  Headphones,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react";

// import SDLCSection from "../Software Development/SDLCSection";
// import UIUXSection from "../Software Development/UIUXSection";
// import { EngagementModelsSection } from "../Software Development/EngagementModelsSection";
// import { WhyChooseSection } from "../Software Development/whyChoose";

const SoftwareDevelopment = () => {
const [activeService, setActiveService] = useState<number | null>(null);

  const IMAGES = {
    docker: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
    kubernetes: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg",
    mongodb: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
    aws: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
    google: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
    nodejs: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
    react: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    github: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    jenkins: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jenkins.svg",
    express: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
    terraform: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/terraform.svg",
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Application Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements with scalability and security at the core.",
      features: [
        "Agile Development",
        "Scalable Architecture",
        "Quality Assurance",
        "Performance Optimization",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Responsive, high-performance websites and web applications built with modern frameworks and best practices.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "SEO Optimization",
        "Modern Frameworks",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Leverage cloud platforms like AWS, Azure, and GCP for scalable, secure, and cost-effective solutions.",
      features: [
        "AWS Services",
        "Azure Integration",
        "GCP Solutions",
        "Cloud Migration",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Solutions",
      description:
        "Comprehensive enterprise-level systems to streamline operations and boost productivity.",
      features: [
        "ERP Systems",
        "CRM Integration",
        "Business Intelligence",
        "Workflow Automation",
      ],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Maintenance & Support",
      description:
        "Continuous support and maintenance to ensure your software runs smoothly and stays up-to-date.",
      features: [
        "24/7 Support",
        "Bug Fixes",
        "Performance Monitoring",
        "Regular Updates",
      ],
    },
  ];

  const technologies = [
    { name: "React", icon: IMAGES.react },
    { name: "Node.js", icon: IMAGES.nodejs },
    { name: "MongoDB", icon: IMAGES.mongodb },
    { name: "AWS", icon: IMAGES.aws },
    { name: "Docker", icon: IMAGES.docker },
    { name: "Kubernetes", icon: IMAGES.kubernetes },
    { name: "GitHub", icon: IMAGES.github },
    { name: "Jenkins", icon: IMAGES.jenkins },
    { name: "Express.js", icon: IMAGES.express },
    { name: "Terraform", icon: IMAGES.terraform },
    { name: "Google Cloud", icon: IMAGES.google },
  ];

  const benefits = [
    "10+ Years of Industry Expertise",
    "Agile Development Methodology",
    "End-to-End Project Management",
    "Scalable & Future-Proof Solutions",
    "Dedicated Support Teams",
    "Competitive Pricing",
  ];

  return (
    <>
      <Head>
        <title>Software Development</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* Hero CTA Link FIXED */}
        <Link
          href="/contact-us"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center group shadow-lg"
        >
          Start Your Project
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* SERVICES SECTION (unchanged logic) */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group cursor-pointer"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="w-16 h-16 bg-blueCustomColor rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies grid remains identical */}
 <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Software Development Vision
            </h2>
            <p className="text-lg text-gray-600">
              Empowering businesses through innovative technology solutions that deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Development Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end software solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group cursor-pointer"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="w-16 h-16 bg-blueCustomColor rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Master
              </h2>
              <p className="text-lg text-gray-600">
                Building solutions with industry-leading tools and frameworks
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center group"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm font-semibold text-gray-700 text-center">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <SDLCSection />
        <UIUXSection />
        <EngagementModelsSection />
        <WhyChooseSection /> */}
      </div>
    </>
  );
};

export default SoftwareDevelopment;