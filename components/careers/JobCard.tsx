"use client";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Job = {
  id?: number;
  job_id?: string;
  title?: string;
  teams_detail?: {
    name?: string;
  };
  employments_types_detail?: {
    name?: string;
  };
  skills_details?: { id?: number; name?: string }[];
  location_name?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
  work_mode?: string;
  Experience_required?: number;
  min_salary?: number;
  max_salary?: number;
  applicants_count?: number;
  applicants?: number;
  company_logo?: string;
  logo_url?: string;
  Salary_range?: string;
};

export default function JobCard({ job }: { job?: Job }) {
  if (!job) return null;

  function timeAgo(iso?: string) {
    if (!iso) return "";

    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;

    return `${Math.floor(diff / 86400)}d ago`;
  }

  function salaryText(job: Job) {
    if (job.Salary_range) return job.Salary_range;

    if (job.min_salary && job.max_salary) {
      return `₹${job.min_salary}L - ₹${job.max_salary}L`;
    }

    return "";
  }

  const jobId = job?.job_id || job?.id || "";

  const team = job?.teams_detail?.name || "Unknown";
  const location = job?.location_name || job?.address || "Noida";
  const posted = timeAgo(job?.created_at || job?.updated_at);
  const salary = salaryText(job);

  const applicants = job?.applicants_count ?? job?.applicants ?? 0;

  const employment =
    job?.employments_types_detail?.name?.replace(/_/g, " ") ?? "";

  const logoSrc =
    job?.company_logo || job?.logo_url || "/Assets/careers/jdlogo.png";

  return (
    <div className="border border-[#BACFC8] bg-[#F9FAFC] p-3 hover:shadow-md transition flex gap-4 rounded-lg">
      <div className="flex-1">
        {/* HEADER */}
        <div className="flex justify-between gap-4">
          <div>
            <div className="flex gap-4 items-center">
              <div className="bg-green-50 p-1 rounded-full">
                <Image src={logoSrc} alt="logo" width={56} height={56} />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-500">{team}</p>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <HiOutlineLocationMarker />
                {location}
              </div>

              <span>•</span>

              <span>{posted}</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {employment && (
                <span className="px-3 py-1 bg-green-50 text-[#0FA57B] text-sm rounded-full">
                  {employment}
                </span>
              )}

              {job.work_mode && (
                <span className="px-3 py-1 bg-green-50 text-[#0FA57B] text-sm rounded-full">
                  {job.work_mode}
                </span>
              )}

              {job.Experience_required != null && (
                <span className="px-3 py-1 bg-green-50 text-[#0FA57B] text-sm rounded-full">
                  {job.Experience_required} yrs
                </span>
              )}

              {salary && (
                <span className="px-3 py-1 bg-green-50 text-[#0FA57B] text-sm rounded-full">
                  {salary}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex flex-col items-end gap-4">
            <button className="text-gray-400 hover:text-gray-800">
              <FiBookmark />
            </button>

            <div className="flex flex-wrap gap-2">
              {(job.skills_details || []).slice(0, 6).map((s) => (
                <span
                  key={s.id ?? s.name}
                  className="bg-gray-100 px-3 py-1 text-sm rounded-full"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-3">
            <Link href={`/company/careers/details/${jobId}`}
              className="border px-4 py-1 rounded-full text-gray-700 hover:bg-gray-50"
            >
              View Details
            </Link>

            <Link
              href={`/job/${jobId}`}
              className="bg-[#0b6b4a] text-white px-4 py-1 rounded-full hover:bg-[#095a3f]"
            >
              Apply Now
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaFire />
            {applicants} applicants
          </div>
        </div>
      </div>
    </div>
  );
}
