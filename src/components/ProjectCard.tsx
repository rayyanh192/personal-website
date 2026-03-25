"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group relative rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-neutral-700/70 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
      {/* Award Badge */}
      {project.award && (
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-mono">
          {project.award}
        </div>
      )}

      {/* Optional thumbnail */}
      {project.imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden border border-neutral-800/70">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-mono text-xl text-white">{project.title}</h3>

      {/* Hackathon name */}
      {project.hackathonName && (
        <p className="text-sm text-neutral-400 font-mono mt-1">
          {project.hackathonName}
        </p>
      )}

      {/* Description */}
      <p className="mt-2 text-neutral-300 text-sm">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded bg-neutral-800/50 text-neutral-400 text-xs font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-mono transition-colors"
          >
            [ demo ]
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-mono transition-colors"
          >
            [ code ]
          </a>
        )}
      </div>
    </div>
  );
}
