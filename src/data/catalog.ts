export type Difficulty = "Iniciante" | "Intermediário" | "Avançado";

export type Technology = {
  slug: string;
  title: string;
  category: string;
  description: string;
  difficulty: Difficulty;
  concepts: string[];
  status: "planned" | "in-progress" | "published";
};

export const categories = [
  "Todos",
  "Inteligência artificial",
  "Sistemas",
  "Desenvolvimento web",
  "Programação",
  "Redes",
  "Dados",
  "Computação gráfica",
  "Ferramentas",
  "Jogos e simulação"
];

export const technologies: Technology[] = [
  { slug: "neural-network", title: "Rede neural", category: "Inteligência artificial", description: "Entenda como redes neurais aprendem padrões a partir de exemplos.", difficulty: "Intermediário", concepts: ["Neurônios", "Pesos", "Backpropagation"], status: "planned" },
  { slug: "ai-model", title: "Modelo de inteligência artificial", category: "Inteligência artificial", description: "Explore os componentes fundamentais de um modelo de IA.", difficulty: "Avançado", concepts: ["Treinamento", "Inferência", "Parâmetros"], status: "planned" },
  { slug: "visual-recognition", title: "Reconhecimento visual", category: "Inteligência artificial", description: "Aprenda os fundamentos por trás de sistemas que interpretam imagens.", difficulty: "Avançado", concepts: ["Pixels", "Features", "Classificação"], status: "planned" },
  { slug: "database", title: "Banco de dados", category: "Dados", description: "Construa uma estrutura para armazenar, consultar e organizar informações.", difficulty: "Intermediário", concepts: ["Índices", "Consultas", "Armazenamento"], status: "planned" },
  { slug: "search-engine", title: "Motor de busca", category: "Dados", description: "Descubra como documentos são indexados e encontrados.", difficulty: "Avançado", concepts: ["Indexação", "Ranking", "Consulta"], status: "planned" },
  { slug: "blockchain", title: "Blockchain", category: "Dados", description: "Investigue estruturas encadeadas e mecanismos distribuídos de validação.", difficulty: "Avançado", concepts: ["Blocos", "Hash", "Consenso"], status: "planned" },
  { slug: "web-server", title: "Servidor web", category: "Desenvolvimento web", description: "Veja como requisições HTTP chegam ao servidor e recebem respostas.", difficulty: "Intermediário", concepts: ["HTTP", "Rotas", "Sockets"], status: "planned" },
  { slug: "frontend-framework", title: "Framework frontend", category: "Desenvolvimento web", description: "Conheça os mecanismos que sustentam bibliotecas de interfaces.", difficulty: "Avançado", concepts: ["Componentes", "Estado", "Renderização"], status: "planned" },
  { slug: "browser", title: "Navegador", category: "Desenvolvimento web", description: "Explore as etapas que transformam código web em páginas interativas.", difficulty: "Avançado", concepts: ["HTML", "CSS", "DOM"], status: "planned" },
  { slug: "template-engine", title: "Motor de templates", category: "Desenvolvimento web", description: "Aprenda a transformar modelos e dados em documentos.", difficulty: "Intermediário", concepts: ["Templates", "Interpolação", "Parsing"], status: "planned" },
  { slug: "programming-language", title: "Linguagem de programação", category: "Programação", description: "Construa uma pequena linguagem e descubra como ela interpreta instruções.", difficulty: "Avançado", concepts: ["Sintaxe", "Semântica", "Interpretador"], status: "planned" },
  { slug: "compiler", title: "Compilador", category: "Programação", description: "Acompanhe a transformação de código-fonte em uma representação executável.", difficulty: "Avançado", concepts: ["Lexer", "Parser", "AST"], status: "planned" },
  { slug: "regex", title: "Expressões regulares", category: "Programação", description: "Entenda como padrões descrevem e identificam sequências de texto.", difficulty: "Intermediário", concepts: ["Padrões", "Autômatos", "Matching"], status: "planned" },
  { slug: "text-editor", title: "Editor de texto", category: "Programação", description: "Conheça estruturas e operações usadas em editores de código.", difficulty: "Intermediário", concepts: ["Buffer", "Cursor", "Undo/Redo"], status: "planned" },
  { slug: "shell", title: "Shell", category: "Sistemas", description: "Explore como comandos são interpretados e processos são executados.", difficulty: "Intermediário", concepts: ["Processos", "Comandos", "Pipes"], status: "planned" },
  { slug: "operating-system", title: "Sistema operacional", category: "Sistemas", description: "Investigue os mecanismos que gerenciam hardware, memória e processos.", difficulty: "Avançado", concepts: ["Kernel", "Processos", "Memória"], status: "planned" },
  { slug: "memory-allocator", title: "Alocador de memória", category: "Sistemas", description: "Entenda como programas reservam e liberam espaço na memória.", difficulty: "Avançado", concepts: ["Heap", "Ponteiros", "Fragmentação"], status: "planned" },
  { slug: "virtual-machine", title: "Máquina virtual", category: "Sistemas", description: "Aprenda os princípios de uma máquina que executa instruções virtuais.", difficulty: "Avançado", concepts: ["Instruções", "Registradores", "Execução"], status: "planned" },
  { slug: "docker", title: "Contêiner estilo Docker", category: "Sistemas", description: "Estude isolamento de processos e ambientes de execução.", difficulty: "Avançado", concepts: ["Namespaces", "Cgroups", "Filesystem"], status: "planned" },
  { slug: "emulator", title: "Emulador", category: "Sistemas", description: "Descubra como reproduzir o comportamento de outra plataforma.", difficulty: "Avançado", concepts: ["CPU", "Memória", "Instruções"], status: "planned" },
  { slug: "network-stack", title: "Pilha de rede", category: "Redes", description: "Conheça as camadas e os protocolos que permitem a comunicação.", difficulty: "Avançado", concepts: ["TCP/IP", "Pacotes", "Sockets"], status: "planned" },
  { slug: "bittorrent-client", title: "Cliente BitTorrent", category: "Redes", description: "Entenda os conceitos de distribuição ponto a ponto de arquivos.", difficulty: "Avançado", concepts: ["Peers", "Swarm", "Chunks"], status: "planned" },
  { slug: "bot", title: "Bot", category: "Redes", description: "Aprenda a estruturar um programa que interage com serviços e APIs.", difficulty: "Iniciante", concepts: ["Eventos", "APIs", "Automação"], status: "planned" },
  { slug: "cli", title: "Aplicação de linha de comando", category: "Ferramentas", description: "Crie ferramentas que recebem argumentos e interagem pelo terminal.", difficulty: "Iniciante", concepts: ["Argumentos", " stdin/stdout", "Comandos"], status: "planned" },
  { slug: "git", title: "Git", category: "Ferramentas", description: "Explore snapshots, commits e o histórico de versões de arquivos.", difficulty: "Intermediário", concepts: ["Commits", "Branches", "Objetos"], status: "planned" },
  { slug: "3d-renderer", title: "Renderizador 3D", category: "Computação gráfica", description: "Descubra como geometria e iluminação viram imagens na tela.", difficulty: "Avançado", concepts: ["Vetores", "Câmera", "Rasterização"], status: "planned" },
  { slug: "augmented-reality", title: "Realidade aumentada", category: "Computação gráfica", description: "Explore como elementos digitais são posicionados no mundo real.", difficulty: "Avançado", concepts: ["Tracking", "Câmera", "Espaço 3D"], status: "planned" },
  { slug: "voxel-engine", title: "Motor de voxels", category: "Computação gráfica", description: "Entenda como mundos tridimensionais podem ser construídos com blocos volumétricos.", difficulty: "Avançado", concepts: ["Chunks", "Malhas", "Renderização"], status: "planned" },
  { slug: "physics-engine", title: "Motor de física", category: "Jogos e simulação", description: "Aprenda a simular movimento, colisões e forças em um ambiente virtual.", difficulty: "Avançado", concepts: ["Vetores", "Colisões", "Dinâmica"], status: "planned" },
  { slug: "game", title: "Jogo", category: "Jogos e simulação", description: "Construa um jogo e conheça os sistemas que o fazem funcionar.", difficulty: "Intermediário", concepts: ["Game loop", "Input", "Estados"], status: "planned" },
  { slug: "processor", title: "Processador", category: "Sistemas", description: "Investigue os blocos lógicos que executam instruções.", difficulty: "Avançado", concepts: ["ALU", "Registradores", "Clock"], status: "planned" }
];