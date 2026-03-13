"use client";

import  { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaMapMarkedAlt, FaCloudUploadAlt } from "react-icons/fa";

const ProfessionalServices = () => {
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
      question: "What professional services do you offer?",
      answer:
        "Our professional services team delivers IT strategy consulting, infrastructure design, technology integration, cloud-native transformations, and hands-on implementation that’s tailored to our customer’s unique environment and business goals.",
    },
    {
      question: "Is GlobalXperts the right fit for SMBs?",
      answer:
        "Yes. We specialize in serving small to mid-sized businesses globally, giving them access to enterprise-grade engineering, security, and IT operations without the enterprise-level cost or complexity.",
    },
    {
      question:
        "What is the purpose of Site Surveys for data centers and wireless networks?",
      answer:
        "Our site surveys provide detailed insights for pre-data center moves and wireless technologies, ensuring optimal design, installation, and network performance tailored to your needs.",
    },
    {
      question: "How does Technical Staff Augmentation work?",
      answer:
        "Our Technical Staff Augmentation allows you to scale your workforce with skilled professionals, including network architects and application developers, without the costs and risks of traditional hiring.",
    },
    {
      question: "What kind of support do you offer through Network Consulting?",
      answer:
        "Our Network Consulting services help you design, implement, and optimize robust, secure network infrastructures that align with your business goals and enhance performance.",
    },
    {
      question:
        "How do customized solutions fit into your Professional Services?",
      answer:
        "We work closely with your business to provide tailored solutions that address your unique challenges, optimizing operations, reducing costs, and boosting security and performance.",
    },
  ];
  const professionalVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "professional Services Overview",
    description:
      "We deliver professional on-site services including dispatch, technology refresh, migrations, and more.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/fieldservices-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/Professional.mp4",
    embedUrl:
      "https://www.globalxperts.net/service/Professional-Services",
  };

  const professionalFesVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Network Consulting Services",
    description:
      "Optimize your network with expert consulting — improving communication, collaboration, and workflow efficiency.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networking-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ProfessionalF.mp4",
    embedUrl:
      "https://www.globalxperts.net/service/Professional-Services",
  };

  return (
    <>
      <Head>
        <title>Professional IT Services - GlobalXperts</title>

        <meta
          name="description"
          content="GlobalXperts offers expert professional IT services in USA - IT strategy, design, deployment & optimization to ensure transformational technology projects succeed."
        />

        <meta
          name="keywords"
          content="Professional IT Services, IT Consulting, IT Implementation, IT Project Management, GlobalXperts Professional Services"
        />

        <meta name="author" content="GlobalXperts Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="GlobalXperts Professional IT Services" />
        <meta
          property="og:description"
          content="Comprehensive Professional IT Services to deliver your technology projects on time and within budget. Expertise you can trust."
        />
        <meta
          property="og:image"
          content="https://globalxperts.com/images/professional-services.jpg"
        />
        <meta
          property="og:url"
          content="https://globalxperts.com/professional-services"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GlobalXperts Professional IT Services"
        />
        <meta
          name="twitter:description"
          content="Specialized IT consulting and project services to meet your business objectives. Let GlobalXperts guide your success."
        />
        <meta
          name="twitter:image"
          content="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/ProfessionalServices.webp"
        />

        <link
          rel="canonical"
          href="https://globalxperts.net/service/professional-services"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalVideoJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalFesVideoJsonLd),
          }}
        />
      </Head>

      {/* HERO */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20">
          <div className="flex flex-col lg:flex-row justify-between lg:px-16">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mt-10">
                Professional Services
              </h1>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
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
                  FAQs →
                </button>
              </div>
            </div>
              <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-lg lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left mt-12">
                With GlobalXperts as your partner, you gain the critical
                infrastructure and strategic guidance needed to simplify daily
                operations, accelerate time-to-market, and ensure long-term
                success.
              </p>
            </div>
          </div>
          </div>
        </div>

      {/* Keep ALL your remaining JSX exactly same */}
      {/* Only change: <Link  href="..."> → <Link href="..."> */}

       <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-2xl hover:rounded-lg hover:shadow-xl transition-shadow duration-300  max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8 2xl:mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 mr-10">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/Professional.mp4"
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
              Professional Services
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            GlobalXperts offers a full suite of Professional Services designed
            to drive meaningful outcomes, enhance operational efficiency, and
            support your digital transformation journey. From IT Consulting,
            Cloud Migration, Implementation, and Staff Augmentation, our
            solutions are built to meet your unique business needs. We deliver
            industry-leading expertise, flexible service models, and end-to-end
            support to help you reduce complexity, optimize costs, and focus on
            achieving your business goals.
          </p>
        </div>
      </div>

      <div className="md:bg-gray-100 lg:bg-white md:p-2 max-w-7xl mx-auto">
        <div className="text-center mb-8 text-2xl font-bold text-gray-800 p-4">
          <h1>Explore Our Professional Services</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            {" "}
            We provide a range of services tailored to help your business
            succeed.
          </p>
        </div>
      </div>

      <div className="md:bg-gray-100 lg:bg-white ">
        <div className="md:bg-gray-100 md:p-4 lg:bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mb-8 max-w-5xl mx-auto">
          {/* Onsite IT Support Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/ps1.png"
                alt="Consulting and Advisory"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Consulting and Advisory
              </h3>
              <p className="text-sm text-gray-600 mb-0 text-left">
                GlobalXperts helps you prioritize the right initiatives to
                accelerate your digital transformation. Leveraging our deep
                expertise, we craft tailored strategies that enhance operational
                efficiencies with a multi-vendor approach. From planning and
                consulting to innovative IT design, we deliver comprehensive
                solutions to align technology with your business goals and drive
                measurable outcomes.
              </p>
            </div>
            <Link
               href="/services/professional-services/consulting-advisory"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Cloud Migration Services Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/CloudMigrationImage.png"
                alt="Cloud Migration"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Cloud Migration Services
              </h3>
              <p className="text-sm text-gray-600 mb-0 text-left">
                Leveraging our deep expertise, we work with you to develop
                strategies to improve operational efficiencies with a
                multi-vendor approach. Seamlessly transition to the cloud with
                GlobalXperts. Our team specializes in data center migrations,
                leveraging advanced tools and AWS expertise to ensure secure,
                efficient, and cost-effective solutions.
              </p>
            </div>
            <Link
               href="/services/professional-services/cloud-migration"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Implementation Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/ImplementationImage.png"
                alt="Implementation"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-5 text-left">
                Implementation
              </h3>
              <p className="text-sm text-gray-600 mb-0 text-left">
                We reduce your deployment risks and accelerate the adoption of
                new technologies and your time-to-market. GlobalXperts delivers
                expert installation and project management, ensuring seamless
                integration of hardware, software, and networks. Our proven
                approach minimizes downtime, optimizes performance, and sets
                your business up for success.
              </p>
            </div>
            <Link
               href="/services/professional-services/implementation"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              More <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Staff Augmentation Card */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
            <div className="flex flex-col items-center flex-grow">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/StaffAugmentationImage.png"
                alt="Staff Augmentation"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                Staff Augmentation
              </h3>
              <p className="text-sm text-gray-600 mb-0 text-left">
                When the need arises for something that requires additional
                resources, we have your back, whether it’s a wireless network, a
                systems upgrade, or leveraging Ai/ML to improve process
                performance and time-to-market. Our Technical Staff Augmentation
                program offers you access to solutions architects, PMs, cloud
                architects, programming support and more in over 100 countries.
              </p>
            </div>
            <Link
               href="/services/professional-services/staff-augmentation"
              className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
            >
              More <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex items-center justify-center  p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ">
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] md:min-w-[350px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaMapMarkedAlt />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Site Surveys
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  Looking for a reliable and experienced team to conduct site
                  surveys? We can help. Let us provide you with the reports and
                  insights that help your business to make the best use of your
                  site. We have assembled a team of highly skilled
                  professionals. Let us handle the fine details, so you can
                  focus on what differentiates your business.
                </p>
              </div>

            </div>

            {/* Data Center  Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] md:min-w-[350px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaCloudUploadAlt />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Data Center Migration
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  Are you tired of dealing with the complexity and high costs of
                  managing your own data center? Do you want to take advantage
                  of the flexibility and scalability of the cloud? Let us
                  migrate your workloads. Our team of experts will work with you
                  every step of the way, from planning and design to
                  implementation and optimization.
                </p>
              </div>
              <Link
                 href="/service/professional-services/data-center-migration"
                className="text-blue-700 text-sm font-medium hover:underline flex items-center justify-center mt-auto"
              >
                Read More <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blueCustomColor p-10 mt-20 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Professional Services
            </h2>
            <div className="security-services mt-2">
              <p className="text-gray-300">
                Our Professional Services offer a comprehensive range of
                solutions designed to support and enhance your business
                operations. Here's how our expertise can benefit you:
              </p>
              <ul className="service-list text-gray-300 space-y-2 mt-4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Consulting and Advisory
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Cloud Migration Services
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Implementation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Staff Augmentation
                </li>
              </ul>
            </div>
          </div>
          {/* Video Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <video
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/ProfessionalF.mp4"
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Professional Services?</span>
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
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/PS+Brochure.pdf"
            download="Professional_services.pdf"
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
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Professional-Services/ProfessionalServices.webp"
              alt="Professional Services"
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

export default ProfessionalServices;