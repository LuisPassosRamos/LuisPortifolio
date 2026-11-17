# Planejamento do portfólio

Registro das decisões tomadas antes da implementação, em 16/11/2026. Cada afirmação sobre projetos está marcada pela origem: **[verificado]** (lido no repositório ou na documentação), **[informado]** (relatado por Luis, sem evidência independente) ou **[planejado]**.

## 1. Público e objetivo

| Público | O que procura | O que o site entrega |
| --- | --- | --- |
| Recrutadores | Em poucos segundos: quem é, o que faz, nível, como contatar | Hero com posicionamento, um projeto indicado como ponto de partida, GitHub e LinkedIn sempre visíveis |
| Desenvolvedores e líderes técnicos | Evidência: decisões, testes, limites, código | Cases com contribuição, decisão técnica, estado atual, limitações e links |
| Potenciais clientes | Se resolve problemas parecidos com os deles | Cases começam pelo problema e por quem usa, antes da tecnologia |

**Objetivo principal:** levar o visitante do hero a um case em um clique e do case ao contato, sem depender de animação nem de JavaScript para ler o conteúdo.

**Posicionamento adotado:** "Sistemas, automações e experiências interativas feitos a partir de problemas reais." É a hipótese inicial ajustada às evidências: um sistema em uso (Olympus 3D), um mod educacional testado (LogicGates), uma automação de rotina escolar e trabalhos acadêmicos de backend e sistemas distribuídos. O texto apresenta Luis como estudante de ADS que entrega software, não como especialista sênior.

## 2. Curadoria dos projetos

Selecionados cinco, cada um com uma evidência diferente:

| # | Projeto | Evidência que acrescenta | Peso |
| --- | --- | --- | --- |
| 1 | **Olympus 3D — gestão e caixa** | Necessidade real, usuários reais, produto web completo, evolução por feedback | Case principal e primeiro indicado |
| 2 | **LogicGates — mod educacional (TCC)** | Java, simulação com núcleo testável, jogos e educação | Case principal, com demo interativa |
| 3 | **Gerador de provas (estágio)** | Automação nascida de uma rotina de trabalho | Case curto |
| 4 | **IoT Management System** | API, autenticação, tempo real e testes em Python | Case acadêmico |
| 5 | **SISD — sistemas distribuídos** | Sockets, gRPC, multicast, eleição, checkpoint | Case acadêmico |

Ficaram de fora, com motivo:

- `Service-Marketplace` e `api-blockchain-contract`: propostas anteriores ao TCC atual, parcialmente implementadas; citadas na trajetória, sem case.
- `ChatMulticast`: trabalho em grupo (commits de três pessoas) e sobreposto ao SISD.
- `sistemas-distribuidos-trabalho`: exercício anterior com os mesmos conceitos do SISD.
- `IoT-Greenhouse` (dupla), `iot-secure-heterogeneous`, `IoT-Ecosystem`, `IoT-Security-Simulation`: simulações da mesma disciplina. Nas duas últimas, parte relevante dos commits é de agente automatizado (`copilot-swe-agent`), o que dificulta separar a contribuição.
- `microservices-test`, `web-socket-test`, `produtosapi`: exercícios de aprendizado.
- `Printables` (catálogo em React + Vite ligado à Olympus): não estava na lista enviada; fica como candidato se Luis quiser incluí-lo.

## 3. Fontes e lacunas

### Olympus 3D

Fontes: repositório privado local (README, `docs/PLANO-DE-MELHORIAS.md`, `src/`, `tests/`, histórico git).

- [verificado] Next.js 15 (App Router, Server Actions), React 19, TypeScript, Tailwind CSS 4, Turso/libSQL, hospedagem na Netlify, PWA instalável com Web Push.
- [verificado] Fluxos: produtos com custo e margem, caixa, estoque por filial, pedidos em quadro de produção, pedido entregue vira venda e baixa estoque, clientes, relatórios CSV/PDF, perfis com PIN, histórico de ações, lixeira de 30 dias, backup diário.
- [verificado] Gemini é **opcional**: organiza a descrição de pedidos e atende pedidos de edição em texto livre nos roteiros. Sem a chave, um organizador por regras assume. O motor de recomendação de marketing é 100% por regras.
- [verificado] 60 testes (Vitest) executados no build; 29 páginas; plano de melhorias com 11 critérios e notas registradas.
- [verificado] Histórico: 30 commits entre 14 e 16/11/2026; um deles tem autoria de assistente de IA (`Claude`).
- [informado] Lançado em 16/11/2026 e usado por cinco gestores. Não há métrica de impacto.
- Lacuna: capturas de tela autorizadas com dados fictícios. Até lá, o case usa diagramas explicativos identificados como tal. O `local.db` do repositório pode conter dados reais e não foi aberto.
- Lacuna: redação da contribuição. O histórico indica desenvolvimento assistido por IA; o texto do case diz isso de forma direta e precisa da confirmação de Luis.
- Não publicado: nomes de filiais, valores, clientes, endereços internos além do link informado.

