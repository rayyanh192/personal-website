// app/blog/page.tsx
import React from "react";
import BlogPostCard from "@/components/BlogPostCard";
import { fetchSubstackPosts } from "@/lib/rss";
import { BlogPost } from "@/types/blog";

export const metadata = { title: "Blog" };
export const revalidate = 3600; // ISR: revalidate every hour

const SUBSTACK_URL = "https://rrayyannh.substack.com";

async function getPosts(): Promise<BlogPost[]> {
  try {
    return await fetchSubstackPosts(SUBSTACK_URL);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-mono text-4xl text-white">Blog</h1>
            <p className="mt-2 text-neutral-400">
              Thoughts, tutorials, and musings.
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-neutral-300 hover:text-white transition-colors"
              >
                [ subscribe on substack ]
              </a>
            </p>
          </div>

          {/* Posts */}
          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <BlogPostCard key={post.guid} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-8 text-center backdrop-blur-md">
              <p className="text-neutral-400 font-mono">
                No posts yet. Check back soon!
              </p>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-colors"
              >
                [ visit my substack ]
              </a>
            </div>
          )}

          {/* View all link */}
          {posts.length > 0 && (
            <div className="mt-8 text-center">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono transition-colors"
              >
                [ view all posts on substack ]
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
