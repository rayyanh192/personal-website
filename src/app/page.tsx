import React from "react";

export const metadata = { title: "Home" };

export default function Page() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">{/* keep space under TopBar */}
      {/* Overlay centered tile above CodexSplash (layout provides the animated background) */}
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6">
          <div className="mx-auto flex items-center gap-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <img
              src="/rayhome.png"
              alt="profile"
              className="w-56 h-56 rounded-full object-cover border-2 border-neutral-700/50"
            />

            <div>
              <h1 className="font-mono text-4xl text-white">About Me</h1>
              <p className="mt-2 text-neutral-200 max-w-xl">
                Hey there, my name is Rayyan. I am a risk taker, a roadrunner, and an entrepreneur. On the side, 
                I am a computer science and engineering student at Santa Clara University. I love building anything
                creative from cool ascii art to ML in robotics. Welcome, and say hi on your way out!

              </p>

              <p className="mt-4 text-sm text-neutral-400 font-mono">rayyanhussain2024@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive content area (below overlay) */}
      <div className="relative z-20 p-6">
        {/* Add interactive homepage content here when needed */}
      </div>
    </div>
  );
}