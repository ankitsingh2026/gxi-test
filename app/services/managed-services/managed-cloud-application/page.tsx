"use client";

import Link from "next/link";
import { FaAngleDoubleUp, FaAdjust } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

export default function ManagedCloud() {
  return (
    <>
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed Cloud Application Service
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-10 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Need dependable support for your applications? Our 24/7 Managed
                Application Support guarantees peak performance across AWS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        <div className="w-full md:w-1/2 lg:w-3/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/managedCloud.webp"
            alt="A person working on a laptop and providing manageing the cloud."
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="md:text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Cloud Application Service
            </h2>
          </div>

          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Are you looking for a reliable and efficient solution to manage your
            applications? Our team of experienced professionals provides 24/7
            support for all your application needs. We take care of everything
            from infrastructure management to application deployment and
            maintenance, so you can focus on growing your business.
          </p>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <div className="bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 p-4">
          <h1 className="text-3xl font-bold text-center mb-2 mt-10 md:py-2 lg:py-0">
            Why Choose GlobalXperts?
          </h1>

          <p className="text-lg leading-relaxed text-center text-gray-600 mb-4">
            Our Managed Applications Support service provides you with the
            following benefits:
          </p>

          <div className="bg-gray-100 2xl:bg-white flex items-center justify-center mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mb-8">

              <Benefit icon={<MdSecurity />}>
                Increased reliability and uptime for your applications
              </Benefit>

              <Benefit icon={<RxCountdownTimer />}>
                Rapid resolution of issues minimizing downtime and disruption
              </Benefit>

              <Benefit icon={<FaAngleDoubleUp />}>
                Proactive monitoring and maintenance preventing issues before
                they occur
              </Benefit>

              <Benefit icon={<FaAdjust />}>
                Customized support plans tailored to your needs and budget
              </Benefit>

            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-700 text-lg mt-12 sm:py-2 p-4">
        Contact us today to learn more about how our Managed Applications
        Support service can help you streamline your operations, increase
        efficiency, and grow your business.
      </p>
    </>
  );
}

function Benefit({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center min-h-[200px]">
      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
        {icon}
      </div>

      <p className="text-sm text-gray-600 text-center">{children}</p>
    </div>
  );
}