"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { FaAngleDoubleUp } from "react-icons/fa";

// If you prefer app metadata, you can export `metadata` from this file (optional)

export default function CyberSecurity() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null);

  const handleToggle = (index) => {
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
      question: "Do you want to secure your data from cyber threats?",
      answer:
        "We provide comprehensive cybersecurity solutions to protect your data from all types of cyber threats, including malware, ransomware, and unauthorized access.",
    },
    {
      question:
        "Can you detect and respond to a ransomware attack confidently?",
      answer:
        "Our proactive threat detection and response strategies ensure that we can quickly identify and mitigate ransomware attacks, minimizing impact and facilitating a swift recovery.",
    },
    {
      question:
        "Are you protected against phishing and social engineering attacks?",
      answer:
        "We implement advanced security measures and conduct regular training to defend against phishing and social engineering attacks, safeguarding your organization from these common threats.",
    },
    {
      question:
        "Is your organization ready to prevent and handle a data breach?",
      answer:
        "We help you establish robust data breach prevention strategies and response plans, ensuring that your organization is well-prepared to handle any potential data breaches effectively.",
    },
    {
      question: "Is your cloud infrastructure secure and properly monitored?",
      answer:
        "We provide comprehensive security and monitoring solutions for your cloud infrastructure, ensuring that it remains secure from vulnerabilities and threats.",
    },
    {
      question:
        "Are your employees trained on the latest cybersecurity threats?",
      answer:
        "We offer ongoing training programs to keep your employees informed about the latest cybersecurity threats and best practices, enhancing your overall security posture.",
    },
  ];

  return (
    <>
      <div className="">
        {/* HERO */}
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Cybersecurity Practice{" "}
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

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  Protecting your systems, defending your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intro + Images */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
          <div className="md:text-center text-left lg:text-left lg:w-1/2 lg:pr-5">
            <p className="mt-3 text-lg text-black sm:mt-4">
              Properly managing your security infrastructure is critical to
              meeting the needs of a dynamic business environment and protecting
              your assets from the evolving threat landscape.
            </p>
            <p className="mt-3 text-lg text-black sm:mt-4">
              Effectively managing your security systems is a resource intensive
              effort that requires specialized expertise. Because of these
              factors, security management can quickly burden your team,
              shifting their priorities away from more substantial matters.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cyber-Security/cyberSecurityImg.png"
              className="h-full w-full object-cover rounded-lg shadow-lg"
              alt="Cyber Security Services"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cyber-Security/cyberSecurityImg2.png"
              className="h-full w-auto object-cover rounded-lg shadow-lg"
              alt="Cyber Security Service California"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>

          <div className="md:text-center text-left lg:text-left lg:w-1/2 lg:pr-5">
            <p className="mt-3 text-lg text-black sm:mt-4">
              Security must be considered in terms of physical access, social
              engineering, storage, prevention, identification, mitigation, and
              forensics. The network must be taken into consideration, from the
              IPS to the endpoints and all devices in between.
            </p>
            <p className="mt-3 text-lg text-black sm:mt-4">
              Companies have become highly connected on a global basis with the
              advancement of the Internet. Unified connectivity among
              manufacturers, dealers, partners, clients, and employees has
              provided many tangible benefits such as improved productivity,
              customer satisfaction, and higher ROI. The sheer complexity of
              seamlessly connecting disparate organizations both internally and
              externally has made their data more vulnerable to risk.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center mt-4">
            Our Cybersecurity Services
          </h2>
          <p className="text-center mt-5 text-gray-700 text-xl">
            Our security defense team takes protecting your business from cyber
            threats very seriously. That is why we have a particular focus in
            data center and cloud security. Here are a few ways we can help you.
          </p>

          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-4 md:p-8 lg:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mb-8">
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <AiFillProduct />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Penetration Testing
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts can perform both data center and remote
                    penetration testing to identify vulnerabilities in your
                    infrastructure. Our team will use a combination of manual
                    and automated techniques to simulate attacks and identify
                    weak points in your systems. Then, we’ll provide a detailed
                    report that outlines our findings and recommendations for
                    how to remediate any vulnerabilities we discovered.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdSecurity />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Security Vulnerability Assessments{" "}
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    Utilizing best industry practices, GlobalXperts offers
                    vulnerability scanning in executing our security assessments
                    to identify weaknesses in the entire network and provides
                    our customers with unbiased reporting and recommendations
                    for remediation and mitigation. GlobalXperts’ Security
                    Vulnerability Assessments assist companies in identifying
                    vulnerable risks in their internal and external network by
                    methodically scanning the environment with the most current
                    vulnerability signatures.
                  </p>
                </div>
              </div>

              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxCountdownTimer />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    24/7 Monitoring
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts engineers will monitor your metrics and take
                    appropriate actions based on your organization’s security
                    policies. GlobalXperts can also extend your security team
                    with 24/7 monitoring of your security devices and critical
                    information assets. Cisco-certified security experts analyze
                    and respond to potential incidents and vulnerabilities
                    before damage is done. Our Oracle SBC specialists are
                    available to design and implement thoughtfully crafted
                    Session Border Control solutions and rapidly troubleshoot,
                    isolate, and correct the most challenging routing,
                    switching, latency, QoS, and other SIP-related issues.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAngleDoubleUp />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Comprehensive Audit and Compliance Services{" "}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4   text-left">
                    GlobalXperts has extensive experience in auditing data
                    centers and cloud infrastructures for compliance with
                    industry standards and regulations. Our team can audit your
                    infrastructure to ensure that it is fully compliant with all
                    relevant standards, including PCI DSS, HIPAA, and GDPR, and
                    we can give you recommendations on how to achieve
                    compliance. This can help you avoid costly fines and
                    penalties as well as protect your business from reputational
                    damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional services & media */}
        <div className="bg-blueCustomColor p-10 mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Additional Services
              </h2>
              <div className="security-services mt-2">
                <p className="text-gray-300">
                  Our 24/7 monitoring and incident response services ensure your
                  security policies are enforced effectively. We specialize in:
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Firewall Management
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Session Border Control
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    DDoS Protection
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Security Logs Analysis
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Network Intrusion Prevention
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Vulnerability Scanning
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Threat Intelligence
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <img
                className="w-auto rounded-lg"
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cyber-Security/CyberServices.png"
                alt="Cyber Secuiry Service USA."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>
        </div>

        {/* Team / Certifications */}
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team is made up of cybersecurity experts with years of
              experience in the field. We stay up-to-date with the latest
              threats and trends in the industry, so you can be confident that
              you’re receiving the most effective and relevant security
              solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Industry Certifications
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>✅ Cisco CCST</li>
              <li>✅ Cisco CCNA Security</li>
              <li>✅ Cisco CCIE Security</li>
              <li>✅ AWS Certified Security – Specialty</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800 p-6 mt-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Customized Security Solutions
            </h3>
            <p className="text-gray-300">
              We understand that every business is different—that is why we’ll
              work with you to develop customized security solutions that meet
              your specific needs. Our services will be tailored to meet your
              unique requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-10">
            <h3 className="text-2xl font-semibold mb-4">Contact Us Today</h3>
            <p className="text-gray-300 mb-6">
              Every organization needs protection against cybersecurity threats.
              GlobalXperts is here to help. If you think your systems are
              vulnerable, don’t wait for Day Zero. Contact us today.
            </p>

            <Link
              href="/contact-us"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Why choose / Brochure */}
        <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto ">
          <div className="text-section max-w-lg">
            <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
              Why Choose GlobalXperts for
              <span className="text-blue-600"> Cyber Security?</span>
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
              href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/GX_Cybersecurity_v.1_draft.pdf"
              download="Cyber_Security.pdf"
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
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cyber-Security/cyber.png"
                alt="Cyber graphic"
              />
            </div>
          </div>
        </div>

        {/* FAQ */}
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

      </div>
    </>
  );
}