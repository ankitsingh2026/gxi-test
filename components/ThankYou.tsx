"use client";

import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-10 rounded-2xl shadow-xl text-center"
      >

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <svg
            className="w-20 h-20 text-green-600 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-bold mt-4 text-green-700">
          Thank You!
        </h1>

        <p className="mt-2 text-gray-600">
          Your application has been submitted successfully.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Go Home
        </button>
      </motion.div>
    </div>
  );
}