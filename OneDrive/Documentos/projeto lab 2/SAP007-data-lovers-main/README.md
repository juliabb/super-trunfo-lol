Data Lovers
Índice
1. Preâmbulo
2. Resumo do projeto
3. Objetivos de aprendizagem
4. Considerações gerais
5. Critérios mínimos de aceitação do projeto
6. Hacker edition
7. Considerações técnicas
8. Pistas, dicas e leituras complementares
9. Checklist
1. Preâmbulo
Segundo a Forbes 90% dos dados que existem hoje foram gerados durante os últimos dois anos. A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes quantidades de dados se convertam em informação compreensível para os usuários, precisamos entender e processar estes dados. Uma forma simples de fazer isso é criando interfaces e visualizações.

Na imagem seguinte, você pode ver como os dados que estão na parte esquerda podem ser usados para construir a interface amigável e compreensível que está na parte direita.

json-interface

2. Resumo do projeto
Neste projeto você construirá uma página web para visualizar um conjunto (set) de dados que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado. Por cálculo agregado nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e mínimos, etc).

Para este projeto trazemos uma série de dados de temáticas diferentes para que você explore e decida com qual delas deseja trabalhar. Escolhemos especificamente estes conjuntos de dados porque cremos que se adequem bem a esta etapa de sua aprendizagem.

Uma vez que você defina sua área de interesse, busque entender quem é seu usuário e o que exatamente ele necessita saber ou ver, para que assim possa construir a interface que o ajude a interagir e entender melhor os dados.

Este são os dados que propomos:

Pokémon: Neste conjunto você encontrará uma lista com os 151 Pokémon da região de Kanto, com suas respectivas estatísticas utilizadas no jogo Pokémon GO.

Pesquisa com jogadores de Pokémon Go
League of Legends - Challenger leaderboard: Este conjunto mostra a lista de jogadores de uma liga do jogo League of Legends (LoL).

Pesquisa com jogadores de LoL
Rick and Morty. Lista de personagens da série Rick & Morty. Você pode revisar a documentação da API neste link.

Pesquisa com seguidores de Rick and Morty
Jogos Olímpicos do Rio de Janeiro. Este conjunto nos fornece a lista de atletas que conquistaram medalhas nas Olimpíadas do Rio de Janeiro.

Pesquisa com stakeholders dos Jogos Olímpicos do Rio de Janeiro
Studio Ghibli. Lista de animações e personagens do Studio Ghibli.

Pesquisa com seguidores de Studio Ghibli
O objetivo principal deste projeto é que aprenda a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

3. Objetivos de aprendizagem
Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

HTML
 Uso de HTML semântico

Links
CSS
 Uso de seletores de CSS

Links
 Empregar o modelo de caixa (box model): borda, margem, preenchimento

Links
 Uso de flexbox en CSS

Links
Web APIs
 Uso de seletores de DOM

Links
 Gerenciamento de eventos de DOM

Links
 Manipulação dinâmica de DOM

Links
JavaScript
 Diferenciar entre tipos de dados primitivos e não primitivos

 Manipular arrays (filter, map, sort, reduce)

Links
 Manipular objects (key | value)

Links
 Variáveis (declaração, atribuição, escopo)

Links
 Uso de condicionais (if-else, switch, operador ternário)

Links
 Uso de laços (for, for..of, while)

Links
 Uso de funções (parâmetros, argumentos, valor de retorno)

Links
 Testes unitários

Links
 Uso ES modules

Links
 Uso de linter (ESLINT)

 Uso de identificadores descritivos (Nomenclatura | Semântica)

 Diferença entre expression e statements

Git e GitHub
 Git: Instalação e configuração

 Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)

 Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)

 GitHub: Criação de contas e repositórios, configuração de chave SSH

 GitHub: Implantação com GitHub Pages

Links
 GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)

user-centricity
 Desenhar a aplicação pensando e entendendo a usuária
product-design
 Criar protótipos para obter feedback e iterar

 Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

research
 Planejar e executar testes de usabilidade
4. Considerações gerais
Este projeto será executado em duplas.
Este projeto será entregue através do GitHub e a interface deve ser publicada no GitHub Pages.
Tempo para completá-lo: Tome como referencia 4 semanas.
5. Critérios mínimos de aceitação do projeto
Os critérios considerados para que tenha terminado este projeto são:

