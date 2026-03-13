"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer, RxTrackNext } from "react-icons/rx";

export default function ManageHelpDesk() {
  return (
    <>
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed Help Desk
              </h2>

              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Are you tired of managing your company’s IT issues alone? Our
                Managed Help Desk service provides you with a team of highly
                skilled technicians who will work around the clock to keep your
                systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center">
        <div className="max-w-7xl mx-10 flex flex-col lg:flex-row items-center justify-between mt-32 pb-10">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Help Desk
            </h2>

            <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
              Are you tired of managing your company’s IT issues alone? Our
              Managed Help Desk service provides you with a team of highly
              skilled technicians who will work around the clock to keep your
              systems running smoothly. So don’t let IT problems bring your
              business to a standstill. Let us handle your IT needs so that you
              can focus on growing your business.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/ManagedHelpDesk.png"
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>

        <div className="mt-20 text-center bg-gray-100 2xl:bg-white py-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose GlobalXperts?
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-6xl mx-auto">
            Our Managed Help Desk service offers an unparalleled value
            proposition for your business. Here are some of the key benefits:
          </p>

          <div className="bg-gray-100 2xl:bg-white flex items-center justify-center mb-4 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl">

              {/* Card */}
              <Card
                icon={<AiFillProduct />}
                title="Improved Productivity and Uptime"
              >
                With our proactive network monitoring and fast response times,
                we can minimize downtime and keep your systems running smoothly.
              </Card>

              <Card icon={<MdSecurity />} title="Cost-Effective IT Support">
                Our Managed Help Desk service provides you with a team of IT
                experts at a fraction of the cost of hiring an in-house IT team.
              </Card>

              <Card icon={<RxCountdownTimer />} title="Scalable Service">
                As your business grows, your IT needs will grow with it. With our
                Managed Help Desk service, you can easily scale up or down your
                IT support.
              </Card>

              <Card
                icon={<RxTrackNext />}
                title="Better Communication and Tracking"
              >
                Our ticketing systems allow for easy communication and tracking
                of IT issues ensuring every problem is addressed efficiently.
              </Card>

            </div>
          </div>

          <p className="text-md text-gray-600 mb-0 text-left p-8">
            In summary, our Managed Help Desk service provides cost-effective,
            scalable, and reliable IT support for your business. With proactive
            monitoring and fast response times, you’ll enjoy improved
            productivity and uptime.
          </p>
        </div>
      </div>
    </>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center min-h-[300px]">
      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-left p-3">{children}</p>
    </div>
  );
}