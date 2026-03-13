import Head from "next/head";
import Link from "next/link";

export default function CloudMigration() {
  return (
    <>
      <Head>
        <title>AWS Cloud Migration Services - GlobalXperts</title>
        <meta
          name="description"
          content="Cloud migration services USA by GlobalXperts: seamless lift-and-shift or cloud-native transition, expert planning and execution for secure, scalable IT."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/service/professional-services/cloud-migration"
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Cloud Migration Services
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

            <div className="w-full text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed md:p-0 p-2">
                Our hybrid cloud approach seamlessly integrates the flexibility
                and cost-efficiency of the public cloud with the security and
                customization of a private infrastructure, ensuring the best of
                both worlds. As AWS cloud partners and collaborators with
                industry leaders like Cisco and Arista, we provide innovative
                technologies for a seamless, efficient migration experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How we can help
          </h1>

          <p className="text-lg text-gray-600 text-left">
            Is your business weighed down by the complexity and expense of
            managing an on-premises data center? With GlobalXperts' cloud
            migration services, we can help you take advantage of the many
            benefits that cloud computing offers—whether through private,
            public, or hybrid cloud solutions—while maintaining security,
            performance, and control over your critical workloads.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Higher Performance
            </h3>

            <p className="text-gray-600">
              Accelerate your operations with scalable cloud architecture
              designed for speed and reliability.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              💰
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cost Efficiency
            </h3>

            <p className="text-gray-600">
              Pay only for the resources you use, eliminating unnecessary
              expenses while optimizing IT spending.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              📈
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Scalability
            </h3>

            <p className="text-gray-600">
              Easily adjust resources to meet your business’s growing demands
              without the need for costly upgrades.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-center mt-4">
          With GlobalXperts, you’ll reduce costs, enhance operational
          efficiency, and shift focus from IT management to your core business.
        </p>

        {/* Why Choose */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose GlobalXperts?
          </h2>

          <div className="text-left space-y-4 max-w-3xl mx-auto">
            <p className="text-gray-600">
              <strong>Proven Expertise:</strong> Our team of skilled
              professionals specializes in cloud migrations and data center
              transitions.
            </p>

            <p className="text-gray-600">
              <strong>Customized Solutions:</strong> We collaborate closely with
              you to design migration strategies aligned with your business
              goals.
            </p>

            <p className="text-gray-600">
              <strong>Minimized Downtime and Risk:</strong> Using advanced tools
              and methodologies, we reduce risks and ensure smooth migration.
            </p>

            <p className="text-gray-600">
              <strong>Accelerated Value:</strong> Faster deployments help you
              start benefiting from cloud infrastructure sooner.
            </p>

            <p className="text-gray-600">
              <strong>Cost-Effective Outcomes:</strong> Optimized solutions
              reduce IT costs while increasing efficiency.
            </p>

            <p className="text-gray-600">
              <strong>Ongoing Support:</strong> Continuous monitoring and
              support to keep your cloud secure and optimized.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with a cloud solution designed to
            meet your needs? Contact GlobalXperts today and discover how we can
            make your cloud migration seamless and successful.
          </p>
        </div>
      </div>
    </>
  );
}