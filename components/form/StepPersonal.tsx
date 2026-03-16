"use client";

import { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import userAnimation from "@/public/Assets/animated-Icons/user.gif";

export default function StepPersonal({ data, onChange, toggleLanguage }) {

  const baseLanguages = ["English", "Hindi"];

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [loader, setLoader] = useState(false);
  const [otherLangInput, setOtherLangInput] = useState("");

  // ---------------- LOCATE ME ----------------

  const handleLocateMe = async () => {

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoader(true);

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const out = await res.json();
          const address = out.address ?? {};

          onChange("country", address.country || "");
          onChange("state", address.state || "");
          onChange(
            "city",
            address.city || address.town || address.village || ""
          );
          onChange("pincode", address.postcode || "");

        } catch (error) {

          console.error(error);
          alert("Unable to fetch address");

        } finally {

          setLoader(false);

        }

      },

      () => {
        alert("Location permission denied");
        setLoader(false);
      }

    );

  };

  // ---------------- PINCODE AUTO FILL ----------------

  const handlePinChange = async (pin) => {

    onChange("pincode", pin);

    if (pin.length !== 6) return;

    try {

      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );

      const out = await res.json();

      if (out[0]?.Status === "Success") {

        const info = out[0].PostOffice[0];

        onChange("country", "India");
        onChange("city", info.District);
        onChange("state", info.State);

      }

    } catch (error) {

      console.log("PIN fetch failed");

    }

  };

  // ---------------- PHONE ----------------

  const handlePhoneChange = (value) => {

    let val = value.replace(/\D/g, "");

    if (val.length > 12) val = val.slice(0, 12);

    onChange("phone", val);

  };

  // ---------------- ADD OTHER LANGUAGE ----------------

  const addLanguage = () => {

    const newLang = otherLangInput.trim();

    if (!newLang) return;

    if (!data.languages?.includes(newLang)) {
      onChange("languages", [...(data.languages ?? []), newLang]);
    }

    setOtherLangInput("");

  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center gap-2">

        <Image
          src={userAnimation}
          alt="user"
          width={32}
          height={32}
        />

        <h3 className="text-xl font-semibold text-gray-900">
          Personal Information
        </h3>

      </div>

      <div className="space-y-4 shadow p-5 rounded-2xl border">

        {/* FULL NAME */}

        <div>

          <label className="text-sm font-medium text-gray-600">
            Full Name *
          </label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-1">

            <HiOutlineUser className="text-gray-500 mr-2" />

            <input
              type="text"
              value={data.fullName || ""}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="Enter full name"
              className="w-full text-sm outline-none"
            />

          </div>

        </div>

        {/* EMAIL + PHONE */}

        <div className="grid sm:grid-cols-2 gap-4">

          <div>

            <label className="text-sm font-medium text-gray-600">
              Email *
            </label>

            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">

              <HiOutlineMail className="text-gray-500 mr-2" />

              <input
                type="email"
                value={data.email || ""}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="you@example.com"
                className="w-full text-sm outline-none"
              />

            </div>

          </div>

          <div>

            <label className="text-sm font-medium text-gray-600">
              Phone Number *
            </label>

            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">

              <HiOutlinePhone className="text-gray-500 mr-2" />

              <input
                type="text"
                value={data.phone ? `+${data.phone}` : ""}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="+91XXXXXXXXXX"
                className="w-full text-sm outline-none"
              />

            </div>

          </div>

        </div>

        {/* LOCATION */}

        <div className="grid sm:grid-cols-4 gap-3">

          {/* PIN */}

          <div>

            <label className="text-sm font-medium text-gray-600">
              PIN Code *
            </label>

            <input
              type="text"
              value={data.pincode || ""}
              onChange={(e) => handlePinChange(e.target.value)}
              placeholder="400001"
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
            />

            <button
              onClick={handleLocateMe}
              className="flex gap-1 mt-2 text-sm bg-emerald-600 text-white px-3 py-1 rounded-lg"
            >

              <FaLocationPin className="mt-[3px]" />

              {loader ? "Locating..." : "Locate Me"}

            </button>

          </div>

          {/* COUNTRY */}

          <input
            type="text"
            value={data.country || ""}
            onChange={(e) => onChange("country", e.target.value)}
            placeholder="Country"
            className="mt-6 border rounded-lg px-3 py-2 text-sm"
          />

          {/* STATE */}

          <input
            type="text"
            value={data.state || ""}
            onChange={(e) => onChange("state", e.target.value)}
            placeholder="State"
            className="mt-6 border rounded-lg px-3 py-2 text-sm"
          />

          {/* CITY */}

          <input
            type="text"
            value={data.city || ""}
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="City"
            className="mt-6 border rounded-lg px-3 py-2 text-sm"
          />

        </div>

        {/* ADDRESS */}

        <textarea
          rows={2}
          value={data.address || ""}
          onChange={(e) => onChange("address", e.target.value)}
          placeholder="Address..."
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        {/* GENDER */}

        <div>

          <label className="text-sm font-medium text-gray-600">
            Gender *
          </label>

          <div className="flex gap-3 mt-2">

            {["Male", "Female", "Other"].map((g) => {

              const selected = data.gender === g;

              return (
                <button
                  key={g}
                  onClick={() => onChange("gender", g)}
                  className={`px-4 py-1 rounded-full border text-sm
                    ${selected
                      ? "bg-emerald-600 text-white"
                      : "bg-white"
                    }`}
                >
                  {g}
                </button>
              );

            })}

          </div>

        </div>

        {/* LANGUAGES */}

        <div>

          <label className="text-sm font-medium text-gray-600">
            Languages
          </label>

          <div className="flex gap-2 flex-wrap mt-2">

            {baseLanguages.map((lang) => {

              const checked = data.languages?.includes(lang);

              return (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`px-3 py-1 rounded-full border text-sm
                    ${checked
                      ? "bg-emerald-600 text-white"
                      : "bg-white"
                    }`}
                >
                  {lang}
                </button>
              );

            })}

            {/* OTHER */}

            <button
              onClick={() => setShowOtherInput(!showOtherInput)}
              className="px-3 py-1 rounded-full border text-sm"
            >
              Other
            </button>

            {showOtherInput && (

              <input
                type="text"
                value={otherLangInput}
                placeholder="Press Enter"
                onChange={(e) => setOtherLangInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addLanguage();
                  }
                }}
                className="border px-2 py-1 rounded text-sm"
              />

            )}

          </div>

        </div>

      </div>

    </div>
  );

}