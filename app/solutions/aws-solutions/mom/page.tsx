"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

// import AccelerationImage from "@/Assets/accelatorImage.png";

export default function MigrationOptimizationModernization() {
  return (
    <>
      <Head>
        <title>Migration, Optimization & Modernization</title>
        <meta
          name="description"
          content="Fast-track your cloud migration with AWS MAP. Assess, mobilize and modernize workloads for long-term success."
        />
      </Head>

      {/* HERO */}
      <section className="bg-blueCustomColor text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Migration, Optimization & Modernization
            </h1>

            <p className="mt-6 text-lg max-w-xl">
              The AWS Migration Acceleration Program (MAP) helps organizations
              migrate workloads to AWS with a structured methodology,
              cost-optimization guidance, and expert support.
            </p>

            <Link
              href="/contact-us"
              className="inline-block mt-8 bg-greenCustomColor2 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>

          <iframe
            className="w-full h-[350px] rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/_MTDN2r5-oI?start=3"
            title="AWS Migration"
            allowFullScreen
          />
        </div>
      </section>

      {/* MAP BASICS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          MAP Program Basics
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Highlights of the AWS Migration Acceleration Program
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Organizations Migrating to AWS"
            text="MAP helps companies move workloads, applications, and data to AWS efficiently."
          />

          <Card
            title="Companies of All Sizes"
            text="Businesses of any scale can leverage AWS MAP with guidance from certified AWS partners."
          />

          <Card
            title="Cost Optimization Focus"
            text="AWS credits and partner investments help offset migration costs."
          />

          <Card
            title="Structured Migration Process"
            text="MAP provides tools, frameworks, and expertise to simplify migration."
          />

        </div>

      </section>

      {/* METHODOLOGY */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Migration Methodology
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              AWS MAP provides a proven migration framework to help businesses
              assess workloads, mobilize teams, and migrate applications safely.
            </p>
          </div>

          <iframe
            className="w-full h-[350px] rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/_MTDN2r5-oI?start=3"
            title="AWS Migration"
            allowFullScreen
          />

        </div>
      </section>

      {/* MIGRATION JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold">
            Migration Journey
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Migration journeys include assessment, planning, migration
            execution, and modernization of workloads for cloud-native
            architectures.
          </p>
        </div>

        <img
          src="/Assets/accelatorImage.png"
          className="rounded-xl shadow-lg"
          alt="Migration Acceleration"
        />

      </section>

      {/* SUMMARY */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white rounded-xl shadow-lg p-10">

          <h2 className="text-3xl font-bold mb-4">
            Why AWS MAP Matters
          </h2>

          <p className="text-gray-600 text-lg">
            AWS MAP simplifies cloud migration with expert guidance, financial
            incentives, and automated tools. Businesses can modernize their
            infrastructure faster while reducing operational risk.
          </p>

        </div>

      </section>

    </>
  );
}


/* reusable card */

function Card({ title, text }: any) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}