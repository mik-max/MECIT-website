import type { LucideIcon } from "lucide-react";
import {
  Code2,
  ShieldCheck,
  BrainCircuit,
  Zap,
  Network,
  Users,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Software Development",
    description: "Custom web, mobile, and enterprise applications built to scale.",
    icon: Code2,
  },
  {
    title: "Cloud & Cyber Security",
    description: "Cloud migration, zero-trust security, and resilient backups.",
    icon: ShieldCheck,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation, data models, and predictive analytics.",
    icon: BrainCircuit,
  },
  {
    title: "Energy Systems",
    description: "Smart grids and renewable energy systems automation.",
    icon: Zap,
  },
  {
    title: "IT Operations & Networking",
    description: "Network setup, infrastructure, and round-the-clock support.",
    icon: Network,
  },
  {
    title: "Consulting Services",
    description: "Expert advisory across IT, electrical, and telecom infrastructure.",
    icon: Users,
  },
];
