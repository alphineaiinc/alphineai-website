// src/app/api/apply/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: send to email/ATS/DB. For now we log to server console.
    console.log("New application:", body);
    return NextResponse.json({ ok: true, message: "Application received. We’ll review and get back to you." });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Failed to submit. Please try again." }, { status: 400 });
  }
}
