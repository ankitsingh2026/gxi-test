import Head from "next/head";
import Link from "next/link";
import {
  FaCogs,
  FaDollarSign,
  FaHeadset,
  FaRegClock,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";

export default function DataCenterMigration() {
  return (
    <>
      <Head>
        <title>Data Center Migration - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts offers USA data-center migration services: seamless infrastructure relocation, minimal downtime, and expert execution to future-proof your IT environment."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/service/professional-services/data-center-migration"
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Data Center Migration
              </h1>

              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Are you tired of dealing with the complexity and high costs of
                managing your own data center? Do you want to take advantage of
                the flexibility and scalability of the cloud? Let us migrate
                your workloads. Our team of experts will work with you every
                step of the way, from planning and design to implementation and
                optimization, to ensure a successful migration that meets your
                specific needs and requirements.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gray-100 md:bg-white">

        <h1 className="text-3xl lg:text-4xl text-center font-bold text-gray-700">
          Value Proposition
        </h1>

        <p className="text-lg leading-relaxed text-center text-gray-600 mt-8">
          These are the benefits of our migration services
        </p>

        <div className="bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4">
          <div className="bg-gray-100 2xl:bg-white flex items-center justify-center 2xl:mt-8 mb-12 md:p-8 lg:p-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">

              {/* Expertise */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaUserTie />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Expertise and Experience
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    GlobalXperts has a team of highly skilled professionals who
                    specialize in data center migrations and cloud computing,
                    ensuring a smooth and successful transition.
                  </p>
                </div>
              </div>

              {/* Customized */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaCogs />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Customized Solutions
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    We work closely with clients to build tailored hybrid cloud
                    solutions using AWS, Azure, or GCP based on business needs.
                  </p>
                </div>
              </div>

              {/* Downtime */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaRegClock />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Reduced Downtime and Risk
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    Our proven methodologies minimize downtime and mitigate
                    risks during migration to avoid disruption to operations.
                  </p>
                </div>
              </div>

              {/* Faster */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaRocket />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Faster Time-to-Value
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    We complete migrations faster than traditional approaches,
                    helping organizations benefit from their infrastructure
                    upgrades sooner.
                  </p>
                </div>
              </div>

              {/* Cost */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaDollarSign />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Cost-Effective Solutions
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    Our optimized infrastructure strategies reduce operational
                    costs and increase IT efficiency.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaHeadset />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Ongoing Support
                  </h3>

                  <p className="text-sm text-gray-600 text-left">
                    We provide continuous monitoring, maintenance, and support
                    to keep your infrastructure secure and optimized.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}