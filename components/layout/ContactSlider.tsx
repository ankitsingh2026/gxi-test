"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineSupportAgent } from "react-icons/md";

const ContactSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const siteKey = "6LfeY00rAAAAAPGTPS3gr0KXyDismzqgpeoNivZU";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Optional: Wait for grecaptcha to load
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

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onSubmit = async (data) => {
    if (!grecaptchaReady) {
      setResponseMessage("reCAPTCHA is not ready yet, please wait.");
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      // Get the reCAPTCHA v3 token
      const token = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });

      // Add token to form data
      const response = await fetch(
        "https://gxi-backend.globalxperts.net.in/api/ContactSlider",
        // "http://localhost:5003/api/ContactSlider",
        {

          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, captchaToken: token }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        reset();
      } else {
        setResponseMessage(
          responseData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setResponseMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="fixed bottom-4 right-4 lg:right-4 py-2 px-2 bg-greenCustomColor2 text-white p-3 rounded-lg cursor-pointer z-50 flex items-center justify-center transition-all duration-300 ease-in-out"
      >
        <MdOutlineSupportAgent size={35} />
      </div>

      <div
        className={`fixed top-20 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-16 p-8 block md:translate-x-[0px]"
            : "translate-x-full"
        } w-[450px] 2xl:w-[450px]`}
        // onMouseLeave={handleClose}
      >
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col mr-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-purple-600">
              Contact Form
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name*"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Continue all fields as you have */}
            <div className="mb-4 flex space-x-2">
              <input
                type="text"
                {...register("countryCode")}
                defaultValue="+91"
                placeholder="+91"
                className="w-16 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 text-center"
              />

              <input
                type="tel"
                placeholder="Phone"
                {...register("phone")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-1">
              <textarea
                placeholder="Message"
                {...register("message")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
                rows="1"
              />
            </div>
            <div className="flex items-start mb-3">
              <label className="ml-2 text-sm text-black">
                <input
                  type="checkbox"
                  {...register("isAgreed")}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500 mr-1"
                />
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 "
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* REMOVE the ReCAPTCHA component! */}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg w-full transition-all duration-200"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {responseMessage && (
              <p className="text-center mt-2 text-sm text-gray-600">
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSlider;
