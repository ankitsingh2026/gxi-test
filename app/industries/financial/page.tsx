import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IT Solutions for Financial Services in USA - GlobalXperts",
  description:
    "GlobalXperts delivers IT solutions for financial services: secure, compliant infrastructure and cloud services tailored for banks, wealth firms and insurers.",
};

export default function Financial() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Financial Services
              </h1>

              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left mt-10 lg:mt-20 p-3">
              <p className="text-base lg:text-lg text-white max-w-xl leading-relaxed">
                We provide specialized IT solutions for financial institutions,
                focusing on efficiency, risk management, and innovative
                cloud-based platforms to optimize performance and enhance
                security.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white">
        <div className="p-4 sm:p-8 max-w-7xl mx-auto">
          <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              
              {/* Text */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Financial Services Solutions
                </h2>
                <p className="mt-3 text-lg sm:text-xl text-gray-500">
                  Elevate your financial success with GlobalXperts' advanced IT
                  solutions. We help financial institutions boost efficiency,
                  manage risks, and deliver superior customer experiences.
                </p>
              </div>

              {/* Image */}
              <div className="relative mt-8 lg:mt-0 lg:w-1/2">
                <Image
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/fincialImg.webp"
                  alt="Financial services and IT solutions"
                  width={700}
                  height={450}
                  className="w-full rounded-lg object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Overview
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              We provide specialized IT solutions for financial institutions,
              focusing on efficiency, risk management, and innovative
              cloud-based platforms to optimize performance and enhance
              security.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Our Expertise in Financial IT Solutions
            </h3>

            <div className="grid gap-8 lg:grid-cols-2">
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Risk Management Solutions
                </h4>
                <p className="text-gray-700">
                  Robust security measures and data analytics to ensure
                  compliance and protect sensitive financial data.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Cloud Integration
                </h4>
                <p className="text-gray-700">
                  Scalable cloud solutions tailored to financial sector needs,
                  improving data management and operations.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Advanced Data Analytics
                </h4>
                <p className="text-gray-700">
                  Data-driven insights to improve decision-making, customer
                  experiences, and financial performance.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Cybersecurity Solutions
                </h4>
                <p className="text-gray-700">
                  Customized security solutions to safeguard financial assets
                  and maintain customer trust.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}