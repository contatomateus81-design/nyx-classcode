"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, Code2, Compass, Layers3, Search, Sparkles, TerminalSquare } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { categories, technologies } from "@/data/catalog";

const icons = [BrainCircuit, TerminalSquare, Code2, Layers3, Compass];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    return technologies.filter((item) => {
      const categoryMatch = activeCategory === "Todos" || item.category === activeCategory;
      const searchMatch = !term || [item.title, item.description, item.category, ...item.concepts].join(" ").toLocaleLowerCase("pt-BR").includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> UM UNIVERSO DE CONHECIMENTO</div>
              <h1>Não apenas use a tecnologia.<br /><span>Entenda como ela nasce.</span></h1>
              <p className="hero-description">Uma biblioteca para explorar, estudar e construir tecnologias do zero — com explicações visuais, conceitos e projetos práticos.</p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#biblioteca">Explorar biblioteca <ArrowRight size={17} /></a>
                <a className="button button-ghost" href="#sobre">Conhecer o projeto</a>
              </div>
              <div className="hero-meta"><span><BookOpen size={15} /> Aprendizado guiado</span><span><Sparkles size={15} /> Do conceito à prática</span></div>
            </div>
            <div className="hero-visual" aria-label="Ilustração abstrata de camadas de conhecimento">
              <div className="visual-grid" />
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-core"><BookOpen size={43} strokeWidth={1.4} /><span>BUILD<br />YOUR<br />MIND</span></div>
              <div className="float-card float-card-top"><BrainCircuit size={17} /><span>Inteligência artificial</span></div>
              <div className="float-card float-card-bottom"><Code2 size={17} /><span>Engenharia de software</span></div>
              <div className="visual-star star-a">✳</div><div className="visual-star star-b">✦</div>
            </div>
          </div>
          <a href="#biblioteca" className="scroll-hint">Explore o conhecimento <ArrowDown size={14} /></a>
        </section>

        <section className="stats-strip">
          <div className="container stats-inner">
            <div><strong>{technologies.length.toString().padStart(2, "0")}+</strong><span>temas para explorar</span></div>
            <div><strong>{(categories.length - 1).toString().padStart(2, "0")}</strong><span>áreas de tecnologia</span></div>
            <div><strong>01</strong><span>objetivo: aprender construindo</span></div>
          </div>
        </section>

        <section className="library-section section-space" id="biblioteca">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">COMECE A EXPLORAR</div><h2>Biblioteca de <span>tecnologias</span></h2></div>
              <p>De sistemas operacionais a redes neurais: encontre um assunto, entenda seus fundamentos e descubra como construir sua própria versão.</p>
            </div>

            <div className="library-tools">
              <label className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar tecnologia, conceito ou área..." aria-label="Buscar tecnologia" /><kbd>/</kbd></label>
              <span className="result-count">{filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}</span>
            </div>

            <div className="category-list" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button key={category} className={`category-chip ${activeCategory === category ? "selected" : ""}`} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>

            {filtered.length ? (
              <div className="technology-grid">
                {filtered.map((item, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <article className="technology-card" key={item.slug}>
                      <div className="card-topline"><span className="card-icon"><Icon size={20} /></span><span className="status status-planned">Em planejamento</span></div>
                      <div className="card-category">{item.category}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="concept-tags">{item.concepts.slice(0, 3).map((concept) => <span key={concept}>{concept}</span>)}</div>
                      <div className="card-footer"><span>{item.difficulty}</span><span className="card-soon">Conteúdo em breve <ArrowUpRight size={14} /></span></div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="empty-results"><Search size={25} /><h3>Nenhum resultado encontrado</h3><p>Tente outro termo ou selecione uma categoria diferente.</p><button onClick={() => { setSearch(""); setActiveCategory("Todos"); }}>Limpar filtros</button></div>
            )}
          </div>
        </section>

        <section className="path-section section-space" id="trilhas">
          <div className="container path-layout">
            <div className="path-copy"><div className="eyebrow">APRENDA COM DIREÇÃO</div><h2>Conhecimento conectado em <span>trilhas.</span></h2><p>Aprender fica mais simples quando cada conceito prepara o caminho para o próximo. As trilhas vão organizar os assuntos por objetivo e nível de conhecimento.</p><a href="#biblioteca" className="inline-link">Ver tecnologias disponíveis <ArrowRight size={16} /></a></div>
            <div className="path-steps">
              {["Fundamentos da programação", "Como os sistemas funcionam", "Construindo projetos reais"].map((step, index) => <div className="path-step" key={step}><span className="step-number">0{index + 1}</span><div><strong>{step}</strong><small>{index === 0 ? "Lógica, algoritmos e código" : index === 1 ? "Memória, redes e arquitetura" : "Da ideia à implementação"}</small></div><ArrowUpRight size={17} /></div>)}
              <div className="path-coming"><Sparkles size={15} /> Trilhas de aprendizado em desenvolvimento</div>
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="sobre">
          <div className="container about-panel">
            <div className="about-symbol"><span>n</span><i>✳</i></div>
            <div><div className="eyebrow">SOBRE O NYX CLASSCODE</div><h2>Curiosidade é o começo de toda <span>invenção.</span></h2><p>O Nyx ClassCode é um projeto educacional independente ligado ao universo NYX. A proposta é transformar referências técnicas em caminhos de aprendizado acessíveis, visuais e práticos.</p><p className="source-note">Inspirado na coleção Build Your Own X, do CodeCrafters. Os materiais originais pertencem aos seus respectivos autores e são referenciados como fontes de estudo.</p><a className="source-link" href="https://github.com/codecrafters-io/build-your-own-x" target="_blank" rel="noreferrer">Conhecer a coleção original <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a href="#" className="brand footer-brand"><span className="brand-icon"><BookOpen size={17} /></span><span>nyx<span className="brand-light">class</span>code</span></a><span>Aprender construindo. © {new Date().getFullYear()} NYX.</span><a href="https://github.com/contatomateus81-design/nyx-classcode" target="_blank" rel="noreferrer">Código aberto <ArrowUpRight size={14} /></a></div></footer>
    </>
  );
}