"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaCloud,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaDollarSign,
  FaExpand,
  FaUsers,
} from "react-icons/fa";

const metadata = {
  title: "Small & Medium Business Solutions (SMBs) - GlobalXperts",
  description:
    "GlobalXperts empowers small & medium-sized businesses across the USA with scalable IT services, cloud, cybersecurity and managed support for growth.",
  keywords:
    "Raleigh IT Services, Managed IT Raleigh, Local IT Provider Raleigh, Healthcare IT Raleigh, Finance IT Support, Education IT Solutions",
  robots: "index, follow",
};

export default function SmallandMediumBusinessPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqSectionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question:
        "Are you a Small and Medium Business looking to streamline operations?",
      answer:
        "SMBs are embracing cloud computing to streamline operations, cut costs, and scale IT resources, allowing them to focus on innovation and growth.",
    },
    {
      question: "What are the benefits of Infrastructure as a Service (IaaS)?",
      answer:
        "IaaS allows you to outsource infrastructure management by renting virtual resources like machines and storage, enabling scalability and cost reduction.",
    },
    {
      question: "How can data backup and recovery help protect my business?",
      answer:
        "Securely protect critical data with cloud storage, simplifying recovery and eliminating physical backup needs.",
    },
    {
      question: "What is Software as a Service (SaaS)?",
      answer:
        "SaaS allows you to access software via the cloud, covering CRM, HR, and more, with subscription-based pricing for cost-effectiveness.",
    },
    {
      question:
        "How can cloud collaboration and communication solutions benefit my business?",
      answer:
        "Leverage cloud-based software for business needs, ensuring accessible and cost-effective solutions.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      {/* HERO SECTION */}

      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row px-6 lg:px-16">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mt-10 lg:mt-20">
                Small & Medium Business Solutions (SMBs)
              </h1>

              <div className="flex flex-col sm:flex-row mt-6 gap-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left lg:mt-20 p-4">
              <p className="text-white text-lg max-w-xl">
                Do you run a small business? Does the scale of enterprise
                solutions present a barrier to entry? Let us break barriers
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW */}

      <div className="bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-1">
        <h1 className="text-3xl font-bold text-center mt-10">Overview</h1>

        <p className="text-lg text-gray-600 p-6">
          We build cloud solutions for businesses of all sizes. Whether you are
          a Fortune 500 enterprise, a small business, or anything in between, we
          can build or select a solution that is right for you.
        </p>

        {/* BENEFITS GRID */}

        <div className="flex justify-center mb-12 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
            <BenefitCard
              icon={<FaExpand />}
              title="Scalability and Flexibility"
              text="One of the key advantages of cloud computing is the ability to scale resources according to business needs. Whether it's increasing storage capacity, expanding computing power, or accommodating more users, the cloud offers the flexibility to adjust resources on demand. This scalability ensures that SMBs small businesses can adapt to changing market conditions and handle increased workloads efficiently."
            />

            <BenefitCard
              icon={<FaDollarSign />}
              title="Cost Savings"
              text="Cloud computing can be cost-effective for small businesses due to its pay-as-you-go model. Instead of investing in expensive hardware and software licenses upfront, businesses can pay for cloud services based on their actual usage. This reduces capital expenditures and allows them to allocate their resources more efficiently. Additionally, SMBs businesses can avoid costs related to maintenance, upgrades, and the physical space required for in-house infrastructure."
            />

            <BenefitCard
              icon={<FaShieldAlt />}
              title="Enhanced Security"
              text="We build security into our solutions, ensuring that you have access to advanced security and compliance features, such as encryption, access controls, backups, disaster recovery mechanisms, and compliance certifications to protect your data and meet regulatory requirements. We also take advantage of the robust security measures implemented in cloud services. Cloud infrastructure is designed to offer high availability, ensuring that businesses have reliable access to their applications and data."
            />

            <BenefitCard
              icon={<FaServer />}
              title="Infrastructure as a Service"
              text="Our solutions can make use of infrastructure as a service. SMBs Small businesses can use IaaS to offload their infrastructure management to cloud service providers. Instead of maintaining their own servers and data centers, they can rent virtualized computing resources, such as virtual machines, storage, and networking —from the cloud. This allows SMBs businesses to scale their infrastructure as needed, reducing costs and increasing flexibility. We can help select the service that is right for you."
            />

            <BenefitCard
              icon={<FaDatabase />}
              title="Data Backup & Recovery"
              text="Our solutions are designed to protect your data at all times. Cloud storage services provide SMBs with reliable data backup and recovery solutions. Storing critical business data in the cloud ensures that it is securely protected and can be easily recovered in case of data loss or system failures. Cloud backup also eliminates the need for physical backup devices and simplifies the backup process."
            />

            <BenefitCard
              icon={<FaCloud />}
              title="Software as a Service"
              text="We can build or select SaaS solutions that fit your business. SMBs Small businesses often leverage SaaS applications to access software and services through the cloud. This eliminates the need to install and maintain software locally on individual machines. The SaaS applications we provide can cover a wide range of business needs, including customer relationship management, human resources, accounting, project management, and more. SMBs Businesses can pay for SaaS on a subscription basis, making it cost-effective and easily accessible."
            />
          </div>
        </div>
      </div>

      {/* COLLABORATION CARD */}

      {/* <div className="flex justify-center bg-gray-100 mb-8 py-4">
        <div className="bg-white shadow-2xl p-8 text-center max-w-md">
          <div className="flex justify-center text-green-600 text-3xl mb-4">
            <FaUsers />
          </div>

          <h3 className="font-semibold text-lg">
            Collaboration and Communication
          </h3>

          <p className="text-gray-700 text-sm mt-4 text-left">
            Need a collaboration solution? We can build it or help you acquire a pre-built one. Cloud-based collaboration tools and communication platforms enable SMBs to improve teamwork and communication among their employees. These platforms often include features such as file sharing, document collaboration, real-time messaging, video conferencing, and project management. By centralizing these tools in the cloud, SMBs can enhance productivity and facilitate remote work.
          </p>
        </div>
      </div> */}

      {/* CTA */}

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="text-2xl font-semibold">
          Let Us Build a Solution for You
        </h3>

        <p className="text-gray-700 text-lg mt-3">
          We understand the challenges small businesses face competing with
          larger organizations. Our goal is to provide scalable cloud solutions
          priced based on usage.
        </p>
      </div>

      {/* FAQ */}

      <div className="max-w-7xl mx-auto p-4">
        <div ref={faqSectionRef}>
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h2
                  className="text-xl font-bold cursor-pointer text-blue-500"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h2>

                {activeQuestion === index && (
                  <p className="text-lg mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* BENEFIT CARD COMPONENT */

function BenefitCard({ icon, title, text }: any) {
  return (
    <div className="bg-white shadow-2xl p-8 hover:shadow-xl transition min-h-[300px]">
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg w-16 h-16 flex items-center justify-center text-green-600 text-3xl mb-8">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>

        <p className="text-sm text-gray-600 text-left">{text}</p>
      </div>
    </div>
  );
}
