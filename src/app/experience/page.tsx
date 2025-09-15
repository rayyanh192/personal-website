// app/experience/page.tsx
import React from "react";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">{/* keep space under TopBar */}
      {/* Overlay text that sits above the CodexSplash background (CodexSplash is rendered in root layout) */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-6">
          <h1 className="font-mono text-5xl text-white">Experience</h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl">
            I am a software engineer with experience in robotics, ML, and web development.
          </p>
        </div>
      </div> */}

      {/* Keep an (optional) content container with pointer-events enabled for interactive elements */}
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6">
          <div className="mx-auto flex items-center gap-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <img
              src="/rsl.png"
              alt="profile"
              className="w-56 h-56 rounded-full object-cover border-2 border-neutral-700/50"
            />

            <div>
              <h1 className="font-mono text-3xl text-white">Software Engineering Intern</h1>
              <h1 className="font-mono text-2xl text-gray">Robotics Systems Lab @ Santa Clara University</h1>
              <h1 className="font-mono text-1xl text-gray">July 2025 - Sept 2025</h1>
              <p className="mt-2 text-neutral-200 max-w-xl">
                Awarded Kuehler Grant to research multirobot adaptive-navigation with cluster-controlled drones.
                Implemented PID loops in ROS 2 that kept a two-drone autonomous formation within 0.1 m of desired paths.
                Designed a 24-camera OptiTrack testbed (0.2 mm accuracy) for real-time 3-D tracking of Crazyflie microdrones and adaptive-navigation experiments.
                Co-authored paper on 3-D cluster control; under review for the 2026 IEEE Aerospace Conference.
              </p>

              <p className="mt-4 text-sm text-neutral-400 font-mono">https://www.scu.edu/engineering/labs--research/labs/robotic-systems-lab/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
