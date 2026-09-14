import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnchorLink } from "@/components/ui/anchor-link";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

const STATS = [
  { value: "6", label: "Integrated service areas" },
  { value: "20+", label: "Professional certifications" },
  { value: "3", label: "Professional body registrations" },
];

const ENGINEER_HIGHLIGHTS = [
  "COREN-registered Engineer",
  "Member — NSE & NIEEE",
  "B.Eng. — Bells University of Technology",
  "M.Eng. — Covenant University",
  "20+ professional certifications (IBM, Google)",
  "Lead AI/ML Facilitator — Bells University",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
      {children}
    </span>
  );
}

export function About({
  headingLevel = "h2",
}: {
  /** Page-level heading tag for "About Our Firm" — h1 when this section is the
   * page's main heading (the standalone /about route), h2 when it's embedded
   * under the homepage Hero's h1 (the default). */
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Block A — About the firm */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <Heading className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              About Our Firm
            </Heading>
            <p className="mt-4 max-w-lg text-muted-foreground">
              We deliver integrated technology and engineering solutions that
              help businesses improve operational efficiency, strengthen
              infrastructure, embrace digital transformation, and build
              sustainable systems for long-term growth — combining engineering
              excellence with emerging technologies from concept to
              implementation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-orange-600 px-6 text-base text-white hover:bg-orange-500"
              >
                <AnchorLink href="/#contact">Get in Touch</AnchorLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base"
              >
                <AnchorLink href="/#service">Our Services</AnchorLink>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={IMAGES.aboutMain}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-[20%] -right-3 h-[58%] w-[52%] overflow-hidden rounded-xl border-8 border-background shadow-lg sm:right-[-10%] lg:right-[-14%]">
              <Image
                src={IMAGES.aboutDetail}
                alt=""
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Block B — About the founder */}
        <div className="mt-24 border-t border-border pt-16">
          <Eyebrow>Meet The Engineer</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Innocent Nwokolo
          </h2>
          <p className="mt-2 text-sm font-semibold text-orange-600">
            Managing Director &amp; CEO — MECITAC Nigeria Limited
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl bg-muted shadow-sm">
                <Image
                  src={IMAGES.engineerPortrait}
                  alt="Innocent Nwokolo"
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>

              <ul className="mt-6 space-y-3">
                {ENGINEER_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-600" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-justify text-muted-foreground">
              <p>
                Engr. Innocent Nwokolo is the Managing Director and Chief
                Executive Officer of MECITAC Nigeria Limited, where he leads the
                company&apos;s strategic direction and its delivery of technology
                and engineering solutions across software, artificial
                intelligence, telecommunications, IT infrastructure,
                cybersecurity, and energy systems.
              </p>
              <p>
                With a strong foundation in Electrical/Electronics Engineering
                and Information and Communication Engineering, Innocent has built
                a multidisciplinary career at the intersection of engineering,
                telecommunications, intelligent systems, and digital innovation.
              </p>
              <p>
                He holds a B.Eng. in Electrical/Electronics Engineering from
                Bells University of Technology and an M.Eng. in Information and
                Communication Engineering from Covenant University. He is a COREN
                registered Engineer, a member of the Nigerian Society of
                Engineers (NSE) and the National Institute of
                Electrical/Electronics Engineers (NIEEE), and has obtained more
                than 20 specialized professional certifications from global
                technology organizations including IBM and Google.
              </p>
              <p>
                His technical interests and professional expertise include
                Artificial Intelligence, Machine Learning, Generative AI, Deep
                Learning, MLOps, cloud technologies, telecommunications
                infrastructure, networking, and intelligent automation.
              </p>
              <p>
                In addition to his corporate responsibilities, Innocent
                contributes to technology education and capacity development as a
                Volunteer Lead Facilitator for AI &amp; Machine Learning at Bells
                University of Technology. Through teaching, mentoring, and
                research, he works to connect academic knowledge with practical
                industry applications and equip emerging engineers with the
                skills required to solve real-world problems.
              </p>
              <p>
                At MECITAC, his leadership is driven by a clear objective: to
                combine engineering excellence with emerging technologies to
                create practical solutions that improve efficiency, strengthen
                infrastructure, and enable organizations to thrive in a rapidly
                evolving digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
