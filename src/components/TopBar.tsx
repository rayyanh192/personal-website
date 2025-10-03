// components/TopBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname() || "/";

  const linkBase =
    "text-xl px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 ring-neutral-500 font-mono text-sm tracking-wide";
  const item = (href: string, label: string, asciiWrap: (s: string) => string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`${linkBase} ${active ? "text-white" : "text-neutral-300 hover:text-white"}`}
      >
        {asciiWrap(label)}
      </Link>
    );
  };

  return (
    <div className="fixed top-0 inset-x-0 z-20 h-15">
      <nav
        className="
          mx-auto mt-3 mb-2 max-w-6xl
          rounded-2xl border
          bg-neutral-900/70
          border-neutral-800/70
          shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]
          backdrop-blur
          h-full
        "
      >
        <div className="flex items-center gap-2 px-4 py-2 h-full">
          {/* left group */}
          <div className="flex items-center gap-2">
            {item("/", "home", (s) => `[ ${s} ]`)}
            <span className="text-neutral-600 select-none">::</span>
            {item("/experience", "experience", (s) => `[ ${s} ]`)}
            {item("/blog", "blog", (s) => `[ ${s} ]`)}
          </div>
        </div>
      </nav>

      {/* fixed icons at top-right of viewport (outside the nav) */}
      <div className="fixed top-4 right-4 z-30 flex items-center gap-3">
        <a href="https://github.com/rayyanh192" aria-label="GitHub" className="p-1 rounded hover:bg-white/5">
          <img src="/github.png" alt="GitHub" className="w-6 h-6" />
        </a>

        <a href="https://www.linkedin.com/in/rayyan-h/" aria-label="LinkedIn" className="p-1 rounded hover:bg-white/5">
          <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>

        <a href="#" aria-label="Resume" className="p-1 rounded hover:bg-white/5">
          <img src="/resume.png" alt="Resume" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}