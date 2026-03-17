"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  FaBuilding,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaGlobe,
  FaFlask,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import Link from "next/link";

/* ─── tiny hook: fade-in on scroll ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

/* ─── animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(to / 60));
    const id = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(id);
      } else setVal(start);
    }, 16);
    return () => clearInterval(id);
  }, [visible, to]);
  return (
    <span ref={ref as any}>
      {val}
      {suffix}
    </span>
  );
}

/* ─── Section wrapper that fades in ─── */
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function CaptiveGCCPage() {
  const PRIMARY = "#010c41";

  return (
    <>
      <Head>
        <title>
          Captive GCC | Build, Control, Scale & Innovate Your Global Capability
          Center
        </title>
        <meta
          name="description"
          content="Set up a Captive Global Capability Center (GCC) with ownership, deep domain expertise, and scalable talent."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="antialiased">
        <style>{`
          * { box-sizing: border-box; }
          body { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
          @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-30px) scale(1.06)} }
          @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,20px) scale(0.98)} }
          @keyframes float3 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(15px,-15px)} 66%{transform:translate(-15px,10px)} }
          @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          @keyframes pulse-ring { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.5);opacity:0} }
          @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
          @keyframes slideLeft { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
          @keyframes slideRight { from{opacity:0;transform:translateX(60px)} to{opacity:1;transform:translateX(0)} }
          @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }

          .hero-tag { animation: fadeUp 0.6s ease both; }
          .hero-h1 { animation: slideLeft 0.8s ease 0.1s both; }
          .hero-p  { animation: slideRight 0.8s ease 0.3s both; }
          .hero-cta { animation: fadeUp 0.8s ease 0.5s both; }

          .orb1 { animation: float1 8s ease-in-out infinite; }
          .orb2 { animation: float2 11s ease-in-out infinite; }
          .orb3 { animation: float3 14s ease-in-out infinite; }

          .card-hover { transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease; }
          .card-hover:hover { transform: translateY(-8px) scale(1.02); }

          .icon-wrap { transition: transform 0.3s ease; }
          .card-hover:hover .icon-wrap { transform: rotate(-8deg) scale(1.12); }

          .gradient-border { position: relative; }
          .gradient-border::before {
            content:''; position:absolute; inset:0; border-radius:1rem; padding:2px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude; opacity:0; transition: opacity 0.3s ease;
          }
          .gradient-border:hover::before { opacity:1; }

          .stat-card { position:relative; overflow:hidden; }
          .stat-card::after {
            content:''; position:absolute; top:0;left:-100%; width:60%;height:100%;
            background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent);
            animation: shimmer 2.5s infinite; animation-play-state: paused;
          }
          .stat-card:hover::after { animation-play-state: running; }

          .cta-btn { position:relative; overflow:hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; }
          .cta-btn::after {
            content:''; position:absolute; inset:0;
            background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent); opacity:0; transition: opacity 0.3s ease;
          }
          .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(59,130,246,0.18); }
          .cta-btn:hover::after { opacity:1; }

          .step-line::after {
            content:''; position:absolute; top:28px; left:50%; width:2px; height:calc(100% + 2rem);
            background:linear-gradient(to bottom, #3b82f6, #8b5cf6 60%, transparent);
          }
          @media(max-width:767px){ .step-line::after { display:none; } }

          /* small helpers */
          .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
        `}</style>

        {/* HERO */}
        <section
          className="relative overflow-hidden text-white"
          style={{
            background:
              "linear-gradient(135deg, #010c41 0%, #02145a 40%, #0d0630 100%)",
            minHeight: "72vh",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Captive GCC Hero"
        >
          <div
            className="orb1 absolute top-10 right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
            }}
          />
          <div
            className="orb2 absolute bottom-16 left-10 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="orb3 absolute top-1/2 left-1/2 w-56 h-56 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
              transform: "translate(-50%,-50%)",
            }}
          />

          <div className="container relative z-10 py-16 text-center">
            <div className="hero-tag inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              Global Capability Centers
            </div>

            <h1 className="hero-h1 text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              Build. Control.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Scale. Innovate.
              </span>
            </h1>

            <p className="hero-p text-base md:text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-8">
              A Captive Global Capability Center (GCC) is a fully owned
              extension of your enterprise—designed for long-term value, deep
              expertise, and complete operational control.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" legacyBehavior>
                <a
                  className="cta-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-base"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    color: "#fff",
                  }}
                >
                  Talk to Our GCC Experts <FaArrowRight />
                </a>
              </Link>

              <a
                href="#why-captive"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition"
              >
                Explore Benefits
              </a>
            </div>
          </div>
        </section>

        {/* WHY CAPTIVE */}
        <section
          id="why-captive"
          className="py-16"
          style={{ background: "#f8faff" }}
          aria-label="Why a Captive GCC"
        >
          <div className="container">
            <FadeSection className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
                Strategic Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#010c41] mb-4">
                Why a{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #2563eb, #166534)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Captive GCC?
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base">
                More than cost efficiency — captive GCCs become strategic engines
                for innovation, quality, and growth.
              </p>
            </FadeSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Ownership & Governance",
                  desc:
                    "Complete control over people, processes, IP, and security. Your data, your decisions, your future.",
                  icon: <FaShieldAlt />,
                  color: "#3b82f6",
                },
                {
                  title: "Deep Domain Expertise",
                  desc:
                    "Build institutional knowledge aligned to your core business processes and strategic goals.",
                  icon: <FaBuilding />,
                  color: "#8b5cf6",
                },
                {
                  title: "Scalable Talent Engine",
                  desc:
                    "Access high-quality talent across technology and operations in one of the world's largest talent pools.",
                  icon: <FaUsers />,
                  color: "#06b6d4",
                },
                {
                  title: "Value-Led Cost Optimization",
                  desc:
                    "Efficiency combined with innovation, speed, and quality—not just headcount arbitrage.",
                  icon: <FaChartLine />,
                  color: "#10b981",
                },
                {
                  title: "Cultural Alignment",
                  desc:
                    "Embed your enterprise culture, leadership practices, and values across every level of the center.",
                  icon: <FaCogs />,
                  color: "#f59e0b",
                },
                {
                  title: "Innovation at Scale",
                  desc:
                    "Transform your GCC into a hub for AI, automation, and next-gen product development.",
                  icon: <FaLightbulb />,
                  color: "#ec4899",
                },
              ].map((item, i) => (
                <FadeSection key={i} delay={i * 0.06}>
                  <div
                    className="card-hover gradient-border rounded-2xl p-6 shadow-md h-full"
                    style={{ isolation: "isolate", background: "white" }}
                  >
                    <div
                      className="icon-wrap w-12 h-12 mb-4 flex items-center justify-center rounded-lg text-white text-xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}cc, ${item.color})`,
                      }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg text-[#010c41] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD / CAPABILITIES */}
        <section className="py-16 bg-white" aria-label="What we help you build">
          <div className="container">
            <FadeSection className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-purple-600 mb-3 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#010c41] mb-4">
                What We Help You Build
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                End-to-end GCC capabilities that operate as true innovation
                hubs.
              </p>
            </FadeSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Technology & Engineering Centers",
                  icon: <FaServer className="text-2xl" />,
                  desc:
                    "Full-stack engineering, cloud, DevOps, and product development teams.",
                  color: "#3b82f6",
                  img:
                    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900&q=80",
                },
                {
                  title: "Analytics & Data Hubs",
                  icon: <FaDatabase className="text-2xl" />,
                  desc: "Data science, ML, BI, and advanced analytics capabilities.",
                  color: "#8b5cf6",
                  img:
                    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=900&q=80",
                },
                {
                  title: "Shared Services & Operations",
                  icon: <FaGlobe className="text-2xl" />,
                  desc: "Finance, HR, legal, and back-office operations at scale.",
                  color: "#10b981",
                  img:
                    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&q=80",
                },
                {
                  title: "R&D and Innovation Labs",
                  icon: <FaFlask className="text-2xl" />,
                  desc:
                    "Applied research, prototyping, AI/ML experimentation, and IP creation.",
                  color: "#f59e0b",
                  img:
                    "https://images.unsplash.com/photo-1552581234-26160f608093?w=900&q=80",
                },
              ].map((item, i) => (
                <FadeSection key={i} delay={i * 0.06}>
                  <div className="card-hover rounded-2xl overflow-hidden shadow-md bg-white h-full flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={item.img}
                        alt={`${item.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, ${item.color}cc 0%, transparent 60%)`,
                        }}
                      />
                      <div className="absolute bottom-3 left-3 text-white" aria-hidden="true">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-[#010c41] mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(180deg,#f8faff 0%,#fff 100%)" }}
          aria-label="Our GCC setup process"
        >
          <div className="container">
            <FadeSection className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#010c41] mb-4">
                How We Set Up Your GCC
              </h2>
            </FadeSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  num: "01",
                  title: "Strategy & Design",
                  desc:
                    "Define operating model, location, talent strategy, and governance framework.",
                },
                {
                  num: "02",
                  title: "Entity Setup",
                  desc:
                    "Legal entity formation, regulatory compliance, and facility setup.",
                },
                {
                  num: "03",
                  title: "Talent Acquisition",
                  desc: "Recruit, onboard, and train leadership and specialist teams at speed.",
                },
                {
                  num: "04",
                  title: "Operate & Scale",
                  desc: "Continuous optimization, knowledge transfer, and scaling the center.",
                },
              ].map((step, i) => (
                <FadeSection key={i} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-white mb-3"
                      style={{
                        background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                        fontSize: "1rem",
                      }}
                    >
                      {step.num}
                    </div>
                    <h3 className="font-bold text-[#010c41] mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-12" style={{ background: "#010c41" }} aria-label="Why partner with us">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeSection>
                <span className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3 block">
                  Why Us
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Your Trusted GCC{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Partner
                  </span>
                </h2>
                <p className="text-blue-200/80 mb-6 leading-relaxed">
                  We combine deep operational expertise with an outcome-first mindset — a GCC should be your strategic advantage.
                </p>

                <ul className="space-y-3">
                  {[
                    "Proven experience building GCCs at scale across industries",
                    "Strong talent ecosystem & tier-1 academic partnerships",
                    "Deep expertise across technology, analytics & operations",
                    "Outcome-driven, not headcount-driven approach",
                    "Embedded project governance from day one",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-blue-100/90">
                      <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeSection>

              <FadeSection delay={0.12}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                    alt="Expert GCC consultants collaborating on strategy"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />

                  <div
                    className="absolute -bottom-8 -left-8 rounded-2xl p-5 shadow-2xl"
                    style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
                    aria-hidden="true"
                  >
                    <div className="text-2xl font-extrabold text-white">150+</div>
                    <div className="text-xs text-white/80 font-medium">GCCs Delivered</div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-12 bg-white" aria-label="Client testimonial">
          <div className="container text-center">
            <FadeSection>
              <div className="text-4xl" aria-hidden="true" style={{ color: "#3b82f6" }}>
                "
              </div>
              <blockquote className="text-xl md:text-2xl text-[#010c41] font-medium leading-relaxed">
                Our GCC went from concept to fully operational in 9 months — with a world-class team, robust governance, and immediate impact on our global delivery.
              </blockquote>
            </FadeSection>
          </div>
        </section>

        {/* CTA (keeps CTA but no contact form) */}
        <section className="py-16 bg-white">
          <div
            className="container rounded-3xl text-white text-center py-16 px-6 shadow-2xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #010c41 0%, #0d0630 60%, #010c41 100%)" }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)" }} />

            <FadeSection>
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase">
                Get Started Today
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to Build Your Captive GCC?</h2>

              <p className="text-blue-200/70 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
                Let's design a GCC that becomes a strategic advantage. Our experts will guide you from strategy to scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" legacyBehavior>
                  <a
                    className="cta-btn inline-flex items-center justify-center gap-2 rounded-full px-10 py-3 font-semibold text-base"
                    style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", color: "#fff" }}
                  >
                    Talk to Our GCC Experts <FaArrowRight />
                  </a>
                </Link>

                <a href="#why-captive" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition">
                  Learn More
                </a>
              </div>
            </FadeSection>
          </div>
        </section>
      </main>
    </>
  );
}