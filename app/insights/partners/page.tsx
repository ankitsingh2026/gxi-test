import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import ContactCard from "@/components/layout/ContactCard";


export const metadata: Metadata = {
  title: "Our Partners - GlobalXperts",
  description:
    "Explore GlobalXperts’ U.S. partner ecosystem: trusted alliances with top cloud and IT vendors delivering managed services and seamless technology solutions.",
  alternates: {
    canonical: "https://globalxperts.net/insights/partners",
  },
};

type Partner = {
  name: string;
  img: string;
  link?: string;
};

const partners: Partner[] = [
  {
    name: "AWS Partner Network",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p1.png",
    link: "/Partners/AWS-partnership",
  },
  {
    name: "Arista",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p2.png",
    link: "/Partners/Arista-partnership",
  },
  {
    name: "VMware",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p3.png",
    link: "/Partners/Broadcom-partnership",
  },
  {
    name: "Hewlett Packard Enterprise",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p4.png",
    link: "/Partners/Hewlett-Packard-Partnership",
  },
  {
    name: "Microsoft",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p5.png",
    link: "/Partners/Microsoft-Partnership",
  },
  {
    name: "Microsoft Azure",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p6.png",
    link: "/Partners/Azure-Partnership",
  },
  {
    name: "Cisco",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p7.png",
    link: "/Partners/Cisco-Partnership",
  },
  {
    name: "TrueNAS",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p8.png",
    link: "/Partners/TrueNAS-Partnership",
  },
  {
    name: "Google Cloud",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p9.png",
  },
  {
    name: "Calabrio",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p10.png",
  },
  {
    name: "Cisco Meraki",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p11.png",
    link: "/Partners/Cisco-Meraki-Partnership",
  },
  {
    name: "ServiceNow",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p12.png",
  },
  {
    name: "Arush",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p13.png",
  },
  {
    name: "Nokia",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p14.png",
  },
  {
    name: "Citrix",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p15.png",
  },
  {
    name: "Veeam",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p16.png",
    link: "/Partners/Veeam-Partnership",
  },
  {
    name: "Seceon",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p17.png",
    link: "/Partners/Seceon-Partnership",
  },
];

export default function PartnersPage() {
  return (
    <>

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Our Partners
              </h1>

              <div className="md:px-0 px-20 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-2 text-left">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
                GlobalXperts partners with industry leaders in cloud,
                networking, datacenter, software development, cybersecurity,
                and others, so that we can provide you with all the cutting-edge
                technology in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mt-16 mb-8">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const Card = (
              <div className="border rounded-lg p-4 text-center block hover:bg-gray-100 transition-colors duration-300">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="w-full h-auto max-h-24 object-contain"
                />
              </div>
            );

            return partner.link ? (
              <Link key={index} href={partner.link}>
                {Card}
              </Link>
            ) : (
              <div key={index}>{Card}</div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>
  </>
  );
}