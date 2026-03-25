import { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiServerless,
  SiRos,
  SiPytorch,
  SiTensorflow,
  SiNvidia,
  SiGit,
  SiDocker,
  SiLinux,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export type Tech = {
  name: string;
  Icon: IconType;
  color: string;
  description?: string;
};

export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "cloud"
  | "ml"
  | "tools";

export const techData: Record<TechCategory, Tech[]> = {
  languages: [
    {
      name: "Python",
      Icon: SiPython,
      color: "#3776ab",
      description: "ML, backend, automation",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "#3178c6",
      description: "Type-safe JavaScript",
    },
    {
      name: "JavaScript",
      Icon: SiJavascript,
      color: "#f7df1e",
      description: "Web development",
    },
    {
      name: "C++",
      Icon: SiCplusplus,
      color: "#00599c",
      description: "Systems, robotics",
    },
    {
      name: "Swift",
      Icon: SiSwift,
      color: "#f05138",
      description: "iOS development",
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
  cloud: [
    {
      name: "AWS",
      Icon: FaAws,
      color: "#ff9900",
      description: "EC2, Lambda, S3, Amplify",
    },
    {
      name: "Serverless",
      Icon: SiServerless,
      color: "#fd5750",
      description: "Lambda, Step Functions",
    },
  ],
  ml: [
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
    {
      name: "NVIDIA",
      Icon: SiNvidia,
      color: "#76b900",
      description: "GPU & AI tools",
    },
    {
      name: "ROS 2",
      Icon: SiRos,
      color: "#22314e",
      description: "Robot Operating System",
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
    {
      name: "GitHub Actions",
      Icon: SiGithubactions,
      color: "#2088ff",
      description: "CI/CD automation",
    },
  ],
};

export const categoryLabels: Record<TechCategory, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & AWS",
  ml: "ML & Robotics",
  tools: "Tools & DevOps",
};
