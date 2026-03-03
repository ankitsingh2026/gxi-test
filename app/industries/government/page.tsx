import Link from "next/link";
import Image from "next/image";
import {
  FaCloud,
  FaDatabase,
  FaMagento,
  FaServicestack,
} from "react-icons/fa";
import { FaComputerMouse, FaFileCode } from "react-icons/fa6";
import { SiManageiq } from "react-icons/si";
import { HiDownload, HiDocumentText } from "react-icons/hi";

export const metadata = {
  title: "IT Services for Government Agencies - GlobalXperts",
  description:
    "GlobalXperts empowers U.S. government agencies with secure, scalable IT infrastructure, cloud and managed services designed for public-sector transformation.",
};

export default function Government() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Government
              </h1>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10">
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
                GlobalXperts delivers the agility of a small business with the
                expertise and resources of a large enterprise.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-14">
          
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Government
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Established in 2005, GlobalXperts is a woman-owned 8(a) small
              business with expertise in designing, implementing, and managing
              IT infrastructure solutions leveraging Cisco, Microsoft, VMware,
              AWS, Arista, and more.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/goverment.jpg"
              alt="Government IT infrastructure"
              width={700}
              height={450}
              className="w-full rounded-lg object-cover"
            />
          </div>

        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Capabilities</h2>
          <p className="text-lg text-gray-600 mb-10">
            Secure and innovative IT solutions for federal agencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <CapabilityCard icon={<FaDatabase />} title="Data Centers" />
            <CapabilityCard icon={<FaCloud />} title="Cloud Solutions" />
            <CapabilityCard icon={<FaMagento />} title="AI & Machine Learning" />
            <CapabilityCard icon={<FaComputerMouse />} title="Collaboration & UC" />
            <CapabilityCard icon={<FaServicestack />} title="Professional Services" />
            <CapabilityCard icon={<FaFileCode />} title="Field Services" />

          </div>

          <div className="flex justify-center mt-12">
            <CapabilityCard icon={<SiManageiq />} title="Managed Services" />
          </div>
        </div>
      </div>

      {/* Brochure Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-8 rounded-2xl shadow-lg">
          
          <div className="max-w-lg">
            <h3 className="text-3xl font-bold mb-4 text-blue-600">
              Government
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Global Coverage:</strong> 120+ countries supported.</li>
              <li><strong>24x7 Availability:</strong> Around-the-clock support.</li>
              <li><strong>Cost Efficiency:</strong> Skilled IT professionals on demand.</li>
            </ul>

            <div className="flex flex-wrap mt-6 gap-4">
              <a
                href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/STARS+III+Brochure+July+2021.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                <HiDocumentText />
                STARS III Brochure
                <HiDownload />
              </a>

              <a
                href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/GX-Capabilities-Statement.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                <HiDocumentText />
                GX Capabilities
                <HiDownload />
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/goverment2.webp"
              alt="Government services"
              width={700}
              height={450}
              className="w-full aspect-video rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  );
}

function CapabilityCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-2xl transition">
      <div className="flex justify-center text-green-600 text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}