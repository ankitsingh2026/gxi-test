"use client";

import React, { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";
import ShareButton from "@/components/form/ShareButton";
import {
  HiOutlineBriefcase,
  HiOutlineHashtag,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const API_URL = "https://api.tauras.gxinetworks.in/api/create_job/public/jobs/";

function formatEmploymentType(type: string | undefined) {
  if (!type) return "Unknown";
  return type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function cleanHTML(html: string | undefined) {
  if (!html) return "";
  return String(html)
   .replace(/<\s*style[^>]*>[\s\S]*?<\s*\/\s*style\s*>/gi, "")
    .replace(/background-color:\s*[^;]+;?/gi, "")
    .replace(/color:\s*[^;]+;?/gi, "")
    .replace(/font-size:\s*[^;]+;?/gi, "");
}

export default function JobDetailsClient({
  jobId,
  viewOnly,
}: {
  jobId: string;
  viewOnly?: boolean;
}) {
  const [job, setJob] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const arr =
          json?.results?.data ||
          json?.results ||
          json?.data ||
          (Array.isArray(json) ? json : []); // find by job_id OR id (string)

        const match = arr.find(
          (j: any) =>
            String(j.job_id) === String(jobId) ||
            String(j.id) === String(jobId),
        );
        if (!cancelled) setJob(match ?? null);
      } catch (err) {
        console.error("Job fetch error", err);
        if (!cancelled) setJob(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading job…</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Job not found</div>
      </div>
    );
  }

  return (
    <div className="relative bg-white pb-16">
      {/* Hero / Cover */}
      <div className="w-full h-56 md:h-72 lg:h-80 relative overflow-hidden">
        {/* Use a public cover. If you want static import, configure it properly */}
        <img
          src="/Assets/careers/jd-cover.png"
          alt="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <JobDescription job={job} />
        </div>

        <div className="lg:col-span-6">
          {!viewOnly ? <ApplicationForm job={job} /> : null}
        </div>
      </div>
    </div>
  );
}

function JobDescription({ job }: { job: any }) {
  return (
    <div className="bg-white p-6 prose max-w-none">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900">{job.title}</h2>

          <div className="flex flex-wrap items-center gap-3 text-md font-semibold text-gray-600 mt-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-gray-50 border rounded-full text-xs">
              <HiOutlineHashtag className="w-4 h-4 text-gray-500" />
              {job.job_id}
            </span>

            <span className="flex items-center gap-1 px-3 py-1 bg-gray-50 border rounded-full text-xs">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-500" />
              {formatEmploymentType(job.employments_types_detail?.name)}
            </span>

            <span className="flex items-center gap-1 px-3 py-1 bg-gray-50 border rounded-full text-xs">
              <HiOutlineLocationMarker className="w-4 h-4 text-gray-500" />
              {job.is_remote ? "Remote" : job.remote || "Onsite"}
            </span>

            <div className="ml-2">
              <ShareButton job={job} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div
        className="prose max-w-none text-sm text-gray-700"
        dangerouslySetInnerHTML={{ __html: cleanHTML(job.Description || "") }}
      />
    </div>
  );
}
