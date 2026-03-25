"use client";

import React from "react";
import SpotifyNowPlaying from "@/components/NowPlaying";
import Terminal from "@/components/Terminal/Terminal";
import TypewriterText from "@/components/TypewriterText";
import TechStack from "@/components/TechStack/TechStack";
import FadeInSection from "@/components/FadeInSection";

export default function Page() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] pb-20">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6">
          {/* About Me Card */}
          <FadeInSection direction="up" delay={100}>
            <div className="mx-auto flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <img
                src="/rayhome.png"
                alt="profile"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-neutral-700/50"
              />
              <div className="text-center md:text-left">
                <h1 className="font-mono text-4xl text-white">About Me</h1>
                <p className="mt-2 text-neutral-200 max-w-xl">
                  <TypewriterText
                    text="Hey there, my name is Rayyan. I am a risk taker, a roadrunner, and an entrepreneur. On the side, I am a computer science and engineering student at Santa Clara University. I love building anything creative from cool ascii art to ML in robotics. Welcome, and say hi on your way out!"
                    speed={25}
                    delay={800}
                  />
                </p>
                <p className="mt-4 text-sm text-neutral-400 font-mono">
                  rayyanhussain2024@gmail.com
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Spotify Widget */}
          <FadeInSection direction="up" delay={200}>
            <div className="mt-6 flex items-start justify-center">
              <SpotifyNowPlaying />
            </div>
          </FadeInSection>

          {/* Terminal Widget */}
          <FadeInSection direction="up" delay={300}>
            <div className="mt-6 max-w-2xl mx-auto">
              <Terminal />
            </div>
          </FadeInSection>

          {/* Tech Stack */}
          <FadeInSection direction="up" delay={400}>
            <div className="mt-6 max-w-4xl mx-auto">
              <TechStack />
            </div>
          </FadeInSection>
        </div>
      </div>

      <div className="relative z-20 p-6"></div>
    </div>
  );
}
