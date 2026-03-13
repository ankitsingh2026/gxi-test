"use client";

import Image from "next/image";

function AvatarCard({ name, desc, size = 88, badge, imageUrl }) {
  return (
    <div className="relative flex flex-col items-center text-center animate-[floaty_4s_ease-in-out_infinite]">

      {/* Avatar */}
      <div
        style={{ width: size, height: size }}
        className="z-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center overflow-hidden ring-4 ring-white/90 shadow-lg"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={size}
            height={size}
            className="object-cover w-full h-full"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-3/5 h-3/5 text-white opacity-90"
            fill="currentColor"
          >
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
          </svg>
        )}
      </div>

      {/* Card text */}
      <div className="bg-white/90 text-slate-900 rounded-xl px-4 py-3 shadow-md min-w-[160px] -mt-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">{name}</span>

          {badge && (
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
              {badge}
            </span>
          )}
        </div>

        {desc && (
          <div className="text-xs text-slate-600 mt-1">
            {desc}
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarCard;