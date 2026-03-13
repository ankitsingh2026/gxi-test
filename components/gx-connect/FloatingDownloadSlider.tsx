"use client";

import Image from "next/image";

type IconPillProps = {
  label: string;
  imgSrc: string;
};

function IconPill({ label, imgSrc }: IconPillProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Logo circle */}
      <div className="bg-white p-2 rounded-full shadow-md border border-gray-200 hover:scale-105 transition-transform">
        <Image
          src={imgSrc}
          alt={label}
          width={28}
          height={28}
          className="object-contain rounded-full"
        />
      </div>

      <span className="text-[11px] text-gray-800 font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

type Logo = {
  id: number;
  label: string;
  imgSrc: string;
};

export default function FloatingDownloadSlider() {
  const logos: Logo[] = [
    { id: 1, label: "Cisco", imgSrc: "/assets/logo/Cisco_Webex.png" },
    { id: 2, label: "NICE", imgSrc: "/assets/logo/nicdd.svg" },
    { id: 3, label: "Genesys", imgSrc: "/assets/logo/genesys.svg" },
    { id: 4, label: "AWS", imgSrc: "/assets/logo/amazoncl.png" },
    { id: 5, label: "Avaya", imgSrc: "/assets/logo/avaya.png" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl p-3 shadow-lg flex flex-col items-center">
        {/* Scroll container */}
        <div className="w-16 h-60 overflow-hidden relative rounded-lg">
          <div
            className="absolute top-0 left-0 w-full flex flex-col"
            style={{ animation: "scroll-vertical 12s linear infinite" }}
          >
            {/* first set */}
            <div className="flex flex-col gap-4 items-center py-2">
              {logos.map((logo) => (
                <IconPill
                  key={logo.id}
                  label={logo.label}
                  imgSrc={logo.imgSrc}
                />
              ))}
            </div>

            {/* duplicate set for infinite loop */}
            <div className="flex flex-col gap-4 items-center py-2">
              {logos.map((logo) => (
                <IconPill
                  key={`dup-${logo.id}`}
                  label={logo.label}
                  imgSrc={logo.imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}