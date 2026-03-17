"use client";

import Image from "next/image";
import MuiCalendarPicker from "../MuiCalendarPicker";
import { Dayjs } from "dayjs";

type EducationEntry = {
  degree?: string;
  university?: string;
  start_date?: Dayjs | null;
  end_date?: Dayjs | null;
  percentage?: number;
  is_current?: boolean;
};

type StepEducationProps = {
  entries: EducationEntry[];
  onChange: (
    idx: number,
    field: keyof EducationEntry,
    value: string | number | boolean | Dayjs | null,
  ) => void;
  add: () => void;
  remove: (idx: number) => void;
};
export default function StepEducation({
  entries,
  onChange,
  add,
  remove,
}: StepEducationProps) {
  const toggleCurrent = (idx: number, checked: boolean) => {
    onChange(idx, "is_current", checked);

    if (checked) {
      onChange(idx, "end_date", null);
    }
  };

  const handlePercentage = (idx: number, value: string) => {
    let val = Number(value);

    if (val > 100) val = 100;
    if (val < 0) val = 0;

    onChange(idx, "percentage", val);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center gap-2">
        <Image
          src="/Assets/animated-Icons/education.gif"
          alt="education"
          width={32}
          height={32}
        />

        <h3 className="text-xl font-semibold text-gray-900">
          Education Details
        </h3>
      </div>

      <p className="text-sm text-gray-500">
        Please start with your most recent degree.
      </p>

      {entries.map((e, idx) => (
        <div key={idx} className="p-4 border shadow-sm rounded-2xl space-y-4">
          {/* Header */}

          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold text-gray-700">
              Education {idx + 1}
            </h4>

            {idx > 0 && (
              <button
                onClick={() => remove(idx)}
                className="hover:scale-105 transition"
              >
                <Image src="/assets/logos/trash.gif" alt="delete" width={24} height={24} />
              </button>
            )}
          </div>

          {/* FORM GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* DEGREE */}

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Degree
              </label>

              <input
                value={e.degree || ""}
                onChange={(ev) => onChange(idx, "degree", ev.target.value)}
                placeholder="Degree (B.Tech, BSc...)"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* UNIVERSITY */}

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                University
              </label>

              <input
                value={e.university || ""}
                onChange={(ev) => onChange(idx, "university", ev.target.value)}
                placeholder="University"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* START DATE */}

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Start Date
              </label>

              <MuiCalendarPicker
                value={e.start_date || null}
                onChange={(v: Dayjs | null) => onChange(idx, "start_date", v)}
                minDate={null}
                maxDate={null}
              />
            </div>

            {/* END DATE / CURRENT */}

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                {!e.is_current && (
                  <label className="text-xs font-semibold text-gray-700">
                    End Date
                  </label>
                )}

                <label className="text-xs inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!e.is_current}
                    onChange={(ev) => toggleCurrent(idx, ev.target.checked)}
                  />

                  <span>Currently studying</span>
                </label>
              </div>

              {!e.is_current && (
                <MuiCalendarPicker
                  value={e.end_date || null}
                  onChange={(v: Dayjs | null) => onChange(idx, "end_date", v)}
                  minDate={e.start_date || null}
                  maxDate={null}
                />
              )}

              {e.is_current && (
                <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600">
                  Present
                </div>
              )}
            </div>

            {/* PERCENTAGE */}

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Percentage
              </label>

              <input
                type="number"
                value={e.percentage || ""}
                onChange={(ev) => handlePercentage(idx, ev.target.value)}
                placeholder="Percentage / CGPA (85%)"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      ))}

      {/* ADD BUTTON */}

      <button
        onClick={add}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-lg text-sm"
      >
        + Add Another Education
      </button>
    </div>
  );
}