Definição de produto
Documente brevemente seu trabalho no arquivo README.md de seu repositório, contando como foi o processo de desenho e como você acredita que o produto possa resolver o problema (ou problemas) de seu usuário.

Histórias de usuário
Uma vez que entenda a necessidade dos usuários, escreva as Historias de Usuario que representem tudo que o usuário precisa fazer/ver. As histórias de usuário devem ser o resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (definition of done) e os critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a seguinte (cumpra com as definições de pronto + critérios de aceitação).

Desenho de interface do usuário
Protótipo de baixa fidelidade
Durante seu trabalho você deverá fazer e iterar rascunhos de sua solução usando lápis e papel. Recomendamos que fotografe todas as iterações que fizer, suba para seu repositório e as mencione no README.md.

Protótipo de alta fidelidade
O passo seguinte é desenhar sua Interface de Usuário (UI - User Interface). Para isso você deverá aprender a usar alguma ferramenta de visual design. Nós recomendamos Figma que é uma ferramenta que funciona no navegador e no qual é possível criar uma conta gratuita. Mas você é livre para usar outros editores gráficos como Illustrator, Photoshop, PowerPoint, Keynote, etc. Lembre-se de usar a identidade gráfica correspondente ao arquivo de dados que escolher.

O protótipo deve apresentar o que seria ideal em sua solução. Digamos que é o que desejaria implementar se tivesse tempo ilimitado para hackear. Não se esqueça de incluir em seu protótipo os fundamentos de visual design.

Testes de usabilidade
Durante o desafio você deverá fazer testes de usabilidade com usuários diferentes, e com base nos resultados desses testes, iterar seus desenhos de interface. Conte-nos quais problemas de usabilidade você detectou através dos testes e como os resolveu na proposta final.

Implementação da interface de usuário (HTML/CSS/JS)
Após desenhar sua interface de usuário, deverá trabalhar na sua implementação. Não é necessário que construa a interface exatamente da mesma forma que desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve priorizar as tarefas.

No mínimo, sua implementação deverá:

Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
Permitir ao usuário interagir com a interface para obter as informações que necessita;
Ser responsiva, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.
Que a interface siga os fundamentos de visual design.
Testes unitários
O boilerplate do projeto não inclui testes unitários. Assim, você terá que escrever seus próprios testes para as funções encarregadas de processar, filtrar e ordenar os dados, assim como calcular estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de statements (sentenças), functions (funções), lines (linhas), e branches (ramos) do arquivo src/data.js, que irá conter suas funções e que está detalhado na seção de Considerações técnicas.

6. Hacker edition
As seções chamadas Hacker Edition são opcionais. Se já tiver terminado todos os requisitos anteriores e tiver tempo, pode tentar completá-las. Dessa forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem deste projeto.

Features/características extra sugeridas:

Ao invés de consumir dados estáticos do repositório, pode fazer isso de forma dinâmica, carregando um arquivo JSON com fetch. A pasta src/data contém uma versão .js e uma .json de cada conjunto de dados.
Adicione à sua interface visualização de dados em forma de gráficos. Para isso, recomendamos explorar bibliotecas de gráficos como Chart.js ou Google Charts.
100% de cobertura nos testes.
7. Considerações técnicas
A lógica do projeto deve estar implementada somente em JavaScript (ES6), HTML e CSS. Neste projeto não está permitido o uso de bibliotecas e frameworks, apenas vanilla JavaScript, com exceção das bibliotecas para gráficos (ver Parte opcional acima).

O boilerplate contém uma estrutura de arquivos como ponto de partida, assim como toda a configuração de dependências:

.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (de acordo com o data que forem trabalhar)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
src/index.html
Como no projeto anterior, existe um arquivo index.html. Como já sabe, aqui entra a página que vai ser exibida ao usuário. Também serve para indicar quais scripts serão utilizados e juntar tudo o que foi feito.

src/main.js
Recomendamos que utilize src/main.js para todos os códigos que tenham a ver com a exibição dos dados na tela. Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (event listeners ou event handlers) e etc.

Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas.

Neste arquivo você encontrará uma série de imports comentados. Para carregar diferentes fontes de dados, você deverá "descomentar" esses imports. Cada um destes imports criará uma variável data com os dados correspondentes à fonte escolhida.

