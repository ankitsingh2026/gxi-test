"use client";

import { useEffect, useState, useMemo } from "react";
import JobCard from "@/components/careers/JobCard";
import JobFilters from "@/components/careers/JobFilters";
import {
  matchExperienceLevel,
  getExperienceLabel,
  formatEmploymentType,
  cleanHTML
} from "@/service/helpers";

import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Commet } from "react-loading-indicators";
import { SlidersHorizontal } from "lucide-react";
import { FaSearch } from "react-icons/fa";

const API_URL = "https://api.tauras.gxinetworks.in/api/create_job/public/jobs/";
const WS_URL = "wss://api.tauras.gxinetworks.in/ws/jobs/";

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [employmentType, setEmploymentType] = useState("All");
  const [category, setCategory] = useState("All");
  const [jobLevel, setJobLevel] = useState("All");

  const [categories, setCategories] = useState<string[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);

  const [skillQuery, setSkillQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  useEffect(() => setPage(1), [query, employmentType, category, jobLevel]);

  // -----------------------------------------
  // Fetch Jobs
  // -----------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function loadJobs() {
      setLoading(true);

      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed job fetch");

        const json = await res.json();
        const arr = json?.results?.data ?? [];

        arr.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        if (!cancelled) {
          setJobs(arr);
          updateFilters(arr);
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadJobs();

    return () => {
      cancelled = true;
    };
  }, []);

  // -----------------------------------------
  // WebSocket Updates
  // -----------------------------------------
  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => console.log("🟢 WebSocket connected");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data?.jobs?.length) {
          const sorted = [...data.jobs].sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          );

          setJobs(sorted);
          updateFilters(sorted);
        }
      } catch (err) {
        console.error("WebSocket parse error:", err);
      }
    };

    return () => ws.close();
  }, []);

  // -----------------------------------------
  // Build Filters
  // -----------------------------------------
  function updateFilters(arr: any[]) {
    const cat = [
      ...new Set(arr.map((j) => j.teams_detail?.name).filter(Boolean)),
    ];

    setCategories(["All", ...cat]);

    const emp = [
      ...new Set(arr.map((j) => j.employments_types_detail?.name).filter(Boolean)),
    ];

    setEmploymentTypes(["All", ...emp]);
  }

  // -----------------------------------------
  // Skills
  // -----------------------------------------
  const allSkills = useMemo(() => {
    const set = new Set<string>();

    jobs.forEach((job) => {
      (job.skills_details || []).forEach((s: any) => {
        if (s?.name) set.add(s.name);
      });
    });

    return Array.from(set).sort();
  }, [jobs]);

  // -----------------------------------------
  // Filtering
  // -----------------------------------------
  const filteredJobs = jobs.filter((job) => {
    const search = query.toLowerCase();

    const jobCategory = job?.teams_detail?.name || "";
    const jobType = job?.employments_types_detail?.name || "";

    if (employmentType !== "All" && jobType !== employmentType) return false;
    if (category !== "All" && jobCategory !== category) return false;

    if (!matchExperienceLevel(job?.Experience_required, jobLevel)) {
      return false;
    }

    if (search) {
      const inTitle = job?.title?.toLowerCase()?.includes(search);
      const inSkills = (job?.skills_details || []).some((skill: any) =>
        skill?.name?.toLowerCase()?.includes(search)
      );

      if (!inTitle && !inSkills) return false;
    }

    if (selectedSkills.length > 0) {
      const jobSkills = (job.skills_details || []).map((s: any) =>
        s.name?.toLowerCase()
      );

      const hasMatch = selectedSkills.some((skill) =>
        jobSkills.includes(skill.toLowerCase())
      );

      if (!hasMatch) return false;
    }

    return true;
  });

  // -----------------------------------------
  // Pagination
  // -----------------------------------------
  const paginated = filteredJobs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [query, employmentType, category, jobLevel, selectedSkills]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div className="relative w-[370px]">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search job title or skills..."
              className="w-full border border-gray-400 pl-11 pr-4 py-[3px] rounded-full shadow-sm"
            />

          </div>

          <div className="flex items-center gap-2">

            <span className="text-lg text-gray-700">Sort By :</span>

            <select className="border px-3 py-1 rounded-2xl text-sm text-[#024B3D]">
              <option>Most Recent</option>
              <option>Popular</option>
            </select>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">

          {/* FILTERS */}
          <div className="space-y-0 bg-[#F4FAF8]">

            <h1 className="flex gap-1.5 text-[16px] text-gray-900 p-2 mt-2">

              <SlidersHorizontal className="h-5 mt-1" />

              Filter

              <span className="text-gray-500">{jobs.length} Jobs Found</span>

            </h1>

            <JobFilters
              employmentTypes={employmentTypes}
              categories={categories}
              jobLevel={jobLevel}
              setJobLevel={setJobLevel}
              employmentType={employmentType}
              setEmploymentType={setEmploymentType}
              category={category}
              setCategory={setCategory}
              jobs={jobs}
              skillsList={allSkills}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              skillQuery={skillQuery}
              setSkillQuery={setSkillQuery}
            />

          </div>

          {/* JOB LIST */}
          <div className="lg:col-span-2 space-y-2">

            {loading && (
              <div className="flex justify-center py-8">
                <Commet color="#32cd32" size="medium" />
              </div>
            )}

            {error && (
              <div className="text-center text-red-500 py-8">{error}</div>
            )}

            {!loading && paginated.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                No jobs found
              </div>
            )}

            {paginated.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}