"use client";

import Link from "next/link";
import {
  FaBalanceScale,
  FaClock,
  FaCog,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

export default function ManagedCyberSecurity() {
  return (
    <>
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 p-2">
                Network Operations Center - Cybersecurity
              </h1>

              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Protecting your digital world, one byte at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-2 pb-10 p-8">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Network Operations Center – Cyber Security
          </h2>

          <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
            Are you concerned about the security of your organization’s
            sensitive data? Do you want to protect your company from potential
            cyber threats that can harm your reputation, finances, and customer
            trust? If so, you need to invest in a Cyber Security NOC. Our Cyber
            Security NOC is designed to provide comprehensive protection against
            modern cyber threats.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/NetworkOperationsCenterCyberSecurity.jpg"
            alt="Cyber Security NOC"
          />
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="max-w-7xl mx-auto py-6 bg-gray-100 2xl:bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Why Choose GlobalXperts?
        </h2>

        <p className="text-lg text-gray-700 mb-8 text-center">
          Our Cyber Security NOC solution offers a unique value proposition to
          cloud or enterprise data center environments.
        </p>

        <div className="flex items-center justify-center p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">

            <Card icon={<FaShieldAlt />} title="Advanced Threat Detection and Response">
              Our XDR solution uses machine learning and deep packet inspection
              to identify and respond to known and unknown threats in real time.
            </Card>

            <Card icon={<FaClock />} title="24/7 Monitoring and Support">
              Our cybersecurity professionals monitor your network around the
              clock to protect against zero-day attacks, ransomware, and
              advanced threats.
            </Card>

            <Card icon={<FaDollarSign />} title="Cost-Effective Solution">
              Outsourcing cybersecurity reduces hiring, training, and management
              costs of an in-house security team.
            </Card>

            <Card icon={<FaBalanceScale />} title="Compliance and Regulatory Requirements">
              Meet regulatory requirements like HIPAA, GDPR, and PCI DSS while
              protecting sensitive business data.
            </Card>

            <Card icon={<FaCog />} title="Customized Security Solutions">
              Our cybersecurity solutions are tailored to meet the unique needs
              of your organization.
            </Card>

          </div>
        </div>

        <div className="w-full text-lg mb-4 text-gray-600 text-center p-4 md:p-0">
          <p>
            Don’t wait until a cyber-attack happens. Contact us today to learn
            how we can help protect your enterprise infrastructure.
          </p>
        </div>
      </div>
    </>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center min-h-[300px]">
      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-left p-2">
        {children}
      </p>
    </div>
  );
}