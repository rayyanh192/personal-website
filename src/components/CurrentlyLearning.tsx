"use client";

import React from "react";
import { currentlyLearning, lastUpdated } from "@/data/learning";

export default function CurrentlyLearning() {
  return (
    <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <h3 className="font-mono text-lg text-white">Currently Learning</h3>
        </div>
        <span className="text-xs text-neutral-500 font-mono">
          Updated {lastUpdated}
        </span>
      </div>

      {/* Learning items */}
      <div className="space-y-3">
        {currentlyLearning.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-3 rounded-xl bg-neutral-800/30 border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {item.emoji}
            </div>
            <div className="flex-1">
              <p className="font-mono text-white">{item.name}</p>
              <p className="text-sm text-neutral-400">{item.description}</p>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                title={`Learn more about ${item.name}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
