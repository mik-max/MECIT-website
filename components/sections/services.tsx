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
          A full stack of engineering capability — from code to cloud to
          clean energy.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, description, icon: Icon }) => (
          <Card
            key={title}
            className="border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Icon className="size-6" />
              </div>
              <CardTitle className="mt-4 text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
