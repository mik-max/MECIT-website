import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
    </>
  );
}
