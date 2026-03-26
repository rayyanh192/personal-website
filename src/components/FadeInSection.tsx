"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  immediate?: boolean;
};

export default function FadeInSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 600,
  immediate = false,
}: Props) {
  const { ref, isVisible: observerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [immediateVisible, setImmediateVisible] = React.useState(false);

  React.useEffect(() => {
    if (immediate) {
      // Trigger animation after a small delay to allow initial render
      const timer = setTimeout(() => setImmediateVisible(true), 10);
      return () => clearTimeout(timer);
    }
  }, [immediate]);

  const isVisible = immediate ? immediateVisible : observerVisible;

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
