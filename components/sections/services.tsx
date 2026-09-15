import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="service" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-muted-foreground">
          Integrated technology and engineering solutions that help businesses
          improve operational efficiency, strengthen infrastructure, embrace
          digital transformation, and build sustainable systems for long-term
          growth.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, description, image }) => (
          <Card
            key={title}
            className="border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl">
                <Image src={image} alt="" width={56} height={56} className="size-14 object-contain" />
              </div>
              <CardTitle className="mt-4 text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          asChild
          size="lg"
          className="h-13 gap-2 bg-orange-600 px-14 text-base font-semibold text-white hover:bg-orange-500"
        >
          <Link href="/service">
            Explore our services in detail
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
