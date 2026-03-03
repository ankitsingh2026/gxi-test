import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import GoToTopButton from "@/components/layout/GoToTopButton";
import ContactSlider from "@/components/layout/ContactSlider";
export const metadata = {
  title: "GlobalXperts Inc.",
  description:
    "Optimize your network with expert consulting — improving communication and collaboration.",
  openGraph: {
    title: "GlobalXperts Inc.",
    description:
      "Optimize your network with expert consulting.",
    images: [
      {
        url: "https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className="font-sans bg-white text-content">
        <Navbar />
        {children}
        <Footer />
          <ContactSlider />

        <GoToTopButton />

      </body>
    </html>
  )
}