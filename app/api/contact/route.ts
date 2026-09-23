import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const scriptUrl = process.env.CONTACT_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ ok: false, error: "Contact is not configured." }, { status: 503 });
  }

  let body: { name?: string; email?: string; topic?: string; message?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const topic = String(body.topic ?? "").trim();
  const message = String(body.message ?? "").trim();
  const allowed = new Set(["Legal", "Media"]);

  if (!name || !email || !message || !allowed.has(topic) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Check the fields and try again." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 200 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message: `[${topic}] ${message}` }),
    redirect: "follow",
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "Sheet write failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
