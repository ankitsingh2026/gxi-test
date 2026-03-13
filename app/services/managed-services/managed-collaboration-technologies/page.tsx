import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

export const metadata: Metadata = {
  title: "Managed Collaboration Technologies | GlobalXperts",
  description:
    "Managed collaboration technologies including Webex, Zoom, and Microsoft Teams—deployed and supported by experts.",
  alternates: {
    canonical:
      "https://globalxperts.net/service/managed-services/managed-collaboration-technologies",
  },
  openGraph: {
    title: "Managed Collaboration Technologies",
    description:
      "Comprehensive managed services solution for collaboration technologies.",
    url: "https://globalxperts.net/service/managed-services/managed-collaboration-technologies",
    type: "website",
  },
};

export default function ManagedCollaborationTech() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-8">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Managed Collaboration Technologies
              </h1>

              <div className="flex justify-center lg:justify-start mt-6 lg:mt-10">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full mt-10 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 text-left">
                Are you looking for a comprehensive managed services solution
                for your collaboration technologies that covers all aspects of
                your communication infrastructure?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-12 pb-10 px-6">
        {/* Image */}
        <div className="relative lg:w-1/2">
          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/collebratin.webp"
            alt="Managed Collaboration Technologies"
            width={800}
            height={600}
            className="w-full rounded-lg"
            priority
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center lg:text-left">
            Managed Collaboration Technologies
          </h2>

          <p className="mt-4 text-xl text-gray-500 text-center lg:text-left">
            We provide a comprehensive managed services solution for your
            collaboration technologies and communication infrastructure.
          </p>

          <p className="mt-6 text-md text-gray-700">
            Our team has extensive knowledge of:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-6">
            <li>Cisco Unified Communications</li>
            <li>Cisco Call Manager</li>
            <li>Cisco Cube</li>
            <li>E911 Services</li>
            <li>SIP Gateways</li>
            <li>Telecom PSTN Technologies</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Choose GlobalXperts?
        </h2>

        <p className="text-lg text-center text-gray-600 max-w-5xl mx-auto mb-12">
          Our managed services for collaboration technologies optimize your
          communication infrastructure and improve productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
          {/* Expertise */}
          <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-6 text-green-600 text-4xl">
              <AiFillProduct />
            </div>
            <h3 className="text-lg font-semibold text-center mb-4">
              Expertise
            </h3>
            <p className="text-sm text-gray-600 text-left">
             Firstly, our team of experts has in-depth knowledge of Cisco’s collaboration technologies and can provide you with the latest features and upgrades to optimize your communication infrastructure. We Not only will we ensure that your team has access to emergency services at all times, and we but we will also provide reliable and secure voice communication capabilities with our SIP gateways and Telecom PSTN technologies.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-6 text-green-600 text-4xl">
              <MdSecurity />
            </div>
            <h3 className="text-lg font-semibold text-center mb-4">
              Reliability
            </h3>
            <p className="text-sm text-gray-600 text-left">
             Secondly, we provide a reliable solution that minimizes downtime and maximizes productivity. Our proactive monitoring and support ensure that any issues are resolved quickly, allowing your team to focus on their work without any interruptions.
            </p>
          </div>

          {/* Customization */}
          <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-6 text-green-600 text-4xl">
              <RxCountdownTimer />
            </div>
            <h3 className="text-lg font-semibold text-center mb-4">
              Customization
            </h3>
            <p className="text-sm text-gray-600 text-center">
              We tailor solutions to meet your unique business needs—whether
              optimizing existing systems or building new infrastructure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}