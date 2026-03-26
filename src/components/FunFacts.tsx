"use client";

import React from "react";
import { funFacts } from "@/data/funFacts";

export default function FunFacts() {
  return (
    <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <h3 className="font-mono text-lg text-white mb-4">Fun Facts</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="group p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-800/70 transition-all duration-300 cursor-default"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {fact.emoji}
            </div>
            <p className="font-mono text-sm text-white">{fact.text}</p>
            {fact.subtext && (
              <p className="text-xs text-neutral-500 mt-1">{fact.subtext}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
