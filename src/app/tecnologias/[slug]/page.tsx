"use client";

import Link from "next/link";
import { use, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Lightbulb, ListChecks } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { technologies } from "@/data/catalog";
import { getLesson } from "@/data/lessons";

export default function TechnologyLessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const technology = technologies.find((item) => item.slug === slug);
  const lesson = technology ? getLesson(technology) : null;
  const [completed, setCompleted] = useState(false);

  if (!technology || !lesson) {
    return (
      <>
        <SiteHeader />
        <main className="container lesson-not-found">
          <h1>Conteúdo não encontrado</h1>
          <p>Esse assunto ainda não possui uma página de estudo.</p>
          <Link className="inline-link" href="/#biblioteca">Voltar à biblioteca <ArrowRight size={16} /></Link>
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="lesson-page">
        <div className="container">
          <Link href="/#biblioteca" className="lesson-back"><ArrowLeft size={16} /> Biblioteca</Link>
          <header className="lesson-hero">
            <div className="eyebrow">{technology.category.toUpperCase()} · {technology.difficulty.toUpperCase()}</div>
            <h1>{technology.title}</h1>
            <p>{lesson.intro}</p>
            <div className="lesson-objective"><Lightbulb size={19} /><div><strong>Objetivo desta aula</strong><span>{lesson.objective}</span></div></div>
          </header>

          <div className="lesson-layout">
            <aside className="lesson-sidebar">
              <div className="lesson-sidebar-card">
                <span className="lesson-sidebar-label">NESTA AULA</span>
                <a href="#pre-requisitos">Pré-requisitos</a>
                <a href="#fundamentos">Fundamentos</a>
                <a href="#construcao">Roteiro de construção</a>
                <a href="#experimento">Experimento</a>
                <a href="#desafio">Desafio prático</a>
                <a href="#glossario">Glossário</a>
              </div>
            </aside>

            <article className="lesson-content">
              <section id="pre-requisitos" className="lesson-section">
                <div className="lesson-section-heading"><span className="lesson-section-icon"><BookOpen size={18} /></span><div><span className="eyebrow">ANTES DE COMEÇAR</span><h2>O que você precisa saber</h2></div></div>
                <ul className="lesson-check-list">{lesson.prerequisites.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
              </section>

              <section id="fundamentos" className="lesson-section">
                <div className="lesson-section-heading"><span className="lesson-section-icon"><Lightbulb size={18} /></span><div><span className="eyebrow">ENTENDA A BASE</span><h2>Fundamentos essenciais</h2></div></div>
                <div className="lesson-concepts">{lesson.fundamentals.map((item, index) => <div className="lesson-concept" key={item.title}><span className="lesson-concept-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></div>)}</div>
              </section>

              <section id="construcao" className="lesson-section">
                <div className="lesson-section-heading"><span className="lesson-section-icon"><ListChecks size={18} /></span><div><span className="eyebrow">MÃO NA MASSA</span><h2>Roteiro de construção</h2></div></div>
                <ol className="lesson-roadmap">{lesson.roadmap.map((step) => <li key={step}><span>{step}</span></li>)}</ol>
              </section>

              <section id="experimento" className="lesson-section">
                <div className="lesson-section-heading"><span className="lesson-section-icon"><BookOpen size={18} /></span><div><span className="eyebrow">VEJA EM AÇÃO</span><h2>{lesson.experiment.title}</h2></div></div>
                <p className="lesson-experiment-description">{lesson.experiment.description}</p>
                {lesson.experiment.code && <pre className="lesson-code"><code>{lesson.experiment.code}</code></pre>}
              </section>

              <section id="desafio" className="lesson-section lesson-challenge">
                <div className="eyebrow">SEU PRÓXIMO PASSO</div>
                <h2>Desafio prático</h2>
                <p>{lesson.challenge}</p>
                <button className={completed ? "lesson-complete is-complete" : "lesson-complete"} onClick={() => setCompleted((value) => !value)}>
                  <CheckCircle2 size={17} />{completed ? "Marcar como não concluído" : "Concluí este estudo"}
                </button>
                <small>Esta marcação é local e vale apenas durante esta sessão. O progresso persistente será conectado ao perfil local de estudos em uma próxima etapa.</small>
              </section>

              <section id="glossario" className="lesson-section">
                <div className="eyebrow">CONSULTE</div><h2>Glossário rápido</h2>
                <div className="lesson-glossary">{lesson.glossary.map((item) => <div key={item.term}><strong>{item.term}</strong><p>{item.definition}</p></div>)}</div>
              </section>

              <footer className="lesson-source">
                <span>Material didático original do Nyx ClassCode, elaborado a partir de conceitos técnicos gerais.</span>
                <a href={lesson.source} target="_blank" rel="noreferrer">Ver coleção de referência <ArrowRight size={14} /></a>
              </footer>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
