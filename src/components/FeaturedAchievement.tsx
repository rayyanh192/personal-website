"use client";

import React from "react";
import Link from "next/link";
import { SiNvidia } from "react-icons/si";
import { FaTrophy } from "react-icons/fa";

export default function FeaturedAchievement() {
  return (
    <Link
      href="/projects"
      className="block relative rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#76b900]/10 via-transparent to-[#76b900]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#76b900]/0 group-hover:border-[#76b900]/30 transition-colors duration-500" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-[#76b900]/20">
            <FaTrophy className="text-2xl text-[#76b900]" />
          </div>
          <div>
            <p className="font-mono text-xs text-[#76b900] uppercase tracking-wider">
              Featured Achievement
            </p>
            <h3 className="font-mono text-xl text-white">
              1st Place - Human Impact
            </h3>
          </div>
        </div>

        {/* Event & Project */}
        <div className="mb-4">
          <p className="text-neutral-200 font-medium">Power2ThePeople</p>
          <p className="text-neutral-400 text-sm">
            AI-powered legal rights assistant with real-time video analysis
          </p>
        </div>

        {/* Event badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-neutral-300 text-xs font-mono">
            NVIDIA Spark Hackathon 2025
          </span>
        </div>

        {/* Sponsors */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/50">
          <span className="text-neutral-500 text-xs">Sponsored by</span>
          <div className="flex items-center gap-3">
            <SiNvidia className="text-xl text-[#76b900]" title="NVIDIA" />
            <img
              src="/antler.png"
              alt="Antler"
              className="h-5 w-auto opacity-80"
            />
          </div>
        </div>

        {/* View more indicator */}
        <div className="absolute top-4 right-4 text-neutral-500 group-hover:text-white transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
