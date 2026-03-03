import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export const metadata = {
  title: "Media Library - GlobalXperts",
  description:
    "Download GlobalXperts Brochure PDFs and explore our Media Library featuring IT solution guides, videos, and expert insights for digital transformation.",
  keywords: [
    "GlobalXperts brochures",
    "Field Services PDF",
    "Cybersecurity PDF",
    "IT brochures",
    "Titan GX storage",
    "GX Customer Connect",
  ],
  alternates: {
    canonical: "https://globalxperts.net/insights/media-Library",
  },
  openGraph: {
    title: "Media Library | GlobalXperts",
    description:
      "Explore and download brochures on GlobalXperts services including cybersecurity, cloud, field services, and more.",
    url: "https://www.globalxperts.net/media-library",
    type: "website",
    images: [
      {
        url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/preview-image.jpg",
      },
    ],
  },
};

const brochures = [
  {
    title: "Field Services (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/Field+Services+brochure+2025.pdf",
  },
  {
    title: "GX Customer Connect (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/Customer+Connect+Brochure.pdf",
  },
  {
    title: "Titan GX Storage (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/Titan+X+Brochure.pdf",
  },
  {
    title: "Cyber Security (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GX_Cybersecurity_seceon_v.2.pdf",
  },
  {
    title: "Cloud Solutions (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GlobalXperts+DC-Cloud+Brochure.pdf",
  },
  {
    title: "GX Migration Service (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GX+Migration+Services+Brochure.pdf",
  },
  {
    title: "GX-Capabilities (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GX-Capabilities-Statement.pdf",
  },
  {
    title: "Hybrid Cloud (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/Hybrid+Cloud+w+Outposts+Brochure.pdf",
  },
  {
    title: "PIOSA (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/IOSA+Brochure+w+logo.pdf",
  },
  {
    title: "MOM (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/MOM+Brochure.pdf",
  },
  {
    title: "Professional Services (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/PS+Brochure.pdf",
  },
  {
    title: "Managed Services (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/2022+GX+Managed+Services+brochure.pdf",
  },
  {
    title: "AI-ML (PDF)",
    url: "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/AI-ML+Brochure.pdf",
  },
];

export default function MediaLibrary() {
  return (
    <>

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[45vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">

            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Media Library
              </h1>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="px-12 py-2 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Transforming content creation and distribution with cloud-based
                workflows, cybersecurity, and high-performance network setups.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Brochure Section */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mt-8">
          Brochure PDFs
        </h2>

        <hr className="border-b-4 border-blue-900 w-full mx-auto mt-4 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((brochure, index) => (
            <a
              key={index}
              href={brochure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:scale-105 transition-transform duration-200"
            >
              <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
              <h3 className="text-lg font-medium mt-4">
                {brochure.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

    </>
  );
}