"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink, Eye, EyeOff, LoaderCircle, LogOut, Plus, ShieldCheck, Youtube } from "lucide-react";

type Video = {
  videoId: string; position: number; title: string; description: string;
  channel: string; duration: string; thumbnailUrl: string; youtubeUrl: string;
};

const categories = ["Frontend", "Backend", "Full Stack", "JavaScript", "Python", "Inteligência artificial", "Ferramentas", "Design"];

export default function AcademyAdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [url, setUrl] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [level, setLevel] = useState("Iniciante");
  const [videos, setVideos] = useState<Video[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [busy, setBusy] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => { fetch("/api/admin/auth").then((response) => response.json()).then((data) => setAuthenticated(Boolean(data.authenticated))).catch(() => undefined); }, []);

  async function login(event: React.FormEvent) {
    event.preventDefault(); setBusy("login"); setError("");
    try {
      const response = await fetch("/api/admin/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível entrar.");
      setAuthenticated(true); setUsername(""); setPassword(""); setNotice("Acesso administrativo liberado.");
    } catch (e) { setError(e instanceof Error ? e.message : "Erro ao entrar."); }
    finally { setBusy(""); }
  }

  async function preview(event: React.FormEvent) {
    event.preventDefault(); setBusy("preview"); setError(""); setNotice(""); setVideos([]); setSelected([]);
    try {
      const response = await fetch("/api/playlist-preview", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível ler a playlist.");
      setVideos(data.videos); setPlaylistTitle(data.playlistTitle || "Nova playlist");
      setSelected(data.videos.map((video: Video) => video.videoId));
      setNotice(data.truncated ? "Prévia carregada. Por segurança, foram limitados os primeiros 200 vídeos." : data.total + " vídeos encontrados na ordem original.");
    } catch (e) { setError(e instanceof Error ? e.message : "Erro ao consultar o YouTube."); }
    finally { setBusy(""); }
  }

  async function publish() {
    const chosen = videos.filter((video) => selected.includes(video.videoId));
    if (!chosen.length) { setError("Selecione pelo menos um vídeo."); return; }
    setBusy("publish"); setError(""); setNotice("");
    try {
      const response = await fetch("/api/admin/playlist/publish", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ videos: chosen, category, level, playlistTitle }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível publicar.");
      setNotice(data.added + " vídeos adicionados ao catálogo. " + data.duplicates + " duplicados ignorados. Total: " + data.total + ".");
      setVideos([]); setSelected([]); setUrl("");
    } catch (e) { setError(e instanceof Error ? e.message : "Erro ao salvar no GitHub."); }
    finally { setBusy(""); }
  }

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false); setVideos([]); setSelected([]); setNotice("Sessão encerrada.");
    router.refresh();
  }

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <a href="/academy" className="admin-back"><ArrowLeft size={16} /> Voltar à Academy</a>
        <header className="admin-header">
          <div className="admin-mark"><ShieldCheck size={24} /></div>
          <div><span className="admin-eyebrow">CLASSCODE · ÁREA RESTRITA</span><h1>Painel da <span>Academy</span></h1><p>Gerencie as playlists e o catálogo de vídeo-aulas.</p></div>
          {authenticated && <button className="admin-logout" onClick={logout}><LogOut size={16} /> Sair</button>}
        </header>

        {!authenticated ? (
          <form className="admin-panel admin-login" onSubmit={login}>
            <h2>Acesso administrativo</h2><p>Entre com seu usuário e senha para continuar.</p>
            <label>Usuário<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required /></label>
            <label>Senha<div className="admin-password"><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
            <button className="admin-primary" disabled={busy === "login"}>{busy === "login" ? <LoaderCircle className="admin-spin" size={17} /> : <ShieldCheck size={17} />} Entrar</button>
          </form>
        ) : (
          <section className="admin-panel">
            <div className="admin-section-title"><div><span className="admin-eyebrow">IMPORTAÇÃO DE CONTEÚDO</span><h2>Adicionar playlist</h2><p>Cole o link público. A lista será carregada na ordem original para você revisar antes de publicar.</p></div><Youtube size={30} /></div>
            <form className="admin-import-form" onSubmit={preview}>
              <label>Link da playlist do YouTube<input type="url" placeholder="https://www.youtube.com/playlist?list=..." value={url} onChange={(e) => setUrl(e.target.value)} required /></label>
              <button className="admin-primary" disabled={busy === "preview"}>{busy === "preview" ? <LoaderCircle className="admin-spin" size={17} /> : <Plus size={17} />} Buscar vídeos</button>
            </form>
            {videos.length > 0 && <>
              <div className="admin-options">
                <label>Nome da trilha<input value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)} /></label>
                <label>Categoria<select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>Nível<select value={level} onChange={(e) => setLevel(e.target.value)}><option>Iniciante</option><option>Intermediário</option><option>Avançado</option></select></label>
              </div>
              <div className="admin-list-heading"><div><h3>Vídeos encontrados</h3><p>{selected.length} de {videos.length} selecionados · ordem original</p></div><button type="button" onClick={() => setSelected(selected.length === videos.length ? [] : videos.map((v) => v.videoId))}>{selected.length === videos.length ? "Desmarcar todos" : "Selecionar todos"}</button></div>
              <div className="admin-video-list">{videos.map((video, index) => <label className="admin-video" key={video.videoId}>
                <input type="checkbox" checked={selected.includes(video.videoId)} onChange={(e) => setSelected((current) => e.target.checked ? [...current, video.videoId] : current.filter((id) => id !== video.videoId))} />
                <span className="admin-video-number">{String(index + 1).padStart(2, "0")}</span>
                <img src={video.thumbnailUrl} alt="" />
                <span className="admin-video-info"><strong>{video.title}</strong><small>{video.channel}{video.duration ? " · " + video.duration : ""}</small></span>
                <a href={video.youtubeUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} aria-label={"Abrir " + video.title + " no YouTube"}><ExternalLink size={17} /></a>
              </label>)}</div>
              <button className="admin-primary admin-publish" onClick={publish} disabled={busy === "publish"}>{busy === "publish" ? <LoaderCircle className="admin-spin" size={17} /> : <CheckCircle2 size={17} />} Publicar {selected.length} vídeos no catálogo</button>
            </>}
          </section>
        )}
        {notice && <p className="admin-notice" role="status">{notice}</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}
        <p className="admin-footnote">O link não concede acesso por si só. O painel exige autenticação validada no servidor.</p>
      </div>
    </main>
  );
}
