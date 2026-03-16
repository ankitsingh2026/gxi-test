"use client";

import Image from "next/image";
import reviewAni from "@/public/assets/animated-Icons/review.gif";

interface Education {
  degree?: string;
  university?: string;
  start_date?: string;
  end_date?: string;
  is_current?: boolean;
  percentage?: string | number;
}

interface Experience {
  role?: string;
  company?: string;
  address?: string;
  start_date?: string;
  end_date?: string;
  is_current?: boolean;
  technologies?: string[];
}

interface Availability {
  serving_notice?: string;
  notice_period_days?: string;
  resumeFileMeta?: {
    name?: string;
  };
  linkedin?: string;
  github?: string;
}

interface Personal {
  fullName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  address?: string;
  languages?: string[];
}

interface FormData {
  personal: Personal;
  education: Education[];
  experience: Experience[];
  availability: Availability;
}

interface Props {
  form: FormData;
  acceptedTerms: boolean;
  setAcceptedTerms: (value: boolean) => void;
}

const FieldItem = ({ label, value }: { label: string; value?: any }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 text-[11px]">{label}</span>
    <span className="text-gray-900 font-medium text-sm">{value || "-"}</span>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h4 className="font-semibold text-gray-900 text-md border-b pb-1 mt-2">
      {title}
    </h4>
    {children}
  </div>
);

export default function StepReview({
  form,
  acceptedTerms,
  setAcceptedTerms,
}: Props) {
  const location = [
    form.personal.city,
    form.personal.state,
    form.personal.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="space-y-4">
      {/* HEADER */}

      <div className="flex items-center gap-2">
        <Image src={reviewAni} alt="review" width={32} height={32} />
        <h3 className="text-xl font-semibold text-gray-900">Review & Submit</h3>
      </div>

      {/* PERSONAL DETAILS */}

      <Section title="Personal Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
          <FieldItem label="Full Name" value={form.personal.fullName} />
          <FieldItem label="Email" value={form.personal.email} />
          <FieldItem label="Phone Number" value={form.personal.phone} />
          <FieldItem label="Gender" value={form.personal.gender} />
          <FieldItem label="Location" value={location} />
          <FieldItem label="PIN Code" value={form.personal.pincode} />
          <FieldItem label="Address" value={form.personal.address} />
          <FieldItem
            label="Languages"
            value={(form.personal.languages || []).join(", ")}
          />
        </div>
      </Section>

      {/* EDUCATION */}

      <Section title="Education">
        {(form.education || []).map((e, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 py-2 border-b last:border-none"
          >
            <FieldItem label="Degree" value={e.degree} />
            <FieldItem label="University" value={e.university} />
            <FieldItem label="Start Date" value={e.start_date} />

            <FieldItem
              label="End Date"
              value={e.is_current ? "Present" : e.end_date}
            />

            <FieldItem label="Percentage / CGPA" value={e.percentage} />
          </div>
        ))}
      </Section>

      {/* EXPERIENCE */}

      <Section title="Professional Experience">
        {(form.experience || []).map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 py-2 border-b last:border-none"
          >
            <FieldItem label="Role" value={ex.role} />
            <FieldItem label="Company" value={ex.company} />
            <FieldItem label="Location" value={ex.address} />
            <FieldItem label="Start Date" value={ex.start_date} />

            <FieldItem
              label="End Date"
              value={ex.is_current ? "Present" : ex.end_date}
            />

            <FieldItem
              label="Technologies"
              value={(ex.technologies || []).join(", ")}
            />
          </div>
        ))}
      </Section>

      {/* ADDITIONAL */}

      <Section title="Additional Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
          <FieldItem
            label="Notice Period"
            value={form.availability.serving_notice}
          />

          {form.availability.serving_notice === "Yes" && (
            <FieldItem
              label="Notice Duration"
              value={`${form.availability.notice_period_days} days`}
            />
          )}

          <FieldItem
            label="Resume File"
            value={form.availability.resumeFileMeta?.name}
          />

          <FieldItem label="LinkedIn" value={form.availability.linkedin} />

          <FieldItem label="GitHub" value={form.availability.github} />
        </div>
      </Section>

      {/* TERMS */}

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="terms"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />

        <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
          I agree to the{" "}
          <span className="text-green-600 underline">Terms & Conditions</span>
        </label>
      </div>
    </div>
  );
}
