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
    <div className="pointer-events-auto group/card">
      {/* Glow effect - only on hover */}
      <div className="absolute -inset-2 bg-emerald-500/0 group-hover/card:bg-emerald-500/20 rounded-3xl blur-2xl transition-all duration-500 pointer-events-none opacity-0 group-hover/card:opacity-100" />
      <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover/card:from-emerald-500/10 group-hover/card:via-emerald-500/5 group-hover/card:to-emerald-500/20 rounded-2xl blur-xl transition-all duration-500 pointer-events-none" />

      <div className="relative flex flex-col items-center gap-3 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 group-hover/card:border-emerald-500/30 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group-hover/card:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_rgba(30,215,96,0.2)] backdrop-blur-md w-36 transition-all duration-300">
        {/* Album art or placeholder */}
        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-neutral-800/70">
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
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wide">
              {playing ? "Playing" : "Offline"}
            </span>
          </div>

          <h2 className="mt-1 font-mono text-xs text-white truncate">
            {playing ? data?.title : "—"}
          </h2>
          <p className="text-neutral-300 text-xs truncate">{playing ? data?.artist : "—"}</p>
        </div>

        <a
          href="https://open.spotify.com/user/si0gyo1z4i2coemcet8fxc54q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open my Spotify profile"
          className="mt-1 flex flex-col items-center gap-1"
          title="Open my Spotify"
        >
          <Image
            src="/spotify.png"
            alt=""
            width={28}
            height={28}
            className="opacity-60 group-hover/card:opacity-100 transition-all duration-300 select-none group-hover/card:drop-shadow-[0_0_8px_rgba(30,215,96,0.6)]"
          />
          <span className="font-mono text-[8px] text-emerald-400 text-center leading-tight opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-1 group-hover/card:translate-y-0 drop-shadow-[0_0_10px_rgba(30,215,96,0.8)]">
            {">"} check out my<br />music taste! {"<"}
          </span>
        </a>
      </div>
    </div>
  );
}