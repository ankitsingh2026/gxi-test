"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesOverview() {
  return (
    <div className="container mx-auto mt-2 p-4 md:p-6 2xl:p-0">
      <h2 className="text-2xl md:text-4xl font-bold py-4 text-center md:text-left">
        Trusted IT Services - Managed IT, Support & AWS Cloud
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Professional Services */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIEnhancedServices.png"
            alt="Professional IT strategy consulting services"
            width={500}
            height={300}
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />

          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Professional Services
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            We build cutting-edge solutions, perform technical surveys and cloud
            migrations, offer technical consulting, supplement technical staff,
            and much more.
          </p>

          <Link
            href="/services/professional-services"
            className="text-blue-500 hover:underline mt-auto"
          >
            Read More
            <span className="sr-only"> about Professional Services</span>
          </Link>
        </div>

        {/* Managed Services */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/managedServices.png"
            alt="Managed IT services and infrastructure support"
            width={500}
            height={300}
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />

          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Managed Services
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            We provide day 2 support, help desk services, NOC services, and
            many more services to help your business thrive.
          </p>

          <Link
            href="/services/managed-services"
            className="text-blue-500 hover:underline mt-auto"
          >
            Read More
            <span className="sr-only"> about Managed Services</span>
          </Link>
        </div>

        {/* Cloud Solutions */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/NetworkingConsulting.png"
            alt="Cloud solutions and AWS consulting services"
            width={500}
            height={300}
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />

          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Cloud Solutions
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            We build cloud solutions incorporating AI, analytics, hybrid and
            multi-cloud architecture to optimize performance and security.
          </p>

          <Link
            href="/solutions/aws-solutions"
            className="text-blue-500 hover:underline mt-auto"
          >
            Read More
            <span className="sr-only"> about AWS Cloud Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}