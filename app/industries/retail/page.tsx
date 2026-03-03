import Link from "next/link";
import Image from "next/image";
import {
  FaShoppingCart,
  FaCogs,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

export const metadata = {
  title: "IT Services for Retail Businesses - GlobalXperts",
  description:
    "GlobalXperts empowers retail businesses with IT and cloud solutions tailored for omnichannel operations and digital growth.",
};

export default function Retail() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">

            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Retail
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
              Advanced IT solutions enhance customer experiences and streamline
              retail operations.
            </p>

          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center mt-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">Retail</h2>
            <p className="mt-4 text-lg text-gray-500">
              Modern retail IT solutions improve operations, enable
              personalization, and drive growth.
            </p>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/Retail.webp"
              alt="Retail technology"
              width={700}
              height={450}
              className="w-full rounded-lg object-cover"
            />
          </div>

        </div>
      </div>

      {/* Capabilities */}
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Capabilities</h2>

        <div className="space-y-10">

          <Capability icon={<FaShoppingCart />} title="Point-of-Sale Systems" />
          <Capability icon={<FaCogs />} title="Inventory Management" />
          <Capability icon={<FaUserFriends />} title="CRM Solutions" />
          <Capability icon={<FaChartLine />} title="Data Analytics" />

        </div>
      </div>

    </div>
  );
}

function Capability({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center">
      <div className="text-blue-500 text-2xl mr-3">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
}