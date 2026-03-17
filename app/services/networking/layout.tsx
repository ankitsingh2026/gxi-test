export const metadata = {
  title: "Networking Solutions",
  description:
    "Enterprise networking consulting and infrastructure solutions including SD-WAN, wireless networking, switching, and security.",

  keywords: [
    "networking solutions",
    "enterprise networking",
    "sd-wan",
    "network infrastructure",
    "meraki networking",
    "arista networking",
  ],

  authors: [{ name: "GlobalXperts Inc." }],

  openGraph: {
    title: "Networking Solutions | GlobalXperts",
    description:
      "Enterprise networking consulting services including SD-WAN, switches, wireless infrastructure and security.",
    url: "https://globalxperts.net/services/networking",
    siteName: "GlobalXperts",
    images: [
      {
        url: "https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp",
        width: 1200,
        height: 630,
        alt: "Networking Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Networking Solutions | GlobalXperts",
    description:
      "Enterprise networking consulting and infrastructure solutions.",
    images: [
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp",
    ],
  },

  alternates: {
    canonical: "https://globalxperts.net/services/networking",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}