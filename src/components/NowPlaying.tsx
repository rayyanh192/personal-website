"use client";
import React from "react";
import Image from "next/image"; // ⬅️ add this

type NowPlaying = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

export default function SpotifyNowPlaying() {
  const [data, setData] = React.useState<NowPlaying | null>(null);

  React.useEffect(() => {
    let active = true;
    const fetchNow = async () => {
      try {
        const res = await fetch("/api/spotify", { cache: "no-store" });
        const json: NowPlaying = await res.json();
        if (active) setData(json);
      } catch {
        if (active) setData({ isPlaying: false });
      }
    };
    fetchNow();
    const id = setInterval(fetchNow, 25000);
    return () => { active = false; clearInterval(id); };
  }, []);

  const playing = data?.isPlaying === true;

  return (
    <div className="pointer-events-auto w-full lg:w-1/2 px-6">
      {/* make relative + add right padding so badge doesn't overlap text */}
      <div className="relative pr-10 mx-auto flex items-center gap-4 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {/* Album art or placeholder */}
        <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-neutral-800/70">
          {playing && data?.albumImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.albumImageUrl} alt="album cover" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full grid place-items-center text-neutral-400 font-mono text-xs">
              {/* No Art */}
            </div>
          )}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wide">
              {playing ? "Listening Now" : "Not Playing"}
            </span>
          </div>

          <h2 className="mt-1 font-mono text-lg text-white truncate">
            {playing ? data?.title : "—"}
          </h2>
          <p className="text-neutral-300 truncate">{playing ? data?.artist : "—"}</p>
          <p className="text-neutral-400 text-sm truncate">{playing ? data?.album : "—"}</p>
        </div>

        <a
        href="https://open.spotify.com/user/si0gyo1z4i2coemcet8fxc54q"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open my Spotify profile"
        className="absolute bottom-3 right-3 z-20"
        title="Open my Spotify"
        >
        <Image
            src="/spotify.png"
            alt=""
            width={28}
            height={28}
            className="opacity-80 hover:opacity-100 transition-opacity select-none"
        />
        </a>
      </div>
    </div>
  );
}