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

## Conteúdo e atribuição

O catálogo inicial organiza temas inspirados na coleção [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x), do CodeCrafters. O projeto mantém os créditos e direciona às fontes originais; não reproduz integralmente os tutoriais de terceiros.

## Deploy

Compatível com deploy na Vercel. Importe o repositório e mantenha os comandos padrão do Next.js.
