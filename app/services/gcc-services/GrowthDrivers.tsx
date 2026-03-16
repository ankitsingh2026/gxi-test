"use client";

import { FaLightbulb, FaGlobeAsia, FaUsers, FaBalanceScale, FaCloud } from "react-icons/fa";

const GCCGrowthDrivers = () => {
  const cards = [
    {
      title: "Shift to Innovation",
      desc: "From cost arbitrage to innovation, IP creation, and digital acceleration.",
      icon: <FaLightbulb className="text-2xl" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      title: "Location Diversification",
      desc: "Resilience-driven footprint strategies across India and emerging hubs.",
      icon: <FaGlobeAsia className="text-2xl" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      title: "Talent Access",
      desc: "Always-on pipeline of digital, engineering, and domain talent.",
      icon: <FaUsers className="text-2xl" />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
    },
    {
      title: "Regulatory Clarity",
      desc: "Evolving regimes (DPDPA, SEZ, FDI) enabling compliant GCC models.",
      icon: <FaBalanceScale className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              Market Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth Drivers</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understand what's fueling the next wave of GCC expansion and strategic transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent p-6 transition-all duration-300 overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`} />

            </div>
          ))}
        </div>

        {/* Featured Card */}
        <div className="relative group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 transition-all duration-300 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex items-start gap-6">

            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                <FaCloud className="text-3xl" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                Digital Operating Models
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                  Key Enabler
                </span>
              </h3>

              <p className="text-blue-100 text-base leading-relaxed max-w-4xl">
                Cloud, AI, and platform models anchored from GCCs are reshaping enterprise architecture and enabling rapid innovation at scale.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-blue-100 mt-1">Cloud Adoption</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center min-w-[120px]">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-blue-100 mt-1">AI Integration</div>
              </div>
            </div>

          </div>

          <div className="relative z-10 flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/20">
            {["Cloud Native", "AI/ML", "Microservices", "DevOps", "Data Platforms"].map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">

          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              📈
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-1">Market Momentum</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                The GCC sector in India is projected to grow to
                <span className="font-semibold text-green-700"> $100B+ </span>
                by 2030, driven by these key factors and the increasing strategic importance of innovation centers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GCCGrowthDrivers;

