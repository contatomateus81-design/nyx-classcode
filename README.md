# Nyx ClassCode

Biblioteca educacional interativa para aprender como tecnologias são construídas, do zero.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- next-themes
- Lucide React

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Scripts

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: servidor de produção
- `npm run lint`: análise estática
- `npm run typecheck`: verificação TypeScript

## Organização

- `src/app`: páginas e estilos globais
- `src/components`: componentes reutilizáveis
- `src/data/catalog.ts`: categorias e catálogo de tecnologias
- `src/data/lessons.ts`: conteúdo didático autoral
- `docs/CONTENT_IMPORT_PLAN.md`: escopo, arquitetura e regras para incorporar materiais educacionais multilíngues

## Fontes educacionais

O catálogo será ampliado a partir de:
- [freeCodeCamp](https://www.freecodecamp.org/portuguese/catalog?hl=pt-BR)
- [Free Programming Books](https://github.com/EbookFoundation/free-programming-books)

O ClassCode catalogará materiais em qualquer idioma, identificando idioma, formato, autoria, fonte e licença. O conteúdo protegido de terceiros será referenciado por links; as aulas complementares do ClassCode serão escritas originalmente, com exemplos, exercícios e recursos visuais próprios.

O catálogo inicial também organiza temas inspirados na coleção [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x), do CodeCrafters.

## Deploy

Compatível com deploy na Vercel. Importe o repositório e mantenha os comandos padrão do Next.js.
