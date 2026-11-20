import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";

export const runtime = "nodejs";
const DATA_PATH = "src/data/academy-playlists.json";

type DraftVideo = {
  videoId: string; title: string; description: string; channel: string;
  duration: string; thumbnailUrl: string; youtubeUrl: string; position: number;
};
type SavedVideo = {
  id: string; title: string; description: string; summary: string; channel: string;
  youtubeUrl: string; thumbnailUrl: string; category: string;
  level: "Iniciante" | "Intermediário" | "Avançado"; duration: string;
  language: string; topics: string[]; prerequisites: string[]; practicalTask: string;
};

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 });
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY || "contatomateus81-design/nyx-classcode";
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) return NextResponse.json({ error: "Configure GITHUB_TOKEN nas variáveis da Vercel." }, { status: 503 });

  try {
    const body = await request.json();
    const videos = Array.isArray(body.videos) ? body.videos as DraftVideo[] : [];
    const category = typeof body.category === "string" ? body.category : "";
    const level = body.level;
    const playlistTitle = typeof body.playlistTitle === "string" ? body.playlistTitle.trim() : "";
    if (!videos.length || videos.length > 200 || !playlistTitle || !category ||
      !["Iniciante", "Intermediário", "Avançado"].includes(level)) {
      return NextResponse.json({ error: "Revise a playlist, a categoria e o nível antes de publicar." }, { status: 400 });
    }
    if (videos.some((v) => typeof v.videoId !== "string" || !/^[\w-]{11}$/.test(v.videoId))) {
      return NextResponse.json({ error: "A lista contém um identificador de vídeo inválido." }, { status: 400 });
    }

    const apiBase = "https://api.github.com/repos/" + repository + "/contents/" + DATA_PATH;
    const headers = { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    const existingResponse = await fetch(apiBase + "?ref=" + encodeURIComponent(branch), { headers, cache: "no-store" });
    let existing: SavedVideo[] = [];
    let sha: string | undefined;
    if (existingResponse.ok) {
      const file = await existingResponse.json();
      sha = file.sha;
      existing = JSON.parse(Buffer.from(file.content, "base64").toString("utf8"));
      if (!Array.isArray(existing)) existing = [];
    } else if (existingResponse.status !== 404) {
      return NextResponse.json({ error: "Não foi possível ler o catálogo no GitHub." }, { status: 502 });
    }

    const known = new Set(existing.map((item) => item.youtubeUrl));
    const additions: SavedVideo[] = videos.map((video) => ({
      id: "yt-" + video.videoId,
      title: video.title,
      description: "Aula da playlist: " + playlistTitle,
      summary: "Prévia didática ainda não revisada. Consulte o vídeo original para conhecer o conteúdo completo.",
      channel: video.channel,
      youtubeUrl: video.youtubeUrl,
      thumbnailUrl: video.thumbnailUrl,
      category,
      level,
      duration: video.duration,
      language: "Português",
      topics: [category],
      prerequisites: [],
      practicalTask: "Após assistir, anote os principais conceitos e experimente aplicá-los em um pequeno projeto.",
    })).filter((item) => !known.has(item.youtubeUrl));

    const merged = [...existing, ...additions];
    const content = Buffer.from(JSON.stringify(merged, null, 2), "utf8").toString("base64");
    const writeResponse = await fetch(apiBase, {
      method: "PUT", headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "content: adicionar playlist " + playlistTitle,
        content, branch, ...(sha ? { sha } : {}),
      }),
    });
    if (!writeResponse.ok) {
      const error = await writeResponse.json();
      return NextResponse.json({ error: error.message || "O GitHub recusou a gravação do catálogo." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, added: additions.length, duplicates: videos.length - additions.length, total: merged.length });
  } catch {
    return NextResponse.json({ error: "Não foi possível publicar os vídeos no catálogo." }, { status: 500 });
  }
}
