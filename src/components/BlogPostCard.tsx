import { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: Props) {
  const formattedDate = post.pubDate
    ? new Date(post.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-neutral-700/70 hover:bg-neutral-900/80"
    >
      <div className="flex gap-4">
        {/* Optional thumbnail */}
        {post.thumbnail && (
          <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-neutral-800/70">
            <img
              src={post.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Date */}
          {formattedDate && (
            <span className="text-xs text-neutral-500 font-mono">
              {formattedDate}
            </span>
          )}

          {/* Title */}
          <h3 className="mt-1 font-mono text-lg text-white group-hover:text-neutral-100 line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          {post.description && (
            <p className="mt-2 text-neutral-400 text-sm line-clamp-2">
              {post.description}
            </p>
          )}

          {/* Read more indicator */}
          <span className="mt-3 inline-block text-sm text-neutral-500 font-mono group-hover:text-neutral-400 transition-colors">
            Read on Substack &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
