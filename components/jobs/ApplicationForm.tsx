// components/jobs/ApplicationForm.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import StepReview from "@/components/form/StepReview";
import StepPersonal from "@/components/form/StepPersonal";
import StepEducation from "@/components/form/StepEducation";
import StepExperience from "@/components/form/StepExperience";
import ThankYou from "@/components/ThankYou";
import { IoIosSend } from "react-icons/io";

const SUBMIT_URL =
  "https://api.tauras.gxinetworks.in/api/candidates/applications/";

const DRAFT_KEY = (jobId?: any) =>
  `jobApplicationDraft::${jobId ?? "unknownJob"}`;

import { Dayjs } from "dayjs";

type EducationEntry = {
  degree?: string;
  university?: string;
  start_date?: Dayjs | null;
  end_date?: Dayjs | null;
  percentage?: number | string;
  is_current?: boolean;
};
export default function ApplicationForm({ job }: { job: any }) {
  const jobKey = useMemo(() => DRAFT_KEY(job?.job_id || job?.id), [job]);
  const initial = useMemo(() => loadDraft(jobKey), [jobKey]);

  const [step, setStep] = useState<number>(initial?.step ?? 0);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [validationSummary, setValidationSummary] = useState<string[]>([]);

  const [form, setForm] = useState<any>({
    personal: {
      fullName: initial?.personal?.fullName ?? "",
      email: initial?.personal?.email ?? "",
      phone: initial?.personal?.phone ?? "",
      role: initial?.personal?.role ?? job?.title ?? "",
      gender: initial?.personal?.gender ?? "",
      country: initial?.personal?.country ?? "",
      city: initial?.personal?.city ?? "",
      address: initial?.personal?.address ?? "",
      state: initial?.personal?.state ?? "",
      pincode: initial?.personal?.pincode ?? "",
      languages: initial?.personal?.languages ?? [],
    },
    education: initial?.education ?? [
      {
        degree: "",
        university: "",
        start_date: null,
        end_date: null,
        percentage: "",
        is_current: false,
      },
    ],
    experience: initial?.experience ?? [],
    availability: {
      serving_notice: initial?.availability?.serving_notice ?? "",
      notice_period_days: initial?.availability?.notice_period_days ?? "",
      joiningDate: initial?.availability?.joiningDate ?? "",
      resumeFileMeta: initial?.availability?.resumeFileMeta ?? null,
      portfolioFileMeta: initial?.availability?.portfolioFileMeta ?? null,
      github: initial?.availability?.github ?? "",
      linkedin: initial?.availability?.linkedin ?? "",
    },
  });

  const fileRefs = useRef<{ resumeFile?: File | null }>({ resumeFile: null });

  // Auto-save (debounce)
  useEffect(() => {
    const t = setTimeout(() => saveDraft(jobKey, { step, ...form }), 1200);
    return () => clearTimeout(t);
  }, [form, step, jobKey]);

  function handlePersonalChange(k: string, v: any) {
    setForm((s: any) => ({ ...s, personal: { ...s.personal, [k]: v } }));
  }
  function handleEducationChange(idx: number, key: string, value: any) {
    setForm((s: any) => {
      const ed = [...s.education];
      ed[idx] = { ...ed[idx], [key]: value };
      return { ...s, education: ed };
    });
  }
  function addEducation() {
    /* same as your code */ setForm((s: any) => ({
      ...s,
      education: [
        ...s.education,
        {
          degree: "",
          university: "",
          start_date: null,
          end_date: null,
          percentage: "",
          is_current: false,
        },
      ],
    }));
  }
  function removeEducation(i: number) {
    setForm((s: any) => ({
      ...s,
      education: s.education.filter((_: any, idx: number) => idx !== i),
    }));
  }

  function handleExperienceChange(idx: number, key: string, value: any) {
    setForm((s: any) => {
      const ex = [...s.experience];
      ex[idx] = { ...ex[idx], [key]: value };
      return { ...s, experience: ex };
    });
  }
  function addExperience() {
    setForm((s: any) => ({
      ...s,
      experience: [
        ...s.experience,
        {
          company: "",
          role: "",
          address: "",
          start_date: null,
          end_date: null,
          technologies: [],
          is_current: false,
        },
      ],
    }));
  }
  function removeExperience(i: number) {
    setForm((s: any) => ({
      ...s,
      experience: s.experience.filter((_: any, idx: number) => idx !== i),
    }));
  }

  function handleAvailabilityChange(k: string, v: any) {
    setForm((s: any) => ({
      ...s,
      availability: { ...s.availability, [k]: v },
    }));
  }
  function updateResumeMeta(meta: any) {
    setForm((s: any) => ({
      ...s,
      availability: { ...s.availability, resumeFileMeta: meta },
    }));
  }

  function toggleLanguage(lang: string) {
    setForm((s: any) => {
      const arr = new Set(s.personal.languages || []);
      if (arr.has(lang)) arr.delete(lang);
      else arr.add(lang);
      return { ...s, personal: { ...s.personal, languages: Array.from(arr) } };
    });
  }

  function validateStep(currentStep = step) {
    const issues: string[] = [];
    if (currentStep === 0) {
      const p = form.personal;
      if (!p.fullName) issues.push("Full name is required");
      if (!p.email || !/^\S+@\S+\.\S+$/.test(p.email))
        issues.push("Valid email required");
      if (!p.phone) issues.push("Phone required");
      if (!p.gender) issues.push("Gender required");
    }
    if (currentStep === 1) {
      const ok = form.education.some(
        (e: any) =>
          e.degree &&
          e.university &&
          e.start_date &&
          (e.is_current || e.end_date),
      );
      if (!ok)
        issues.push(
          "Add at least one education entry with degree & university",
        );
    }
    if (currentStep === 2) {
      if (!form.availability.resumeFileMeta) issues.push("Resume required");
      if (
        form.availability.serving_notice === "Yes" &&
        !form.availability.notice_period_days
      )
        issues.push("Notice period days required");
    }
    setValidationSummary(issues);
    return issues.length === 0;
  }

  function validateAll(s: number) {
    // simplified re-use
    return validateStep(s);
  }

  async function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(3, s + 1));
  }
  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

