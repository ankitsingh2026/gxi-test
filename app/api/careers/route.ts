import { NextResponse } from "next/server";

export async function GET() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      location: "India",
      type: "Full Time",
    },
  ];

  return NextResponse.json({ jobs });
}

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "Application received",
    data: body,
  });
}