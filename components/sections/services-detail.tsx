import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export function ServicesDetail() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
            What We Do
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground">
            We deliver integrated technology and engineering solutions that help
            businesses improve operational efficiency, strengthen infrastructure,
            embrace digital transformation, and build sustainable systems for
            long-term growth.
          </p>
        </div>

        {/* Service detail blocks */}
        <div className="mt-16 space-y-8">
          {SERVICES.map(
            ({ title, tagline, overview, capabilities, image }, index) => (
              <div
                key={title}
                className="grid gap-8 rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12"
              >
                <div>
                  <div className="flex size-16 items-center justify-center overflow-hidden rounded-xl">
                    <Image src={image} alt="" width={64} height={64} className="size-16 object-contain" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-orange-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {tagline}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">{overview}</p>
                  <h3 className="mt-6 text-sm font-semibold">
                    Our capabilities include:
                  </h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2.5 rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-600" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>

        {/* Our Approach */}
        <div className="mt-20 rounded-3xl bg-muted/50 p-8 sm:p-12">
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
            Our Approach
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Innovate. Integrate. Transform.
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We believe technology delivers the greatest value when it is aligned
            with real business and engineering needs. Our multidisciplinary
            approach brings together software, AI, cloud, cybersecurity,
            telecommunications, networking, and energy engineering to deliver
            solutions that are practical, secure, scalable, and built for the
            future.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            From concept to implementation, we help organizations build smarter
            systems, improve operational performance, and accelerate digital
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
