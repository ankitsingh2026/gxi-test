"use client";

import { useRef } from "react";
import Image from "next/image";


export default function NetworkingPage() {
    
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactUsClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const networkingCards = [
    {
      title: "Meraki Switches",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkswitches.avif",
      text: "Meraki Switches provide cloud-managed switching solutions with high-performance networking, easy-to-use centralized management, and powerful security features to optimize and secure your business network."
    },
    {
      title: "Meraki Wireless",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkwireless.jpg",
      text: "Meraki Wireless provides seamless, high-speed wireless connectivity for businesses of all sizes. Its intuitive cloud management simplifies network control, ensuring fast and secure Wi-Fi across your entire organization."
    },
    {
      title: "Meraki Cameras",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkcamera.avif",
      text: "Meraki Cameras offer cutting-edge video surveillance with advanced analytics. Enjoy real-time visibility and security monitoring with an easy-to-use interface and cloud storage for efficient data management."
    },
    {
      title: "Arista CloudVision",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/cloudvision.webp",
      text: "Arista CloudVision CUE is a powerful cloud-based management platform for automated orchestration and real-time analytics. It simplifies network operations and enhances network visibility across your infrastructure."
    },
    {
      title: "Arista Secure Edge",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/aristaEdge.png",
      text: "Arista Secure Edge delivers advanced security at the network perimeter, combining state-of-the-art firewalls, secure VPNs, and intrusion prevention for robust protection against cyber threats and data breaches."
    },
    {
      title: "Arista Integrated WAN Branch",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/aristaWAN.png",
      text: "Arista Integrated WAN Branch provides a comprehensive, cloud-managed solution for branch offices, offering simplified WAN connectivity with secure, scalable, and resilient branch networking for businesses."
    },
    {
      title: "Arista Compact Wired Switch",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/Arista-Switches.webp",
      text: "Arista Compact Wired Switches offer high-performance switching with compact designs, perfect for space-constrained environments. They provide excellent connectivity and network efficiency while ensuring ease of deployment and management."
    },
    {
      title: "Arista Cognitive Wi-Fi",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/arista8.webp",
      text: "Arista Cognitive Wi-Fi Access Points deliver high-performance wireless solutions with AI-powered analytics. These access points enhance user experiences and optimize network performance with real-time insights and automation."
    },
    {
      title: "Meraki Firewalls",
      img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkFirewall.avif",
      text: "The Cisco Meraki MX are multifunctional security and SD-WAN enterprise appliances with a wide set of capabilities to address multiple use cases–from an all-in-one device."
    }
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="bg-blueCustomColor text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h1 className="text-5xl font-bold">
              Networking Consulting
            </h1>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleContactUsClick}
                className="bg-greenCustomColor2 px-6 py-3 rounded-full"
              >
                Contact Us
              </button>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            We design and deploy networking architectures that support modern enterprise applications,
            hybrid cloud environments and distributed teams while maintaining performance, scalability
            and security.
          </p>

        </div>
      </section>

      {/* LOGOS */}

      <section className="bg-white py-16">
        <div className="flex justify-center items-center gap-10 flex-wrap">

          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/cmlogo.png"
            alt="Cisco Meraki"
            width={180}
            height={120}
          />

          <Image
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/netaristalogo.png"
            alt="Arista"
            width={180}
            height={120}
          />

        </div>
      </section>

      {/* NETWORKING PRODUCTS */}

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Networking Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {networkingCards.map((card, index) => (
              <NetworkingCard
                key={index}
                title={card.title}
                img={card.img}
                text={card.text}
              />
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

/* CARD COMPONENT */

function NetworkingCard({
  title,
  text,
  img
}: {
  title: string;
  text: string;
  img: string;
}) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition p-5">

      <Image
        src={img}
        alt={title}
        width={600}
        height={300}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-600">
          {text}
        </p>
      </div>

    </div>
  );
}