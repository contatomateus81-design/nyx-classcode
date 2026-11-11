"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#trilhas", label: "Trilhas" },
  { href: "#sobre", label: "Sobre" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Nyx ClassCode início">
          <span className="brand-icon" aria-hidden="true" />
          <span>nyx<span className="brand-light">class</span>code</span>
          <span className="brand-beta">BETA</span>
        </Link>

        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a href="#biblioteca" className="header-cta">Explorar <Sparkles size={15} /></a>
          <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}