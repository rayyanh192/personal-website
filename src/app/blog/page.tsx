import React from "react";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-6">
          <h1 className="font-mono text-5xl text-white">Blogs</h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl">
            TBD.
          </p>
        </div>
      </div>
      <div className="relative z-20 p-6">
      </div>
    </div>
  );
}
