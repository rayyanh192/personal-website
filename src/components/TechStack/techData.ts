import { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiRos,
  SiPytorch,
  SiTensorflow,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";

export type Tech = {
  name: string;
  Icon: IconType;
  color: string;
  description?: string;
};

export type TechCategory = "languages" | "frontend" | "backend" | "robotics" | "tools";

export const techData: Record<TechCategory, Tech[]> = {
  languages: [
    {
      name: "Python",
      Icon: SiPython,
      color: "#3776ab",
      description: "ML, scripting, automation",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "#3178c6",
      description: "Type-safe JavaScript",
    },
    {
      name: "C++",
      Icon: SiCplusplus,
      color: "#00599c",
      description: "Systems, robotics",
    },
  ],
  frontend: [
    {
      name: "React",
      Icon: SiReact,
      color: "#61dafb",
      description: "UI library",
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      color: "#ffffff",
      description: "React framework",
    },
    {
      name: "Tailwind",
      Icon: SiTailwindcss,
      color: "#38bdf8",
      description: "Utility-first CSS",
    },
  ],
  backend: [
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      color: "#339933",
      description: "JavaScript runtime",
    },
    {
      name: "FastAPI",
      Icon: SiFastapi,
      color: "#009688",
      description: "Python API framework",
    },
  ],
  robotics: [
    {
      name: "ROS 2",
      Icon: SiRos,
      color: "#22314e",
      description: "Robot Operating System",
    },
    {
      name: "PyTorch",
      Icon: SiPytorch,
      color: "#ee4c2c",
      description: "ML framework",
    },
    {
      name: "TensorFlow",
      Icon: SiTensorflow,
      color: "#ff6f00",
      description: "ML framework",
    },
  ],
  tools: [
    {
      name: "Git",
      Icon: SiGit,
      color: "#f05032",
      description: "Version control",
    },
    {
      name: "Docker",
      Icon: SiDocker,
      color: "#2496ed",
      description: "Containerization",
    },
    {
      name: "Linux",
      Icon: SiLinux,
      color: "#fcc624",
      description: "Operating system",
    },
  ],
};

export const categoryLabels: Record<TechCategory, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  robotics: "Robotics & ML",
  tools: "Tools",
};
