import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnchorLink } from "@/components/ui/anchor-link";
import { Button } from "@/components/ui/button";
import { FounderBio } from "@/components/sections/founder-bio";
import { IMAGES } from "@/constants/images";

const FOUNDER_BIO = [
  `Engr. Innocent Nwokolo is the Managing Director and Chief Executive Officer of Technogenix LTD, where he leads the company's strategic direction and delivery of technology and engineering solutions across software, artificial intelligence, telecommunications, IT infrastructure, cybersecurity, and energy systems.`,
  `With a strong foundation in Electrical/Electronic Engineering and Information and Communication Engineering, Innocent has built a multidisciplinary career at the intersection of engineering, telecommunications, intelligent systems, and digital innovation.`,
  `He holds a B.Eng. in Electrical/Electronic Engineering from Bells University of Technology and an M.Eng. in Information and Communication Engineering from Covenant University.`,
  `He is a COREN-registered Engineer, a member of the Nigerian Society of Engineers (NSE) and the Nigerian Institute of Electrical and Electronic Engineers (NIEEE), with more than 20 specialized professional certifications from global technology organizations, including IBM and Google.`,
  `His technical interests and professional expertise include Artificial Intelligence, Machine Learning, Generative AI, Deep Learning, MLOps, cloud technologies, telecommunications infrastructure, networking, and intelligent automation.`,
  `In addition to his corporate responsibilities, Innocent contributes to technology education and capacity development as a Volunteer Lead Facilitator for AI & Machine Learning at Bells University of Technology. Through teaching, mentoring, and research, he connects academic knowledge with practical industry applications and equips emerging engineers with the skills required to solve real-world problems.`,
  `At Technogenix, his leadership is driven by a clear objective to combine engineering excellence with emerging technologies to create practical solutions that improve efficiency, strengthen infrastructure, and enable organizations to thrive in a rapidly evolving digital economy.`,
];

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
              Technogenix LTD is a Nigerian engineering and technology
              company incorporated in 2026 with the Corporate Affairs
              Commission (CAC) to provide innovative, reliable, and
              integrated engineering and digital technology solutions to
              businesses, institutions, and organizations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-orange-600 px-6 text-base text-white hover:bg-orange-500"
              >
                <AnchorLink href="/contact">Get in Touch</AnchorLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base"
              >
                <AnchorLink href="/service">Our Services</AnchorLink>
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

          <div className="mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={IMAGES.aboutMain}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Block A.2 — Mission & Vision */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src={IMAGES.visionIcon}
                alt=""
                width={56}
                height={56}
                className="size-14 object-contain"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              Our Vision
            </h3>
            <p className="mt-3 text-muted-foreground">
              To become a leading African engineering and technology
              solutions company, delivering intelligent, secure, and
              sustainable solutions that create lasting value for our
              clients and communities.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src={IMAGES.missionIcon}
                alt=""
                width={56}
                height={56}
                className="size-14 object-contain"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              Our Mission
            </h3>
            <p className="mt-3 text-muted-foreground">
              To integrate engineering excellence with emerging technologies
              to solve complex business and infrastructure challenges, while
              delivering reliable, scalable, and innovative solutions that
              enable our clients to grow and thrive.
            </p>
          </div>
        </div>

        {/* Block B — About the founder */}
        <div className="mt-24 border-t border-border pt-16">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Innocent Nwokolo
          </h2>
          <p className="mt-2 text-sm font-semibold text-orange-600">
            Managing Director &amp; CEO — Technogenix LTD
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

            <FounderBio paragraphs={FOUNDER_BIO} />
          </div>
        </div>
      </div>
    </section>
  );
}
