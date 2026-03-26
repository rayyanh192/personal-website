export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "hackathon" | "personal" | "research" | "open-source";
  award?: string;
  hackathonName?: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  date: string;
  featured?: boolean;
  sponsors?: { name: string; logo: "nvidia" | "antler" | "dell" | "arm" | "scu" }[];
  teamMembers?: string[];
};

export const projects: Project[] = [
  // === HACKATHON WINS ===
  {
    id: "power2thepeople",
    title: "Power2ThePeople",
    description:
      "AI-powered legal rights assistant that analyzes live video and audio to evaluate interaction legality and detect potential abuse of power. Provides real-time guidance through Meta Glasses or mobile devices, tracks encounters, and uses RAG trained on SF misconduct data to surface comparable cases.",
    techStack: ["Python", "Swift", "NVIDIA DGX Spark", "RAG", "iOS"],
    category: "hackathon",
    award: "1st Place - Human Impact",
    hackathonName: "NVIDIA Spark Hackathon 2026",
    githubUrl: "https://github.com/rayyanh192/Power2ThePeople",
    imageUrl: "/nvidiawin.jpeg",
    date: "2026-01-29",
    featured: true,
    sponsors: [
      { name: "NVIDIA", logo: "nvidia" },
      { name: "Antler", logo: "antler" },
    ],
    teamMembers: ["Rayyan Hussain", "Abhinav Ala", "Edrick Chang", "Abraham Bhatti"],
  },

  // === PERSONAL PROJECTS ===
  {
    id: "personal-project-1",
    title: "Personal Project",
    description:
      "A personal project you built for fun or to learn something new.",
    techStack: ["Rust", "WebAssembly"],
    category: "personal",
    githubUrl: "https://github.com/rayyanh192/personal-project",
    date: "2024-12-01",
  },

  // === RESEARCH ===
  {
    id: "research-project-1",
    title: "Research Project",
    description:
      "Description of your research work, e.g., robotics, ML, or computer vision.",
    techStack: ["Python", "ROS 2", "PyTorch"],
    category: "research",
    date: "2024-11-01",
  },
];
