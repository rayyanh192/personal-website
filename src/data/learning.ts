export type LearningItem = {
  name: string;
  emoji: string;
  description: string;
  link?: string;
};

export const currentlyLearning: LearningItem[] = [
  {
    name: "LangChain",
    emoji: "🔗",
    description: "Building AI agents & RAG systems",
    link: "https://langchain.com",
  },
  {
    name: "Quantum Computing",
    emoji: "⚛️",
    description: "Exploring quantum algorithms",
    link: "https://qiskit.org",
  },
];

// Update this when you change what you're learning
export const lastUpdated = "March 2025";
