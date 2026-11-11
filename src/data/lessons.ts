import type { Technology } from "./catalog";

export type Lesson = {
  slug: string;
  intro: string;
  objective: string;
  prerequisites: string[];
  fundamentals: { title: string; body: string }[];
  roadmap: string[];
  experiment: { title: string; description: string; code?: string };
  challenge: string;
  glossary: { term: string; definition: string }[];
  source: string;
};

const originalCollection = "https://github.com/codecrafters-io/build-your-own-x";

export const lessons: Record<string, Lesson> = {
  "neural-network": {
    slug: "neural-network",
    intro: "Uma rede neural é um modelo matemático composto por unidades conectadas que transformam entradas em previsões. Ela ajusta seus parâmetros a partir de exemplos, tentando reduzir a diferença entre o resultado previsto e o esperado.",
    objective: "Entender o caminho entre dados de entrada, previsão, erro e ajuste de parâmetros.",
    prerequisites: ["Variáveis, funções e listas", "Noções de média e multiplicação", "Ideia de função matemática"],
    fundamentals: [
      { title: "Neurônios artificiais", body: "Cada unidade recebe valores, multiplica cada um por um peso, soma os resultados e aplica uma função de ativação. O resultado segue para a próxima camada." },
      { title: "Pesos e vieses", body: "Pesos controlam a influência de cada entrada. O viés desloca a soma e ajuda o modelo a representar relações que não passam pela origem." },
      { title: "Treinamento e erro", body: "Durante o treinamento, o modelo compara sua previsão com a resposta conhecida. Uma função de perda transforma essa diferença em um valor que pode ser minimizado." },
      { title: "Retropropagação", body: "O algoritmo calcula como cada parâmetro contribuiu para o erro e usa gradientes para orientar pequenos ajustes. A taxa de aprendizado controla o tamanho desses ajustes." }
    ],
    roadmap: ["Representar um neurônio com duas entradas", "Conectar neurônios em uma camada", "Adicionar uma função de ativação", "Definir uma função de perda", "Treinar com exemplos pequenos e acompanhar a perda"],
    experiment: { title: "Um neurônio de duas entradas", description: "Teste mentalmente a soma ponderada: com entradas 2 e 3, pesos 0,5 e 0,2 e viés 1, a soma antes da ativação é 2,6.", code: "saída = (entrada1 × peso1) + (entrada2 × peso2) + viés\nsaída = (2 × 0,5) + (3 × 0,2) + 1\nsaída = 2,6" },
    challenge: "Desenhe uma rede com duas entradas, uma camada escondida de três neurônios e uma saída. Identifique o que cada peso representa e explique como o erro poderia ajustar esses pesos.",
    glossary: [{ term: "Inferência", definition: "Uso de um modelo treinado para produzir uma previsão." }, { term: "Gradiente", definition: "Informação sobre a direção em que uma função cresce mais rapidamente." }, { term: "Época", definition: "Uma passagem completa pelo conjunto de treinamento." }],
    source: originalCollection
  },
  "ai-model": {
    slug: "ai-model",
    intro: "Um modelo de inteligência artificial é uma função parametrizada que transforma dados de entrada em resultados. Em modelos modernos, a arquitetura, os dados, o objetivo de treinamento e a avaliação trabalham em conjunto.",
    objective: "Distinguir arquitetura, parâmetros, treinamento, inferência e avaliação.",
    prerequisites: ["Lógica de programação", "Funções e estruturas de dados", "Noções básicas de estatística"],
    fundamentals: [
      { title: "Dados e representação", body: "Textos, imagens e números precisam ser convertidos em representações que o modelo consiga processar. A qualidade e a cobertura dos dados influenciam o comportamento aprendido." },
      { title: "Arquitetura", body: "A arquitetura define como a informação percorre o modelo. Camadas, operações e conexões determinam quais relações podem ser representadas." },
      { title: "Parâmetros", body: "Parâmetros são valores ajustáveis aprendidos durante o treinamento. Eles não são regras escritas manualmente: são configurados para reduzir uma função de objetivo." },
      { title: "Avaliação", body: "Um modelo deve ser testado com dados que não foram usados no treinamento. Métricas e testes qualitativos ajudam a identificar erros, vieses e limites." }
    ],
    roadmap: ["Definir o problema e o tipo de saída", "Preparar e separar os dados", "Escolher uma arquitetura simples", "Treinar e registrar métricas", "Avaliar em exemplos inéditos e documentar limites"],
    experiment: { title: "Do problema à previsão", description: "Para classificar mensagens como positivas ou negativas, a entrada é o texto representado numericamente e a saída pode ser uma probabilidade para cada classe.", code: "entrada: representação numérica do texto\nmodelo: camadas + parâmetros aprendidos\nsaída: { positivo: 0.82, negativo: 0.18 }" },
    challenge: "Especifique um pequeno classificador: descreva entradas, saídas, dados necessários, métrica de avaliação e três situações em que ele poderia falhar.",
    glossary: [{ term: "Parâmetro", definition: "Valor interno aprendido ou ajustado pelo modelo." }, { term: "Inferência", definition: "Execução do modelo para obter uma resposta." }, { term: "Overfitting", definition: "Quando o modelo se adapta demais aos exemplos de treino e generaliza mal." }],
    source: originalCollection
  },
  "visual-recognition": {
    slug: "visual-recognition",
    intro: "Reconhecimento visual é a área que permite a um programa extrair informações de imagens ou vídeos. O sistema trabalha com pixels, representações de padrões e uma tarefa definida, como classificar, localizar ou segmentar objetos.",
    objective: "Compreender o caminho de uma imagem até uma classificação ou localização.",
    prerequisites: ["Arrays e matrizes", "Noções de coordenadas", "Fundamentos de modelos de IA"],
    fundamentals: [
      { title: "Pixels e canais", body: "Uma imagem digital pode ser representada como uma grade de pixels. Cada pixel armazena valores de intensidade; imagens coloridas costumam separar canais como vermelho, verde e azul." },
      { title: "Pré-processamento", body: "Redimensionamento, normalização e recorte deixam as entradas em formatos consistentes. Transformações devem preservar as informações relevantes para a tarefa." },
      { title: "Características", body: "Modelos aprendem padrões locais e combinações mais complexas, como bordas, texturas e partes de objetos. Redes convolucionais são uma arquitetura clássica para esse tipo de dado." },
      { title: "Saídas e avaliação", body: "Classificação escolhe categorias; detecção também estima caixas; segmentação atribui classes a regiões ou pixels. Cada tarefa exige métricas próprias." }
    ],
    roadmap: ["Carregar uma imagem como matriz", "Visualizar canais e dimensões", "Preparar imagens em tamanho uniforme", "Executar um classificador de demonstração", "Comparar previsões com rótulos conhecidos"],
    experiment: { title: "Dimensões de uma imagem", description: "Uma imagem RGB de 100 por 80 pixels pode ser representada por uma matriz com três canais.", code: "largura = 100\naltura = 80\ncanais = 3\nvalores = 100 × 80 × 3" },
    challenge: "Descreva como você montaria um conjunto de imagens para distinguir três tipos de folhas e como evitaria avaliar o modelo com imagens quase idênticas às do treino.",
    glossary: [{ term: "Canal", definition: "Uma matriz de valores que representa uma componente da imagem." }, { term: "Detecção", definition: "Tarefa que identifica objetos e suas posições." }, { term: "Segmentação", definition: "Classificação de regiões ou pixels de uma imagem." }],
    source: originalCollection
  },
  database: {
    slug: "database",
    intro: "Um banco de dados organiza informações para que aplicações possam armazená-las, consultá-las e atualizá-las de forma confiável. Construir uma versão didática ajuda a entender registros, índices, persistência e consistência.",
    objective: "Modelar dados e entender como uma consulta encontra registros.",
    prerequisites: ["Estruturas de dados", "Arquivos e persistência", "Noções de modelagem"],
    fundamentals: [
      { title: "Modelo de dados", body: "O modelo define quais entidades existem, quais campos possuem e como se relacionam. Em um banco relacional, tabelas organizam linhas e colunas." },
      { title: "Operações CRUD", body: "Criar, ler, atualizar e remover são operações básicas. Uma interface de consulta transforma pedidos da aplicação em operações sobre os dados." },
      { title: "Índices", body: "Um índice mantém uma estrutura auxiliar para localizar registros sem examinar todos eles. Ele acelera leituras, mas ocupa espaço e torna algumas escritas mais caras." },
      { title: "Transações", body: "Transações agrupam operações que precisam manter regras de consistência. Propriedades ACID descrevem garantias importantes em sistemas relacionais." }
    ],
    roadmap: ["Definir um formato simples de registro", "Armazenar registros em memória", "Implementar inserir, consultar e remover", "Persistir os dados em arquivo", "Criar um índice e comparar a busca"],
    experiment: { title: "Registro estruturado", description: "Uma tabela de tarefas pode ser representada por registros com identificador, descrição e estado.", code: "{ id: 1, titulo: \"Estudar índices\", concluida: false }" },
    challenge: "Projete um mini banco de dados de biblioteca com livros e empréstimos. Defina campos, chaves, duas consultas úteis e uma regra que não pode ser violada.",
    glossary: [{ term: "Índice", definition: "Estrutura auxiliar que acelera a localização de registros." }, { term: "Chave primária", definition: "Campo ou conjunto de campos que identifica unicamente um registro." }, { term: "Transação", definition: "Grupo de operações tratado como uma unidade lógica." }],
    source: originalCollection
  },
  "search-engine": {
    slug: "search-engine",
    intro: "Um motor de busca transforma uma coleção de documentos em algo pesquisável. Ele processa o conteúdo, cria um índice invertido e ordena resultados conforme a consulta e a relevância estimada.",
    objective: "Entender indexação, recuperação de documentos e ranking.",
    prerequisites: ["Strings e coleções", "Mapas e conjuntos", "Noções de análise de texto"],
    fundamentals: [
      { title: "Coleta e normalização", body: "Documentos são obtidos e convertidos para um formato comum. Normalização pode incluir caixa baixa, remoção de pontuação e tratamento de palavras frequentes." },
      { title: "Índice invertido", body: "Em vez de guardar apenas palavras dentro de documentos, o índice associa cada termo à lista de documentos em que aparece. Isso reduz o trabalho durante a busca." },
      { title: "Consulta", body: "A consulta passa por processamento semelhante ao dos documentos. O sistema combina listas de termos para encontrar candidatos." },
      { title: "Ranking", body: "Os candidatos são ordenados por sinais de relevância, como frequência do termo, raridade e correspondência com a consulta. Um ranking é uma estimativa, não uma verdade absoluta." }
    ],
    roadmap: ["Criar uma coleção de documentos curtos", "Tokenizar e normalizar o texto", "Construir o índice invertido", "Processar consultas com mais de um termo", "Ordenar resultados por uma pontuação simples"],
    experiment: { title: "Índice invertido mínimo", description: "Se o termo 'rede' aparece nos documentos 1 e 3, o índice guarda essa relação diretamente.", code: "rede → [1, 3]\nmodelo → [2, 3]\nbusca por 'rede modelo' → [3]" },
    challenge: "Adicione pontuação por frequência e raridade de termos. Compare os resultados de duas consultas e explique por que a ordem mudou.",
    glossary: [{ term: "Tokenização", definition: "Separação de texto em unidades menores, como palavras." }, { term: "Índice invertido", definition: "Mapa de termos para documentos que contêm cada termo." }, { term: "Ranking", definition: "Ordenação dos resultados segundo uma função de relevância." }],
    source: originalCollection
  },
  blockchain: {
    slug: "blockchain",
    intro: "Blockchain é uma estrutura de registros agrupados em blocos que se referenciam por hashes. Em redes distribuídas, participantes seguem regras de consenso para concordar sobre a ordem e validade dos registros.",
    objective: "Distinguir encadeamento por hash, validação e consenso distribuído.",
    prerequisites: ["Estruturas de dados", "Funções hash", "Noções de redes"],
    fundamentals: [
      { title: "Blocos encadeados", body: "Cada bloco contém dados e uma referência criptográfica ao bloco anterior. Alterar um bloco muda seu hash e quebra a ligação esperada nos seguintes." },
      { title: "Hash criptográfico", body: "Uma função hash produz um resumo de tamanho fixo. Ela é projetada para tornar inviável encontrar facilmente entradas diferentes com o mesmo resumo." },
      { title: "Assinaturas e validação", body: "Assinaturas digitais ajudam a verificar autoria e integridade de mensagens. Regras de validação definem quais registros podem entrar na cadeia." },
      { title: "Consenso", body: "Em uma rede distribuída, consenso é o processo pelo qual participantes concordam sobre o estado compartilhado. Diferentes protocolos fazem escolhas distintas entre segurança, desempenho e descentralização." }
    ],
    roadmap: ["Representar um bloco com dados e hash anterior", "Calcular o hash de cada bloco", "Validar a cadeia inteira", "Simular uma alteração e detectar inconsistência", "Estudar por que uma rede precisa de consenso"],
    experiment: { title: "Encadeamento conceitual", description: "O segundo bloco guarda o hash do primeiro. Se os dados do primeiro mudarem, a referência deixa de corresponder.", code: "Bloco A: dados + hash(A)\nBloco B: dados + hashAnterior = hash(A)\nBloco C: dados + hashAnterior = hash(B)" },
    challenge: "Desenhe uma cadeia de quatro blocos e descreva como o sistema detecta uma alteração. Depois explique por que isso, sozinho, não resolve o problema de concordância entre participantes.",
    glossary: [{ term: "Hash", definition: "Resumo determinístico de dados produzido por uma função." }, { term: "Consenso", definition: "Mecanismo para participantes concordarem sobre um estado." }, { term: "Nó", definition: "Participante ou computador que executa o protocolo da rede." }],
    source: originalCollection
  },
  "web-server": {
    slug: "web-server",
    intro: "Um servidor web recebe requisições de clientes e devolve respostas usando protocolos como HTTP. Ele conecta endereços, métodos, cabeçalhos e corpos a funções da aplicação.",
    objective: "Compreender o ciclo requisição-resposta e construir um servidor HTTP didático.",
    prerequisites: ["Fundamentos de programação", "Noções de rede e portas", "Estruturas condicionais"],
    fundamentals: [
      { title: "HTTP", body: "HTTP define como clientes e servidores trocam mensagens. Uma requisição inclui método, caminho, cabeçalhos e, em alguns casos, corpo." },
      { title: "Rotas", body: "Uma rota associa um método e um caminho a uma ação. Por exemplo, GET /tarefas pode retornar uma lista, enquanto POST /tarefas cria um item." },
      { title: "Status e cabeçalhos", body: "O código de status comunica o resultado geral da operação. Cabeçalhos descrevem formato, cache e outras características da mensagem." },
      { title: "Concorrência", body: "Um servidor pode receber várias conexões próximas no tempo. O modelo de execução precisa evitar que uma requisição bloqueie indevidamente todas as outras." }
    ],
    roadmap: ["Abrir um servidor local", "Ler método e caminho", "Criar rotas GET e POST", "Enviar status e cabeçalhos corretos", "Adicionar tratamento de erros e testes"],
    experiment: { title: "Anatomia de uma requisição", description: "Uma chamada simples pede um recurso e informa que espera receber JSON.", code: "GET /api/tarefas HTTP/1.1\nHost: localhost:3000\nAccept: application/json" },
    challenge: "Planeje uma API para uma lista de tarefas com rotas de leitura, criação, atualização e remoção. Escolha métodos, caminhos e códigos de status.",
    glossary: [{ term: "Endpoint", definition: "Ponto de acesso de uma API, normalmente definido por método e caminho." }, { term: "Status HTTP", definition: "Código que resume o resultado de uma requisição." }, { term: "Socket", definition: "Extremidade de comunicação usada por processos em uma rede." }],
    source: originalCollection
  },
  "frontend-framework": {
    slug: "frontend-framework",
    intro: "Um framework frontend organiza a construção de interfaces por componentes, estado e atualização da tela. Estudar sua mecânica revela como uma mudança nos dados pode produzir uma nova representação visual.",
    objective: "Entender componentes, estado, renderização e reconciliação.",
    prerequisites: ["HTML, CSS e JavaScript", "Funções e objetos", "Manipulação básica do DOM"],
    fundamentals: [
      { title: "Componentes", body: "Componentes encapsulam uma parte da interface e podem receber propriedades. A composição permite construir telas complexas a partir de peças menores." },
      { title: "Estado", body: "Estado representa informação que pode mudar durante o uso. Quando muda, a interface precisa refletir o novo valor." },
      { title: "Renderização", body: "Renderizar é transformar dados e componentes em elementos visuais. Frameworks modernos coordenam esse processo para reduzir atualizações desnecessárias." },
      { title: "Reconciliação", body: "Uma representação nova é comparada com a anterior para decidir quais mudanças aplicar. Identificadores estáveis ajudam a preservar a identidade de itens em listas." }
    ],
    roadmap: ["Criar uma função que descreve elementos", "Compor componentes simples", "Adicionar propriedades", "Manter estado de um contador", "Atualizar o DOM quando o estado mudar"],
    experiment: { title: "Estado e interface", description: "O texto exibido depende de um valor. Quando o valor muda, a descrição visual deve acompanhar.", code: "estado = 0\nrenderizar(estado)\n\n// após uma ação\nestado = estado + 1\nrenderizar(estado)" },
    challenge: "Desenhe a árvore de componentes de uma lista de tarefas. Identifique quais dados pertencem à tela inteira e quais podem ficar dentro de um componente.",
    glossary: [{ term: "Componente", definition: "Unidade reutilizável que descreve uma parte da interface." }, { term: "Estado", definition: "Dados mutáveis que influenciam a interface." }, { term: "Reconciliação", definition: "Processo de comparar representações e aplicar mudanças necessárias." }],
    source: originalCollection
  },
  browser: {
    slug: "browser",
    intro: "Um navegador transforma recursos da web em uma experiência interativa. Ele busca documentos, interpreta HTML e CSS, executa JavaScript e coordena layout, pintura e interação.",
    objective: "Mapear as etapas entre uma URL e uma página renderizada.",
    prerequisites: ["HTML e CSS básicos", "JavaScript", "Noções de HTTP"],
    fundamentals: [
      { title: "Navegação e rede", body: "Ao abrir uma URL, o navegador identifica o recurso, realiza a comunicação de rede e recebe documentos e outros arquivos necessários." },
      { title: "DOM e CSSOM", body: "O HTML é convertido em uma árvore de objetos chamada DOM. O CSS é interpretado em uma estrutura de regras que participa do cálculo dos estilos." },
      { title: "Layout e pintura", body: "O navegador calcula dimensões e posições dos elementos e depois pinta pixels na tela. Alterações no documento podem exigir novas etapas de renderização." },
      { title: "JavaScript e eventos", body: "Scripts podem consultar e modificar o DOM e responder a eventos. O navegador coordena execução e renderização para manter a página responsiva." }
    ],
    roadmap: ["Inspecionar uma página HTML pequena", "Representar sua árvore DOM", "Aplicar regras CSS e prever estilos", "Adicionar um evento JavaScript", "Observar como uma mudança afeta o layout"],
    experiment: { title: "Árvore DOM simplificada", description: "Elementos HTML tornam-se nós conectados em uma árvore hierárquica.", code: "document\n└── html\n    ├── head\n    └── body\n        ├── h1\n        └── p" },
    challenge: "Crie uma página com título, parágrafo e botão. Desenhe a árvore DOM e explique quais etapas o navegador executa até mostrar a página.",
    glossary: [{ term: "DOM", definition: "Representação estruturada do documento HTML como objetos." }, { term: "Layout", definition: "Cálculo das dimensões e posições dos elementos." }, { term: "Evento", definition: "Sinal de uma interação ou ocorrência que o código pode tratar." }],
    source: originalCollection
  },
  "template-engine": {
    slug: "template-engine",
    intro: "Um motor de templates combina um modelo de texto com dados para gerar uma saída. É uma forma de separar estrutura e conteúdo, muito usada em páginas, relatórios e mensagens.",
    objective: "Construir um renderizador simples com interpolação e regras controladas.",
    prerequisites: ["Strings", "Objetos e arrays", "Funções"],
    fundamentals: [
      { title: "Modelo e contexto", body: "O template descreve a estrutura de saída; o contexto fornece os valores. Separar os dois facilita reutilização e manutenção." },
      { title: "Interpolação", body: "Marcadores identificam posições em que valores serão inseridos. O motor procura as chaves no contexto e converte valores para texto." },
      { title: "Parsing", body: "Um motor mais completo interpreta blocos, condicionais e repetições. Um parser transforma a sequência de caracteres em uma estrutura que pode ser avaliada." },
      { title: "Escape e segurança", body: "Conteúdo inserido em HTML precisa ser tratado para não virar marcação ou script inesperado. Escape automático é uma proteção importante." }
    ],
    roadmap: ["Definir uma sintaxe de marcador", "Localizar variáveis no template", "Substituir marcadores por valores", "Adicionar condicionais ou repetição", "Implementar escape de HTML e testes"],
    experiment: { title: "Interpolação básica", description: "Um marcador pode ser substituído por um valor fornecido no contexto.", code: "template: \"Olá, {{ nome }}!\"\ncontexto: { nome: \"Ana\" }\nsaída: \"Olá, Ana!\"" },
    challenge: "Projete uma sintaxe de template com variável e condicional. Mostre como ela seria processada e explique como evitar inserir HTML não confiável.",
    glossary: [{ term: "Interpolação", definition: "Inserção de valores dentro de uma string ou modelo." }, { term: "Parser", definition: "Componente que analisa uma sequência e constrói uma representação estruturada." }, { term: "Escape", definition: "Conversão de caracteres especiais para impedir que sejam interpretados como código ou marcação." }],
    source: originalCollection
  },
  "programming-language": {
    slug: "programming-language",
    intro: "Uma linguagem de programação define uma forma de expressar instruções e regras para interpretá-las ou executá-las. Criar uma linguagem pequena ensina como sintaxe, significado e execução se conectam.",
    objective: "Projetar uma linguagem mínima e compreender seu interpretador.",
    prerequisites: ["Lógica", "Strings e arrays", "Funções e estruturas condicionais"],
    fundamentals: [
      { title: "Sintaxe", body: "A sintaxe define quais sequências de símbolos são válidas. Uma gramática descreve como expressões e comandos podem ser combinados." },
      { title: "Semântica", body: "A semântica define o que uma construção significa. Duas expressões podem ser sintaticamente válidas, mas produzir comportamentos diferentes." },
      { title: "Ambiente", body: "Variáveis vivem em um ambiente que associa nomes a valores. Escopos determinam onde esses nomes podem ser acessados." },
      { title: "Execução", body: "Um interpretador percorre a representação do programa e executa operações. Uma linguagem compilada pode transformar o programa em outra representação antes da execução." }
    ],
    roadmap: ["Escolher números, nomes e operações", "Definir uma gramática curta", "Tokenizar o código", "Construir uma árvore de sintaxe", "Avaliar expressões e armazenar variáveis"],
    experiment: { title: "Uma expressão da linguagem", description: "Uma linguagem didática pode começar com atribuição e soma.", code: "total = 10 + 5\nmostrar total\n\n// resultado esperado: 15" },
    challenge: "Defina três comandos para uma linguagem de calculadora. Escreva a gramática informal, dois programas válidos e um exemplo inválido.",
    glossary: [{ term: "Gramática", definition: "Regras que descrevem como formar construções válidas." }, { term: "Interpretador", definition: "Programa que executa instruções de outra linguagem." }, { term: "Escopo", definition: "Região em que um nome ou variável pode ser acessado." }],
    source: originalCollection
  },
  compiler: {
    slug: "compiler",
    intro: "Um compilador traduz um programa de uma linguagem para outra representação. O processo costuma envolver análise léxica, análise sintática, verificações semânticas e geração de código.",
    objective: "Conhecer o pipeline de compilação e construir um tradutor pequeno.",
    prerequisites: ["Strings e estruturas de dados", "Árvores", "Fundamentos de linguagens"],
    fundamentals: [
      { title: "Análise léxica", body: "O lexer agrupa caracteres em tokens, como identificadores, números e operadores. Ele ignora espaços e comentários conforme as regras da linguagem." },
      { title: "Análise sintática", body: "O parser verifica se a sequência de tokens respeita a gramática e constrói uma árvore de sintaxe abstrata (AST)." },
      { title: "Análise semântica", body: "Essa etapa verifica significado: variáveis declaradas, tipos compatíveis e chamadas válidas. Nem todo erro pode ser detectado apenas pela gramática." },
      { title: "Geração de código", body: "A AST é transformada em código de destino ou bytecode. Otimizações podem simplificar operações sem alterar o comportamento observável." }
    ],
    roadmap: ["Definir tokens e palavras reservadas", "Implementar um lexer", "Criar parser para expressões", "Representar o programa em AST", "Gerar uma saída simples e testar erros"],
    experiment: { title: "Pipeline de compilação", description: "Uma expressão passa por etapas até virar uma representação executável.", code: "soma = 2 + 3\n→ tokens\n→ AST\n→ instruções de destino" },
    challenge: "Projete um compilador de expressões aritméticas com parênteses. Mostre os tokens e a AST para (2 + 3) × 4.",
    glossary: [{ term: "Lexer", definition: "Analisador que converte caracteres em tokens." }, { term: "AST", definition: "Árvore que representa a estrutura essencial de um programa." }, { term: "Bytecode", definition: "Conjunto de instruções intermediárias para uma máquina virtual." }],
    source: originalCollection
  },
  regex: {
    slug: "regex",
    intro: "Expressões regulares descrevem padrões de texto. Um mecanismo de regex interpreta esses padrões e verifica se uma sequência corresponde a eles.",
    objective: "Entender padrões, estados e correspondência de texto.",
    prerequisites: ["Strings", "Conjuntos e lógica booleana", "Noção de autômatos ajuda, mas não é obrigatória"],
    fundamentals: [
      { title: "Literais e classes", body: "Caracteres literais correspondem a si mesmos. Classes representam conjuntos, como dígitos ou letras." },
      { title: "Quantificadores", body: "Quantificadores indicam quantas repetições são aceitas. Eles permitem descrever padrões de tamanho variável." },
      { title: "Alternância e grupos", body: "Alternância representa escolhas entre padrões e grupos permitem tratar partes como unidades. Âncoras indicam posições, como início e fim do texto." },
      { title: "Autômatos", body: "Mecanismos podem converter padrões em autômatos que percorrem o texto. Essa visão ajuda a entender correspondência e desempenho." }
    ],
    roadmap: ["Criar um matcher para caracteres literais", "Adicionar classes de caracteres", "Implementar repetição simples", "Suportar alternância", "Testar casos válidos, inválidos e limites"],
    experiment: { title: "Lendo um padrão", description: "O padrão abaixo descreve uma sequência de três dígitos, um hífen e mais dois dígitos.", code: "^\\d{3}-\\d{2}$" },
    challenge: "Escreva um padrão para identificar códigos no formato ABC-123 (três letras maiúsculas e três dígitos). Liste exemplos que devem passar e falhar.",
    glossary: [{ term: "Âncora", definition: "Elemento que indica uma posição, como início ou fim do texto." }, { term: "Quantificador", definition: "Operador que define a quantidade de repetições permitida." }, { term: "Autômato", definition: "Modelo abstrato de estados e transições usado para reconhecer padrões." }],
    source: originalCollection
  },
  "text-editor": {
    slug: "text-editor",
    intro: "Um editor de texto permite inserir, selecionar, mover e modificar caracteres. Editores de código acrescentam recursos como destaque de sintaxe, busca, desfazer e integração com ferramentas.",
    objective: "Compreender estruturas de buffer e operações de edição.",
    prerequisites: ["Strings e arrays", "Estruturas de dados", "Eventos de teclado"],
    fundamentals: [
      { title: "Buffer", body: "O buffer representa o conteúdo editável. Para documentos grandes, estruturas como gap buffer ou rope podem tornar inserções e remoções mais eficientes." },
      { title: "Cursor e seleção", body: "O cursor marca a posição atual. Uma seleção representa um intervalo que pode ser substituído ou copiado." },
      { title: "Histórico", body: "Desfazer e refazer exigem registrar operações ou estados anteriores. O modelo escolhido afeta memória e precisão do histórico." },
      { title: "Interface e entrada", body: "O editor converte eventos de teclado e mouse em operações sobre o buffer e redesenha a região afetada." }
    ],
    roadmap: ["Representar o texto em memória", "Manter uma posição de cursor", "Implementar inserção e remoção", "Criar seleção e navegação", "Adicionar histórico de desfazer e refazer"],
    experiment: { title: "Operação de inserção", description: "Inserir um caractere divide o texto na posição do cursor e combina as partes com o novo caractere.", code: "texto: \"casa\"\ncursor: 2\ninserir: \"r\"\nresultado: \"casra\" " },
    challenge: "Desenhe como um editor representa cursor e seleção. Descreva os passos para substituir uma palavra selecionada por outra.",
    glossary: [{ term: "Buffer", definition: "Estrutura em memória que guarda o conteúdo editável." }, { term: "Cursor", definition: "Posição atual de inserção ou navegação." }, { term: "Undo/Redo", definition: "Operações para desfazer e reaplicar mudanças." }],
    source: originalCollection
  },
  shell: {
    slug: "shell",
    intro: "Um shell é um programa que recebe comandos, interpreta argumentos e coordena a execução de outros programas. Ele também conecta processos por meio de entrada, saída e pipes.",
    objective: "Entender parsing de comandos, processos e redirecionamento.",
    prerequisites: ["Terminal básico", "Strings e arrays", "Noções de sistema operacional"],
    fundamentals: [
      { title: "Leitura e parsing", body: "O shell lê uma linha e separa comando, argumentos e operadores. Aspas e escapes mudam como espaços e caracteres especiais são interpretados." },
      { title: "Processos", body: "Um comando externo é executado como processo. O shell acompanha sua execução e apresenta o resultado ou código de saída." },
      { title: "Entrada e saída", body: "Processos usam fluxos padrão de entrada, saída e erro. Redirecionamentos conectam esses fluxos a arquivos ou outros destinos." },
      { title: "Pipes", body: "Um pipe conecta a saída de um processo à entrada de outro. Assim, pequenos programas podem ser combinados em uma sequência." }
    ],
    roadmap: ["Ler uma linha de comando", "Separar nome e argumentos", "Executar comandos internos simples", "Executar programas externos", "Adicionar redirecionamento e pipes em ambiente controlado"],
    experiment: { title: "Fluxo de um pipe", description: "A saída do primeiro comando se torna a entrada do segundo.", code: "comando A | comando B\n\nstdout de A → stdin de B" },
    challenge: "Desenhe o fluxo de dados de uma sequência que filtra linhas e depois conta quantas restaram. Identifique entrada, saída e erro.",
    glossary: [{ term: "Processo", definition: "Instância de um programa em execução." }, { term: "Pipe", definition: "Canal que conecta a saída de um processo à entrada de outro." }, { term: "Código de saída", definition: "Valor que indica o resultado da execução de um processo." }],
    source: originalCollection
  },
  "operating-system": {
    slug: "operating-system",
    intro: "Um sistema operacional coordena o uso do hardware e oferece abstrações para os programas. Ele administra processos, memória, arquivos, dispositivos e permissões.",
    objective: "Mapear os principais serviços do sistema operacional e suas responsabilidades.",
    prerequisites: ["Programação", "Arquitetura básica de computadores", "Noções de memória"],
    fundamentals: [
      { title: "Kernel", body: "O kernel é a parte central que gerencia recursos e oferece serviços controlados aos programas. Ele opera com privilégios maiores que aplicações comuns." },
      { title: "Processos e threads", body: "Processos isolam recursos e endereços de memória. Threads permitem executar fluxos de trabalho dentro de um processo." },
      { title: "Memória virtual", body: "Cada processo trabalha com um espaço de endereços virtual. O sistema traduz esses endereços para memória física e aplica isolamento." },
      { title: "Sistema de arquivos", body: "O sistema de arquivos organiza dados persistentes em diretórios e arquivos. Metadados e permissões ajudam a controlar acesso e organização." }
    ],
    roadmap: ["Desenhar a relação entre aplicações e kernel", "Estudar estados de um processo", "Simular escalonamento com uma fila", "Representar páginas de memória", "Modelar arquivos e permissões"],
    experiment: { title: "Estados de um processo", description: "Um processo alterna entre estados conforme é criado, recebe CPU, espera por eventos e termina.", code: "novo → pronto → executando → terminado\n                  ↘ aguardando → pronto" },
    challenge: "Explique como o sistema divide o tempo de CPU entre três processos e o que acontece quando um deles precisa aguardar uma operação de entrada e saída.",
    glossary: [{ term: "Kernel", definition: "Núcleo do sistema operacional responsável por gerenciar recursos." }, { term: "Escalonador", definition: "Componente que decide qual tarefa recebe CPU." }, { term: "Memória virtual", definition: "Abstração de endereços de memória oferecida a cada processo." }],
    source: originalCollection
  },
  "memory-allocator": {
    slug: "memory-allocator",
    intro: "Um alocador de memória administra blocos de memória disponíveis para programas. Ele atende pedidos, registra regiões ocupadas e reutiliza espaços liberados.",
    objective: "Entender alocação, fragmentação e estratégias de gerenciamento de blocos.",
    prerequisites: ["Arrays e estruturas", "Noções de memória", "Conceito de endereço e tamanho"],
    fundamentals: [
      { title: "Heap", body: "A heap é uma região usada para alocações dinâmicas. O alocador controla quais partes estão livres ou ocupadas." },
      { title: "Blocos e metadados", body: "Um alocador precisa registrar tamanho e estado dos blocos. Metadados permitem localizar e combinar regiões livres." },
      { title: "Fragmentação", body: "Fragmentação externa ocorre quando o espaço livre está dividido em partes pequenas. Fragmentação interna acontece quando um bloco reservado é maior que o pedido." },
      { title: "Estratégias", body: "First fit, best fit e segregação por tamanho são estratégias para encontrar espaço. Cada uma equilibra velocidade, desperdício e complexidade." }
    ],
    roadmap: ["Representar uma área de memória como lista de blocos", "Implementar busca por bloco livre", "Marcar blocos como ocupados", "Liberar e combinar blocos adjacentes", "Medir fragmentação em cenários de teste"],
    experiment: { title: "Mapa de blocos", description: "Uma área de 100 unidades pode ser dividida em blocos ocupados e livres.", code: "[ ocupado: 20 ][ livre: 30 ][ ocupado: 10 ][ livre: 40 ]" },
    challenge: "Compare first fit e best fit em uma sequência de pedidos. Registre quais blocos seriam escolhidos e discuta o espaço livre restante.",
    glossary: [{ term: "Heap", definition: "Região de memória usada para alocação dinâmica." }, { term: "Fragmentação externa", definition: "Espaço livre dividido em blocos que podem não atender a um pedido maior." }, { term: "Coalescência", definition: "Combinação de blocos livres adjacentes em um bloco maior." }],
    source: originalCollection
  },
  "virtual-machine": {
    slug: "virtual-machine",
    intro: "Uma máquina virtual didática simula uma arquitetura abstrata por meio de instruções, memória e registradores. Um interpretador busca cada instrução e atualiza o estado da máquina.",
    objective: "Projetar um conjunto pequeno de instruções e executar um programa em bytecode.",
    prerequisites: ["Lógica e arrays", "Operações aritméticas", "Noções de memória"],
    fundamentals: [
      { title: "Conjunto de instruções", body: "O conjunto define operações disponíveis, como carregar valores, somar, comparar e saltar. Cada instrução possui uma representação e regras de execução." },
      { title: "Registradores", body: "Registradores são espaços pequenos e rápidos para guardar valores temporários. Uma VM simples pode usar uma pilha em vez de vários registradores." },
      { title: "Memória e pilha", body: "A memória guarda dados endereçáveis. A pilha organiza valores temporários e facilita chamadas e avaliação de expressões." },
      { title: "Ciclo de execução", body: "A máquina busca a próxima instrução, decodifica seus operandos e executa a operação. Um contador de programa indica qual instrução será lida." }
    ],
    roadmap: ["Definir cinco instruções simples", "Criar memória e contador de programa", "Implementar o ciclo buscar-decodificar-executar", "Executar um programa de soma", "Adicionar saltos e condições"],
    experiment: { title: "Programa em instruções", description: "Uma VM baseada em pilha pode empilhar dois valores, somá-los e encerrar.", code: "PUSH 2\nPUSH 3\nADD\nHALT\n\nresultado na pilha: 5" },
    challenge: "Crie instruções para subtrair, duplicar um valor e encerrar. Escreva um programa que calcule (8 + 2) × 3.",
    glossary: [{ term: "Opcode", definition: "Código que identifica uma operação de máquina." }, { term: "Contador de programa", definition: "Valor que indica a próxima instrução a executar." }, { term: "Bytecode", definition: "Representação intermediária de instruções." }],
    source: originalCollection
  },
  docker: {
    slug: "docker",
    intro: "Contêineres isolam processos e seus ambientes de execução sem exigir uma máquina virtual completa para cada aplicação. A ideia combina isolamento, limites de recursos e sistemas de arquivos organizados.",
    objective: "Compreender as abstrações que tornam contêineres portáveis e isolados.",
    prerequisites: ["Linux ou outro sistema operacional", "Processos e arquivos", "Noções de terminal"],
    fundamentals: [
      { title: "Processos isolados", body: "Namespaces criam visões isoladas de recursos como processos, rede e pontos de montagem. O processo dentro do contêiner enxerga um ambiente limitado." },
      { title: "Limites de recursos", body: "Grupos de controle podem limitar e contabilizar CPU, memória e outros recursos. Isolamento não significa recursos infinitos." },
      { title: "Sistema de arquivos", body: "Imagens organizam camadas de arquivos usadas para iniciar contêineres. Camadas compartilhadas reduzem duplicação e facilitam distribuição." },
      { title: "Imagem e contêiner", body: "A imagem descreve um ambiente empacotado; o contêiner é uma instância em execução desse ambiente. Configuração e dados persistentes precisam ser tratados separadamente." }
    ],
    roadmap: ["Diferenciar imagem e contêiner", "Estudar isolamento de processos", "Modelar camadas de sistema de arquivos", "Identificar limites de CPU e memória", "Executar uma aplicação de demonstração em ambiente local"],
    experiment: { title: "Imagem versus execução", description: "Uma imagem é um molde; cada contêiner iniciado a partir dela é uma instância independente.", code: "imagem: app + dependências\n  ├── contêiner A (execução 1)\n  └── contêiner B (execução 2)" },
    challenge: "Desenhe a arquitetura de uma aplicação web em contêineres: aplicação, banco de dados e armazenamento persistente. Explique quais dados precisam sobreviver à remoção de um contêiner.",
    glossary: [{ term: "Namespace", definition: "Mecanismo de isolamento da visão de recursos do sistema." }, { term: "Imagem", definition: "Pacote imutável usado como base para criar contêineres." }, { term: "Volume", definition: "Área de dados persistentes associada a contêineres." }],
    source: originalCollection
  },
  emulator: {
    slug: "emulator",
    intro: "Um emulador reproduz por software o comportamento de outro sistema. Ele modela componentes como CPU, memória, dispositivos e instruções para executar programas destinados à plataforma simulada.",
    objective: "Entender o ciclo de instruções e a relação entre CPU, memória e dispositivos.",
    prerequisites: ["Sistemas numéricos", "Lógica", "Arquitetura básica de computadores"],
    fundamentals: [
      { title: "Estado da máquina", body: "O emulador mantém registradores, memória, contador de programa e estado dos dispositivos. Esse conjunto representa a situação atual da máquina simulada." },
      { title: "Decodificação", body: "Cada opcode identifica uma instrução e seus operandos. O emulador interpreta a instrução conforme as regras da arquitetura." },
      { title: "Temporização", body: "Alguns sistemas dependem da relação entre instruções e ciclos. Uma emulação mais fiel precisa coordenar CPU e dispositivos." },
      { title: "Entrada e saída", body: "Teclado, tela, áudio e armazenamento são modelados como dispositivos virtuais. Programas interagem com eles por registradores ou endereços específicos." }
    ],
    roadmap: ["Definir uma arquitetura fictícia simples", "Criar registradores e memória", "Implementar instruções básicas", "Adicionar entrada e saída simuladas", "Testar programas curtos conhecidos"],
    experiment: { title: "Ciclo de instrução", description: "O contador aponta para a instrução atual; depois de executá-la, avança ou muda conforme a operação.", code: "buscar → decodificar → executar → atualizar estado" },
    challenge: "Crie uma arquitetura fictícia com quatro registradores e seis instruções. Escreva um programa que mova valores e calcule uma soma.",
    glossary: [{ term: "Opcode", definition: "Identificador de uma instrução." }, { term: "Registrador", definition: "Pequeno espaço de armazenamento interno da CPU." }, { term: "Ciclo de instrução", definition: "Sequência de etapas para buscar e executar uma instrução." }],
    source: originalCollection
  },
  "network-stack": {
    slug: "network-stack",
    intro: "Uma pilha de rede organiza a comunicação em camadas. Cada camada oferece serviços à camada acima e usa os serviços da camada abaixo para transportar dados.",
    objective: "Entender encapsulamento, endereçamento e o papel dos protocolos.",
    prerequisites: ["Bits e bytes", "Noções de endereços", "Programação básica"],
    fundamentals: [
      { title: "Camadas", body: "Modelos em camadas separam responsabilidades. Aplicações descrevem mensagens; transporte organiza comunicação entre processos; rede encaminha pacotes entre redes." },
      { title: "Encapsulamento", body: "Cada camada adiciona informações de controle ao dado recebido, como portas, endereços e verificações. No destino, essas informações são interpretadas na ordem inversa." },
      { title: "Endereçamento e portas", body: "Endereços identificam interfaces ou destinos de rede. Portas ajudam a direcionar dados ao processo correto em um dispositivo." },
      { title: "Confiabilidade", body: "Protocolos podem oferecer confirmação, retransmissão e controle de fluxo. Outros priorizam simplicidade e menor sobrecarga." }
    ],
    roadmap: ["Desenhar as camadas de uma comunicação", "Representar uma mensagem de aplicação", "Adicionar cabeçalhos conceituais", "Simular encapsulamento e desencapsulamento", "Comparar serviços de transporte"],
    experiment: { title: "Encapsulamento", description: "Uma mensagem recebe cabeçalhos em cada camada antes de ser transmitida.", code: "dados da aplicação\n→ segmento de transporte\n→ pacote de rede\n→ quadro de enlace" },
    challenge: "Descreva o caminho de uma mensagem enviada por um navegador a um servidor. Identifique onde entram endereço IP, porta e dados da aplicação.",
    glossary: [{ term: "Pacote", definition: "Unidade de dados transportada por uma camada de rede." }, { term: "Porta", definition: "Identificador lógico usado para direcionar dados a um serviço." }, { term: "Encapsulamento", definition: "Processo de adicionar informações de controle aos dados." }],
    source: originalCollection
  },
  "bittorrent-client": {
    slug: "bittorrent-client",
    intro: "BitTorrent é um protocolo de distribuição ponto a ponto no qual participantes compartilham partes de um arquivo. O cliente coordena descoberta de participantes, verificação de integridade e transferência de blocos.",
    objective: "Compreender metadados, peers, partes e verificação de integridade em uma rede P2P.",
    prerequisites: ["Redes e HTTP", "Arquivos e bytes", "Funções hash"],
    fundamentals: [
      { title: "Metadados", body: "Metadados descrevem arquivos, tamanhos e informações necessárias para identificar e verificar partes do conteúdo." },
      { title: "Peers e swarm", body: "Peers são participantes que compartilham partes do conteúdo. O conjunto de participantes interessados em um mesmo recurso forma o swarm." },
      { title: "Chunks", body: "Arquivos são divididos em partes menores que podem ser transferidas em paralelo. A estratégia de seleção influencia eficiência e disponibilidade." },
      { title: "Integridade", body: "Hashes permitem verificar se cada parte recebida corresponde ao conteúdo esperado. Uma parte inválida deve ser descartada e obtida novamente." }
    ],
    roadmap: ["Entender a estrutura dos metadados", "Dividir um arquivo de teste em partes", "Calcular hashes para verificação", "Simular participantes e disponibilidade", "Modelar o estado de download sem conectar a redes públicas"],
    experiment: { title: "Divisão em partes", description: "Um arquivo de demonstração pode ser dividido em partes numeradas e verificadas individualmente.", code: "arquivo → [parte 0] [parte 1] [parte 2]\nverificação: hash(parte) == hashEsperado" },
    challenge: "Projete um simulador local com três participantes e quatro partes fictícias. Mostre como o cliente decide quais partes ainda faltam e como verifica os dados recebidos.",
    glossary: [{ term: "Peer", definition: "Participante que troca dados diretamente com outros participantes." }, { term: "Swarm", definition: "Conjunto de peers associados a um mesmo conteúdo." }, { term: "Chunk", definition: "Parte de um arquivo transferida separadamente." }],
    source: originalCollection
  },
  bot: {
    slug: "bot",
    intro: "Um bot é um programa que reage a eventos e executa tarefas automaticamente por meio de regras, APIs ou modelos. Sua arquitetura costuma separar entrada, interpretação, lógica e resposta.",
    objective: "Planejar um bot orientado a eventos com comandos e integração por API.",
    prerequisites: ["Lógica de programação", "Funções e objetos", "Noções de HTTP e APIs"],
    fundamentals: [
      { title: "Eventos", body: "O bot aguarda acontecimentos, como uma mensagem ou uma tarefa agendada. Cada evento é convertido em uma entrada que pode ser processada." },
      { title: "Comandos e roteamento", body: "Um roteador identifica o tipo de evento e direciona para o manipulador correto. Validação de argumentos evita ações inesperadas." },
      { title: "APIs e estado", body: "APIs permitem consultar ou enviar dados a outros serviços. Estado pode guardar preferências e contexto, mas deve ser limitado e protegido." },
      { title: "Confiabilidade", body: "Tratamento de erros, limites de uso, registros e prevenção de duplicidade tornam o bot mais previsível. Segredos de API devem ficar fora do código público." }
    ],
    roadmap: ["Definir o objetivo e os limites do bot", "Criar um roteador de comandos", "Tratar eventos de entrada", "Integrar uma API de demonstração", "Adicionar logs, validação e testes"],
    experiment: { title: "Fluxo orientado a eventos", description: "O evento chega, é identificado, processado e recebe uma resposta.", code: "evento → roteador → comando → serviço → resposta" },
    challenge: "Projete um bot de perguntas frequentes. Liste três eventos, dois comandos, dados que ele precisa guardar e como evitar responder duas vezes ao mesmo evento.",
    glossary: [{ term: "Webhook", definition: "Notificação enviada por um serviço quando um evento acontece." }, { term: "Roteador", definition: "Componente que direciona uma entrada ao manipulador apropriado." }, { term: "Idempotência", definition: "Propriedade de uma operação cujo processamento repetido não duplica o efeito." }],
    source: originalCollection
  },
  cli: {
    slug: "cli",
    intro: "Uma aplicação de linha de comando recebe argumentos e opções, executa uma tarefa e comunica resultados pelo terminal. CLIs bem projetadas são previsíveis, documentadas e fáceis de combinar com outras ferramentas.",
    objective: "Construir a estrutura de uma ferramenta de terminal com argumentos e mensagens claras.",
    prerequisites: ["Fundamentos de programação", "Strings e arrays", "Uso básico do terminal"],
    fundamentals: [
      { title: "Argumentos e opções", body: "Argumentos posicionais identificam os valores principais. Opções nomeadas modificam o comportamento e costumam ter formas curta e longa." },
      { title: "Entrada e saída", body: "A CLI pode ler argumentos, arquivos ou entrada padrão. Saída padrão comunica resultados e saída de erro apresenta problemas." },
      { title: "Códigos de saída", body: "Um código de saída permite que scripts saibam se a execução funcionou. Sucesso e falha devem ser representados de forma consistente." },
      { title: "Ajuda e configuração", body: "Uma boa CLI explica uso, opções e exemplos. Configurações devem ter precedência clara entre argumentos, arquivos e valores padrão." }
    ],
    roadmap: ["Definir o comando principal", "Ler argumentos", "Validar opções", "Executar uma operação simples", "Adicionar ajuda, erros e códigos de saída"],
    experiment: { title: "Anatomia de um comando", description: "Uma CLI pode receber uma ação e opções nomeadas.", code: "organizador adicionar \"estudar redes\" --prioridade alta" },
    challenge: "Projete uma CLI para organizar tarefas. Defina três comandos, opções, exemplos de uso e mensagens para argumentos inválidos.",
    glossary: [{ term: "Argumento", definition: "Valor passado ao programa na linha de comando." }, { term: "Flag", definition: "Opção que ativa ou altera um comportamento." }, { term: "STDERR", definition: "Fluxo padrão usado para mensagens de erro." }],
    source: originalCollection
  },
  git: {
    slug: "git",
    intro: "Git é um sistema distribuído de controle de versão. Ele registra snapshots do projeto, conecta commits em um histórico e permite trabalhar em linhas paralelas por meio de branches.",
    objective: "Entender objetos, commits, referências e a ideia de histórico imutável.",
    prerequisites: ["Arquivos e diretórios", "Terminal básico", "Noções de hash"],
    fundamentals: [
      { title: "Objetos", body: "Git armazena objetos como blobs, trees e commits. Blobs guardam conteúdo; trees organizam nomes e diretórios; commits apontam para uma árvore e seus ancestrais." },
      { title: "Snapshots", body: "Um commit registra o estado do projeto em determinado momento. O histórico é uma cadeia ou grafo de commits, não apenas uma lista de diferenças." },
      { title: "Branches e referências", body: "Uma branch é uma referência móvel para um commit. Criar uma branch permite experimentar sem alterar diretamente outra linha de desenvolvimento." },
      { title: "Merge e conflitos", body: "Merge combina históricos. Quando duas mudanças não podem ser conciliadas automaticamente, o conflito precisa ser resolvido explicitamente." }
    ],
    roadmap: ["Criar blobs para arquivos", "Organizar blobs em uma árvore", "Criar commits com referências a pais", "Implementar referências de branch", "Estudar merge e resolução de conflitos"],
    experiment: { title: "Grafo de commits", description: "Branches são nomes que apontam para commits; novos commits avançam a referência.", code: "A ── B ── C  (main)\n      \\── D  (experimento)" },
    challenge: "Desenhe um histórico com duas branches que partem do mesmo commit. Mostre um merge e explique o que acontece se ambas alterarem a mesma linha.",
    glossary: [{ term: "Commit", definition: "Objeto que registra uma versão do projeto e aponta para seu histórico." }, { term: "Branch", definition: "Referência nomeada que aponta para um commit." }, { term: "Blob", definition: "Objeto Git que armazena o conteúdo de um arquivo." }],
    source: originalCollection
  },
  "3d-renderer": {
    slug: "3d-renderer",
    intro: "Um renderizador 3D transforma uma descrição matemática de uma cena em pixels. Ele combina geometria, câmera, materiais, iluminação e técnicas de projeção.",
    objective: "Compreender o caminho de vértices 3D até uma imagem 2D.",
    prerequisites: ["Álgebra básica", "Vetores e coordenadas", "Programação com arrays"],
    fundamentals: [
      { title: "Geometria", body: "Modelos são compostos por pontos, arestas e faces. Triângulos são comuns porque são simples de processar e sempre definem um plano." },
      { title: "Câmera e projeção", body: "A câmera define de onde a cena é observada. Projeção perspectiva faz objetos distantes parecerem menores; projeção ortográfica mantém escala aparente." },
      { title: "Rasterização", body: "Rasterização converte primitivas geométricas em fragmentos que correspondem a pixels. Testes de profundidade ajudam a decidir qual superfície aparece na frente." },
      { title: "Iluminação", body: "Modelos de iluminação aproximam como luz interage com superfícies. Normais, direção da luz e propriedades do material influenciam a cor final." }
    ],
    roadmap: ["Desenhar pontos em 3D", "Aplicar transformação de câmera", "Projetar pontos em 2D", "Rasterizar um triângulo", "Adicionar profundidade e iluminação simples"],
    experiment: { title: "Projeção conceitual", description: "Uma projeção perspectiva relaciona posição horizontal com profundidade; objetos mais distantes aparecem menores.", code: "x_tela ≈ distância_focal × x / z\ny_tela ≈ distância_focal × y / z" },
    challenge: "Desenhe um triângulo 3D, indique a câmera e explique como seus vértices seriam projetados em uma tela 2D.",
    glossary: [{ term: "Rasterização", definition: "Conversão de formas geométricas em fragmentos ou pixels." }, { term: "Normal", definition: "Vetor perpendicular a uma superfície, usado em cálculos de iluminação." }, { term: "Z-buffer", definition: "Estrutura que registra profundidade para resolver visibilidade." }],
    source: originalCollection
  },
  "augmented-reality": {
    slug: "augmented-reality",
    intro: "Realidade aumentada combina a imagem do ambiente com elementos digitais posicionados no espaço. Para isso, o sistema estima a posição da câmera e acompanha referências do mundo real.",
    objective: "Entender rastreamento, coordenadas e alinhamento entre câmera e objetos virtuais.",
    prerequisites: ["Vetores e matrizes", "Noções de câmera", "Programação básica"],
    fundamentals: [
      { title: "Câmera e calibração", body: "A câmera captura imagens e possui parâmetros que relacionam pontos do espaço com pixels. Calibração ajuda a estimar essa relação." },
      { title: "Rastreamento", body: "O sistema identifica características visuais ou marcadores e acompanha suas posições entre quadros. Isso ajuda a estimar o movimento da câmera." },
      { title: "Sistemas de coordenadas", body: "O ambiente, a câmera e os objetos virtuais podem usar referenciais diferentes. Transformações convertem posições entre esses espaços." },
      { title: "Composição", body: "O conteúdo virtual é renderizado com perspectiva e escala compatíveis com a cena. O alinhamento precisa ser atualizado conforme a câmera se move." }
    ],
    roadmap: ["Entender coordenadas de imagem e mundo", "Identificar um marcador de demonstração", "Estimar sua posição relativa", "Posicionar um objeto virtual", "Atualizar a posição entre quadros"],
    experiment: { title: "Referenciais", description: "Um objeto pode ser descrito em coordenadas do mundo e convertido para coordenadas da câmera antes de ser desenhado.", code: "posição_mundo → transformação da câmera → posição_câmera → projeção" },
    challenge: "Desenhe uma câmera observando um marcador e um objeto virtual. Explique quais transformações são necessárias para manter o objeto alinhado quando a câmera muda de posição.",
    glossary: [{ term: "Tracking", definition: "Acompanhamento da posição de uma referência ao longo do tempo." }, { term: "Calibração", definition: "Estimativa dos parâmetros que descrevem uma câmera ou sensor." }, { term: "Referencial", definition: "Sistema de coordenadas usado para descrever posições e orientações." }],
    source: originalCollection
  },
  "voxel-engine": {
    slug: "voxel-engine",
    intro: "Um motor de voxels representa um mundo tridimensional por células volumétricas. Ele precisa armazenar blocos, encontrar superfícies visíveis e desenhar regiões do mundo com eficiência.",
    objective: "Compreender representação em grade, chunks e geração de malhas.",
    prerequisites: ["Arrays e matrizes", "Coordenadas 3D", "Noções de renderização"],
    fundamentals: [
      { title: "Voxel e grade", body: "Um voxel é uma célula em uma grade tridimensional. Cada célula pode armazenar um tipo de material ou indicar espaço vazio." },
      { title: "Chunks", body: "Dividir o mundo em regiões menores facilita carregamento, atualização e renderização. Cada chunk pode ser processado separadamente." },
      { title: "Faces visíveis", body: "Faces entre dois blocos sólidos não precisam ser desenhadas. O motor examina vizinhos e gera geometria apenas para superfícies expostas." },
      { title: "Malhas e desempenho", body: "Agrupar faces em malhas reduz chamadas de desenho. Técnicas de otimização podem combinar faces adjacentes e atualizar apenas regiões alteradas." }
    ],
    roadmap: ["Representar um volume pequeno em uma matriz 3D", "Definir blocos sólidos e vazios", "Detectar faces expostas", "Gerar uma malha simples", "Dividir o mundo em chunks"],
    experiment: { title: "Face exposta", description: "Uma face só precisa aparecer quando o vizinho naquela direção está vazio ou fora do mundo.", code: "para cada bloco sólido:\n  para cada direção:\n    se vizinho estiver vazio:\n      adicionar face à malha" },
    challenge: "Modele uma estrutura de blocos 4×4×4. Explique como seu algoritmo evita desenhar faces internas e como dividiria o mundo em chunks.",
    glossary: [{ term: "Voxel", definition: "Célula volumétrica usada para representar dados em 3D." }, { term: "Chunk", definition: "Região do mundo processada como unidade." }, { term: "Malha", definition: "Conjunto de vértices, arestas e faces usado para desenhar geometria." }],
    source: originalCollection
  },
  "physics-engine": {
    slug: "physics-engine",
    intro: "Um motor de física simula movimento e interação entre objetos. Ele atualiza velocidades e posições, detecta colisões e aplica respostas aproximadas às forças envolvidas.",
    objective: "Entender vetores, integração temporal e detecção de colisões em uma simulação simples.",
    prerequisites: ["Vetores", "Matemática básica", "Programação com atualização em ciclos"],
    fundamentals: [
      { title: "Posição e velocidade", body: "Posição descreve onde o objeto está; velocidade descreve como ela muda no tempo. A aceleração altera a velocidade." },
      { title: "Forças", body: "Forças podem ser combinadas para calcular aceleração. Em um modelo simples, a segunda lei de Newton relaciona força resultante, massa e aceleração." },
      { title: "Integração", body: "A simulação avança em pequenos passos de tempo. Métodos numéricos aproximam como posição e velocidade mudam durante cada passo." },
      { title: "Colisões", body: "O motor detecta quando formas se sobrepõem e calcula uma resposta, como separar objetos e alterar velocidades. Detecção e resposta são problemas relacionados, mas distintos." }
    ],
    roadmap: ["Representar objetos com posição e velocidade", "Aplicar aceleração constante", "Atualizar a simulação em passos fixos", "Detectar colisão entre círculos", "Adicionar uma resposta simples à colisão"],
    experiment: { title: "Movimento em passos", description: "Em uma aproximação simples, a velocidade altera a posição a cada intervalo de tempo.", code: "posição_nova = posição_atual + velocidade × Δt\nvelocidade_nova = velocidade_atual + aceleração × Δt" },
    challenge: "Modele uma bola que cai e quica em um chão horizontal. Identifique as variáveis necessárias e explique como representar a perda de energia a cada quique.",
    glossary: [{ term: "Delta t", definition: "Intervalo de tempo usado em uma atualização da simulação." }, { term: "Colisão", definition: "Interseção ou contato entre formas físicas." }, { term: "Impulso", definition: "Grandeza que representa a mudança de quantidade de movimento." }],
    source: originalCollection
  },
  game: {
    slug: "game",
    intro: "Um jogo combina entrada do jogador, regras, estado, atualização e apresentação audiovisual. O game loop organiza essas etapas repetidamente para manter o mundo em movimento.",
    objective: "Construir a arquitetura mínima de um jogo e entender o ciclo principal.",
    prerequisites: ["Variáveis e condicionais", "Funções", "Eventos de teclado ou mouse"],
    fundamentals: [
      { title: "Game loop", body: "O loop lê entradas, atualiza a lógica e desenha o quadro. Separar atualização e renderização ajuda a manter o comportamento previsível." },
      { title: "Estado do jogo", body: "O estado reúne posição de objetos, pontuação, vidas e fase atual. Regras transformam o estado conforme ações e eventos." },
      { title: "Entrada", body: "Teclado, mouse ou controle geram eventos ou estados de botões. O jogo converte essas entradas em ações do personagem ou da interface." },
      { title: "Colisão e feedback", body: "Colisões determinam interações entre objetos. Animações, sons e efeitos visuais comunicam o resultado das ações ao jogador." }
    ],
    roadmap: ["Definir objetivo e regras", "Criar o estado inicial", "Ler entradas", "Atualizar movimento e colisões", "Desenhar a cena e testar condições de vitória"],
    experiment: { title: "Ciclo principal", description: "Um jogo simples repete a leitura de entrada, atualização do estado e desenho da tela.", code: "enquanto jogo_ativo:\n  entrada = ler_controles()\n  atualizar(estado, entrada)\n  desenhar(estado)" },
    challenge: "Projete um jogo de desviar de obstáculos. Defina estado, controles, regra de pontuação, condição de fim e três casos de teste.",
    glossary: [{ term: "Game loop", definition: "Ciclo repetitivo que atualiza e desenha o jogo." }, { term: "Input", definition: "Entrada do jogador por teclado, mouse ou controle." }, { term: "Hitbox", definition: "Forma simplificada usada para detectar colisões." }],
    source: originalCollection
  },
  processor: {
    slug: "processor",
    intro: "Um processador executa instruções por meio de unidades que buscam, decodificam e processam dados. Seu funcionamento envolve registradores, unidade lógica e aritmética, controle e temporização.",
    objective: "Identificar os principais blocos de uma CPU e acompanhar uma instrução.",
    prerequisites: ["Binário e hexadecimal", "Lógica booleana", "Noções de circuitos"],
    fundamentals: [
      { title: "Registradores", body: "Registradores guardam valores usados imediatamente pela CPU. Eles são pequenos e rápidos em comparação com a memória principal." },
      { title: "ALU", body: "A unidade lógica e aritmética executa operações como soma, comparação e operações bit a bit. O controle seleciona a operação e os operandos." },
      { title: "Unidade de controle", body: "A unidade de controle coordena sinais que movem dados e selecionam operações. Ela interpreta a instrução atual." },
      { title: "Clock e ciclo", body: "O clock fornece uma referência temporal para a sincronização. Uma instrução pode exigir várias etapas ou ciclos, dependendo da arquitetura." }
    ],
    roadmap: ["Representar registradores", "Implementar uma ALU de operações simples", "Criar uma memória de instruções", "Decodificar uma instrução", "Simular o ciclo de execução"],
    experiment: { title: "Blocos funcionais", description: "Uma instrução de soma lê dois operandos, usa a ALU e grava o resultado em um registrador.", code: "registrador A ─┐\n               ├→ ALU → registrador destino\nregistrador B ─┘" },
    challenge: "Desenhe uma CPU mínima com quatro registradores e uma ALU. Mostre o caminho dos dados durante uma instrução de soma.",
    glossary: [{ term: "ALU", definition: "Unidade que realiza operações aritméticas e lógicas." }, { term: "Registrador", definition: "Pequeno armazenamento interno do processador." }, { term: "Clock", definition: "Sinal periódico usado para sincronizar operações." }],
    source: originalCollection
  },
  "misc-projects": {
    slug: "misc-projects",
    intro: "Esta área reúne experiências que cruzam diferentes disciplinas ou não pertencem a uma categoria única. O foco é aprender a decompor um problema, construir um protótipo e documentar o que foi descoberto.",
    objective: "Transformar uma ideia aberta em um experimento técnico verificável.",
    prerequisites: ["Curiosidade e disposição para testar", "Noções básicas de programação ajudam", "Capacidade de dividir tarefas"],
    fundamentals: [
      { title: "Definição do problema", body: "Descreva o que deseja observar ou construir, para quem e quais limites existem. Um problema claro evita que o projeto cresça sem direção." },
      { title: "Hipóteses", body: "Uma hipótese é uma afirmação que pode ser testada. Defina o que observaria para considerar a hipótese apoiada ou refutada." },
      { title: "Protótipo", body: "Construa a menor versão que permita testar a ideia. Um protótipo deve responder a uma pergunta, não tentar incluir todos os recursos finais." },
      { title: "Documentação", body: "Registre decisões, resultados, limitações e próximos passos. Documentar torna o aprendizado reproduzível e facilita a colaboração." }
    ],
    roadmap: ["Escrever uma pergunta de investigação", "Definir uma hipótese testável", "Escolher ferramentas e limites", "Construir um protótipo pequeno", "Registrar resultados e propor melhorias"],
    experiment: { title: "Ficha de experimento", description: "Antes de começar, registre o que quer descobrir e como vai avaliar o resultado.", code: "pergunta: o que quero descobrir?\nhipótese: o que acredito que acontecerá?\nteste: como vou observar?\nresultado: o que os dados mostraram?" },
    challenge: "Escolha uma ideia tecnológica pequena e escreva uma ficha de experimento com objetivo, hipótese, materiais, etapas, critério de sucesso e limitações.",
    glossary: [{ term: "Protótipo", definition: "Versão inicial criada para testar uma ideia." }, { term: "Hipótese", definition: "Afirmação que pode ser investigada por meio de um teste." }, { term: "Critério de sucesso", definition: "Condição observável usada para avaliar um resultado." }],
    source: originalCollection
  }
};

export function getLesson(technology: Technology): Lesson | null {
  return lessons[technology.slug] ?? null;
}
