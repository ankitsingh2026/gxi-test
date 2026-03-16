"use client";

import { useEffect } from "react";
import {
  FaBuilding,
  FaExchangeAlt,
  FaUsers,
  FaCog,
  FaGlobeAsia,
  FaShieldAlt,
  FaStar,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";
import Link from "next/link";

const GCCSetupSection = () => {

  const setupModels = [
    {
      title: "Captive GCC",
      desc: "Highest control and alignment — ideal for strategic, IP-led, or regulated mandates.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      badge: "Most Control",
      link: "/services/gcc-services/models/captive-gcc",
      features: ["Full IP ownership", "Strategic alignment", "Regulatory compliance"]
    },
    {
      title: "Build-Operate-Transfer (BOT)",
      desc: "Accelerated time-to-value with lower setup risk, suitable for rapid scaling.",
      icon: <FaExchangeAlt className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      badge: "Fastest Launch",
      link: "/services/gcc-services/models/bot-model",
      features: ["Rapid deployment", "Lower initial risk", "Proven playbooks"]
    },
    {
      title: "Hybrid GCC + Partner",
      desc: "Blend of captive leadership with partner execution; ideal for multi-tower models.",
      icon: <FaUsers className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      badge: "Best Flexibility",
      link: "/services/gcc-services/models/hybrid-gcc",
      features: ["Balanced control", "Scalable execution", "Cost optimization"]
    },
    {
      title: "Managed Services Extension",
      desc: "Flexible execution for selected functions with outcome-based delivery.",
      icon: <FaCog className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      badge: "Outcome-Based",
      link: "/services/gcc-services/models/managed-service-gcc",
      features: ["Flexible scope", "Performance-driven", "Lower fixed costs"]
    }
  ];

  const useCases = [
    { text: "Banks & insurers creating regulated cyber, risk, and compliance hubs.", icon: "🏦" },
    { text: "SaaS and product firms building engineering & AI innovation centers.", icon: "💻" },
    { text: "Industrial firms centralizing digital, automation, and shared services.", icon: "🏭" }
  ];

  const steps = [
    { step: "01", title: "Vision & Charter", desc: "Define mandate, ownership, and KPIs.", icon: <FaGlobeAsia className="text-xl"/>, color: "from-blue-500 to-cyan-500" },
    { step: "02", title: "Location & Model", desc: "Select city, ecosystem, and governance model.", icon: <FaBuilding className="text-xl"/>, color: "from-purple-500 to-pink-500" },
    { step: "03", title: "Regulatory & Structure", desc: "Entity, approvals, tax, IP & cross-border flows.", icon: <FaShieldAlt className="text-xl"/>, color: "from-green-500 to-emerald-500" },
    { step: "04", title: "Talent & Leadership", desc: "Org design, hiring, leadership onboarding.", icon: <FaUsers className="text-xl"/>, color: "from-orange-500 to-red-500" },
    { step: "05", title: "Digital & Tech Stack", desc: "Cloud, security, tooling, engineering setup.", icon: <FaCog className="text-xl"/>, color: "from-indigo-500 to-purple-500" },
    { step: "06", title: "Scale & Integration", desc: "Governance, alignment, workflow integration.", icon: <FaChartLine className="text-xl"/>, color: "from-teal-500 to-cyan-500" },
    { step: "07", title: "Optimize & Transform", desc: "Continuous improvement & value acceleration.", icon: <FaStar className="text-xl"/>, color: "from-yellow-500 to-orange-500" }
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-left, .fade-right, .fade-up").forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-left, .fade-right, .fade-up { opacity: 0; transition: all .7s ease-out; }
        .fade-left { transform: translateX(-30px); }
        .fade-right { transform: translateX(30px); }
        .fade-up { transform: translateY(30px); }
        .show { opacity: 1 !important; transform: translate(0,0) !important; }

        .step-connector { position: relative; }

        @media (min-width: 1024px) {
          .step-connector::after {
            content: '→';
            position: absolute;
            right: -1.25rem;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.3);
            font-size: 1.5rem;
            font-weight: bold;
          }
          .step-connector:last-child::after { content: ''; }
        }
      `}</style>

      {/* ------------------ SETUP MODELS ------------------ */}

      <section className="bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] py-24 px-6 text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-16 fade-up">

            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Setup Options
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Setup Models</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
              Choose the right setup model based on your control needs, speed of execution,
              and long-term GCC strategy.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {setupModels.map((model, i) => (

              <Link key={i} href={model.link} className="block">

                <div className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 fade-up hover:-translate-y-2 hover:shadow-2xl">

                  <div className="flex items-start justify-between mb-4">

                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${model.color} text-white`}>
                      {model.icon}
                    </div>

                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${model.color} text-white`}>
                      {model.badge}
                    </span>

                  </div>

                  <h3 className="font-bold text-xl text-white mb-3">
                    {model.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4">
                    {model.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">

                    {model.features.map((feature, idx) => (

                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <FaCheckCircle />
                        {feature}
                      </div>

                    ))}

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ------------------ USE CASES ------------------ */}

      <section className="py-16 px-6">

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">

          <h4 className="font-bold text-[#010c41] text-xl mb-6">
            Typical Use Cases
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {useCases.map((useCase, i) => (

              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50">

                <span className="text-2xl">{useCase.icon}</span>

                <p className="text-sm text-gray-700">
                  {useCase.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ------------------ CTA ------------------ */}

      <section className="text-center pb-20">

        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-full bg-[#010c41] px-14 py-4 text-white font-semibold text-lg shadow-xl hover:scale-105 transition"
        >
          Get Started
        </Link>

      </section>

    </>
  );
};

export default GCCSetupSection;