# Referências

Consultadas em 16/11/2026. **Observação** é o que está na página. **Inferência** é a leitura feita para este projeto. Nenhuma das referências comprova, por si, resultado em entrevistas ou vendas.

## Portfólios

### Brittany Chiang — https://brittanychiang.com/

- Observação: título e uma frase de posicionamento no topo; navegação por três âncoras (About, Experience, Projects); cada experiência traz período, cargo, descrição e tags; projetos com título, descrição, tags e imagem; contato apenas por perfis sociais, sem formulário; link "Skip to Content".
- Inferência: uma página longa com âncoras basta para a leitura rápida; contato por perfis é aceitável quando não há e-mail público.
- Adotado: âncoras na página inicial, link de pular para o conteúdo, contato por GitHub e LinkedIn.
- Não adotado: lista de tags como elemento principal. Aqui as tecnologias aparecem ligadas ao que fizeram em cada case.

### Bruno Simon — https://bruno-simon.com/

- Observação: o portfólio é um mundo 3D dirigível feito com Three.js, com opções de áudio, qualidade e renderizador; a página não descreve uma versão alternativa sem o 3D.
- Inferência: a interação é a mensagem, o que serve a um desenvolvedor criativo cujo produto é a própria experiência. Para quem precisa mostrar sistemas e casos, depender do jogo esconde o conteúdo.
- Adotado: uma interação que representa o trabalho do autor (aqui, um circuito lógico que funciona de verdade).
- Não adotado: conteúdo condicionado à exploração, 3D pesado e som.

### Josh W. Comeau — https://www.joshwcomeau.com/

- Observação: tom pessoal no texto; controles de som e de tema no rodapé; conteúdo organizado por categorias.
- Inferência: detalhes lúdicos convivem com leitura confortável quando são opcionais e controláveis.
- Adotado: controle explícito de movimento e microinterações discretas.

### Building an Effective Dev Portfolio — https://www.joshwcomeau.com/effective-portfolio/

- Observação: a página apresenta um e-book. Afirma que o portfólio deve ser uma seleção de 2 a 5 projetos e não um índice de tudo, que o autor deve conduzir o leitor pelos projetos e que modelos genéricos não são pensados para quem contrata. O público declarado é quem busca as primeiras vagas, principalmente em front-end, em empresas dos EUA e do Canadá; o autor diz não saber quanto se aplica fora disso.
- Inferência: a curadoria de cinco projetos e o formato de case guiado seguem o princípio. A aplicabilidade ao mercado brasileiro é suposição.
- Não verificado: o conteúdo do e-book em si não foi lido.

## Documentação técnica

| Tema | Fonte | Uso no projeto |
| --- | --- | --- |
| Deploy do Astro no GitHub Pages | https://docs.astro.build/en/guides/deploy/github/ | `site`, `base`, links internos com prefixo, `public/CNAME` para domínio próprio |
| Mudanças do Astro 7 | https://docs.astro.build/en/guides/upgrade-to/v7/ | `compressHTML` passou a remover espaços entre elementos; o compilador exige tags fechadas |
| Mudanças do Astro 6 | https://docs.astro.build/en/guides/upgrade-to/v6/ | Node 22 como mínimo, ordem de scripts e estilos |
| Fonte de publicação do Pages | https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site | Fonte "GitHub Actions", ambiente `github-pages`, regra de proteção por branch |
| Workflow inicial oficial | https://github.com/actions/starter-workflows/blob/main/pages/astro.yml | Permissões `pages: write` e `id-token: write`, grupo de concorrência `pages` |
| Versões das ações | tags dos repositórios `actions/*` | `checkout@v7`, `setup-node@v7`, `configure-pages@v6`, `upload-pages-artifact@v5`, `deploy-pages@v5` |
| Movimento reduzido | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion | Padrão do controle de movimento |
| WCAG 2.2.2 Pausar, parar, ocultar | https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | Animação automática precisa de pausa: botão no cabeçalho |
| WCAG 2.3.3 Animação de interações | https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | Paralaxe e elevação desligam com o controle |
| Page Visibility API | https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API | Pausa com a aba oculta |
| Intersection Observer | https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API | Pausa fora da tela e revelação na rolagem |
| Transições entre documentos | https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition | Transição entre páginas sem roteador no cliente |

As versões das ações foram lidas das tags publicadas em 16/11/2026. O workflow inicial oficial ainda cita versões anteriores; foram usadas as mais recentes de cada ação.

## Materiais do autor

- `LuisPassosRamos/olympus3d` (privado, lido localmente): README, plano de melhorias, código e testes.
- `LuisPassosRamos/LogicGatesMod` (público): README, `docs/architecture.md`, `docs/validation.md`, `docs/teaching.md`, `docs/roadmap/classroom.md`, código e testes.
- `LuisPassosRamos/tcc2026` (público, fork do template do curso): capítulo de introdução.
- `LuisPassosRamos/IoT-Management-System` e `LuisPassosRamos/TrabalhoFinalSD` (públicos): README, código e histórico.
- Demais repositórios públicos listados no pedido: README e histórico, para a curadoria.
