import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const repository = process.env.GITHUB_REPOSITORY || "contatomateus81-design/nyx-classcode";
  const branch = process.env.GITHUB_BRANCH || "main";
  const url = "https://raw.githubusercontent.com/" + repository + "/" + encodeURIComponent(branch) + "/src/data/academy-playlists.json";
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return NextResponse.json([]);
    const data = await response.json();
    return NextResponse.json(Array.isArray(data) ? data : []);
  } catch {
    return NextResponse.json([]);
  }
}
