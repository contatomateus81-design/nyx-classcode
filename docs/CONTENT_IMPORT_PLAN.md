# Plano de expansão do catálogo educacional

## Escopo confirmado

O Nyx ClassCode deve catalogar materiais das duas fontes em qualquer idioma, mantendo o idioma original visível e oferecendo filtros por idioma, assunto, formato e nível.

Fontes principais:
- freeCodeCamp: https://www.freecodecamp.org/portuguese/catalog?hl=pt-BR
- Free Programming Books: https://github.com/EbookFoundation/free-programming-books

## Como os materiais serão representados

O catálogo não deve tratar tudo como uma única "aula". Cada registro terá um tipo:
- trilha ou certificação;
- curso;
- módulo;
- aula ou desafio;
- livro;
- documentação ou referência;
- exercício ou conjunto de problemas;
- vídeo, podcast ou screencast;
- ferramenta interativa.

Campos mínimos previstos:
- título e descrição original;
- título/descrição em português quando houver tradução editorial própria;
- idioma original (BCP 47 quando identificável);
- assunto e tags;
- tipo de material;
- nível estimado, quando a fonte informar ou houver avaliação editorial;
- autor, instituição ou mantenedor;
- URL original;
- fonte e data da última verificação;
- licença do índice e licença do material de destino, separadamente;
- estado de disponibilidade (ativo, indisponível, requer conta, pago/parte paga, desconhecido).

## Regras de importação e direitos autorais

### freeCodeCamp
O repositório do freeCodeCamp informa que os materiais do diretório curriculum são protegidos por direitos autorais do freeCodeCamp. Portanto:
- importar metadados de estrutura (nomes de trilhas, capítulos, módulos e identificadores);
- apontar para as páginas oficiais de estudo;
- criar no ClassCode explicações, exemplos, diagramas, exercícios e projetos originais;
- não copiar em massa o texto integral dos desafios, workshops, quizzes ou soluções;
- atribuir a fonte e deixar claro quando o conteúdo é uma explicação independente.

### Free Programming Books
O repositório declara CC BY 4.0 para os arquivos de índice mantidos nele. Portanto:
- importar os metadados dos índices, com atribuição à Ebook Foundation e link para a entrada original;
- preservar autoria, URL, idioma e observações de licença;
- não presumir que o livro ou curso vinculado herda a licença CC BY do índice;
- verificar a licença e as condições de cada destino antes de hospedar ou reproduzir o conteúdo;
- quando a licença não estiver clara, catalogar apenas os dados bibliográficos e encaminhar ao site original.

## Fases de trabalho

1. Inventário: mapear todas as trilhas, certificações, capítulos, módulos, desafios e materiais listados pelas fontes.
2. Normalização: remover duplicatas sem apagar versões, idiomas ou edições diferentes; registrar redirecionamentos e links quebrados.
3. Catálogo: criar filtros por idioma, tema, formato, nível e fonte.
4. Conteúdo autoral: produzir aulas próprias em português, com glossário, exemplos, prática e referências.
5. Recursos visuais: criar diagramas editáveis, simulações de terminal e laboratórios adequados a cada assunto.
6. Auditoria: verificar precisão técnica, disponibilidade, atribuição e licenças.
7. Manutenção: permitir reimportação periódica dos índices e registrar a data da última verificação.

## Política de completude

"Completo" significa que o inventário do material foi registrado e que cada assunto possui uma rota de estudo clara. Não significa copiar o curso ou livro de terceiros. Para materiais protegidos, o ClassCode oferecerá uma aula original complementar e um link direto para a experiência completa no provedor original.

## Fontes técnicas iniciais

- Estrutura curricular freeCodeCamp: https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/structure/curriculum.json
- Documentação da estrutura do currículo: https://contribute.freecodecamp.org/curriculum-file-structure/
- Índice geral Free Programming Books: https://github.com/EbookFoundation/free-programming-books/blob/main/README.md
- Livros por linguagem: https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md
- Livros por assunto: https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-subjects.md
- Cursos em inglês: https://github.com/EbookFoundation/free-programming-books/blob/main/courses/free-courses-en.md
- Cursos em português brasileiro: https://github.com/EbookFoundation/free-programming-books/blob/main/courses/free-courses-pt_BR.md
