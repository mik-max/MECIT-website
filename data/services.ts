import { SERVICE_IMAGES } from "@/constants/images";

export type Service = {
  title: string;
  /** Short blurb used on the homepage service cards. */
  description: string;
  /** Headline tagline used on the dedicated /service page. */
  tagline: string;
  /** Overview paragraph used on the dedicated /service page. */
  overview: string;
  /** Detailed capability list used on the dedicated /service page. */
  capabilities: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    title: "Software Development",
    description:
      "Secure, scalable, user-focused software — from web and mobile apps to enterprise platforms and automation.",
    tagline: "Custom Digital Solutions Built Around Your Business",
    overview:
      "We design and develop secure, scalable, and user-focused software solutions tailored to your unique operational and business requirements. From web and mobile applications to enterprise platforms, we transform ideas and business processes into reliable digital products.",
    capabilities: [
      "Custom web application development",
      "Mobile application development",
      "Enterprise software solutions",
      "Business process automation",
      "API and system integration",
      "Database design and management",
      "Cloud-native application development",
      "Software maintenance and optimization",
    ],
    image: SERVICE_IMAGES.softwareDevelopment,
  },
  {
    title: "Cloud & Cyber Security",
    description:
      "Cloud modernization and proactive security to protect critical systems, applications, and data.",
    tagline: "Secure, Resilient, and Scalable Digital Infrastructure",
    overview:
      "We help organizations modernize their IT infrastructure while protecting critical systems, applications, and data. Our cloud and cybersecurity services combine scalable cloud technologies with proactive security practices to create resilient digital environments.",
    capabilities: [
      "Cloud migration and modernization",
      "Cloud infrastructure deployment",
      "Zero-Trust security architecture",
      "Identity and access management",
      "Network and infrastructure security",
      "Data protection and backup solutions",
      "Disaster recovery and business continuity",
      "Security assessment and risk management",
    ],
    image: SERVICE_IMAGES.cloudSecurity,
  },
  {
    title: "AI & Machine Learning",
    description:
      "AI and ML for intelligent automation, predictive analytics, and data-driven decisions.",
    tagline: "Transforming Data into Intelligent Business Solutions",
    overview:
      "We apply Artificial Intelligence and Machine Learning to solve complex business and operational challenges. From intelligent automation and predictive analytics to AI-powered applications, we develop solutions that enable organizations to make faster, smarter, and data-driven decisions.",
    capabilities: [
      "Machine learning model development",
      "Predictive analytics",
      "Intelligent process automation",
      "AI-powered business applications",
      "Natural Language Processing (NLP)",
      "Computer vision solutions",
      "Generative AI and intelligent assistants",
      "Data analysis and visualization",
      "AI integration with existing enterprise systems",
    ],
    image: SERVICE_IMAGES.aiMachineLearning,
  },
  {
    title: "Energy Systems",
    description:
      "Technology-driven energy solutions for efficient, reliable, and sustainable power systems.",
    tagline: "Intelligent Energy Solutions for a Sustainable Future",
    overview:
      "We provide technology-driven energy solutions that improve the efficiency, reliability, and sustainability of modern power systems. By combining electrical engineering with automation and intelligent technologies, we support the development of smarter and more resilient energy infrastructure.",
    capabilities: [
      "Renewable energy system design",
      "Solar power solutions",
      "Smart energy management",
      "Energy monitoring and automation",
      "Smart grid technologies",
      "Power system integration",
      "Energy efficiency solutions",
      "Remote monitoring and control",
      "Electrical infrastructure solutions",
    ],
    image: SERVICE_IMAGES.energySystems,
  },
  {
    title: "IT Operations & Networking",
    description:
      "Design, deployment, and management of IT and network infrastructure that keeps businesses connected.",
    tagline: "Reliable Infrastructure. Connected Operations. Continuous Support.",
    overview:
      "We design, deploy, and manage IT and network infrastructure that keeps businesses connected and productive. Our services cover network architecture, infrastructure deployment, system monitoring, troubleshooting, and ongoing technical support.",
    capabilities: [
      "Network design and installation",
      "LAN/WAN infrastructure",
      "Structured cabling and connectivity",
      "Network monitoring and optimization",
      "Server and infrastructure deployment",
      "IT infrastructure management",
      "System troubleshooting and maintenance",
      "Technical support and managed services",
      "Infrastructure performance and availability management",
    ],
    image: SERVICE_IMAGES.networking,
  },
  {
    title: "Consulting Services",
    description:
      "Practical technical expertise across IT, telecom, electrical engineering, and digital transformation.",
    tagline: "Expertise That Turns Technology Challenges into Business Opportunities",
    overview:
      "Our consulting services provide organizations with practical technical expertise across IT, telecommunications, electrical engineering, and digital transformation. We work closely with clients to understand their challenges, evaluate their infrastructure, and develop solutions aligned with their strategic objectives.",
    capabilities: [
      "IT strategy and digital transformation",
      "Telecommunications infrastructure consulting",
      "Network and infrastructure assessment",
      "Electrical engineering consulting",
      "Technology project management",
      "Systems architecture and design",
      "Technology procurement advisory",
      "Infrastructure optimization",
      "Technical feasibility studies",
      "Training and capacity development",
    ],
    image: SERVICE_IMAGES.consulting,
  },
];
