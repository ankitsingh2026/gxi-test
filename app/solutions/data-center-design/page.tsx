"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import { FaDatabase, FaAngleDoubleUp, FaAdjust } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

function DataCenterDesign() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

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
  const nbsp = (count) => Array(count).fill("\u00A0").join("");

  const faqs = [
    {
      question:
        "How can we ensure a data center is scalable for future growth?",
      answer:
        "We design modular data centers that allow for incremental expansion. This approach lets you add capacity as your business grows without overhauling the entire facility. By planning for scalable power and cooling infrastructure, we ensure your data center can easily handle future demands while minimizing costs and disruptions.",
    },
    {
      question:
        "What is the most effective way to maintain uptime and reliability in a data center?",
      answer:
        "Our team designs data centers with redundancy in critical systems, including power, cooling, and networking. We implement N+1, 2N, or 2N+1 configurations based on your uptime requirements, ensuring that if one component fails, another is available to take over seamlessly, minimizing downtime and maintaining operational continuity.",
    },
    {
      question: "How can energy efficiency be optimized in data center design?",
      answer:
        "We integrate energy-efficient technologies like hot/cold aisle containment, liquid cooling, and free cooling methods to reduce energy consumption. Additionally, our designs use advanced monitoring systems to optimize energy use, improve Power Usage Effectiveness (PUE), and lower operational costs while meeting sustainability goals.",
    },
    {
      question:
        "What are the key considerations for ensuring physical and cyber security in a data center?",
      answer:
        "We implement comprehensive security solutions including multi-layered physical security with biometric access control, surveillance, and secured access zones. On the cyber front, we deploy advanced firewalls, encryption, and DDoS protection to safeguard against external threats. Our monitoring and response systems ensure swift identification and mitigation of any breaches.",
    },
    {
      question:
        "How can data center cooling solutions be optimized for different climates?",
      answer:
        "We offer tailored cooling solutions based on the climate and location of your data center. For cooler regions, we implement free air cooling, reducing energy costs. In warmer areas, we use advanced liquid cooling systems or efficient CRAC units. Our approach ensures optimal temperature management while minimizing environmental impact and operational costs.",
    },
    {
      question: "What are the benefits of a modular data center design?",
      answer:
        "A modular data center design allows for quick deployment and scalability. We provide pre-fabricated, plug-and-play modules that can be easily expanded as your needs grow. This reduces upfront costs, shortens build times, and offers the flexibility to meet your business’s evolving requirements without compromising performance or security.",
    },
  ];

  const DataCenterJsonLD = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Data Center Design/Build",
    description:
      "Is your organization looking into building your very own data center? Look no further than GlobalXperts for your data center needs!",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networking-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Data-Center-Build/CYBERVID.mp4",
    embedUrl: "https://www.globalxperts.net/solutions/data-center-design",
  };

  return (
    <>
      {/* JSON-LD injection (kept) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DataCenterJsonLD) }}
      />

      <div>
        {/* removed Navbar */}
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Data Center Design/Build
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

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
                <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  Is your organization looking into building your very own data
                  center? Look no further than GlobalXperts for your data center
                  needs!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mt-8">Overview</h2>
          <p className="md:text-center text-left mt-5 text-gray-700 text-lg md:text-xl ">
            Here at GlobalXperts, our team of highly skilled professionals can
            design and build data centers that are tailored to your
            requirements. With our diverse set of skills and expertise, we can
            ensure that your data center is designed and built in a timely and
            cost-effective manner. And because of our custom network
            architectures and robust security measures, GlobalXperts can support
            seamless operations for your business.
          </p>
        </div>

        <div className=" p-8 mt-8">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-5">
              <h2 className="text-2xl font-bold text-black sm:text-4xl">
                Our Process:
              </h2>
              <p className="mt-3 text-lg text-black sm:mt-4 text-left">
                Designing and building a data center requires a team of diverse
                minds capable of bringing together the best competencies and
                practices.
                <br /> Our team members will have the following roles:
              </p>
              <ul className="mt-3 text-lg text-black sm:mt-4 list-disc list-inside pl-6 text-left">
                <li>
                  <strong>Planning:</strong> Assessing your needs and capacity.
                </li>
                <li>
                  <strong>Design:</strong> Creating the blueprint for the layout
                  and systems.
                </li>
                <li>
                  <strong>Site Prep:</strong> Selecting and preparing the
                  location.
                </li>
                <li>
                  <strong>Construction:</strong> Building and installing your
                  systems.
                </li>
                <li>
                  <strong>Integration:</strong> Configuring and testing
                  equipment.
                </li>
                <li>
                  <strong>Commissioning:</strong> Finalizing and handing over
                  the solution.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
              <video
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Data-Center-Build/CYBERVID.mp4"
                className="h-full w-full object-cover rounded-lg shadow-lg"
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center" />
            </div>
          </div>
        </div>

        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 p-4  ">
          <h1 className=" text-3xl font-bold text-center  mb-2 mt-10 md:py-2 lg:py-0">
            Our Team
          </h1>
          <p className="md:text-lg  text-base leading-relaxed text-center text-gray-600 mb-4">
            Designing and building a data center requires a team of diverse
            minds capable of bringing together the best competencies and
            practices.
            <br /> Our team members will have the following roles:
          </p>
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-4 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <AiFillProduct />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Program Managers
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    Our program managers are experts in managing large, complex
                    data center projects from start to finish. They will work
                    closely with you to ensure that your project is delivered on
                    time, within budget, and to your exact specifications. They
                    will also keep you updated on project progress and any
                    potential risks that may arise.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdSecurity />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Project Managers
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    Our project managers are responsible for overseeing the
                    day-to-day operations of your data center project. They will
                    ensure that all tasks are completed on time and to the
                    highest quality standards. They will also be your main point
                    of contact throughout the project, providing regular updates
                    and addressing any concerns or questions you may have.
                  </p>
                </div>
              </div>

              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxCountdownTimer />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Network Architects
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    Our network architects will design a robust and scalable
                    network infrastructure that is tailored to your specific
                    business needs. They will work with you to understand your
                    network requirements and design a solution that is both
                    efficient and effective.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAngleDoubleUp />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Security Architects
                  </h3>
                  <p className="text-sm text-gray-600 mb-4   text-left">
                    Our security architects will design a data center that is
                    equipped with the latest security measures, including
                    firewalls and intrusion detection/prevention systems. They
                    will ensure that your data center meets all compliance
                    requirements and is protected against cyber threats.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAdjust />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Network Deployment Engineers
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Our network deployment engineers will deploy and configure
                    all network equipment, ensuring that your data center is up
                    and running smoothly. They will also provide ongoing support
                    and maintenance to ensure that your network remains secure
                    and reliable.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaDatabase />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Training Resources
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Our training resources will provide comprehensive training
                    to your IT staff, ensuring that they have the skills and
                    knowledge needed to manage your data center effectively.
                    They will also provide ongoing training and support to
                    ensure that your staff is up to date with the latest
                    technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="md:text-center p-8 text-left">
            At GlobalXperts, our team is comprised of individuals from varying
            faculties, ranging from management and training to networking and
            security. And by taking a collaborative approach with all our
            projects, we are dedicated to delivering cutting-edge data center
            services, working closely with your team to guarantee that the data
            center in question is tailored to your specific requirements.
          </p>
        </div>

        <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
          <div className="text-section max-w-lg">
            <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
              Why Choose GlobalXperts for
              <span className="text-blue-600"> Data Center?</span>
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
                <strong>Cost Efficiency:</strong>Avoid staffing overhead while
                accessing skilled IT professionals when and where you need them.
              </li>
            </ul>
            <a
              href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/GlobalXperts+DC-Cloud+Brochure.pdf"
              download="Data_Center.pdf"
              target="_blank"
              className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
            <div className="relative">
              <img
                className="w-full aspect-video rounded-md shadow-lg"
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Data-Center-Build/experties.png"
                alt="Data center expertise"
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

        {/* removed ContactCard & Footer per your request */}
      </div>
    </>
  );
}

export default DataCenterDesign;