### LogicGates (TCC)

Fontes: `LuisPassosRamos/LogicGatesMod` (público) e `tcc2026` (local).

- [verificado] Versão 1.3.3 para Hytale 0.7.4, Java (JDK 25), Gradle. Alavanca, cabo, lâmpada, sete portas (AND, OR, NOT, NAND, NOR, XOR, XNOR), bancada com fabricação, traduções en-US e pt-BR, comandos `/logichelp`, `/logicinspect`, `/logicenergy`.
- [verificado] Avaliador de circuitos em pacote sem dependência da API do jogo; tabelas de ajuda geradas pelo próprio avaliador.
- [verificado na documentação do repositório] Rodada local de 23/10/2026: 751 testes JUnit, 28 testes Python, 64 grupos de integração em servidor real. CI em Windows e Linux.
- [informado, registrado no repositório] Teste com dois jogadores e fabricação aprovados manualmente em 23/10/2026.
- [planejado] Classroom (turmas, atividades, entregas) e conexões verticais: documentados como proposta, **não implementados**.
- [planejado] Aplicação exploratória com um ou dois estudantes do ensino médio: descrita na introdução do TCC, ainda não realizada.
- [verificado] O repositório parte de um template comunitário de plugin (primeiros commits de outros autores, jan/2026). A escrita usa o template Typst do curso (`ifba-saj-ads-tcc/typst-template`), que não é de autoria de Luis.
- Lacuna: capturas ou vídeo do mod em jogo. O case usa os ícones reais dos itens (do repositório público) e a demo web.

### Gerador de provas (estágio)

- [informado] Estágio de TI na Escola Madre Maria do Rosário de Almeida II desde 2024: manutenção, rede e automações. Uma automação gera provas a partir de questões sem formatação e aplica o cabeçalho da escola.
- Lacuna: linguagem, ferramenta, forma de uso e quem usa. O case não cita tecnologia e a ilustração usa uma escola e questões fictícias.

### Acadêmicos

- [verificado] IoT Management System: FastAPI, SQLAlchemy 2, JWT, WebSocket, fila de comandos, auditoria com exportação, simulador de dispositivos, 14 testes pytest. 34 commits de Luis e 5 de agente automatizado.
- [verificado] SISD: sockets TCP, gRPC (heartbeat, Bully), multicast UDP, checkpoint e rollback, token ring, réplica em serviço Flask, Docker. 14 commits, todos de Luis.
- Lacuna: disciplina e semestre de cada trabalho.

### Perfil

- [informado] ADS no IFBA, campus Santo Antônio de Jesus, desde agosto de 2022. Conclusão prevista entre 2027.2 e 2028.1: fica fora do site por não ter data fechada.
- [informado] Cofundador e sócio da Olympus 3D desde abril de 2026; canal SISSO sobre Hytale.
- Sem currículo em arquivo, sem e-mail e sem telefone: o site não oferece download nem formulário. Contato por GitHub e LinkedIn.

## 4. Direção visual

### Alternativa A — Bancada

Uma bancada de montagem vista de cima em perspectiva isométrica. Base grafite, malha técnica discreta, blocos que se conectam por cabos. **A cor é o sinal:** o âmbar aparece apenas onde algo está energizado (lâmpada acesa, link em foco, chamada principal). O que está desligado fica em cinza-azulado. Títulos em Bricolage Grotesque, texto em Inter, anotações técnicas em JetBrains Mono.

- A favor: une modding (blocos), impressão 3D (camadas, montagem) e portas lógicas em uma única metáfora; a cor tem função; funciona parada, porque o circuito é um desenho completo mesmo sem animação.
- Contra: exige desenho próprio do circuito e disciplina para o âmbar não virar decoração.

