"use client";

import Image from "next/image";
import { HiOutlineUpload } from "react-icons/hi";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import trashBin from "@/public/assets/logos/trash.gif";
import expereince from "@/public/assets/animated-Icons/exp.gif";

import MuiCalendarPicker from "../MuiCalendarPicker";

interface ExperienceEntry {
  role?: string;
  company?: string;
  address?: string;
  start_date?: string | null;
  end_date?: string | null;
  is_current?: boolean;
  technologies?: string[];
  technologies_raw?: string;
}

interface Availability {
  linkedin: string;
  github: string;
  serving_notice: string;
  notice_period_days: string;
  resumeFileMeta?: {
    name: string;
  } | null;
}

interface Props {
  entries: ExperienceEntry[];
  onChange: (idx: number, field: string, value: any) => void;
  add: () => void;
  remove: (idx: number) => void;
  availability: Availability;
  onAvailChange: (field: string, value: any) => void;
  onFilePick: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  removeFile: (type: string) => void;
}

export default function StepExperience({
  entries,
  onChange,
  add,
  remove,
  availability,
  onAvailChange,
  onFilePick,
  removeFile,
}: Props) {
  const toggleCurrent = (idx: number, checked: boolean) => {
    onChange(idx, "is_current", checked);
    if (checked) onChange(idx, "end_date", null);
  };

  const isValidLinkedIn = (url: string) =>
    /^https:\/\/(www\.)?linkedin\.com\/.*$/i.test(url);

  const isValidGitHub = (url: string) =>
    /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+$/i.test(url);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <div className="flex items-center gap-2">
          <Image src={expereince} alt="experience" width={32} height={32} />

          <h3 className="text-xl font-semibold text-gray-900">
            Professional Experience
          </h3>
        </div>

        <p className="text-sm text-gray-500">
          Add your most recent work experience (Optional)
        </p>

        <button
          onClick={add}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700"
        >
          + Add Experience
        </button>

        {/* EXPERIENCE LIST */}

        {entries.length > 0 && (
          <div className="mt-4 space-y-6">
            {entries.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-5 shadow rounded-xl bg-white"
              >
                <button
                  onClick={() => remove(idx)}
                  className="absolute top-2 right-4"
                >
                  <Image src={trashBin} alt="delete" width={24} height={24} />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {/* ROLE */}

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Role & Designation
                    </label>

                    <input
                      placeholder="e.g., Senior DevOps Engineer"
                      value={exp.role || ""}
                      onChange={(e) => onChange(idx, "role", e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>

                  {/* COMPANY */}

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Organisation
                    </label>

                    <input
                      placeholder="Enter organisation name"
                      value={exp.company || ""}
                      onChange={(e) => onChange(idx, "company", e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>

                  {/* LOCATION */}

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Location
                    </label>

                    <input
                      placeholder="Bengaluru, India"
                      value={exp.address || ""}
                      onChange={(e) => onChange(idx, "address", e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>

                  {/* START DATE */}

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Start Date
                    </label>

                    <MuiCalendarPicker
                      value={exp.start_date || null}
                      onChange={(v) => onChange(idx, "start_date", v)}
                    />
                  </div>

                  {/* END DATE */}

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      {!exp.is_current && (
                        <label className="text-xs font-semibold text-gray-700">
                          End Date
                        </label>
                      )}

                      <label className="text-xs flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={!!exp.is_current}
                          onChange={(e) => toggleCurrent(idx, e.target.checked)}
                        />
                        Currently working here
                      </label>
                    </div>

                    {!exp.is_current && (
                      <MuiCalendarPicker
                        value={exp.end_date || null}
                        onChange={(v) => onChange(idx, "end_date", v)}
                        minDate={exp.start_date || null}
                      />
                    )}

                    {exp.is_current && (
                      <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50">
                        Present
                      </div>
                    )}
                  </div>

                  {/* SKILLS */}

                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-700">
                      Skills
                    </label>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {(exp.technologies || []).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full flex items-center gap-1"
                        >
                          {skill}

                          <button
                            onClick={() => {
                              const newSkills = (exp.technologies || []).filter(
                                (_, idx2) => idx2 !== i,
                              );

                              onChange(idx, "technologies", newSkills);
                            }}
                            className="text-red-500"
                          >
                            <IoMdRemoveCircleOutline />
                          </button>
                        </span>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="Type skill and press Enter"
                      value={exp.technologies_raw || ""}
                      onChange={(e) =>
                        onChange(idx, "technologies_raw", e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === ",") {
                          e.preventDefault();

                          const newSkill = exp.technologies_raw
                            ?.trim()
                            .replace(",", "");

                          if (
                            newSkill &&
                            !(exp.technologies || []).includes(newSkill)
                          ) {
                            onChange(idx, "technologies", [
                              ...(exp.technologies || []),
                              newSkill,
                            ]);
                          }

                          onChange(idx, "technologies_raw", "");
                        }
                      }}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PROFILES */}

      <div>
        <h3 className="text-md font-semibold text-gray-900">
          Profiles (Optional)
        </h3>

        {/* LINKEDIN */}

        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={availability.linkedin}
          onChange={(e) => onAvailChange("linkedin", e.target.value)}
          className={`w-full mt-2 border rounded-lg px-3 py-2 text-sm ${
            availability.linkedin && !isValidLinkedIn(availability.linkedin)
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />

        {/* GITHUB */}

        <input
          type="text"
          placeholder="GitHub Profile"
          value={availability.github}
          onChange={(e) => onAvailChange("github", e.target.value)}
          className={`w-full mt-2 border rounded-lg px-3 py-2 text-sm ${
            availability.github && !isValidGitHub(availability.github)
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      </div>

      {/* RESUME UPLOAD */}

      <div>
        <h3 className="text-md font-semibold text-gray-900">Upload Resume *</h3>

        {!availability.resumeFileMeta ? (
          <label className="mt-2 flex items-center gap-3 border rounded-lg p-3 cursor-pointer bg-white hover:bg-gray-50">
            <HiOutlineUpload />
            Choose File
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => onFilePick(e, "resume")}
            />
          </label>
        ) : (
          <div className="mt-2 flex items-center justify-between border rounded-lg p-3 bg-gray-50">
            <div className="text-sm">{availability.resumeFileMeta.name}</div>

            <button onClick={() => removeFile("resume")}>
              <Image src={trashBin} alt="delete" width={24} height={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
