export type VideoCourse = {
  id: string;
  title: string;
  description: string;
  summary: string;
  channel: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  category: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  duration?: string;
  language: string;
  topics: string[];
  prerequisites: string[];
  practicalTask: string;
};

export const videoCategories = [
  "Todos",
  "Frontend",
  "Backend",
  "Full Stack",
  "JavaScript",
  "Python",
  "Inteligência artificial",
  "Ferramentas",
  "Design",
] as const;

// Cadastre aqui somente vídeos gratuitos, públicos e conferidos.
// Os resumos devem refletir o conteúdo real da aula; não invente metadados.
export const videoCourses: VideoCourse[] = [];
