// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("New contact message:", body);
    return NextResponse.json({
      ok: true,
      message: "Thanks! Your message has been received.",
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, message: "Failed to send. Please try again." },
      { status: 400 }
    );
  }
}
