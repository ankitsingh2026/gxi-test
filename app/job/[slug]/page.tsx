import JobDetailsClient from "@/components/jobs/JobDetailsClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const jobId = decodeURIComponent(slug);

  return <JobDetailsClient jobId={jobId} />;
}