import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "WhatsApp", href: "#", Icon: FaWhatsapp },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-140 items-end overflow-hidden  sm:min-h-160">
      <Image
        src={IMAGES.heroBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 ">
        <div className="max-w-3xl">
          <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            Practical Engineering for
            <br />
            Future-Ready Businesses
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Software, cloud, AI, and energy systems consulting — helping
            organizations build technology that works today and scales
            tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-orange-600 px-6 text-base text-white hover:bg-orange-500"
            >
              <Link href="/#service">Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/70 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#contact">Let&apos;s Talk</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 flex-col gap-3 md:right-8 md:flex">
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex size-10 items-center justify-center rounded-full bg-white text-orange-600 transition-colors hover:bg-orange-600 hover:text-white"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </section>
  );
}
