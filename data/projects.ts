export type ProjectCategory = "Industry" | "Technology" | "AI & IoT" | "Energy";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Industry",
  "Technology",
  "AI & IoT",
  "Energy",
];

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  // Drop matching files into public/images/projects/
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Smart Grid Implementation",
    description: "Advanced smart grid solution for efficient power distribution.",
    category: "Energy",
    image: "/images/projects/smart-grid.png",
  },
  {
    title: "Industrial IoT Platform",
    description: "IoT platform for real-time industrial monitoring and control.",
    category: "Industry",
    image: "/images/projects/industrial-iot.png",
  },
  {
    title: "AI-Powered Analytics",
    description: "Machine learning solutions for predictive maintenance.",
    category: "AI & IoT",
    image: "/images/projects/ai-analytics.png",
  },
  {
    title: "Renewable Energy Systems",
    description: "Solar and wind energy integration projects.",
    category: "Energy",
    image: "/images/projects/renewable-energy.png",
  },
  {
    title: "Factory Automation",
    description: "Advanced automation solutions for manufacturing.",
    category: "Industry",
    image: "/images/projects/factory-automation.png",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for enterprise applications.",
    category: "Technology",
    image: "/images/projects/cloud-infrastructure.png",
  },
];
