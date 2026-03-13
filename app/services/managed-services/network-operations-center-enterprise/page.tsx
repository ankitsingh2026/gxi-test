"use client";

import Link from "next/link";
import { MdOutlineReduceCapacity, MdSecurity } from "react-icons/md";
import { FaUniversalAccess, FaWatchmanMonitoring } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";

export default function ManagedNetworking() {
  return (
    <>
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 p-2 md:p-0">
                Network Operations Center – Enterprise Networking
              </h2>

              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Our Network Operation Center (NOC) is one of 3 centralized
                facilities responsible for monitoring and managing a customer’s
                network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/NetworkOperationsCenterEnterpriseNetworking.jpg"
            alt="Network Operations Center"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Network Operations Center – Enterprise Networking
          </h2>

          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            Our Network Operation Center (NOC) monitors network performance,
            diagnoses issues, and implements solutions to maintain reliability,
            availability, and security of enterprise networks.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto mt-10 px-4 bg-gray-100 2xl:bg-white">
        <h3 className="mt-6 text-2xl font-bold text-gray-900 text-center py-4">
          Enterprise Networking services offered by a NOC include:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8">
          {[
            {
              title: "Performance Optimization",
              description:
                "The NOC team identifies and implements performance optimizations to improve network efficiency and capacity.",
            },
            {
              title: "Network Configuration and Change Management",
              description:
                "Ensuring network changes are implemented consistently and safely.",
            },
            {
              title: "Network Documentation",
              description:
                "Maintaining accurate documentation for accessibility and understanding.",
            },
            {
              title: "Network Monitoring",
              description:
                "Continuous monitoring to identify issues before they impact business operations.",
            },
            {
              title: "Security Management",
              description:
                "Implementing firewalls, intrusion detection, and other security technologies.",
            },
            {
              title: "Incident Management",
              description:
                "Rapid response to outages and performing root cause analysis.",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2 border-b-2 border-blue-700">
                  {box.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="max-w-7xl mx-auto py-4 bg-gray-100 2xl:bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Why Choose GlobalXperts?
        </h2>

        <p className="text-lg text-gray-700 mb-8 text-center mt-4 pl-4 pr-4">
          The NOC plays a critical role in maintaining network health and
          ensuring business operations continue smoothly.
        </p>

        <div className="flex items-center justify-center p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">

            <Card
              icon={<FaWatchmanMonitoring />}
              title="Proactive Monitoring and Management"
            >
              Continuous monitoring allows quick resolution of issues before
              they impact business operations.
            </Card>

            <Card
              icon={<CgPerformance />}
              title="Improved Network Performance"
            >
              Optimizing network efficiency ensures faster and more reliable
              performance.
            </Card>

            <Card
              icon={<MdSecurity />}
              title="Enhanced Network Security"
            >
              Implementing security technologies to protect sensitive data.
            </Card>

            <Card
              icon={<MdOutlineReduceCapacity />}
              title="Reduced IT Costs"
            >
              Outsourcing network management reduces infrastructure and
              personnel costs.
            </Card>

            <Card
              icon={<FaUniversalAccess />}
              title="Access to Expertise"
            >
              Access trained network professionals capable of managing complex
              infrastructure.
            </Card>

          </div>
        </div>

        <div className="w-full text-lg mb-4 text-gray-600 text-center">
          <p>
            In summary, a NOC delivers secure and efficient network
            infrastructure allowing enterprises to focus on core business
            activities.
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

      <p className="text-sm text-gray-600 text-center">{children}</p>
    </div>
  );
}   