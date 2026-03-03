import Link from "next/link";

export const metadata = {
  title: "IT Strategy, Cloud & Managed Services Blog - GlobalXperts",
  description:
    "Explore the GlobalXperts blog for expert IT insights - cloud strategy, managed services tips, and infrastructure best practices.",
  keywords: ["GlobalXperts Insights"],
  alternates: {
    canonical: "https://globalxperts.net/insights/blog",
  },
};

const blogPosts = [
  {
    title:
      "GlobalXperts Soars to New Heights: Achieves AWS Select Partner Status!",
    description:
      "GlobalXperts Inc. has officially achieved AWS Select Partner status, marking a major milestone in our cloud journey.",
    date: "February 13, 2024",
    link: "/AWS-select-partner-status",
  },
  {
    title: "GlobalXperts Awarded 8(a) STARS III GWAC",
    description:
      "The new STARS GWAC has a $50 billion ceiling and focus on emerging technologies.",
    date: "December 7, 2021",
    link: "/Awarded-8a-stars-III-GWAC",
  },
];

export default function Blog() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[50vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">

            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10">
                Blog
              </h1>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <p className="text-white max-w-xl mt-10 lg:mt-0">
              Discover the latest news and updates from GlobalXperts and learn
              how we are transforming businesses with innovative IT solutions.
            </p>

          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <p className="mt-4 text-gray-500 text-sm">
                  {post.date}
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href={post.link}
                  className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-2 px-8 rounded"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="p-8 max-w-7xl mx-auto bg-white mt-12 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Latest Case Studies
        </h3>

        <div className="border-t-4 border-blue-500 py-6">
          <p className="text-lg text-gray-600">
            Explore how we helped companies optimize infrastructure and
            operations through innovative IT and cloud solutions.
          </p>

          <div className="mt-6">
            <Link
              href="/Insights/CaseStudies"
              className="px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="p-8 max-w-7xl mx-auto bg-white mt-12 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose GlobalXperts?
        </h3>

        <p className="text-lg text-gray-600 mb-6">
          We provide tailored IT solutions including cloud infrastructure,
          storage optimization, and advanced contact center systems.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Custom cloud infrastructure design and implementation</li>
          <li>Advanced AWS-based storage solutions</li>
          <li>CRM and contact center integration expertise</li>
          <li>Proven success with major government contracts</li>
        </ul>

        <div className="mt-6">
          <Link
            href="/solutions/cloud/aws"
            className="px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>

    </div>
  );
}