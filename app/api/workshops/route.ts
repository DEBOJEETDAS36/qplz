import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import WorkshopEnquiry from "@/models/WorkshopProgram";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const enquiry = await WorkshopEnquiry.create(body);
    return NextResponse.json({ enquiry }, { status: 201 });
  } catch (error) {
    console.error("POST /api/workshops error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}