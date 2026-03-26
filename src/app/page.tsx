"use client";

import React, { useEffect } from "react";
import SpotifyNowPlaying from "@/components/NowPlaying";
import Terminal from "@/components/Terminal/Terminal";
import TypewriterText from "@/components/TypewriterText";
import TechStack from "@/components/TechStack/TechStack";
import FadeInSection from "@/components/FadeInSection";
import GitHubActivity from "@/components/GitHubActivity";
import FeaturedAchievement from "@/components/FeaturedAchievement";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import FunFacts from "@/components/FunFacts";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] pb-20">
      {/* Spotify Widget - Fixed on left side */}
      <div className="fixed top-20 left-6 z-20 pointer-events-none hidden lg:block">
        <FadeInSection direction="left" delay={200}>
          <SpotifyNowPlaying />
        </FadeInSection>
      </div>

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
                    text="Hey there, my name is Rayyan. I am a sophomore cs&engineering student at Santa Clara University. I love building anything creative from cool ascii art to ML in robotics and winning hackathons. Welcome, and say hi on your way out!"
                    speed={12}
                    delay={800}
                  />
                </p>
                <a
                  href="mailto:rayyanhussain2024@gmail.com"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-neutral-700/50 text-neutral-200 font-mono text-sm hover:bg-white/10 hover:border-neutral-600 hover:text-white transition-all duration-300"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </FadeInSection>


          {/* Terminal Widget */}
          <FadeInSection direction="up" delay={300}>
            <div className="mt-6 max-w-2xl mx-auto">
              <Terminal />
            </div>
          </FadeInSection>

          {/* GitHub Activity & Featured Achievement - Side by side */}
          <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInSection direction="up" delay={400}>
              <GitHubActivity />
            </FadeInSection>
            <FadeInSection direction="up" delay={500}>
              <FeaturedAchievement />
            </FadeInSection>
          </div>

          {/* Currently Learning */}
          <FadeInSection direction="up" delay={600} immediate>
            <div className="mt-6 max-w-4xl mx-auto">
              <CurrentlyLearning />
            </div>
          </FadeInSection>

          {/* Fun Facts */}
          <FadeInSection direction="up" delay={700} immediate>
            <div className="mt-6 max-w-4xl mx-auto">
              <FunFacts />
            </div>
          </FadeInSection>

          {/* Tech Stack */}
          <FadeInSection direction="up" delay={800} immediate>
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
