"use client";

import Link from "next/link";

type ThoughtCardProps = {
  heading?: string;
  title: string;
  buttonText?: string;
  link?: string;
  imageUrl: string;
  alt: string;
  description?: string;
  className?: string;
  hoverEffect?: boolean;
  textColor?: string;
};

export default function KeyServiceSection() {
  return (
   <div className="bg-blueCustomColor">
     <div className="flex flex-col gap-8 text-white  py-16 p-4 2xl:max-w-[1600px] mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-5xl font-bold mb-4">
          Key Services and Partnerships
        </h3>
        <p className="lg:text-lg max-w-4xl mx-auto">
          At GlobalXperts, we offer cutting-edge technology solutions that drive
          innovation and operational efficiency across industries. Explore our
          key services and strategic partnerships that empower businesses to
          excel in today&apos;s digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:text-lg">
        {/* Main Highlight Card */}
        <ThoughtCard
          heading="Our Expertise"
          title="GlobalXperts is committed to driving innovation in enterprise solutions by integrating advanced technologies and best practices."
          buttonText="Learn More"
          link="/solutions/cloud"
          imageUrl="/Assets/driverless-image.jpg"
          alt="Innovation Image"
          description="Explore our wide range of services tailored to meet the needs of businesses across industries."
          className="row-span-2"
          hoverEffect={false}
        />

        {/* Other Cards */}
        <ThoughtCard
          title="Sports Live Streaming"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/streaming.png"
          alt="Live Streaming"
          description="Enhance operational efficiency and fan engagement for live streaming through advanced analytics and digital transformation."
          hoverEffect
        />

        <ThoughtCard
          title="Optimized Cloud Servers"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/servers.jfif"
          alt="Cloud Servers"
          description="Optimize performance, scalability, and security with our cloud server management expertise."
          hoverEffect
        />

        <ThoughtCard
          title="AI and Cloud: The Future of Business"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AI2.jpg"
          alt="AI Cloud"
          description="Drive automation and improve decision-making with AI-powered cloud solutions."
          hoverEffect
        />

        <ThoughtCard
          title="Professional Management and Development"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/development..png"
          alt="Development Services"
          description="Streamline operations with integrated management strategies and development practices."
          hoverEffect
        />
      </div>
    </div>
   </div>
  );
}

function ThoughtCard({
  heading,
  title,
  buttonText,
  link,
  imageUrl,
  alt,
  description,
  className = "",
  hoverEffect = false,
}: ThoughtCardProps) {
  return (
    <div
      className={`relative bg-gray-800 p-2 flex flex-col justify-between ${className} ${
        hoverEffect ? "group overflow-hidden cursor-pointer" : ""
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px",
      }}
    >
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-blueCustomColor opacity-10 ${
          hoverEffect
            ? "group-hover:opacity-50 transition-opacity duration-300"
            : ""
        }`}
      />

      {/* Blur Effect */}
      {hoverEffect && (
        <div
          className="absolute inset-0 transition-all duration-300 group-hover:blur-md"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        {heading && (
          <h3 className="text-3xl font-bold text-center text-white">
            {heading}
          </h3>
        )}

        <h2 className="text-xl font-medium mb-4 text-white">
          {title}
        </h2>

        {buttonText && link && (
          <Link
            href={link}
            className="bg-greenCustomColor hover:bg-greenCustomColor2 text-white font-bold py-2 px-4 rounded-full self-center mb-12 inline-block text-center"
          >
            {buttonText}
          </Link>
        )}

        {hoverEffect && description && (
          <div className="transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mt-auto">
            <p className="text-white mb-8 font-semibold">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}