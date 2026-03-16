"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { HiCheckCircle } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

const API_URL =
  "https://api.tauras.gxinetworks.in/api/create_job/public/jobs/";

const OverviewRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-900 font-semibold">{value}</span>
  </div>
);

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJob() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        const arr = json?.results?.data ?? [];

        const found = arr.find(
          (j: any) =>
            String(j.job_id).toLowerCase() === String(id).toLowerCase()
        );

        setJob(found || null);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    if (id) loadJob();
  }, [id]);

  const openJob = () => {
    router.push(`/job/${job.job_id}`);
  };

  const getJobStatus = (lastHiringDate: string) => {
    if (!lastHiringDate) return "Inactive";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const hiringDate = new Date(lastHiringDate);
    hiringDate.setHours(0, 0, 0, 0);

    return hiringDate >= today ? "Active" : "Inactive";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading job...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            {job.title}
          </h1>

          <p className="text-gray-600 mt-1">
            {job?.teams_detail?.name || "Company"}
          </p>

          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-emerald-400" />
              {job?.address}
            </div>

            <div className="flex items-center gap-2">
              <MdWorkOutline className="text-emerald-400" />
              {job?.Experience_required} Years
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineAccessTime className="text-emerald-400" />
              {job?.employments_types_detail?.name?.replace(/_/g, " ")}
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={openJob}
              className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700"
            >
              Apply
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">

            {/* DESCRIPTION */}
            <section className="bg-white border rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">
                Job Description
              </h2>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: job.Description }}
              />
            </section>

            {/* RESPONSIBILITIES */}
            <section className="bg-white border rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">
                Responsibilities
              </h2>

              <ul className="space-y-3">
                {job?.skills_details?.map((item: any) => (
                  <li key={item.id} className="flex gap-3">
                    <HiCheckCircle className="text-green-600 mt-1" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>

            {/* SKILLS */}
            <section className="bg-white border rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Skills</h2>

              <div className="flex flex-wrap gap-3">
                {job?.skills_details?.map((skill: any) => (
                  <span
                    key={skill.id}
                    className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-white border rounded-xl p-6 sticky top-6">
              <h3 className="text-xs font-bold text-gray-500 mb-6 uppercase">
                Job Overview
              </h3>

              <div className="space-y-5 text-sm">

                <OverviewRow
                  label="Salary"
                  value={`₹${job.min_salary} - ₹${job.max_salary}`}
                />

                <OverviewRow
                  label="Experience"
                  value={`${job.Experience_required} Years`}
                />

                <OverviewRow
                  label="Employment"
                  value={job?.employments_types_detail?.name?.replace(/_/g, " ")}
                />

                <OverviewRow
                  label="Status"
                  value={
                    <span
                      className={
                        getJobStatus(job.last_hiring_date) === "Active"
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {getJobStatus(job.last_hiring_date)}
                    </span>
                  }
                />

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}