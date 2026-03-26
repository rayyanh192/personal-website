"use client";

import React, { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaStar, FaCodeBranch } from "react-icons/fa";

type GitHubUser = {
  public_repos: number;
  followers: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
};

const GITHUB_USERNAME = "rayyanh192";

// Fallback data in case of rate limiting
const fallbackData = {
  user: { public_repos: 15, followers: 10 },
  repos: [
    {
      name: "Power2ThePeople",
      description: "AI-powered legal rights assistant",
      stargazers_count: 5,
      forks_count: 1,
      html_url: "https://github.com/rayyanh192/Power2ThePeople",
      language: "Python",
    },
    {
      name: "DevAngel",
      description: "Automated incident response platform",
      stargazers_count: 3,
      forks_count: 0,
      html_url: "https://github.com/rayyanh192/DevAngel",
      language: "Python",
    },
  ],
};

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Swift: "#F05138",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export default function GitHubActivity() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Rate limited");
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch {
        // Use fallback data on error
        setError(true);
        setUser(fallbackData.user);
        setRepos(fallbackData.repos as GitHubRepo[]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <SiGithub className="text-2xl text-white" />
          <h3 className="font-mono text-lg text-white">GitHub Activity</h3>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-white transition-colors font-mono"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      {/* Stats */}
      {!loading && user && (
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="font-mono text-white">{user.public_repos}</span>
            <span className="text-sm">repos</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="font-mono text-white">{user.followers}</span>
            <span className="text-sm">followers</span>
          </div>
          {error && (
            <span className="text-xs text-neutral-500">(cached)</span>
          )}
        </div>
      )}

      {/* Recent repos */}
      <div className="space-y-2">
        <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-2">
          Recent Repos
        </p>
        {loading ? (
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-16 rounded-xl bg-neutral-800/50 animate-pulse"
              />
            ))}
          </div>
        ) : (
          repos.slice(0, 2).map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-xl bg-neutral-800/30 border border-neutral-700/30 hover:border-neutral-600/50 hover:bg-neutral-800/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-white truncate">{repo.name}</p>
                  {repo.description && (
                    <p className="text-sm text-neutral-400 truncate">
                      {repo.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 text-xs text-neutral-500">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          languageColors[repo.language] || "#6e7681",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
