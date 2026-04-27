export type LearningItem = {
  name: string;
  emoji: string;
  description: string;
  link?: string;
};

export const currentlyLearning: LearningItem[] = [
  {
    name: "GPU Programming",
    emoji: "🖥️",
    description: "Writing parallel kernels with CUDA",
  },
  {
    name: "Linear Algebra",
    emoji: "📐",
    description: "Deepening foundations in matrices & transformations",
  },
];

// Update this when you change what you're learning
export const lastUpdated = "April 2026";
