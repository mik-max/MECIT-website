import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnchorLink } from "@/components/ui/anchor-link";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "6", label: "Engineering disciplines covered" },
  { value: "1-on-1", label: "Direct access to the engineer" },
];

const ENGINEER_HIGHLIGHTS = [
  "Software, cloud & AI systems",
  "Innovative, real-world solutions",
  "Energy & smart grid engineering",
  "Reliable, expert guidance",
  "IT infrastructure & networking",
  "Long-term support & consulting",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Block A — About the firm */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              About Our Firm
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              With over a decade of experience across software, cloud, AI,
              and energy systems, I help organizations translate ambitious
              ideas into reliable, production-ready technology tailored to
              their unique needs.
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

        {/* Block B — About the engineer */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl bg-muted shadow-sm lg:order-1 lg:mx-0">
            <Image
              src={IMAGES.engineerPortrait}
              alt="Engineer Innocent"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Meet The Engineer</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The Engineer Behind Every Solution
            </h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m Engineer Innocent, the founder and lead engineer at
              MECIT Engineering. Over 10+ years, I&apos;ve worked across
              software development, IT infrastructure, and energy systems —
              partnering directly with organizations to solve complex
              technical challenges, with no layers between you and the
              person building your solution.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {ENGINEER_HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 shrink-0 text-orange-600" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
