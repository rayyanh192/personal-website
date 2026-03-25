// app/projects/page.tsx
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const hackathonWins = projects.filter(
    (p) => p.category === "hackathon" && p.award
  );
  const otherProjects = projects.filter(
    (p) => !(p.category === "hackathon" && p.award)
  );

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6 pb-12">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-mono text-4xl text-white">Projects</h1>
            <p className="mt-2 text-neutral-400">
              Things I&apos;ve built and hacked together.
            </p>
          </div>

          {/* Hackathon Wins Section */}
          {hackathonWins.length > 0 && (
            <section className="mb-12">
              <h2 className="font-mono text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-emerald-400">{"//"}</span> Hackathon Wins
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hackathonWins.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section>
              <h2 className="font-mono text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-neutral-500">{"//"}</span> More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