### Alternativa B — Atlas

Um mapa de exploração: cada projeto é uma região, com glifos, trilhas e violeta com dourado, na linha de fantasia e descoberta.

- A favor: memorável e ligado ao repertório de jogos.
- Contra: afasta a leitura rápida de "o que ele faz", aproxima a identidade do roxo da Olympus, convida a esconder conteúdo atrás de exploração e fica perto demais de interfaces de jogos conhecidos.

### Escolha: A — Bancada

Atende ao pedido de identidade distinta da Olympus (âmbar no lugar do roxo, que aparece só como marca do case da empresa), dá função à cor e ao movimento e mantém o conteúdo em primeiro plano. Da alternativa B fica um único detalhe: a ideia de explorar, traduzida em um circuito que responde ao visitante.

**Tokens principais:** fundo `#101216`, superfície `#181B21`, linha `#2A2F38`, texto `#ECEEF2`, texto secundário `#A4ACB9`, sinal `#FFB23E`, desligado `#5C6675`. Contraste de texto verificado na validação.

## 5. Navegação e wireframe

Site estático com **páginas reais**: uma página inicial longa e uma página por case. Sem roteador no cliente.

```
/                               página inicial
/projetos/olympus-3d/           case
/projetos/logicgates/           case com a demo
/projetos/gerador-de-provas/    case curto
/projetos/iot-management-system/
/projetos/sisd/
/404.html
```

Página inicial, de cima para baixo:

1. **Cabeçalho fixo:** nome, âncoras (Projetos, Trajetória, Sobre, Contato) e o controle de movimento.
2. **Hero:** à esquerda, identificação, frase de posicionamento, um parágrafo, botão "Comece pelo Olympus 3D" e links de GitHub e LinkedIn. À direita (abaixo, no celular), o circuito vivo.
3. **Projetos:** dois destaques com composições diferentes entre si (Olympus com o diagrama pedido → caixa; LogicGates com a demo de portas lógicas embutida) e três linhas compactas em formato de ficha técnica. Nada de grade de cartões idênticos.
4. **Trajetória:** linha do tempo curta (IFBA, estágio, Olympus, canal).
5. **Competências:** cada frase de capacidade aponta para o projeto que a sustenta. Sem barras nem porcentagens.
6. **Sobre:** nome completo, formação, repertório criativo em um parágrafo.
7. **Contato:** GitHub e LinkedIn.

Página de case: resumo do que resolve → ficha (papel, período, estado, tecnologias) → contexto e problema → usuários → contribuição → solução → decisão técnica → visual → resultado observado → estado e limitações → links → próximo case.

## 6. Interação principal

**Circuito vivo no hero.** Um circuito lógico real desenhado em SVG isométrico: três alavancas, portas AND, XOR, OR e NOT e duas lâmpadas. O estado é calculado pelo mesmo módulo de lógica usado na demo.

| | Desktop | Celular |
| --- | --- | --- |
| Estado inicial | Circuito já montado e avaliado no HTML gerado no build | Igual |
| Resposta ao ponteiro | Blocos próximos se elevam; chegar perto de uma alavanca liga-a enquanto o ponteiro está ali; clicar fixa | Tocar na alavanca alterna |
| Propagação | O sinal percorre os cabos em sequência e acende as lâmpadas | Igual |
| Profundidade | Camadas deslocam poucos pixels com o ponteiro | Sem paralaxe |
| Sem interação | Depois de alguns segundos, uma alavanca alterna sozinha de tempos em tempos | Igual |

Regras: o circuito fica ao lado do texto, nunca atrás dele; é decorativo para leitores de tela (`aria-hidden`), com a demo acessível como equivalente funcional; pausa fora da tela e com a aba oculta; com movimento desligado, vira um desenho estático que ainda responde a clique, sem animação. Sem WebGL, logo sem fallback de WebGL: se o script falhar, o SVG do build continua na página.

**Demo de portas lógicas** (case do LogicGates e destaque na página inicial): seletor AND, OR, XOR, NOT; duas entradas (uma para NOT); lâmpada; frase explicando o resultado; tabela verdade com a linha atual marcada. Controles nativos (`radio` e `button` com `aria-pressed`), operáveis por mouse, toque e teclado. Identificada como demonstração web, não como o mod em execução.

