"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

type SubMenuItem = {
  label: string;
  href: string;
  children?: SubMenuItem[];
};

const MENU_ITEMS: SubMenuItem[] = [
  {
    label: "Solutions",
    href: "#",
    children: [
      {
        label: "Cloud",
        href: "/solutions/cloud",
        children: [
          { label: "AWS", href: "/solutions/cloud/aws" },
          { label: "Multi Cloud", href: "/solutions/cloud/multi-cloud" },
          { label: "Hybrid Cloud", href: "/solutions/cloud/aws-hybrid-cloud" },
          { label: "Cloud Migration", href: "/solutions/cloud/cloud-solution" },
        ],
      },
      {
        label: "AWS Solutions",
        href: "/solutions/aws-solutions",
        children: [
          {
            label: "Titan X",
            href: "/solutions/aws-solutions/titan-x-data-transformation",
          },
          { label: "OmniBot", href: "/solutions/aws-solutions/omni-bot-genai" },
          {
            label: "Opsis Streaming",
            href: "/solutions/aws-solutions/opsis-live-streaming",
          },
          {
            label: "Prolific IO Storage Accelerator",
            href: "/solutions/aws-solutions/piosa",
          },
          {
            label: "MOM",
            href: "/solutions/aws-solutions/mom",
          },
        ],
      },
      {
        label: "Collaboration Technologies",
        href: "/solutions/collaboration-technologies",
      },
      {
        label: "Data Center Desing/Build",
        href: "/solutions/data-center-design",
      },

      { label: "Cyber Security", href: "/solutions/cyber-security" },

      {
        label: "Small and Medium Business ",
        href: "/solutions/small-medium-business",
      },

      {
        label: "AI & Machine learning Solutions",
        href: "/solutions/ai-ml-solutions",
        children: [
          {
            label: "Smart Transit",
            href: "/solutions/ai-ml-solutions/smart-transit",
          },
          {
            label: "IOT in Healthcare",
            href: "/solutions/ai-ml-solutions/iot-in-healthcare",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "GCC Services", href: "/services/gcc-services" },
      { label: "Field Services", href: "/services/field-services" },
      { label: "Managed Services", href: "/services/managed-services" },
      {
        label: "Professional Services",
        href: "/services/professional-services",
      },
      { label: "Software Development", href: "/services/software-development" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Aviation", href: "/industries/aviation" },
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Energy", href: "/industries/energy" },
      { label: "Financial", href: "/industries/financial" },
      { label: "Retail", href: "/industries/retail" },
      {
        label: "Media & Entertainment",
        href: "/industries/media-entertainment",
      },
      { label: "Service Provider", href: "/industries/service-provider" },
      { label: "Government", href: "/industries/government" },
    ],
  },
  {
    label: "Insights",
    href: "#",
    children: [
      { label: "Blog", href: "/insights/blog" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Media Library", href: "/insights/media-library" },
      { label: "Partners", href: "/insights/partners" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inSliderSection, setInSliderSection] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef<number>(0);
  const ticking = useRef(false);
  const listenerAttached = useRef(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [submenuStates, setSubmenuStates] = useState<Record<string, boolean>>(
    {},
  );

  const pathname = usePathname();

  useEffect(() => {
    // Auto-close mobile menu when route changes
    setShowMobileMenu(false);
    setOpenIndex(null);
  }, [pathname]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  // scroll handler (rAF throttle)
  const handleScroll = () => {
    if (ticking.current) return;
    ticking.current = true;
    window.requestAnimationFrame(() => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 0);

      const slider = document.getElementById("slider-section");
      if (slider) {
        const rect = slider.getBoundingClientRect();
        setInSliderSection(rect.top <= 50 && rect.bottom >= 50);
      }

      if (currentY > lastScrollY.current && currentY > 100) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      lastScrollY.current = currentY;
      ticking.current = false;
    });
  };

  useEffect(() => {
    if (listenerAttached.current) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    listenerAttached.current = true;
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((s) => !s);
    // reset submenu open states on toggle close
    if (showMobileMenu) setSubmenuStates({});
  };

  // toggle individual submenu (mobile)
  const toggleSubmenu = (key: string) => {
    setSubmenuStates((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <div
      className={`fixed top-0 w-full h-[60px] z-50 transition-transform duration-300
        ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled
            ? inSliderSection
              ? "rounded-lg bg-white/80 shadow-lg"
              : "bg-gradient-to-r from-[#010c41] via-[#010c41] to-gray-300"
            : "bg-gradient-to-r from-[#010c41] via-[#010c41] to-gray-300"
        }`}
    >
      <nav
        className="relative mx-auto flex items-center h-full px-8"
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center relative group w-40">
            <Image
              src="/assets/3stLG.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 transition-all duration-500 transform group-hover:-translate-x-6"
            />
            <Image
              src="/assets/a.png"
              alt="Logo Alt"
              width={160}
              height={40}
              className="absolute opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-5 transition-all duration-700"
            />
          </Link>
        </div>

        {/* Center menu (desktop) */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-6 items-center text-white">
          <li>
            <Link
              href="/"
              className="flex items-center px-4 py-1 hover:text-green-400 hover:font-bold"
            >
              <FaHome className="mr-2" /> Home
            </Link>
          </li>

          {MENU_ITEMS.map((item, index) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-haspopup={!!item.children}
                className="flex items-center px-4 py-1 hover:text-green-400 "
              >
                {item.label}
                {openIndex === index ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>

              {/* desktop dropdown */}
              {openIndex === index && item.children && (
                <div
                  className="absolute top-full mt-[14px] left-0 shadow-xl p-2 rounded-sm min-w-[220px] transition-all duration-300 ease-in-out transform animate-fadeIn"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(8, 12, 50), #172554, #172554)",
                  }}
                >
                  {" "}
                  <ul className="space-y-1">
                    {item.children.map((child) => (
                      <li key={child.label} className="relative group">
                        {" "}
                        <div className="flex items-center justify-between">
                          <Link
                            href={child.href}
                            className="block p-2 rounded whitespace-nowrap hover:bg-greenCustomColor2 hover:font-bold hover:text-white transition-all duration-200 w-full"
                          >
                            {child.label}
                          </Link>

                          {child.children && (
                            <FaChevronDown className="ml-2 text-white group-hover:rotate-180 transition-transform duration-300" />
                          )}
                        </div>
                        {child.children && (
                          <ul
                            className="absolute top-[-8px] left-full w-80 rounded shadow-xl p-2
               opacity-0 invisible translate-x-2
               group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
               transition-all duration-300 ease-in-out"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, rgb(8, 12, 50), #172554, #172554)",
                            }}
                          >
                            {child.children.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="block p-2 rounded hover:bg-greenCustomColor2 hover:text-white"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact CTA (desktop right) */}
        <div className="hidden lg:flex ml-auto">
          <Link
            href="/contact-us"
            className="bg-greenCustomColor2 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto text-white p-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            className="lg:hidden absolute top-[60px] left-0 w-full shadow-xl p-4 z-40 transition-all duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(8, 12, 50), #172554, #172554)",
            }}
          >
            {" "}
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="font-semibold">
                  Home
                </Link>
              </li>

              {MENU_ITEMS.map((item, idx) => {
                const key = `${item.label}-${idx}`;
                const isOpen = openIndex === idx;
                return (
                  <li key={key}>
                    <div className="flex justify-between items-center">
                      <button
                        className="w-full text-left font-semibold flex justify-between items-center"
                        onClick={() => {
                          handleToggle(idx);
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${key}`}
                      >
                        {item.label}
                        {isOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>

                    {isOpen && item.children && (
                      <ul id={`submenu-${key}`} className="pl-4 mt-2 space-y-2">
                        {item.children.map((child, cidx) => {
                          const childKey = `${key}-child-${cidx}`;
                          const childOpen = !!submenuStates[childKey];
                          return (
                            <li key={childKey}>
                              <div className="flex justify-between items-center">
                                <Link
                                  href={child.href}
                                  className="block w-full"
                                >
                                  {child.label}
                                </Link>

                                {child.children && (
                                  <button
                                    onClick={() => toggleSubmenu(childKey)}
                                    aria-expanded={childOpen}
                                    className="ml-2"
                                  >
                                    {childOpen ? (
                                      <ChevronUp size={16} />
                                    ) : (
                                      <ChevronDown size={16} />
                                    )}
                                  </button>
                                )}
                              </div>

                              {child.children && childOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                  {child.children.map((sub, sidx) => (
                                    <li key={`${childKey}-sub-${sidx}`}>
                                      <Link href={sub.href}>{sub.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* Mobile Contact CTA */}
              <div className="bg-greenCustomColor2 text-white px-6 py-3 text-center rounded mt-2">
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
