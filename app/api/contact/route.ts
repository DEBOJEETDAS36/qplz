// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Contact from "@/models/Contact";

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const contact = await Contact.create(body);
//     return NextResponse.json({ contact }, { status: 201 });
//   } catch (error) {
//     console.error("POST /api/contact error:", error);
//     return NextResponse.json(
//       { error: "Failed to submit contact form" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);
    return NextResponse.json({ contact }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}