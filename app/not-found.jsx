import Link from "next/link";
import Image from "next/image";
// import illustration404 from "@/Assets/404ilution.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010c41] via-[#08196b] to-[#010c41] px-6 py-10 text-white">
      
      <div className="max-w-xl 2xl:max-w-7xl 2xl:mx-auto 2xl:p-24 w-full flex flex-col items-center text-center bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white/10">
        
        {/* Logo */}
        <Image
          src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/logo/full_logo.png"
          alt="GlobalXperts Logo"
          width={200}
          height={80}
          className="w-48 mb-4"
        />

        {/* 404 Illustration */}
        <Image
          src="/Assets/404ilution.svg"
          alt="404 Illustration"
          width={220}
          height={220}
          className="w-56 mb-6"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Oops! Page Not Found
        </h1>

        {/* Message */}
        <p className="text-lg md:text-base text-white/80 mb-5">
          At GlobalXperts, we keep networks secure and reliable—but it seems
          we’ve lost our way this time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition font-medium shadow"
          >
            Back to Home
          </Link>

          <Link
            href="/contact-us"
            className="bg-white text-[#010c41] hover:bg-gray-100 px-6 py-2 rounded-md transition font-medium shadow"
          >
            Contact Support
          </Link>
        </div>
      </div>

    </div>
  );
}