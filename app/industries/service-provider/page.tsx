import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IT Solutions for Service Providers - GlobalXperts",
  description:
    "GlobalXperts provides IT and cloud solutions for service providers across the USA - scalable infrastructure, managed support, and reliable performance.",
};

export default function ServiceProviders() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">

            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Service Providers
              </h1>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <p className="text-white max-w-xl mt-10 lg:mt-0">
              Our IT solutions improve efficiency, support growth, and drive
              innovation. From infrastructure to analytics, we align technology
              with your business goals.
            </p>

          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white">

        {/* Intro */}
        <div className="p-8 max-w-7xl mx-auto">
          <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
            <div className="flex flex-col lg:flex-row items-center justify-between">

              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Service Providers
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  IT services enhance delivery performance and customer
                  satisfaction. Advanced tools optimize operations and enable
                  data-driven insights.
                </p>
              </div>

              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <Image
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/service.webp"
                  alt="Service providers IT solutions"
                  width={700}
                  height={450}
                  className="w-full rounded-lg object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="py-12 px-6 flex justify-center">
          <div className="max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our IT solutions improve efficiency, support growth, and drive
              innovation. From infrastructure to data analytics, we align our
              services with your strategic goals.
            </p>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="py-12 px-6 flex justify-center">
          <div className="max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Enhancing Service Delivery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              IT solutions streamline operations and enhance service quality,
              enabling personalized customer experiences and scalable growth.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}