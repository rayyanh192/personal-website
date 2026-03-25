"use client";

import React from "react";
import TechBadge from "./TechBadge";
import { techData, categoryLabels, TechCategory } from "./techData";

export default function TechStack() {
  const categories = Object.keys(techData) as TechCategory[];

  return (
    <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <h2 className="font-mono text-2xl text-white mb-6">Tech Stack</h2>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="font-mono text-sm text-neutral-400 uppercase tracking-wider mb-3">
              {categoryLabels[category]}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techData[category].map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
