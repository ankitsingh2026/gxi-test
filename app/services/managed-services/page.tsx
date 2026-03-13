"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaAws } from "react-icons/fa";
import { FaCloud, FaServer, FaDatabase, FaLaptopCode, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import {
  Server,
  Shield,
  MonitorSmartphone,
  Building,
  Cloud,
  CloudCog,
  Activity,
  ArrowUpCircle,
  Settings,
} from "lucide-react";

import {
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiVmware,
  SiMlflow,
  SiCustomink,
} from "react-icons/si";

import { MdGroups, MdSupportAgent } from "react-icons/md";

const ManagedServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section
  const [selectedFeature, setSelectedFeature] = useState(null);

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
      question: "What sets GlobalXperts’ managed services apart from others?",
      answer:
        "With over 200 certified engineers, solution architects, and technicians, our managed services model spans global NOCs that proactively monitor, support, and secure your environment whether cloud, hybrid, or on-prem. Our NOC team is experienced in all major architectures and technologies and offers on-site break-fix services as an option in our SLAs.",
    },

    {
      question:
        "What types of tools are covered under Managed Collaboration Technologies?",
      answer:
        "Our engineers conduct technology refreshes by assessing your current infrastructure, replacing outdated equipment, and upgrading systems to ensure your network stays up-to-date with minimal disruption to business continuity.",
    },
    {
      question:
        "What kind of support can I expect from a Managed Help Desk service?",
      answer:
        "Managed Help Desk provides 24/7 support to resolve technical issues, assist with troubleshooting, and offer guidance on software or hardware problems. This ensures that your employees have continuous access to expert help, reducing downtime and enhancing workflow efficiency.",
    },
    {
      question: " How does Managed On-Site Service differ from remote support?",
      answer:
        " Managed On-Site Service involves having dedicated IT professionals physically present at your location to handle complex hardware installations, maintenance, and technical support. This service complements remote support by addressing issues that require hands-on intervention, ensuring all technical aspects of your business are covered.",
    },
    {
      question:
        "How does a NOC Cyber Security service protect my organization?",
      answer:
        "A NOC Cyber Security service monitors your network 24/7 for   any security threats, manages firewalls, performs regular vulnerability assessments, and responds to potential breaches. This proactive approach ensures that your business stays ahead of cybersecurity risks, safeguarding sensitive data and maintaining compliance with industry standards.",
    },
    {
      question: "Network Operations Center (NOC) – Enterprise Networking:",
      answer:
        "NOC Enterprise Networking monitors and manages the performance of your entire network infrastructure. This includes ensuring optimal bandwidth usage, minimizing network outages, and troubleshooting issues before they impact business operations, ensuring high availability and reliable connectivity for your organization.",
    },
  ];

  const features = [
    {
      icon: <FaLaptopCode size={30} className="text-red-600" />,
      title: "ERP Systems (SAP, Oracle, Microsoft Dynamics)",
      description:
        "We manage a wide array of enterprise applications, offering monitoring, optimization, and support to keep these platforms running smoothly.",
      point: [
        "Enterprise Resource Planning (ERP): Managing SAP, Oracle, and Microsoft Dynamics.",
        "Customer Relationship Management (CRM): Salesforce, HubSpot, and Dynamics.",
        "Collaboration Tools: Office 365, Google Workspace, Slack, Microsoft Teams.",
      ],
    },
    {
      icon: <SiJenkins size={30} className="text-indigo-600" />,
      title: "DevOps Pipelines and CI/CD Tools",
      description:
        "Our DevOps management services help streamline your software development process with effective CI/CD tools.",
      point: [
        "DevOps Tools: Jenkins, GitLab CI, Bamboo.",
        "Automation: Automated testing, deployment, and monitoring.",
        "CI/CD Pipeline Design: Tailored solutions for continuous integration and delivery.",
      ],
    },
    {
      icon: <SiDocker size={30} className="text-blue-500" />,
      title: "Cloud-Native Applications (Containers, Microservices)",
      description:
        "GlobalXperts also specializes in managing custom-built and cloud-native applications. Our DevOps expertise helps us support containerized applications, microservices architectures, and CI/CD workflows.",
      point: [
        "Container Orchestration: Docker, Kubernetes, AWS Fargate, OpenShift.",
        "Microservices: Designing, deploying, and managing scalable, distributed systems.",
        "DevOps Tools: Jenkins, GitLab CI, Bamboo.",
      ],
    },
    {
      icon: <SiKubernetes size={30} className="text-green-700" />,
      title: "Container Orchestration (Docker, Kubernetes)",
      description:
        "Our expertise ensures optimal management and orchestration of containers using Docker and Kubernetes.",
      point: [
        "Orchestration: Managing multi-container applications.",
        "Cloud-native architecture: Optimized for scalability and performance.",
      ],
    },
    {
      icon: <SiCustomink size={30} className="text-cyan-700" />,
      title: "Customer Relationship Management (CRM) platforms",
      description:
        "We assist in CRM platform management to enhance customer engagement and improve operational efficiency.",
      point: [
        "CRM Tools: Salesforce, HubSpot, Microsoft Dynamics.",
        "Customer support and engagement strategies.",
      ],
    },
    {
      icon: <SiMlflow size={30} className="text-blue-700" />,
      title: "AI and ML applications",
      description:
        "Our AI and ML application services ensure the smooth deployment and management of machine learning models.",
      point: [
        "AI/ML Frameworks: TensorFlow, PyTorch, Scikit-learn.",
        "Model Deployment: Deploying models in production environments.",
        "Continuous Monitoring: Monitoring AI/ML model performance.",
      ],
    },
  ];

  const handleFeatureClick = (index) => {
    setSelectedFeature(selectedFeature === index ? null : index);
  };

  const ManagedServicesPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Managed Services",
    description:
      "Our comprehensive managed services model is designed to support every aspect of your IT infrastructure, from endpoints to networking systems, from enterprise applications to advanced technologies like Artificial Intelligence (AI).",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/managed-service-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ManageCloud.mp4",
    embedUrl: "https://www.globalxperts.net/service/Managed-Services",
  };
  return (
    <>
     <Head>
        <title>Managed IT Solutions & Services USA - GlobalXperts</title>

        <meta
          name="description"
          content="GlobalXperts offers managed IT services across the USA - 24/7 monitoring, cloud and network management, and expert support to keep your business running."
        />

        <meta
          name="keywords"
          content="Managed IT Services, IT Support, IT Monitoring, IT Maintenance, GlobalXperts Managed Services, MSP"
        />

        <meta name="author" content="GlobalXperts Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="GlobalXperts Managed IT Services" />
        <meta
          property="og:description"
          content="Reliable and proactive Managed IT Services to optimize and secure your IT operations. Experience hassle-free IT management."
        />
        <meta
          property="og:image"
          content="https://globalxperts.com/images/managed-services.jpg"
        />
        <meta
          property="og:url"
          content="https://globalxperts.com/managed-services"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GlobalXperts Managed IT Services" />
        <meta
          name="twitter:description"
          content="Proactive IT management and support tailored to your business needs. Partner with GlobalXperts for exceptional service."
        />
        <meta
          name="twitter:image"
          content="https://globalxperts.com/images/managed-services.jpg"
        />

        <link
          rel="canonical"
          href="https://globalxperts.net/service/managed-services"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ManagedServicesPageJsonLd),
          }}
        />
      </Head>
      {/* Text Section */}
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed IT Services
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Our comprehensive managed services model is designed to support
                every aspect of your IT infrastructure, from endpoints to
                networking systems, from enterprise applications to advanced
                technologies like Artificial Intelligence (AI), Machine Learning
                (ML), Internet of Things (IoT), and DevOps. We offer managed
                services remotely or on-site, rain or shine, and always tailored
                to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-gray-200 p-8 rounded-lg shadow-lg max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8 2xl:mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 mr-10">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ManageCloud.mp4"
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
            <h2 className="text-3xl font-bold text-gray-800">
              {" "}
              Managed Cloud Application Services
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            GlobalXperts has been a trusted provider of managed IT services
            since 2005, guiding businesses of all sizes through the complexities
            of IT operations. With the rapid pace of technological advancement,
            companies are continually challenged to maintain a robust and
            scalable IT infrastructure while keeping up with emerging
            innovations. GlobalXperts ensures that businesses can focus on
            growth and innovation, knowing their IT environments—whether
            on-premises, cloud-based, or hybrid are expertly managed, secure,
            and optimized.
          </p>
        </div>
      </div>
      {/* our manged it services plans */}

      <h2 className="text-3xl font-bold text-center mt-10 mb-4 p-3">
        Our Managed IT Services Plans{" "}
      </h2>
      <p className="text-lg text-center mb-8 p-3">
        Here are the three managed services tiers we offer. Each tier builds on
        the previous one, with more comprehensive offerings at the higher
        levels.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-7xl mx-auto p-4">
        {/* Basic Tier – Data Assurance Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-10 text-center">
              Tier 1: Basic IT Management
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>
                <strong className="font-bold">24/7 System Monitoring:</strong>{" "}
                Continuous monitoring of critical systems to ensure uptime.{" "}
              </li>
              <li>
                <strong>Help Desk Support:</strong> Basic troubleshooting and
                remote assistance for end users.{" "}
              </li>
              <li>
                <strong>Patch Management: </strong> Regular updates and patch
                installations for software and systems.
              </li>
              <li>
                <strong>Antivirus and Malware Protection:</strong> Protection
                against viruses, malware, and other threats.
              </li>
              <li>
                <strong>Backup & Disaster Recovery:</strong> Automated daily
                backups with recovery options.
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Tier – Data Analytics Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
              Tier 2: Advanced IT Management{" "}
              <span className="text-sm">(Includes all Tier 1 services) </span>
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>
                <strong>Advanced Network Management:</strong> Proactive
                monitoring and optimization of network performance.
              </li>
              <li>
                <strong>Cloud Optimization and Management:</strong> Cloud
                resource usage management for cost savings and efficiency.
              </li>
              <li>
                <strong>Device Management (Mobile & Desktop):</strong>{" "}
                Centralized management of desktops, laptops, and mobile devices.
              </li>
              <li>
                <strong>Vendor Management:</strong> Coordination with
                third-party vendors for software and hardware support.
              </li>
              <li>
                <strong>User Training & Security Awareness:</strong> Regular
                sessions on best IT practices and cybersecurity. Chalk talk
                sessions on difficult tickets among NOC staff.
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Tier – Data Insights Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
              Tier 3: Comprehensive IT Management{" "}
              <span className="text-sm">
                (Includes all Tier 1 and Tier 2 services)
              </span>
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>
                <strong> Cybersecurity Incident Response:</strong> Full incident
                response in case of a breach or cyberattack.
              </li>
              <li>
                <strong>Custom IT Strategy & Roadmap:</strong> Development of a
                strategic IT plan mapped to business goals.
              </li>
              <li>
                <strong>Compliance Management:</strong> Ensuring systems meet
                industry regulations like HIPAA, GDPR, etc.
              </li>
              <li>
                <strong>Data Analytics and Reporting:</strong> Advanced
                analytics tools to provide insights into performance and
                productivity.
              </li>
              <li>
                <strong>AI/ML and IoT Support:</strong> Managing and supporting
                advanced technologies like AI, machine learning, and IoT with
                automation and optimized solutions to align with customer’s
                objectives.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-4xl font-bold text-center mt-12">
        {" "}
        <h4>Explore our managed services</h4>
      </div>
      <div className="bg-white max-w-7xl mx-auto flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
          {/* Field Engineering Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <MdGroups />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Managed Collaboration Technologies
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Are you looking for a comprehensive managed services solution
                for your collaboration technologies? We can help. Our team has
                extensive knowledge of: Cisco Unified Communications, Call
                Manager, and Cube, as well as E911 services SIP gateways and
                Telecom PSTN technologies.
              </p>
            </div>
            <Link
              href="/services/managed-services/managed-collaboration-technologies"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Technology Refresh Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <MdSupportAgent />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Managed Help Desk
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Are you tired of managing your company’s IT issues alone? Our
                Managed Help Desk service provides you with a team of highly
                skilled technicians who will work around the clock to keep your
                systems running smoothly. Let us handle your IT needs so that
                you can focus on growing your business.
              </p>
            </div>
            <Link
              href="/services/managed-services/managed-help-desk"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Onsite IT Support Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <FaCloud />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Managed Cloud Application
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Are you looking for a solution to manage your applications? Our
                team of experienced professionals provides 24/7 support for all
                your application needs. We take care of everything from
                infrastructure management to application deployment and
                maintenance so you can focus on your business.
              </p>
            </div>
            <Link
              href="/services/managed-services/managed-cloud-application"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:max-w-4xl md:mx-auto flex items-center justify-center  p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ">
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] md:min-w-[350px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <FaNetworkWired />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Network Operations Center - Enterprise Networking
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Do you need network operations support? Our Network Operation
                Center (NOC) is one of 3 centralized facilities that can monitor
                and manage your network infrastructure. The NOC is staffed by
                trained network professionals who monitor performance, diagnose
                and troubleshoot issues, and implement solutions to maintain the
                reliability, integrity, and availability of the network.
              </p>
            </div>
            <Link
              href="/services/managed-services/network-operations-center-enterprise"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Technology Refresh Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] md:min-w-[350px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Network Operations Center - Cybersecurity
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                Are you concerned about the security of your organization’s
                sensitive data? Our Cyber Security NOC is designed to provide
                comprehensive protection against modern cyber threats. Our SOC
                provides 24/7 monitoring and support as well as advanced threat
                detection and response.
              </p>
            </div>
            <Link
              href="/services/managed-services/network-operations-center-cybersecurity"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              Read More <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 max-w-7xl mx-auto flex items-center justify-center rounded-lg shadow-md">
        <div className="mt-8 bg-white p-8 w-full rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-gray-800 mb-4">
            On-Site Service
          </h4>
          <div className="border-b-2 border-blue-700 mb-2"></div>
          <p className="text-gray-700">
            GlobalXperts, because of its unique international field services
            capabilities, offers on-site support consisting of problem
            troubleshooting, replacing/upgrading products, scheduled maintenance
            visits, emergency callouts when there is loss of service, etc. The
            engineer dispatched to the site will have real-time access to an SME
            at our NOC facility. This service with a 4-hour response can be made
            part of your SLA or as a one-off service. We currently support
            hundreds of cities throughout the United States and 120 other
            countries.
          </p>
          <p className="text-center text-gray-600 mt-8">
            This tiered model gives businesses flexibility to choose the level
            of IT management they need, while allowing them to see value in
            upgrading to higher tiers.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Endpoint Management
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          GlobalXperts offers extensive endpoint management services,
          recognizing that endpoints represent one of the most vulnerable
          aspects of an IT infrastructure. These devices—whether desktops,
          laptops, mobile devices, or IoT—serve as gateways into your network
          and require constant monitoring, updating, and security enforcement to
          prevent breaches and downtime.
        </p>

        {/* Services Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Endpoint Services Include:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
            <li>
              <strong>Device Provisioning:</strong> Managing new device rollouts
              with custom configurations.
            </li>
            <li>
              <strong>Unified Endpoint Management:</strong> A comprehensive
              approach to managing and securing all endpoints through a single
              console.
            </li>
            <li>
              <strong>Patch Management:</strong> Ensuring all endpoints are
              updated with the latest security patches and software updates.
            </li>

            <li>
              <strong>Endpoint Security:</strong> Implementing advanced threat
              detection, anti-virus, and real-time monitoring to identify and
              block potential vulnerabilities.
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            We manage the full spectrum of endpoints, including traditional
            workstations, mobile devices, and the rapidly expanding world of
            IoT.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-4 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cloud Management
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          GlobalXperts’ cloud operations managed services can become an
          extension of your daily operations, supporting your business goals and
          objectives. Our team can deliver cloud capabilities to expertly
          support and simplify your operations through AI/ML tools, automation,
          and continuous innovation. We also concentrate on improving
          consistency, lowering costs and promoting compliance.
        </p>
        <div className="max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Infrastructure */}
            <div className="flex flex-col items-center space-y-2">
              <Server size={64} className="text-blue-500" />
              <span className="text-lg font-semibold">Infrastructure</span>
            </div>

            {/* Security */}
            <div className="flex flex-col items-center space-y-2">
              <Shield size={64} className="text-green-500" />
              <span className="text-lg font-semibold">Security</span>
            </div>

            {/* Applications & Endpoints */}
            <div className="flex flex-col items-center space-y-2">
              <MonitorSmartphone size={64} className="text-purple-500" />
              <span className="text-lg font-semibold">
                Applications & Endpoints
              </span>
            </div>

            {/* On-Premises */}
            <div className="flex flex-col items-center space-y-2">
              <Building size={64} className="text-red-500" />
              <span className="text-lg font-semibold">On-Premises</span>
            </div>

            {/* Private Cloud */}
            <div className="flex flex-col items-center space-y-2">
              <CloudCog size={64} className="text-indigo-500" />
              <span className="text-lg font-semibold">Private Cloud</span>
            </div>

            {/* Public, Hybrid, Multi-Cloud */}
            <div className="flex flex-col items-center space-y-2">
              <Cloud size={64} className="text-yellow-500" />
              <span className="text-lg font-semibold">
                Public, Hybrid, Multi-Cloud
              </span>
            </div>

            {/* Monitoring & Response */}
            <div className="flex flex-col items-center space-y-2">
              <Activity size={64} className="text-pink-500" />
              <span className="text-lg font-semibold">
                Monitoring & Response
              </span>
            </div>

            {/* Ticket Escalation */}
            <div className="flex flex-col items-center space-y-2">
              <ArrowUpCircle size={64} className="text-teal-500" />
              <span className="text-lg font-semibold">
                Ticket Escalation (L1 - L3)
              </span>
            </div>

            {/* Other Environments */}
            <div className="flex flex-col items-center space-y-2">
              <Settings size={64} className="text-gray-500" />
              <span className="text-lg font-semibold">Other Environments</span>
            </div>
          </div>
        </div>

        {/* Cloud Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* AWS Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/AWservice.jfif"
                alt="AWS"
                className="mx-auto h-20"
              />
            </div>
            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">AWS</h3> */}
            <p className="text-gray-700 text-left">
              Our managed services team can help activate and run a range of AWS
              transformation solutions that allow you to improve
              decision-making, increase productivity, and manage risk.
            </p>
          </div>

          {/* Microsoft Azure Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/MicrosoftAzure.png"
                alt="Microsoft Azure"
                className="mx-auto h-20"
              />
            </div>
            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Microsoft Azure
            </h3> */}
            <p className="text-gray-700 text-left">
              We can help you go beyond lift and shift to modernize and migrate
              your business with Microsoft Azure. Our teams can work with you to
              reimagine and drive critical cloud operations to help scale
              innovation, improve spending, and reduce cloud waste.
            </p>
          </div>

          {/* Google Cloud Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/google2.jpg"
                alt="Google Cloud Partner"
                className="mx-auto h-20"
              />
            </div>
            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Google Cloud
            </h3> */}
            <p className="text-gray-700 text-left">
              Accelerate your digital transformation. Whether your business is
              early in its journey or well on its way to digital transformation,
              Google Cloud can help solve your toughest challenges. AI creates
              entirely new ways to solve problems, engage customers, and work
              more efficiently.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-600 mt-10">
          We offer various options for cloud native monitoring services using
          either your network management systems (NMS) or GlobalXperts NMS tools
          to help you increase the availability and performance of your cloud
          applications and services. Our capabilities provide a holistic
          solution for gathering, analyzing, and responding to telemetry data
          from your cloud environment.
        </p>
      </div>

      <div className="2xl:max-w-7xl 2xl:mx-auto ">
        <div className="bg-gray-50 py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
              Cloud Management Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Our cloud management solutions are crafted to enhance business
              value by driving innovation that goes beyond conventional IT
              services:
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Provide flexible service delivery options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m-6-8h6"
                        />
                      </svg>
                    </div>
                    <span>Enable responsive, data-focused operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span>
                      Boost efficiency with cloud-native automation and
                      streamlining
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 15a4 4 0 00.88 2.88l8.12 8.12 8.12-8.12A4 4 0 0021 15v-6a4 4 0 00-4-4H7a4 4 0 00-4 4v6z"
                        />
                      </svg>
                    </div>
                    <span>
                      Allow your team to focus on high-impact, value-driven
                      projects
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hybrid IT Management
                </h3>
                <p className="text-gray-600 mb-4">
                  A hybrid strategy works best for many organizations. We
                  provide tailored services to help you design, oversee, and
                  enhance a hybrid IT environment that brings together the
                  strengths of both on-premises and cloud systems.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>Smooth workload transitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m-6-8h6"
                        />
                      </svg>
                    </div>
                    <span>Cloud-based backup and restoration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span>Cost efficiency with hybrid setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-50 2xl:bg-white max-w-7xl mx-auto px-4 py-4">
        {[
          {
            title: "Managed Database Services",
            description:
              "Managing databases involves complex tasks like administration, patching, upgrades, and performance analysis, which can be highly resource intensive. Let us manage these challenges, so you can allocate your resources where they are needed most.",
          },
          {
            title: "Upgrades and Patches",
            description:
              "Our database management services include installing critical updates, patches, and upgrades to ensure your databases remain secure and operate at peak efficiency, reducing potential risks.",
          },
          {
            title: "NOC - 24/7 DB Support",
            description:
              "Our network operations center (NOC) operates around the clock, 24/7/365, providing real-time support for any database issues. In addition to remote troubleshooting, our NOC coordinates the deployment of engineers to on-site locations when necessary, ensuring swift and effective problem resolution.",
          },
          {
            title: "Security Management",
            description:
              "GlobalXperts secures your data both at rest and in transit using advanced encryption methods. We monitor vulnerabilities, perform audits, and apply necessary security updates to maintain top-notch protection for your databases.",
          },
          {
            title: "Oracle Database Management",
            description:
              "We provide comprehensive solutions across the entire Oracle technology stack. Our team has deep expertise in Oracle technologies, including Multitenant, Real Application Clusters (RAC), GoldenGate, Active Data Guard, Advanced Security, and RMAN.",
          },

          {
            title: "Performance Optimization",
            description:
              "GlobalXperts’ database experts enhance performance by analyzing system metrics, identifying bottlenecks, and optimizing configurations, indexes, and query plans. We monitor resource usage and scale accordingly for faster, more efficient query execution.",
          },
          {
            title: "Microsoft SQL Database Management",
            description:
              "We have in-depth expertise in optimizing Microsoft SQL environments. GlobalXperts' certified SQL DBAs are experienced in handling multi-tenant setups, Always On Availability Groups (AOAG), Always Encrypted, Dynamic Data Masking, and JSON Support.",
          },
          {
            title: "Amazon (AWS) Database Management",
            description:
              "Our team has specialized knowledge and experience with AWS database services, including Amazon RDS for relational databases, Amazon DynamoDB for NoSQL solutions, Amazon Redshift for data warehousing, and Amazon ElastiCache for in-memory caching.",
          },
          {
            title: "Incident Diagnosis and Resolution",
            description:
              "Our team continuously monitors database performance, enabling rapid identification and resolution of issues, minimizing downtime, and keeping your business processes running smoothly.",
          },
        ].map((box, index) => (
          <div
            key={index}
            className="bg-white 2xl:bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-5">
              <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                {box.title}
              </h3>
              <div className="border-t-2 border-blue-700 mt-2 mb-4"></div>
              <p className="text-md text-gray-800">{box.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 py-10 px-5 sm:px-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Systems and Infrastructure Management
          </h1>
          <p className="text-gray-600 text-lg">
            Your IT infrastructure is the backbone of your organization’s
            business operations, from managing workloads<br></br> to storing
            critical data.GlobalXperts ensures that your servers, storage
            solutions, and virtualization platforms <br></br> are secure,
            efficient, and optimized to meet the demands of your business.
          </p>
        </div>
        <p className="text-gray-600 text-lg text-center mb-4">
          Our managed services cover the full range of infrastructure
          components, delivering the operational excellence you need:
        </p>

        {/* Infrastructure Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaServer size={30} className="text-green-600" />,
              title: "On-premises Data Centers",
            },
            {
              icon: <FaCloud size={30} className="text-blue-600" />,
              title: "Cloud Environments",
            },
            {
              icon: <FaNetworkWired size={30} className="text-purple-600" />,
              title: "Hybrid IT Environments",
            },
            {
              icon: <FaDatabase size={30} className="text-yellow-600" />,
              title: "Storage Systems (SAN, NAS)",
            },
            {
              icon: <SiVmware size={30} className="text-teal-600" />,
              title: "Virtual Machines",
            },
            {
              icon:<FaAws  size={30} className="text-blue-800" />,
              title: "IaaS Solutions",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-5 border hover:shadow-xl transition"
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-700">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Application and Software Management Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Application and Software Management
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            In today’s competitive landscape, applications are key drivers of
            productivity, innovation, and customer engagement. GlobalXperts
            delivers comprehensive management services to ensure your critical
            software operates at peak performance and stays secure.
          </p>

          <p className="text-gray-600 text-lg mb-6">
            From enterprise applications to specialized software, GlobalXperts
            ensures smooth, uninterrupted performance:
          </p>

          {/* Application Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-5 border hover:shadow-xl transition"
              >
                <div
                  onClick={() => handleFeatureClick(index)}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <div>{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-700">
                    {feature.title}
                  </h3>
                  <span
                    className={`transform transition-all ${
                      selectedFeature === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    &#8595;
                  </span>
                </div>

                {selectedFeature === index && (
                  <div className="mt-4 p-5 bg-white ">
                    <p className="text-gray-700 text-lg">
                      {feature.description}
                    </p>
                    {feature.point && (
                      <ul className="mt-4 space-y-2 text-gray-700 text-base">
                        {feature.point.map((point, pointIndex) => (
                          <li key={pointIndex} className="list-disc pl-5">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tell us about your business needs
          </h2>
          <p className="text-gray-600 mb-6">
            At GlobalXperts, our mission is to deliver comprehensive,
            forward-thinking IT solutions that empower your business. Whether
            managing legacy systems or deploying advanced technologies, we are
            your trusted partner in ensuring your IT infrastructure supports
            growth and fosters innovation. Tell us about your business needs.
            Contact us today.{" "}
          </p>
          {/* <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Contact Us
          </button> */}
        </div>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Managed Services?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
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
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/2022+GX+Managed+Services+brochure.pdf"
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
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/managedServiceB.webp"
              alt="GlobalXperts - Managed IT Services & AWS Solutions in Raleigh, USA"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h1>
        <div className="border border-blue-700 rounded-lg  mb-8"></div>
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
};

export default ManagedServices;