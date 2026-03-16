"use client";

import { useState } from "react";
import { HiOutlineShare } from "react-icons/hi";

export default function ShareButton({ job }: any) {
  const [open, setOpen] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded-full text-sm"
      >
        <HiOutlineShare />
        Share
      </button>

      {open && (
        <div className="absolute mt-2 bg-white border rounded shadow w-40">
          <a
            href={`https://wa.me/?text=${job.title} ${url}`}
            target="_blank"
            className="block px-3 py-2 hover:bg-gray-100"
          >
            WhatsApp
          </a>

          <a
            href={`mailto:?subject=${job.title}&body=${url}`}
            className="block px-3 py-2 hover:bg-gray-100"
          >
            Email
          </a>

          <button
            onClick={() => navigator.clipboard.writeText(url)}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}
