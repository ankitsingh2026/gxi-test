import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

const footerData = {
  logo: {
    primary: "/assets/2stLG.png",
    secondary: "/assets/a.png",
  },
  address: {
    line1: "5540 Centerview Drive, Suite 200,",
    line2: "Raleigh, NC 27606",
    phone: "+1 919-342-5482",
    email: "info@globalxperts.net",
    linkedin:
      "https://www.linkedin.com/company/globalxperts-inc-/",
  },
  services: [
    { label: "GCC Services", href: "/service/gcc-services" },
    { label: "Field Services", href: "/service/field-services" },
    { label: "Managed Services", href: "/service/managed-services" },
    { label: "Professional Services", href: "/service/professional-services" },
  ],
  quickLinks: [
    { label: "Solutions", href: "/solutions/cloud" },
    { label: "Services", href: "/service/field-services" },
    { label: "Industries", href: "/industries/education" },
    { label: "Insights", href: "#" },
  ],
  info: [
    { label: "Careers", href: "/careers" },
    { label: "Company", href: "/company/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#010c41] via-[#010c41] to-gray-300 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 relative z-10">

          {/* Logo Section */}
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 mb-10">
            <Link
              href="/"
              className="flex items-center justify-center relative group w-40"
            >
              <Image
                src={footerData.logo.primary}
                alt="Logo"
                width={50}
                height={40}
                className="h-8 2xl:h-10 md:h-10 transition-all duration-300 transform group-hover:-translate-x-8"
              />
              <Image
                src={footerData.logo.secondary}
                alt="Logo"
                width={160}
                height={40}
                className="absolute opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-20 transition-all duration-700"
              />
            </Link>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-base leading-relaxed">
                {footerData.address.line1}
                <br />
                {footerData.address.line2}
              </p>

              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <a
                    href={`tel:${footerData.address.phone.replace(/\s+/g, "")}`}
                    className="ml-2 hover:text-green-400"
                  >
                    {footerData.address.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <a
                    href={`mailto:${footerData.address.email}`}
                    className="ml-2 hover:text-green-400"
                  >
                    {footerData.address.email}
                  </a>
                </div>

                <div className="flex items-center mt-2">
                  <FaLinkedin className="h-5 w-5 text-blue-600" />
                  <a
                    href={footerData.address.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 hover:text-green-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Services and Support
              </h3>
              <ul className="space-y-2 text-base">
                {footerData.services.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-green-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-base">
                {footerData.quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-green-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Info</h3>
              <ul className="space-y-2 text-base">
                {footerData.info.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-green-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-center text-white py-4 bg-greenCustomColor">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 px-4">
          <p>&copy; 2025 GlobalXperts. All rights reserved.</p>
          <Link href="/privacy-policy" className="underline hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;