**Microinterações:** destaque das conexões ao focar um projeto, revelação curta na rolagem, transição entre páginas pelo navegador. Um easter egg: ligar as três alavancas do hero.

**Controle de movimento:** botão no cabeçalho, lembrado no navegador. O padrão segue `prefers-reduced-motion`.

## 7. Stack

**Astro 7 + TypeScript, CSS próprio, SVG e scripts sem framework.**

- O conteúdo é majoritariamente estático. O Astro gera HTML completo para cada página, então o texto existe sem JavaScript e a falha de um efeito não derruba o conteúdo.
- Páginas reais resolvem links diretos e atualização no GitHub Pages sem roteamento por hash nem truque de `404.html`.
- As duas ilhas interativas são pequenas. Scripts TypeScript diretos evitam enviar um runtime de framework para uma página de leitura.
- React + Vite, a opção inicial, exigiria SPA com hash ou pré-renderização adicional para o mesmo resultado. Next.js não traz ganho para um site estático.
- SVG no lugar de Canvas ou Three.js: o circuito tem dezenas de elementos, não milhares; em SVG ele é renderizado no build e animado por CSS.
- Dados em `src/data/*.ts`, tipados, separados dos componentes.
- Testes com Vitest: tabela verdade, circuito do hero e integridade dos dados.
- Fontes locais via Fontsource (sem requisição a terceiros).

## 8. Execução e critérios de conclusão

1. Base do projeto, tokens e layout.
2. Dados dos projetos e páginas de case.
3. Circuito do hero e demo de portas lógicas.
4. README, workflows (validação automática, publicação manual).
5. Validação: testes, build sob `/LuisPortifolio/`, inspeção em três larguras, teclado, movimento reduzido, console, Lighthouse.
6. Envio ao repositório remoto. Publicação só depois da revisão de Luis.

Pronto quando: build sem erros; testes passando; nenhuma rolagem horizontal em 360, 768 e 1440 px; todos os links internos respondem sob `/LuisPortifolio/`; demo correta nas quatro portas; foco visível em todos os controles; conteúdo legível com JavaScript desativado; resultados medidos registrados em `docs/VALIDATION.md`.

## 9. Pendências que dependem de Luis

1. ~~Nome do repositório.~~ Resolvido em 16/11/2026: o nome correto é `LuisPortifolio`, o mesmo do repositório remoto. A grafia `LuisPortfolio` do pedido inicial foi erro de digitação, e o caminho base, os links e os documentos foram corrigidos.
2. Confirmar a redação da contribuição no Olympus 3D (desenvolvimento assistido por IA).
3. Capturas do Olympus 3D com dados fictícios e imagens ou vídeo do LogicGates em jogo.
4. Tecnologia e uso da automação de provas.
5. Disciplina e período dos trabalhos acadêmicos.
6. Currículo em PDF e e-mail profissional, se quiser oferecê-los.
7. Decidir se o catálogo `Printables` entra no portfólio.
8. Link do painel do Olympus 3D: ficou fora do case de propósito, por ser um sistema interno com login. Para incluir, acrescente o endereço em `links` no projeto `olympus-3d`.
9. O rodapé aponta para `github.com/LuisPassosRamos/LuisPortifolio`. O link só abre para visitantes depois que o repositório for público.
10. Revisar os textos escritos em primeira pessoa que não vieram de um relato direto: o parágrafo central do "Sobre", a frase de disponibilidade no contato e a descrição da contribuição em cada case.
11. LogicGates: confirmar se e como mencionar ferramentas de IA no desenvolvimento do mod. O texto atual não faz essa menção.
12. A documentação do Olympus 3D registra que o GitHub Actions da conta estava bloqueado por cobrança pendente. Se continuar assim, os workflows deste repositório não rodam até a regularização.

## 10. Ajustes feitos durante a implementação

- O circuito do hero passou de proporção 2:1 para ladrilhos de 56 × 34, para ganhar altura ao lado do título.
- O título do hero foi reduzido para caber em menos linhas.
- No celular, o controle de movimento virou um botão de pausar e retomar, porque o texto não cabia no cabeçalho.
- O workflow de publicação usa o endereço e o caminho informados pelo Pages. O padrão local é `/LuisPortifolio/`.
- O caminho base foi criado como `/LuisPortfolio/`, conforme o pedido inicial, e corrigido para `/LuisPortifolio/` depois da confirmação do nome.
