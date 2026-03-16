"use client";

export default function StepAvailability({ availability, onChange }: any) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Availability</h3>

      <div>
        <label>Notice Period</label>

        <div className="flex gap-3 mt-2">
          {["Yes", "No"].map((opt) => (
            <label
              key={opt}
              className={`px-4 py-1 rounded-full border cursor-pointer
${
  availability.serving_notice === opt ? "bg-emerald-600 text-white" : "bg-white"
}
`}
            >
              <input
                type="radio"
                className="hidden"
                checked={availability.serving_notice === opt}
                onChange={() => onChange("serving_notice", opt)}
              />

              {opt}
            </label>
          ))}
        </div>

        {availability.serving_notice === "Yes" && (
          <input
            value={availability.notice_period_days}
            onChange={(e) => onChange("notice_period_days", e.target.value)}
            placeholder="Notice days"
            className="border px-3 py-2 rounded w-full mt-3"
          />
        )}
      </div>
    </div>
  );
}
