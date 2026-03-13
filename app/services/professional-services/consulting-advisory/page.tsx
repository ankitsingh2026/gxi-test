import Head from "next/head";
import Link from "next/link";

export default function ConsultingAndAdvisory() {
  return (
    <>
      <Head>
        <title>Consulting and Advisory Services - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts delivers consulting and advisory services in the USA - strategic IT guidance, vendor-neutral advice, and roadmap planning to drive business growth."
        />
        <meta name="keywords" content="Consulting and Advisory Services" />
        <link
          rel="canonical"
          href="https://globalxperts.net/service/professional-services/consulting-advisory"
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16 gap-8">
            
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Consulting and Advisory
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
                GlobalXperts helps you prioritize the right initiatives to
                accelerate your digital transformation. Leveraging our deep
                expertise, we craft tailored strategies that enhance operational
                efficiencies with a multi-vendor approach. From planning and
                consulting to innovative IT design, we deliver comprehensive
                solutions to align technology with your business goals and drive
                measurable outcomes.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16 max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How We Can Help
          </h1>

          <p className="text-lg text-gray-600 md:text-center text-left">
            GlobalXperts offers expert IT consulting services, allowing
            businesses to build, optimize, and future-proof their network
            infrastructure. Here's how we deliver exceptional value:
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              🔧
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tailored Solutions
            </h3>
            <p className="text-gray-600">
              We design customized network solutions aligned with your
              business goals—enhancing performance, reducing costs, and
              strengthening security.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              ☁️
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cloud Migration Expertise
            </h3>
            <p className="text-gray-600">
              Transition seamlessly to the cloud with secure, scalable
              migration strategies using AWS and modern cloud technologies.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              📋
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comprehensive Program Management
            </h3>
            <p className="text-gray-600">
              Our program managers oversee planning, procurement,
              deployment, and risk mitigation to ensure smooth IT
              infrastructure implementation.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              🌐
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Network Design
            </h3>
            <p className="text-gray-600">
              We design scalable, secure, and high-performing network
              infrastructures using industry best practices and modern
              technologies.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              💰
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cost Optimization
            </h3>
            <p className="text-gray-600">
              Reduce total cost of ownership (TCO) while maintaining high
              performance, scalability, and security.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              🔄
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ongoing Support & Optimization
            </h3>
            <p className="text-gray-600">
              Continuous monitoring, support, and improvements to ensure
              your infrastructure evolves with your business.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              ⚡
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Enhanced Productivity
            </h3>
            <p className="text-gray-600">
              High-performing networks improve employee efficiency,
              accelerate workflows, and increase profitability.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}