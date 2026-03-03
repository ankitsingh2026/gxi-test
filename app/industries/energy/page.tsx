import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Energy Solutions - GlobalXperts",
  description:
    "GlobalXperts delivers IT solutions for the energy sector: secure infrastructure, operational efficiency & cloud-enabled systems designed for utilities and power companies.",
};

export default function Energy() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Energy
              </h1>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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
                Innovative IT solutions for the energy sector. We help optimize
                operations, ensure compliance, and drive efficiency with tailored
                technology.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Energy Solutions Section */}
      <div className="bg-white mt-4">
        <div className="p-6 max-w-6xl mx-auto">
          <div className="py-10 flex flex-col lg:flex-row items-center justify-between">
            
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Energy Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Innovative IT solutions for the energy sector. We help optimize
                operations, ensure compliance, and drive efficiency with
                tailored technology.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/energy.webp"
                alt="Energy sector solutions"
                width={700}
                height={450}
                className="w-full rounded-lg object-cover"
              />
            </div>

          </div>
        </div>

        {/* Overview Section */}
        <div className="w-full px-4 mt-10">
          <h2 className="text-3xl font-bold text-center">Overview</h2>

          <p className="text-center mt-4 text-lg text-gray-700">
            We offer end-to-end IT solutions for the energy sector, from network
            design to cybersecurity and cloud integration.
          </p>

          <div className="mt-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Our Expertise</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  IT Consulting: Enhancing operational efficiency and cost savings.
                </li>
                <li>
                  Cybersecurity: Protecting critical infrastructure from cyber threats.
                </li>
                <li>
                  Data Analytics: Optimizing energy production and distribution.
                </li>
                <li>
                  Cloud Integration: Scalable and flexible cloud solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Solutions Section */}
        <div className="bg-blueCustomColor p-8 mt-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white">
                Security Solutions
              </h2>
              <p className="mt-3 text-lg text-gray-300">
                Tailored security solutions to protect energy assets and manage risks.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/securitySol.webp"
                alt="Security Solutions"
                width={700}
                height={450}
                className="w-full rounded-lg object-cover"
              />
            </div>

          </div>
        </div>       
      </div>
    </div>
  );
}