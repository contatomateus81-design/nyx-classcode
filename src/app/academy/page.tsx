"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, CheckCircle2,
  Clock3, Download, ExternalLink, FileUp, Filter, GraduationCap,
  PlayCircle, Search, Sparkles, Youtube
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { videoCategories, videoCourses as initialVideoCourses } from "@/data/video-courses";

const STORAGE_KEY = "nyx-classcode:academy-progress:v1";

type ProgressFile = {
  version: 1;
  completed: string[];
};

export default function AcademyPage() {
  const [courses, setCourses] = useState(initialVideoCourses);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [level, setLevel] = useState("Todos");
  const [completed, setCompleted] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [notice, setNotice] = useState("");
  const importRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/academy/courses", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : [])
      .then((data: unknown) => {
        if (Array.isArray(data)) setCourses(data);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCompleted(parsed.filter((item): item is string => typeof item === "string"));
        } else if (parsed && typeof parsed === "object" && "completed" in parsed && Array.isArray(parsed.completed)) {
          setCompleted(parsed.completed.filter((item): item is string => typeof item === "string"));
        }
      }
    } catch {
      setNotice("Não foi possível ler o progresso salvo neste navegador.");
    } finally {
      setStorageReady(true);
    }
  }, []);

  const filteredCourses = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return courses.filter((course) => {
      const matchesCategory = category === "Todos" || course.category === category || course.topics.includes(category);
      const matchesLevel = level === "Todos" || course.level === level;
      const searchable = [course.title, course.description, course.summary, course.channel, course.category, ...course.topics].join(" ").toLocaleLowerCase("pt-BR");
      return matchesCategory && matchesLevel && (!normalized || searchable.includes(normalized));
    });
  }, [query, category, level, courses]);

  function toggleCompleted(id: string) {
    const next = completed.includes(id) ? completed.filter((item) => item !== id) : [...completed, id];
    setCompleted(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setNotice(next.includes(id) ? "Aula marcada como concluída neste dispositivo." : "Aula removida do seu progresso.");
    } catch {
      setNotice("O navegador não permitiu salvar o progresso.");
    }
  }

  function exportProgress() {
    const payload: ProgressFile = { version: 1, completed };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "classcode-academy-progresso.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice("Arquivo de progresso preparado para exportação.");
  }

  async function importProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      if (!parsed || typeof parsed !== "object" || !("completed" in parsed) || !Array.isArray(parsed.completed) || !parsed.completed.every((item) => typeof item === "string")) {
        throw new Error("Formato inválido");
      }
      const imported = [...new Set(parsed.completed as string[])];
      setCompleted(imported);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
      setNotice("Progresso importado com sucesso neste dispositivo.");
    } catch {
      setNotice("Esse arquivo não parece ser um backup válido do ClassCode Academy.");
    } finally {
      event.target.value = "";
    }
  }

  const completedCount = courses.filter((course) => completed.includes(course.id)).length;

  return (
    <>
      <SiteHeader />
      <main className="academy-page">
        <section className="academy-hero">
          <div className="container academy-hero-inner">
            <Link href="/" className="academy-back"><ArrowLeft size={15} /> Voltar à biblioteca</Link>
            <div className="academy-hero-grid">
              <div className="academy-hero-copy">
                <div className="eyebrow"><span className="eyebrow-dot" /> CLASSCODE ACADEMY</div>
                <h1>Aprenda vendo.<br /><span>Construa fazendo.</span></h1>
                <p>Uma curadoria de cursos e tutoriais gratuitos em vídeo, com resumos, objetivos de aprendizagem e desafios para levar o conteúdo até seus próprios projetos.</p>
                <div className="academy-hero-actions">
                  <a className="button button-primary" href="#catalogo">Explorar aulas <ArrowRight size={16} /></a>
                  <span className="academy-free-note"><CheckCircle2 size={15} /> Conteúdo gratuito e atribuído aos criadores</span>
                </div>
              </div>
              <div className="academy-hero-art" aria-hidden="true">
                <div className="academy-art-glow" />
                <div className="academy-art-card"><Youtube size={39} /><span>ASSISTA</span><strong>ENTENDA</strong><i>PRATIQUE</i></div>
                <div className="academy-art-orbit orbit-a" /><div className="academy-art-orbit orbit-b" />
                <Sparkles className="academy-art-spark" size={25} />
              </div>
            </div>
          </div>
        </section>

        <section className="academy-overview">
          <div className="container academy-overview-inner">
            <div><strong>{courses.length.toString().padStart(2, "0")}</strong><span>aulas catalogadas</span></div>
            <div><strong>{completedCount.toString().padStart(2, "0")}</strong><span>concluídas neste dispositivo</span></div>
            <div><strong>100%</strong><span>links para os criadores originais</span></div>
          </div>
        </section>

        <section className="container academy-catalog section-space" id="catalogo">
          <div className="section-heading">
            <div><div className="eyebrow">SUA PRÓXIMA DESCOBERTA</div><h2>Catálogo de <span>aprendizado</span></h2></div>
            <p>Encontre uma aula, confira a prévia do conteúdo e vá direto ao vídeo original no YouTube. Depois, volte para registrar seu progresso.</p>
          </div>

          <div className="academy-tools">
            <label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar curso, tecnologia ou canal..." aria-label="Buscar cursos" /></label>
            <label className="academy-level-filter"><Filter size={15} /><select value={level} onChange={(event) => setLevel(event.target.value)} aria-label="Filtrar por nível"><option>Todos</option><option>Iniciante</option><option>Intermediário</option><option>Avançado</option></select></label>
          </div>

          <div className="category-list" aria-label="Filtrar por categoria">
            {videoCategories.map((item) => <button key={item} className={category === item ? "category-chip selected" : "category-chip"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="academy-course-grid">
              {filteredCourses.map((course) => {
                const isCompleted = completed.includes(course.id);
                return (
                  <article className="academy-course-card" key={course.id}>
                    <a className="academy-course-thumb" href={course.youtubeUrl} target="_blank" rel="noreferrer" aria-label={`Abrir ${course.title} no YouTube`}>
                      <img src={course.thumbnailUrl} alt="" loading="lazy" />
                      <span><PlayCircle size={34} /></span>
                    </a>
                    <div className="academy-course-body">
                      <div className="academy-course-meta"><span>{course.category}</span><span>{course.level}</span></div>
                      <h3>{course.title}</h3>
                      <p className="academy-course-channel">{course.channel}{course.duration ? ` · ${course.duration}` : ""}</p>
                      <p>{course.description}</p>
                      <div className="academy-summary"><div><Sparkles size={15} /> O que você vai aprender</div><p>{course.summary}</p></div>
                      <div className="academy-topics">{course.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
                      <div className="academy-practice"><strong>Desafio sugerido</strong><p>{course.practicalTask}</p></div>
                      <div className="academy-course-actions">
                        <a className="button button-primary" href={course.youtubeUrl} target="_blank" rel="noreferrer">Assistir no YouTube <ExternalLink size={15} /></a>
                        <button className={isCompleted ? "academy-done is-done" : "academy-done"} disabled={!storageReady} onClick={() => toggleCompleted(course.id)}>{isCompleted ? <Check size={16} /> : <CheckCircle2 size={16} />}{isCompleted ? "Concluída" : "Marcar concluída"}</button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="academy-empty">
              <div className="academy-empty-icon"><GraduationCap size={27} /></div>
              <div className="eyebrow">CURADORIA EM PREPARAÇÃO</div>
              <h3>{courses.length === 0 ? "A primeira seleção está sendo preparada." : "Nenhuma aula encontrada."}</h3>
              <p>{courses.length === 0 ? "A estrutura da Academy já está pronta. Os cursos serão adicionados após conferirmos o vídeo, o canal, a descrição e a precisão do resumo — sem cadastrar links ou informações inventadas." : "Experimente outro termo ou remova os filtros para ver mais resultados."}</p>
              {courses.length > 0 && <button className="academy-reset" onClick={() => { setQuery(""); setCategory("Todos"); setLevel("Todos"); }}>Limpar filtros</button>}
            </div>
          )}
        </section>

        <section className="academy-study-section">
          <div className="container academy-study-grid">
            <div><div className="eyebrow">UM CICLO DE APRENDIZADO</div><h2>Não pare no <span>play.</span></h2><p>A proposta é transformar cada vídeo em um ponto de partida: entenda a ideia, teste no seu ambiente e adapte ao projeto que está construindo.</p></div>
            <div className="academy-study-steps">
              <div><span>01</span><div><strong>Descubra</strong><small>Leia a prévia e confira os pré-requisitos.</small></div><BookOpen size={19} /></div>
              <div><span>02</span><div><strong>Assista</strong><small>O vídeo abre no canal original do YouTube.</small></div><Youtube size={19} /></div>
              <div><span>03</span><div><strong>Experimente</strong><small>Faça o desafio com seu próprio código.</small></div><GraduationCap size={19} /></div>
              <div><span>04</span><div><strong>Acompanhe</strong><small>Marque a aula e acompanhe seu progresso local.</small></div><CheckCircle2 size={19} /></div>
            </div>
          </div>
        </section>

        <section className="container academy-progress section-space">
          <div className="academy-progress-panel">
            <div className="academy-progress-copy"><div className="eyebrow">SEU APRENDIZADO, SEU CONTROLE</div><h2>Seu progresso fica <span>com você.</span></h2><p>As aulas concluídas são salvas somente neste navegador, sem conta e sem banco de dados. Exporte um arquivo para transferir seu progresso a outro dispositivo.</p></div>
            <div className="academy-progress-actions">
              <button className="button button-primary" onClick={exportProgress}><Download size={16} /> Exportar progresso</button>
              <button className="button button-ghost" onClick={() => importRef.current?.click()}><FileUp size={16} /> Importar progresso</button>
              <input ref={importRef} type="file" accept="application/json,.json" hidden onChange={importProgress} />
              <small><Clock3 size={13} /> {storageReady ? "Progresso local carregado" : "Carregando progresso..."}</small>
              {notice && <small role="status" className="academy-notice">{notice}</small>}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><Link href="/" className="brand footer-brand"><span className="brand-icon" aria-hidden="true" /><span>nyx<span className="brand-light">class</span>code</span></Link><span>Aprender construindo. © {new Date().getFullYear()} NYX.</span><Link href="/#biblioteca">Biblioteca <ArrowUpRight size={14} /></Link></div></footer>
    </>
  );
}
