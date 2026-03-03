import Link from "next/link";
import Image from "next/image";
import {
  FaCode,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";

export const metadata = {
  title: "IT Services for Media & Entertainment - GlobalXperts",
  description:
    "GlobalXperts empowers media & entertainment companies with secure cloud workflows, scalable infrastructure and expert IT support tailored for creative studios.",
};

export default function MediaEntertainment() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">

            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Media & Entertainment
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
              Cloud workflows, cybersecurity, and high-performance networks to
              power modern media production and distribution.
            </p>

          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center mt-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              Media & Entertainment
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Transforming content creation and distribution with secure,
              scalable infrastructure and modern IT ecosystems.
            </p>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/media.webp"
              alt="Media technology"
              width={700}
              height={450}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <Card icon={<FaCode />} title="Software Development" />
          <Card icon={<FaNetworkWired />} title="Network Management" />
          <Card icon={<FaCloud />} title="Cloud Solutions" />
          <Card icon={<FaShieldAlt />} title="Cybersecurity" />
          <Card icon={<FaCogs />} title="IT Consulting" />
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-start rounded-lg shadow-md p-6 bg-gray-100">
      <div className="text-blue-500 text-5xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
}