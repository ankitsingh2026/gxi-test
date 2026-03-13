"use client";

import { useState } from "react";
import { Phone, Check, Brain, MessageSquare } from "lucide-react";

export default function ThreeTierSolution() {
  const [selected, setSelected] = useState("bronze");

  const tiers = [
    {
      id: "bronze",
      name: "Bronze",
      subtitle: "Contact Center Only",
      short: "Cloud-Based Contact Center for Small Businesses",
      bullets: [
        "Basic IVR & Routing: Simple auto-attendant and skills-based routing.",
        "Channels: Voice & Email support.",
        "Agent Workspace: Amazon Connect browser-based softphone.",
        "Integrations: CRM screen-pop, simple data lookups via Lambda.",
        "Reporting: Real-time & historical metrics.",
        "Security: AWS encryption and basic security profiles.",
      ],
      icon: Phone,
      color: "from-amber-50 to-amber-100",
    },
    {
      id: "silver",
      name: "Silver",
      subtitle: "OmniBot Virtual Assistant",
      short: "Cloud-Based Contact Center for Growing Companies Includes Bronze",
      bullets: [
        "Automation & Intelligence: Amazon Lex chatbots & Natural Language IVR.",
        "Channels: Web Chat with Lex integration.",
        "Agent Productivity: CRM integrations & task management.",
        "Advanced Analytics: Contact Lens for speech analytics, sentiment tracking, and compliance.",
        "WEM: Forecasting, scheduling, and capacity planning.",
      ],
      icon: MessageSquare,
      color: "from-sky-50 to-sky-100",
    },
    {
      id: "gold",
      name: "Gold",
      subtitle: "Agent Assist & GenAI",
      short:
        "Cloud-Based Contact Center for Large Enterprises – AI-Powered CX Includes Silver",
      bullets: [
        "AI & Predictive Intelligence: 360° customer view and predictive routing.",
        "Channels: Full Omni-channel (Voice, Email, Chat, SMS, Social).",
        "Advanced WEM integrations with Calabrio, NICE, or Aspect.",
        "Security: Amazon Connect Voice ID authentication.",
        "Outbound Engagement: High-volume campaigns.",
      ],
      icon: Brain,
      color: "from-violet-50 to-violet-100",
      recommended: true,
    },
  ];

  const selectedTier = tiers.find((tier) => tier.id === selected) || tiers[0];

  return (
    <section className="bg-gradient-to-b from-slate-100 to-white/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            3-Tiered Contact Centre Solution
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Select the right CX capabilities for your team.
          </p>
        </div>

        {/* Tier cards */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const active = tier.id === selected;

            return (
              <button
                key={tier.id}
                onClick={() => setSelected(tier.id)}
                aria-pressed={active}
                className={`relative rounded-2xl p-6 transition-all duration-300 transform
                ${
                  active
                    ? "bg-white shadow-xl -translate-y-1 scale-[1.01]"
                    : "bg-white/95 hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 right-4">
                    <div className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${tier.color}`}
                  >
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                      <tier.icon className="w-5 h-5 text-slate-800" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-semibold text-slate-900">
                      {tier.name}
                      <span className="text-slate-500">
                        {" — " + tier.subtitle}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 font-bold max-w-[260px] mx-auto">
                      {tier.short}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Details */}
        <div className="mt-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-50">
                <selectedTier.icon className="w-7 h-7 text-slate-700" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">
                  {selectedTier.name} — {selectedTier.subtitle}
                </h3>

                <p className="mt-2 text-slate-600 font-semibold">
                  {selectedTier.short}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedTier.bullets.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-emerald-500" />{" "}
                      <div className="text-sm text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
