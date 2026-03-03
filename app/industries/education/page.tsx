// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactCard from "@/components/Contact/ContactCard";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Education Solutions - GlobalXperts",
  description:
    "GlobalXperts brings tailored IT solutions to the education sector: secure infrastructure, cloud-learning platforms and seamless operations for modern institutions.",
  keywords: [
    "IT solutions",
    "education sector",
    "secure networks",
    "collaboration tools",
    "digital learning environments",
  ],
};

export default function Education() {
  return (
    <div className="w-full bg-gray-200">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20">
                IT Solutions for the Education Sector
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
                IT services enable cloud tools and virtual learning,
                streamlining education and preparing students for the digital
                age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-200 min-h-screen mt-12">
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/edu.webp"
              alt="Education"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full"
              priority={false}
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Education
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              In today’s digital age, IT services and solutions have become
              essential for the education sector to provide students with a
              modern and effective learning experience. From cloud-based
              collaboration tools to virtual learning environments, there are
              numerous innovative IT solutions available that can help
              educational institutions improve their operations and enhance
              student outcomes.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="px-4 sm:px-6 lg:px-8 mb-20 mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Overview
          </h2>

          <p className="text-center mt-5 text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto">
            IT services streamline education, improve outcomes, and create
            engaging learning experiences, preparing students for the digital
            age.
          </p>

          <div className="mt-5 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Our Education Solutions
              </h3>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Digital Learning Platforms:</strong> Secure,
                  scalable platforms for online learning and content
                  management.
                </li>
                <li>
                  <strong>Network Infrastructure:</strong> Robust solutions to
                  enhance connectivity and collaboration.
                </li>
                <li>
                  <strong>Cybersecurity:</strong> Protect data and ensure
                  compliance with security standards.
                </li>
                <li>
                  <strong>Cloud Services:</strong> Migrate resources to the
                  cloud for flexibility and cost efficiency.
                </li>
                <li>
                  <strong>IT Support & Training:</strong> Ongoing support and
                  training for educators.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-lg sm:text-xl text-gray-700">
            Partner with GlobalXperts to revolutionize education with advanced
            IT solutions.
          </p>
        </div>

        {/* Customized Section */}
        <div className="bg-blueCustomColor p-6 sm:p-10 lg:p-12 mt-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Customized IT Solutions for Education
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-gray-300">
                We offer tailored IT solutions to meet the challenges of
                education, from infrastructure to cybersecurity, ensuring a
                safe and efficient learning environment.
              </p>
            </div>

            <div className="lg:w-1/2">
              <Image
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/itedu.webp"
                alt="A secure and connected digital learning environment."
                width={700}
                height={450}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>

     

      
      </div>
    </div>
  );
}