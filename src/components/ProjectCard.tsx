"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

// Image paths for sponsor logos
const SponsorLogos: Record<string, string> = {
  nvidia: "/nvidia.png",
  antler: "/antler.png",
};

export default function ProjectCard({ project }: Props) {
  const isFeatured = project.featured;

  return (
    <div className={`group relative rounded-2xl bg-neutral-900/70 border p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] ${
      isFeatured
        ? "border-emerald-500/50 hover:border-emerald-400/70"
        : "border-neutral-800/70 hover:border-neutral-700/70"
    }`}>
      {/* Featured glow effect */}
      {isFeatured && (
        <>
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
        </>
      )}

      {/* Award Badge - larger and more prominent for featured */}
      {project.award && (
        <div className={`absolute -top-3 -right-3 px-4 py-1.5 rounded-full border font-mono z-10 ${
          isFeatured
            ? "bg-amber-500 border-amber-400 text-white text-sm font-semibold shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            : "bg-amber-500 border-amber-400 text-white text-xs font-semibold"
        }`}>
          {project.award}
        </div>
      )}

      {/* Featured layout: image left, content right */}
      {isFeatured && project.imageUrl ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <div className="rounded-xl overflow-hidden border border-emerald-500/30 inline-block">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-mono text-2xl text-white">{project.title}</h3>

            {project.hackathonName && (
              <p className="font-mono mt-1 text-emerald-400/80 text-sm">
                {project.hackathonName}
              </p>
            )}

            {project.teamMembers && project.teamMembers.length > 0 && (
              <p className="text-xs text-neutral-500 mt-1 font-mono">
                Team: {project.teamMembers.join(", ")}
              </p>
            )}

            <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between">
              <div className="flex gap-3">
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

              {project.sponsors && project.sponsors.length > 0 && (
                <div className="flex items-center gap-4">
                  {project.sponsors.map((sponsor) => (
                    <img
                      key={sponsor.name}
                      src={SponsorLogos[sponsor.logo]}
                      alt={sponsor.name}
                      title={sponsor.name}
                      className={`w-auto opacity-70 hover:opacity-100 transition-opacity ${
                        sponsor.logo === "nvidia" ? "h-12" : "h-9 -translate-y-1.5"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Non-featured layout: stacked */}
          {project.imageUrl && (
            <div className="mb-4 rounded-xl overflow-hidden border border-neutral-800/70">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </div>
          )}

          <h3 className="font-mono text-xl text-white">{project.title}</h3>

          {project.hackathonName && (
            <p className="font-mono mt-1 text-neutral-400 text-sm">
              {project.hackathonName}
            </p>
          )}

          {project.teamMembers && project.teamMembers.length > 0 && (
            <p className="text-xs text-neutral-500 mt-1 font-mono">
              Team: {project.teamMembers.join(", ")}
            </p>
          )}

          <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-mono bg-neutral-800/50 text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
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

            {project.sponsors && project.sponsors.length > 0 && (
              <div className="flex items-center gap-4">
                {project.sponsors.map((sponsor) => (
                  <img
                    key={sponsor.name}
                    src={SponsorLogos[sponsor.logo]}
                    alt={sponsor.name}
                    title={sponsor.name}
                    className={`w-auto opacity-70 hover:opacity-100 transition-opacity ${
                      sponsor.logo === "nvidia" ? "h-12" : "h-9 -translate-y-1"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
