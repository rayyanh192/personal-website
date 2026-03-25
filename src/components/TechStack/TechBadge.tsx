"use client";

import React, { useState } from "react";
import { Tech } from "./techData";

type Props = {
  tech: Tech;
};

export default function TechBadge({ tech }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon } = tech;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative px-4 py-2 rounded-xl
        bg-neutral-800/50 border border-neutral-700/50
        font-mono text-sm text-neutral-200
        cursor-default select-none
        transition-all duration-300 ease-out
        ${
          isHovered
            ? "transform -translate-y-1 shadow-lg shadow-neutral-900/50 border-neutral-600/70 bg-neutral-800/80"
            : ""
        }
      `}
      style={{
        boxShadow: isHovered ? `0 0 20px ${tech.color}20` : undefined,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon
          className="text-lg transition-colors duration-300"
          style={{ color: isHovered ? tech.color : undefined }}
        />
        <span className={isHovered ? "text-white" : ""}>{tech.name}</span>
      </div>

      {/* Tooltip on hover */}
      {tech.description && isHovered && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                        rounded-lg bg-neutral-800 border border-neutral-700
                        text-xs text-neutral-300 whitespace-nowrap z-10
                        animate-fadeIn"
        >
          {tech.description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
        </div>
      )}
    </div>
  );
}
