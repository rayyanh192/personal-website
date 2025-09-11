// app/blog/page.tsx
import React from "react";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">{/* keep space under TopBar */}
      {/* Overlay text that sits above the CodexSplash background (CodexSplash is rendered in root layout) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-6">
          <h1 className="font-mono text-5xl text-white">Blog</h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl">
            I be writing hella blogs.
          </p>
        </div>
      </div>

      {/* Keep an (optional) content container with pointer-events enabled for interactive elements */}
      <div className="relative z-20 p-6">
        {/* Add interactive blog content here (post list, cards, etc.) */}
      </div>
    </div>
  );
}
