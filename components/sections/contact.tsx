"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/data/services";

const OTHER_INFO = [
  { label: SITE.email, Icon: Mail },
  { label: SITE.phone, Icon: Phone },
  { label: SITE.location, Icon: MapPin },
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $20,000",
  "$20,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // Auto-dismiss success/error message after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const budget = (formData.get("budget") as string) || "Not specified";
    const service = (formData.get("service") as string) || "General Inquiry";
    const message = (formData.get("message") as string) || "";

    setStatus("submitting");

    try {
      const subject = `New Project Inquiry: ${service} — ${name}`;
      const bodyLines = [
        `Name: ${name}`,
        `Client Email: ${email}`,
        `Service Interested In: ${service}`,
        `Estimated Budget: ${budget}`,
        ``,
        `--- Message ---`,
        message,
      ];

      const bodyText = bodyLines.join("\n");
      const mailtoUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyText)}`;

      // Launch email client with pre-formatted subject and body
      window.location.href = mailtoUrl;

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-muted/40 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
            Contact Us
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Reach out, we&apos;re ready to collaborate
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell me about your project — software, cloud, AI, or energy
            systems — and I&apos;ll follow up within one business day.
          </p>

          <div className="mt-10">
            <h3 className="text-sm font-semibold">Other Info</h3>
            <ul className="mt-4 space-y-4">
              {OTHER_INFO.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-orange-600 ring-1 ring-border">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="mt-2 w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="mt-2 w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="budget" className="text-sm font-semibold">
                Estimated Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="" disabled>
                  Select Budget…
                </option>
                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-sm font-semibold">
                What services are you interested in?
              </p>
              <div className="mt-3 space-y-2">
                {SERVICES.map(({ title }, index) => (
                  <label
                    key={title}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={title}
                      defaultChecked={index === 0}
                      className="size-4 accent-orange-600"
                    />
                    {title}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project…"
                className="mt-2 w-full resize-y rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="h-12 w-full bg-orange-600 text-base text-white hover:bg-orange-500 font-semibold"
            >
              {status === "submitting" ? "Opening Email App…" : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">
                Email app opened! Please click Send in your email app to deliver your message.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
