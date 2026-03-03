import Link from "next/link";

export const metadata = {
  title: "IT Projects & Case Studies - GlobalXperts",
  description:
    "Explore real client success stories from GlobalXperts Technology - IT solutions, cloud migrations & managed services that deliver measurable business impact.",
  alternates: {
    canonical: "https://globalxperts.net/insights/caseStudies",
  },
};

const caseStudies = [
  {
    title: "Live Video Streaming",
    description:
      "Our solution, built on Amazon Web Services (AWS), ensured seamless video delivery, real-time monitoring, proactive maintenance, and rapid issue resolution, resulting in enhanced fan engagement, increased revenue potential, and a significant reduction in operational costs.",
    link: "/live-video-streaming",
  },
  {
    title: "Arista Data Center Implementation",
    description:
      "Software-driven cloud networking solutions redefining scalability and resilience.",
    link: "/arista-datacenter-implementation",
  },
  {
    title: "Arista Install Services - Entel Chile",
    description:
      "Data-driven client-to-cloud networking solutions for enterprise environments.",
    link: "/Arista-install-entel-chile",
  },
  {
    title:
      "Design & Installation - Cisco Webex Meetings Server (CWMS)",
    description:
      "High-level Cisco solution architecture and on-premises deployment.",
    link: "/design-installation-webex-meeting",
  },
  {
    title: "NEC Wireless Site Survey",
    description:
      "Comprehensive wireless infrastructure assessment and optimization.",
    link: "/nec-wireless-site-survey",
  },
  {
    title: "Global IT Managed Services",
    description:
      "Enterprise-grade global managed IT services delivery.",
    link: "/global-managed-IT-services",
  },
  {
    title: "NEC Disney",
    description:
      "WAN optimization and enterprise networking solutions.",
    link: "/nec-disney-WAN-Optimization",
  },
  {
    title: "United Rentals - CISCO Unified Communication",
    description:
      "Unified communications solution for large-scale enterprise operations.",
    link: "/CISCO-unified-communications",
  },
  {
    title: "TowneBank - CISCO Telepresence",
    description:
      "Telepresence deployment for improved business collaboration.",
    link: "/Towne-Bank-Cisco-Telepresence",
  },
  {
    title: "Close Up Foundation",
    description:
      "Web server troubleshooting and performance optimization.",
    link: "/Close-up-foundation-web-server-troubleshooting",
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">

            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Case Studies
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
              Real-world success stories showcasing our IT expertise and
              technology-driven impact.
            </p>

          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          See Our Past Experience
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.link}
                className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white hover:underline"
              >
                READ MORE »
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}