Por exemplo, se "descomentamos" a seguinte linha:

// import data from './data/pokemon/pokemon.js';
A linha ficaria assim:

import data from "./data/pokemon/pokemon.js";
E agora teríamos a variável data disponível em src/main.js.

src/data.js
O coração deste projeto é a manipulação de dados através de arrays e objetos.

Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidirem utilizar vai depender da sua implementação.

Estas funções devem ser puras e independentes do DOM. Estas funções serão depois usadas a partir do arquivo src/main.js, ao carregar a página e a cada vez que o usuário interagir com a interface (cliques, seleções, filtros, ordenação, etc).

src/data
Nesta pasta estão os dados de diferentes fontes. Você vai encontrar uma pasta para cada fonte, e dentro de cada pasta estão dois arquivos: um com a extensão .js e outro .json. Ambos os arquivos contém os mesmos dados; a diferença é que podemos usar o .js com uma tag <script>, enquanto o .json servirá para, opcionalmnente, ser carregado de forma assíncrona com fetch() (ver seção da Parte Opcional).

test/data.spec.js
Você também deverá fazer os teste unitários das funções implementadas no arquivo data.js.

8. Pistas, dicas e leituras complementares
Primeiros passos
Antes de começar a escrever o código, você deve definir seu produto com base no conhecimento que puder obter a respeito de seus usuários. Estas perguntas podem ajudar:

Quem são os usuários principais do produto?
Quais são os objetivos dos usuários com relação ao produto?
Quais são os dados mais relevantes que querem ver na interface e por quê?
Quando utilizam ou utilizariam o produto?
Toda sua investigação prévia deve ter como resultado as histórias de usuário de seu projeto.
Não faça os protótipos de alta fidelidade de todas as suas histórias. Comece somente pela que necessite para seu Sprint 1.
Quando estiver pronta para codar, sugerimos começar desta forma:

Uma das integrantes da dupla deve fazer um 🍴 fork do repositório de sua turma e irá adicionar a outra integrante da dupla como colaboradora do repositório.
:arrowdown: Clona seu _fork para seu computador (cópia local).
Instale as dependências do projeto com o comando npm install, assumindo que já tenha instalado o Node.js (que inclui npm).
Se tudo correr bem, deve ser capaz de executar os 🚥 testes unitários (unit tests) com o comando npm test.
Para ver a interface de seu programa no navegador, utilize o comando npm start para subir o servidor web no endereço http://localhost:5000.
Comece a codar! 🚀
Conteúdo de referência
UX Design (Experiência do usuário)
Pesquisa com usuarios / entrevistas
Princípios de design/UI
Desenvolvimento Front-End
Unidade de testes do curso de JavaScript do LMS.
Unidade de arrays do curso de JavaScript do LMS.
Unidade de objetos do curso de JavaScript do LMS.
Unidade de funções do curso de JavaScript do LMS.
Unidade de DOM do curso de JavaScript do LMS.
Array no MDN
Array.sort no MDN
Array.map no MDN
Array.filter no MDN
Array.reduce no MDN
Array.forEach no MDN
Object.keys no MDN
Object.entries no MDN
Fetch API no MDN
json.org
expressions-vs-statements
Tipos de Dados
Modulos: Export
Modulos: Import
Ferramentas
Git
GitHub
GitHub Pages
Node.js
Jest
Organização do trabalho
Histórias de Usuário
Definição de pronto
Critérios de aceitação
Guia para Data Lovers
9. Checklist
 Usar VanillaJS.
 Passa pelo linter (npm run pretest)
 Passa pelos testes (npm test)
 Testes unitários cobrem um mínimo de 70% de statements, functions, lines e branches.
 Inclui uma definição de produto clara e informativa no README.md.
 Inclui histórias de usuário no README.md.
 Inclui rascunho da solução (protótipo de baixa fidelidade) no README.md.
 Inclui uma lista de problemas detectados nos testes de usabilidade no README.md.
 UI: Mostra lista/tabela/etc com dados e/ou indicadores.
 UI: Permite ordenar dados por um ou mais campos (asc e desc).
 UI: Permite filtrar dados com base em uma condição.
 UI: É responsivo.