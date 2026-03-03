import Link from "next/link";
import Image from "next/image";
import {
  FaLaptopMedical,
  FaNotesMedical,
  FaHospital,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";

export const metadata = {
  title: "Managed Healthcare IT Services in Raleigh, USA - GlobalXperts",
  description:
    "GlobalXperts provides IT solutions for healthcare organizations - secure clinics and hospitals with compliant infrastructure, cloud services and expert support.",
};

export default function Healthcare() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">

            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                Healthcare
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
                IT services are essential in healthcare, optimizing operations,
                reducing costs, and improving care through analytics and
                machine learning.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white min-h-screen">
        <div className="p-8 max-w-7xl mx-auto">

          {/* Intro */}
          <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24">
            <div className="flex flex-col lg:flex-row items-center justify-between">

              <div className="lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Healthcare
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Technology is transforming healthcare, enhancing patient care
                  and improving outcomes through innovative IT solutions like
                  electronic health records (EHRs) and telemedicine.
                </p>
              </div>

              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <Image
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/healthcare.webp"
                  alt="Healthcare IT solutions"
                  width={700}
                  height={450}
                  className="w-full rounded-lg object-cover"
                />
              </div>

            </div>
          </div>

          {/* Overview */}
          <div className="py-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Overview
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              IT services optimize healthcare operations, reduce costs, and
              enhance patient care through advanced analytics and secure
              infrastructure.
            </p>
          </div>

          {/* Capabilities */}
          <div className="py-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                Capabilities
              </h2>

              <div className="space-y-8">

                <Capability
                  icon={<FaLaptopMedical />}
                  title="Healthcare IT Infrastructure"
                  desc="Tailored solutions to improve operational efficiency and data security."
                />

                <Capability
                  icon={<FaNotesMedical />}
                  title="Electronic Health Records (EHRs)"
                  desc="Secure systems that streamline workflows and enhance patient outcomes."
                />

                <Capability
                  icon={<FaHospital />}
                  title="Telemedicine Solutions"
                  desc="Remote consultations expand access to care and reduce visits."
                />

                <Capability
                  icon={<FaHeartbeat />}
                  title="Patient Monitoring & Analytics"
                  desc="Real-time insights for improved decision-making and care."
                />

                <Capability
                  icon={<FaUserNurse />}
                  title="Healthcare Consulting Services"
                  desc="Expert IT strategy, compliance guidance, and modernization."
                />

              </div>

              <p className="text-gray-700 text-center mt-10">
                Partner with GlobalXperts to enhance healthcare services and
                improve patient outcomes.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

function Capability({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <div className="text-blue-500 text-2xl mr-3">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </div>
  );
}