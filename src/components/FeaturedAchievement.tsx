"use client";

import React from "react";
import Link from "next/link";
import { SiNvidia } from "react-icons/si";
import { FaTrophy } from "react-icons/fa";

type AchievementData = {
  place: string;
  placeColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  glowColor: string;
  projectName: string;
  projectDescription: string;
  eventName: string;
  sponsors: React.ReactNode;
};

const achievement: AchievementData = {
  place: "1st Place - Human Impact",
  placeColor: "text-[#76b900]",
  badgeBg: "bg-[#76b900]",
  badgeText: "text-black",
  badgeBorder: "border-[#76b900]",
  glowColor: "#76b900",
  projectName: "Power2ThePeople",
  projectDescription: "AI-powered legal rights assistant with real-time video analysis",
  eventName: "NVIDIA Spark Hackathon January 2026",
  sponsors: (
    <>
      <SiNvidia className="text-xl text-[#76b900]" title="NVIDIA" />
      <img src="/antler.png" alt="Antler" className="h-5 w-auto opacity-80" />
    </>
  ),
};

function AchievementCard({ achievement }: { achievement: AchievementData }) {
  return (
    <Link
      href="/projects"
      className="block relative rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Gradient glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, ${achievement.glowColor}1A, transparent, ${achievement.glowColor}1A)`,
        }}
      />

      {/* Animated border glow */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-colors duration-500"
        style={{ borderColor: `${achievement.glowColor}00`, }}
      />

      {/* Place badge - top right */}
      <div
        className={`absolute -top-0 -right-0 px-4 py-1.5 rounded-bl-xl rounded-tr-2xl font-mono text-xs font-bold ${achievement.badgeBg} ${achievement.badgeText} shadow-lg`}
      >
        {achievement.place.includes("1st") ? "🥇 1ST" : achievement.place.includes("2nd") ? "🥈 2ND" : "🏅 4TH"}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2 rounded-xl"
            style={{ backgroundColor: `${achievement.glowColor}33` }}
          >
            <FaTrophy className="text-2xl" style={{ color: achievement.glowColor }} />
          </div>
          <div>
            <p
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: achievement.glowColor }}
            >
              Hackathon Win
            </p>
            <h3 className="font-mono text-lg text-white">{achievement.place}</h3>
          </div>
        </div>

        {/* Event & Project */}
        <div className="mb-4">
          <p className="text-neutral-200 font-medium">{achievement.projectName}</p>
          <p className="text-neutral-400 text-sm">{achievement.projectDescription}</p>
        </div>

        {/* Event badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-neutral-300 text-xs font-mono">
            {achievement.eventName}
          </span>
        </div>

        {/* Sponsors */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/50">
          <span className="text-neutral-500 text-xs">Sponsored by</span>
          <div className="flex items-center gap-3">{achievement.sponsors}</div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedAchievement() {
  return (
    <div className="space-y-4">
      <h2 className="font-mono text-2xl text-white mb-4">Featured Project</h2>
      <AchievementCard achievement={achievement} />
    </div>
  );
}
