"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function PIOSA() {
  return (
    <>
      <Head>
        <title>Prolific IO Storage Accelerator - GlobalXperts</title>
        <meta
          name="description"
          content="High-performance scalable storage on AWS engineered for data-intensive enterprise workloads."
        />
      </Head>

      {/* HERO */}
      <section className="bg-blueCustomColor text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Prolific IO Storage Accelerator
            </h1>

            <p className="mt-6 text-lg max-w-xl">
              PIOSA is a high-performance storage accelerator co-developed by
              AWS Global Storage Solutions and GlobalXperts. It delivers extreme
              IOPS and scalable throughput for enterprise workloads.
            </p>

            <Link
              href="/contact-us"
              className="inline-block mt-8 bg-greenCustomColor2 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>

          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/iosaImage.png"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose PIOSA?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Your workloads demand scalability, speed, and cost efficiency.
            PIOSA dynamically scales IOPS and throughput to handle massive data
            workloads while dramatically reducing operational costs.
          </p>
        </div>

        <img
          src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/iosaImage.png"
          className="rounded-xl shadow-lg"
        />

      </section>

      {/* CHALLENGES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            The Challenges You Face
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <Card
              title="Extreme Performance Demands"
              text="On-prem workloads demanding 2M+ IOPS and massive throughput create cost and scaling challenges."
            />

            <Card
              title="Demand Spikes"
              text="Storage demand spikes during peak workloads cause expensive over-provisioning."
            />

          </div>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            The Solution
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            PIOSA dynamically scales IOPS and throughput using accelerator EC2
            instances to deliver massive performance gains.
          </p>
        </div>

        <div className="space-y-6">

          <Feature
            number="1"
            title="Boosted Performance"
            text="Accelerators offload EBS operations delivering up to 10x native performance."
          />

          <Feature
            number="2"
            title="Efficient Scaling"
            text="IOPS automatically scales during peak demand and reduces during off-peak periods."
          />

          <Feature
            number="3"
            title="Cost Efficient"
            text="Avoid expensive over-provisioned EC2 deployments with dynamic scaling."
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Features & Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <Card title="Dynamic IOPS Scaling" text="Peak performance when needed, savings when not." />
            <Card title="Stateless Architecture" text="Cache-less pass-through architecture." />
            <Card title="Enterprise Compatibility" text="Works with AWS Backup and EBS Snapshots." />
            <Card title="Resilient Baseline IO" text="Baseline IO continues even during controller failure." />
            <Card title="Massive Scalability" text="Supports up to 15 accelerators for unmatched storage speed." />

          </div>

        </div>
      </section>

      {/* WORKLOADS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Designed for Enterprise Workloads
        </h2>

        <ul className="space-y-4 text-lg text-gray-700 list-disc ml-6">
          <li><strong>CRM & ERP Systems:</strong> Oracle RAC, SAP, Salesforce</li>
          <li><strong>Analytics Platforms:</strong> Real-time big data workloads</li>
          <li><strong>Container Platforms:</strong> Red Hat OpenShift</li>
        </ul>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Storage Strategy?
            </h2>

            <p className="mt-4 text-gray-600">
              PIOSA allows you to achieve extreme performance while reducing
              storage costs through dynamic scaling.
            </p>

            <a
              href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/IOSA+Brochure+w+logo.pdf"
              target="_blank"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Download Brochure
            </a>
          </div>

          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/iosaImage.png"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>

    </>
  );
}

/* reusable components */

function Card({ title, text }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Feature({ number, title, text }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}