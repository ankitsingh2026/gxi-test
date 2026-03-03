"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
// import Navbar from "@/components";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactUs() {
  const siteKey = "6LfeY00rAAAAAPGTPS3gr0KXyDismzqgpeoNivZU";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState("");
  const [grecaptchaReady, setGrecaptchaReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.execute) {
        setGrecaptchaReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: any) => {
    if (!grecaptchaReady) {
      setStatus("reCAPTCHA is not ready yet, please wait.");
      return;
    }

    setStatus("Sending...");

    try {
      const token = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });

      const response = await fetch(
        "https://gxi-backend.globalxperts.net.in/api/contactUs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, captchaToken: token }),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        const responseData = await response.json();
        setStatus(responseData.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <>

      <div className="relative bg-blueCustomColor text-white flex flex-col justify-center items-center p-6 min-h-screen">
        <div className="flex flex-col items-center mb-2">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-5xl text-white mb-2 mt-10">
            Get In Touch With Us
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 sm:gap-6">
            <div>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters and spaces allowed",
                  },
                })}
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name *"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message as string}
                </span>
              )}
            </div>

            <div>
              <input
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name *"
              />
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email *"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <div>
              <input
                type="tel"
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Phone *"
              />
            </div>

            <div className="sm:col-span-2">
              <input
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Company Name *"
              />
            </div>

            <div className="sm:col-span-2">
              <select className="w-full px-4 py-2 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Choose an option *</option>
                <option value="Solution Integration">
                  Solution Integration
                </option>
                <option value="Technology Products">
                  Technology Products
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <textarea
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Message *"
                rows={1}
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row">
            <div>
              <button
                type="submit"
                className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-3 px-6 rounded-lg mt-4 w-full sm:w-auto"
              >
                Submit
              </button>

              {status && <p className="mt-4 text-black">{status}</p>}
            </div>

            <div className="md:ml-3 ml-0 mt-4">
              <Link
                href="/careers"
                className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-3 px-6 rounded-lg text-sm sm:text-base inline-block"
              >
                Interested in working with us?{" "}
                <span className="font-bold">Explore Careers →</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}