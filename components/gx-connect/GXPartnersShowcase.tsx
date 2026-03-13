"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// import CiscoLogo from "@/Assets/logo/Cisco_Webex.png";
// import NICELogo from "@/Assets/logo/nicdd.svg";
// import GenesysLogo from "@/Assets/logo/genesys.svg";
// import AWSLogo from "@/Assets/logo/amazoncl.png";
// import AvayaLogo from "@/Assets/logo/avaya.png";

const partners = [
  { name: "Cisco Webex", logo: "/assets/logo/Cisco_Webex.png" },
  { name: "NICE", logo: "/assets/logo/nicdd.svg" },
  { name: "Genesys", logo: "/assets/logo/genesys.svg" },
  { name: "AWS Connect", logo: "/assets/logo/amazoncl.png" },
  { name: "Avaya", logo: "/assets/logo/avaya.png" },
];

export default function GXPartnersShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-white to-indigo-100/20 blur-2xl opacity-70" />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Trusted by Industry Leaders
        </motion.h2>

        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Partnering with the world’s most advanced communication platforms.
        </p>
      </div>

      {/* Logo Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            className="relative group flex flex-col items-center justify-center rounded-2xl p-6 bg-white/60 border border-white/30 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={
              !shouldReduceMotion ? { scale: 1.08, rotate: 1 } : { scale: 1.03 }
            }
          >
            <motion.div
              animate={
                !shouldReduceMotion ? { y: [0, -6, 0] } : {}
              }
              transition={
                !shouldReduceMotion
                  ? {
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : {}
              }
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={60}
                className="max-h-16 w-auto object-contain select-none"
              />
            </motion.div>

            <span className="text-sm font-medium text-gray-700 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {partner.name}
            </span>

            {/* Accent line */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Moving gradient bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
        animate={
          !shouldReduceMotion ? { x: ["-50%", "100%"] } : {}
        }
        transition={
          !shouldReduceMotion
            ? { duration: 8, repeat: Infinity, ease: "linear" }
            : {}
        }
      />
    </section>
  );
}