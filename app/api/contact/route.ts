import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/constants/site";

const FROM_ADDRESS = "MECITAC Website <no-reply@mecitacng.com>";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, budget, service, message } = body as {
    name?: string;
    email?: string;
    budget?: string;
    service?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "Contact form: RESEND_API_KEY is not set — cannot send email. Submission was:",
      body
    );
    return NextResponse.json(
      { error: "Email sending is not configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New Project Inquiry: ${service || "General Inquiry"} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Client Email: ${email}`,
    `Service Interested In: ${service || "General Inquiry"}`,
    `Estimated Budget: ${budget || "Not specified"}`,
    ``,
    `--- Message ---`,
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: SITE.email,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Contact form: Resend returned an error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form: unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
