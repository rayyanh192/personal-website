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
  sponsors?: { name: string; logo: "nvidia" | "antler" | "dell" | "arm" | "scu" | "aws" | "inrix" | "acm" }[];
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
    hackathonName: "NVIDIA Spark Hackathon January 2026",
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
  {
    id: "devangel",
    title: "DevAngel",
    description:
      "Autonomous incident response and recovery system that automatically parses error logs, identifies root causes, and generates GitHub pull requests with fixes within minutes of an incident. Uses S3 buckets for log storage, Lambda triggers, and Amazon Q for analysis.",
    techStack: ["Python", "AWS Lambda", "Amazon S3", "Amazon Q", "GitHub API"],
    category: "hackathon",
    award: "2nd Place",
    hackathonName: "SCU AWS x INRIX Hackathon October 2025",
    githubUrl: "https://github.com/rayyanh192/DevAngel",
    imageUrl: "/awswin.png",
    date: "2025-03-15",
    featured: true,
    sponsors: [
      { name: "AWS", logo: "aws" },
      { name: "INRIX", logo: "inrix" },
    ],
    teamMembers: ["Rayyan Hussain", "Abhinav Ala", "Matthias Masiero", "Edrick Chang"],
  },
  {
    id: "sheltr",
    title: "Sheltr",
    description:
      "Disaster relief platform connecting people in need with available shelters during emergencies. Features searchable shelter listings, phone-based reservations, real-time queue tracking, and a shelter operator dashboard with AI-powered descriptions.",
    techStack: ["Python", "FastAPI", "AWS DynamoDB", "AWS EC2", "Google Maps API", "Claude AI"],
    category: "hackathon",
    award: "4th Place - Best Freshman Hack",
    hackathonName: "Hack For Humanity 2025",
    githubUrl: "https://github.com/Tabadia/shelter-finder",
    demoUrl: "https://sheltr.help",
    imageUrl: "/sheltr.png",
    date: "2025-02-01",
    featured: true,
    sponsors: [
      { name: "ACM", logo: "acm" },
    ],
    teamMembers: ["Rayyan Hussain", "Thalen Abadia", "Priyanka Ganguly", "Tommy Wickersham", "Rahul Datta", "Aayush Kumbhare"],
  },
  {
    id: "sentiment-enabler",
    title: "Sentiment Enabler",
    description:
      "Web application that presents articles about controversial topics from both pro and anti perspectives side by side. Uses a fine-tuned T5 transformer model to generate opposing keyword pairs for balanced article retrieval.",
    techStack: ["Python", "Flask", "PyTorch", "T5 Transformer", "Google Cloud", "JavaScript"],
    category: "hackathon",
    award: "1st Place - Novice",
    hackathonName: "SCU ACM Winter Challenge 2025",
    githubUrl: "https://github.com/rayyanh192/sentiment-enabler",
    imageUrl: "/sentiment.png",
    date: "2025-01-15",
    featured: true,
    sponsors: [
      { name: "ACM", logo: "acm" },
    ],
    teamMembers: ["Rayyan Hussain"],
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
