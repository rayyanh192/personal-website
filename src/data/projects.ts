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
};

export const projects: Project[] = [
  // === HACKATHON WINS ===
  {
    id: "hackathon-project-1",
    title: "Project Name",
    description:
      "Brief description of what this project does and what problem it solves.",
    techStack: ["React", "Python", "OpenAI API"],
    category: "hackathon",
    award: "1st Place",
    hackathonName: "HackathonName 2025",
    demoUrl: "https://demo-link.com",
    githubUrl: "https://github.com/rayyanh192/project",
    date: "2025-01-15",
  },
  {
    id: "hackathon-project-2",
    title: "Another Hackathon Project",
    description:
      "Description of your second hackathon win. What did you build and why?",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    category: "hackathon",
    award: "Best AI/ML Hack",
    hackathonName: "TreeHacks 2025",
    demoUrl: "https://demo-link.com",
    githubUrl: "https://github.com/rayyanh192/project2",
    date: "2025-02-20",
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
