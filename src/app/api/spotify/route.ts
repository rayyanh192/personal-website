import { NextResponse } from "next/server";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken(): Promise<string> {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: String(refresh_token),
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Token fetch failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token as string;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const now = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    // 204 = nothing playing
    if (now.status === 204 || now.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const json = await now.json();

    // Non-track (e.g., ad/podcast)
    if (json?.currently_playing_type !== "track") {
      return NextResponse.json({ isPlaying: false });
    }

    const item = json.item;
    const data = {
      isPlaying: Boolean(json.is_playing),
      title: item?.name ?? "",
      album: item?.album?.name ?? "",
      artist: (item?.artists ?? []).map((a: any) => a.name).join(", "),
      albumImageUrl: item?.album?.images?.[0]?.url ?? "",
      songUrl: item?.external_urls?.spotify ?? "",
    };

    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    return NextResponse.json({ isPlaying: false });
  }
}