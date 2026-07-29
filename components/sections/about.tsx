import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

const ABOUT_HIGHLIGHTS = [
  {
    value: "mission",
    title: "Our Mission",
    body: "To help organizations build reliable, future-ready technology — from first prototype to production — through thoughtful engineering across software, cloud, AI, and energy systems.",
  },
  {
    value: "vision",
    title: "Our Vision",
    body: "A future where every organization, regardless of size, has access to world-class engineering expertise to power its growth and innovation.",
  },
  {
    value: "history",
    title: "Our History",
    body: "Over 10+ years working across software development, IT infrastructure, and energy systems — partnering with organizations to solve complex technical challenges and deliver lasting impact.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              With over a decade of experience across software, cloud, and
              energy systems, I help organizations translate ambitious ideas
              into reliable, production-ready technology tailored to their
              unique needs.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 bg-orange-600 px-6 text-base text-white hover:bg-orange-500"
          >
            <Link href="/#projects">Learn More</Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
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
            <div className="absolute top-[20%] right-[-14%] h-[58%] w-[52%] overflow-hidden rounded-xl  border-8 border-background shadow-lg">
              <Image
                src={IMAGES.aboutDetail}
                alt=""
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          <Accordion type="single" defaultValue="mission">
            {ABOUT_HIGHLIGHTS.map(({ value, title, body }) => (
              <AccordionItem
                key={value}
                value={value}
                className="mb-5 rounded-xl border border-border bg-card px-5 py-4 last:mb-0 data-[state=open]:bg-muted/60"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