function handleFilePick(
  e: React.ChangeEvent<HTMLInputElement>,
  which: string
) {
    const f = e.target.files?.[0];
    if (!f) return;
    const meta = {
      name: f.name,
      size: f.size,
      type: f.type,
      lastModified: f.lastModified,
    };
    if (which === "resume") {
      fileRefs.current.resumeFile = f;
      updateResumeMeta(meta);
    }
  }
  function removeFile(which: "resume" | "portfolio") {
    if (which === "resume") {
      fileRefs.current.resumeFile = null;
      updateResumeMeta(null);
    }
  }

  async function handleSubmit() {
    if (saving || submitted) return;
    if (!acceptedTerms) {
      setValidationSummary(["Accept terms"]);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // validate all
    for (let st = 0; st <= 3; st++) {
      if (!validateAll(st)) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    const submission_data = {
      candidate: {
        name: form.personal.fullName,
        email: form.personal.email,
        phone: form.personal.phone,
        gender: form.personal.gender,
        linkedin_url: form.availability.linkedin,
        github_url: form.availability.github,
        country: form.personal.country,
        state: form.personal.state || "",
        address: [form.personal.city, form.personal.address]
          .filter(Boolean)
          .join(", "),
        specialisation: "IT",
        cgpa: form.personal.cgpa || "",
        languages: form.personal.languages || [],
        pincode: form.personal.pincode,
      },
      application: {
        job: job.id,
        total_experience: form.experience.length,
        expected_salary: form.experience?.[0]?.expectedCTC || null,
        current_status: "scouting",
        current_phase: "Initial Screening",
        serving_notice: form.availability.serving_notice || null,
        notice_period_days:
          form.availability.serving_notice === "Yes"
            ? form.availability.notice_period_days
            : null,
        submitted_at: new Date().toISOString(),
      },
      education_history: form.education.map((e: EducationEntry) => ({
        degree: e.degree,
        university: e.university,
        ...(e.start_date ? { start_date: e.start_date } : {}),
        ...(e.is_current ? {} : e.end_date ? { end_date: e.end_date } : {}),
        is_current: e.is_current,
        percentage: e.percentage,
      })),
      professional_experience: form.experience,
    };

    const fd = new FormData();
    fd.append("candidate", JSON.stringify(submission_data.candidate));
    fd.append("application", JSON.stringify(submission_data.application));
    fd.append(
      "education_history",
      JSON.stringify(submission_data.education_history),
    );
    fd.append(
      "professional_experience",
      JSON.stringify(submission_data.professional_experience),
    );
    if (fileRefs.current.resumeFile)
      fd.append("resume_file", fileRefs.current.resumeFile as Blob);

    try {
      setSaving(true);
      const res = await fetch(SUBMIT_URL, { method: "POST", body: fd });
      const data = await res.json().catch(() => null);
      if (!res.ok)
        throw new Error(
          data?.message || data?.detail || `Server ${res.status}`,
        );
      setSubmitted(true);
      localStorage.removeItem(jobKey);
    } catch (err: any) {
      setValidationSummary([`Submit failed: ${err.message || String(err)}`]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSaving(false);
    }
  }

  if (submitted) return <ThankYou />;

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      {" "}
      <div className="mb-2 flex flex-wrap gap-2">
        {["Personal", "Education", "Professional", "Review"].map((l, i) => (
          <span
            key={i}
            className={`px-4 py-1.5 text-sm rounded-full font-medium ${
              step >= i
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="min-h-[320px]">
        {step === 0 && (
          <StepPersonal
            data={form.personal}
            onChange={handlePersonalChange}
            toggleLanguage={(lang: string) => toggleLanguage(lang)}
          />
        )}
        {step === 1 && (
          <StepEducation
            entries={form.education}
            onChange={handleEducationChange}
            add={addEducation}
            remove={removeEducation}
          />
        )}
        {step === 2 && (
          <StepExperience
            entries={form.experience}
            onChange={handleExperienceChange}
            add={addExperience}
            remove={removeExperience}
            availability={form.availability}
            onAvailChange={handleAvailabilityChange}
            onFilePick={handleFilePick}
            removeFile={removeFile}
          />
        )}
        {step === 3 && (
          <StepReview
            form={form}
            acceptedTerms={acceptedTerms}
            setAcceptedTerms={setAcceptedTerms}
          />
        )}
      </div>
      {validationSummary.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 text-red-700">
          <strong>Validation issues:</strong>
          <ul className="list-disc pl-5">
            {validationSummary.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-3 mt-4">
        {step > 0 && (
          <button
            onClick={goBack}
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            Back
          </button>
        )}

        {step < 3 && (
          <button
            onClick={goNext}
            className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700"
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm flex items-center gap-2 hover:bg-emerald-700"
          >
            {saving ? "Submitting..." : "Submit"}
            <IoIosSend />
          </button>
        )}
      </div>
    </div>
  );
}

// localStorage helpers
function saveDraft(key: string, data: any) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), ...data }));
  } catch {
    /* noop */
  }
}
function loadDraft(key: string) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const { ts, ...rest } = parsed;
    return rest;
  } catch {
    return null;
  }
}
