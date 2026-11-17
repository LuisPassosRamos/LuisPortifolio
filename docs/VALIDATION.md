# Validação

Verificações executadas em 16/11/2026 sobre o build de produção servido localmente por `astro preview`. São medições de laboratório em uma única máquina. Nenhuma delas é dado de uso real.

As medições foram feitas com o caminho base `/LuisPortfolio/`, do pedido inicial. Depois da correção do nome para `/LuisPortifolio/`, foram refeitos a checagem de tipos, os testes, o build, a requisição aos links internos e a conferência do console. Lighthouse, capturas e testes manuais da demo não foram repetidos, porque a mudança afeta só o prefixo dos endereços.

## Ambiente

- Windows 11 Pro (26200), Intel Core i5-13420H, 8 GB de RAM.
- Node.js 22.23.5, npm 10.9.9, Astro 7.4.12.
- Inspeção manual: navegador embutido baseado em Chromium.
- Lighthouse 13.6.0 com Chrome 157 em modo headless, configuração padrão (celular simulado, rede e CPU com limitação simulada) e, quando indicado, `--preset=desktop`.

## Automação

| Verificação | Resultado |
| --- | --- |
| `npm run check` | 0 erros, 0 avisos em 27 arquivos |
| `npm test` | 23 testes em 3 arquivos, todos passando |
| `npm run build` | 7 páginas geradas, sem erros |
| Build com `BASE_PATH=/` | Gerado; links e arquivos passam a apontar para a raiz |

Os testes cobrem a tabela verdade de AND, OR, XOR e NOT contra valores escritos à mão, as oito combinações do circuito do hero contra as expressões booleanas e a integridade dos dados (slugs, links, referências).

## No navegador

| Verificação | Como | Resultado |
| --- | --- | --- |
| Rolagem horizontal | Script que mede todos os elementos de 7 páginas em 360, 768 e 1440 px | Nenhum elemento fora da tela |
| Links e arquivos internos | Requisição a 28 URLs encontradas no HTML | Todas com status 200 e sob `/LuisPortifolio/` |
| Endereço inexistente | `/LuisPortifolio/nao-existe/` | Página 404 do site |
| Demo de portas lógicas | 14 combinações acionadas pelos controles reais | Lâmpada, resumo, tabela e linha marcada corretos em todas |
| Demo por teclado | Setas no seletor, Tab, Espaço e Enter nas entradas | Funciona; foco visível |
| Circuito do hero | Clique em cada alavanca, seis vezes | Estados e leitura coerentes com a lógica |
| Controle de movimento | Clique no botão do cabeçalho | Nenhuma animação ativa, pulsos ocultos, sem alternância automática em 12 s; a escolha persiste entre páginas |
| Console | Carregamento da página inicial | Sem mensagens |
| Conteúdo sem JavaScript | Leitura do HTML gerado | Título, textos, links dos cases, SVG do circuito e as quatro tabelas verdade presentes |
| Layout | Capturas em 375, 1024 e 1440 px | Sem sobreposição ou corte após os ajustes do cabeçalho e das linhas de projeto no celular |

## Contraste

Razões calculadas pela fórmula da WCAG para os pares de cor em uso:

| Par | Razão |
| --- | --- |
| Texto sobre o fundo | 16,14 |
| Texto secundário sobre fundo, superfície e superfície 2 | 8,20 · 7,54 · 6,88 |
| Texto terciário sobre fundo, fundo 2 e superfície | 6,12 · 5,86 · 5,63 |
| Âmbar sobre fundo e superfície | 10,44 · 9,60 |
| Texto escuro sobre âmbar (botões) | 10,32 |
| Texto da prova ilustrativa sobre o papel | 14,77 e 7,50 |

Todos acima de 4,5:1.

## Lighthouse

| Página | Modo | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Inicial | celular | 100 | 100 | 100 | 100 | 1,1 s | 10 ms | 0 |
| Inicial | desktop | 100 | 100 | 100 | 100 | 0,3 s | 0 ms | 0 |
| LogicGates | celular | 84 | 100 | 100 | 100 | 1,1 s | 630 ms | 0 |
| Olympus 3D | celular | 90 | 100 | 100 | 100 | 1,5 s | 400 ms | 0 |

Peso transferido: 150 KiB na inicial, 193 KiB no LogicGates e 142 KiB no Olympus 3D. JavaScript total do site: cerca de 7 KB.

### Variação entre rodadas

Rodadas repetidas só de desempenho, no celular, deram resultados bem diferentes para a mesma página:

| Página | Desempenho | TBT |
| --- | --- | --- |
| Inicial (segunda rodada) | 79 | 920 ms |
| Olympus 3D (duas rodadas) | 82 · 82 | 750 ms · 750 ms |
| LogicGates (duas rodadas) | 80 · 84 | 840 ms · 600 ms |
| SISD | 82 | 740 ms |
| 404 | 96 | 230 ms |

O tempo de bloqueio vem quase todo de "Style & Layout" no início do carregamento. O que foi apurado:

- A página inicial foi de 10 ms a 920 ms de TBT sem nenhuma mudança no site.
- A página 404, com poucas dezenas de elementos, também registrou bloqueio.
- Bloquear as fontes do site não alterou o número (Olympus 3D: 730 ms).
- Em navegador já aberto, sem limitação de CPU, o carregamento do case do Olympus 3D não registrou nenhuma tarefa longa (`PerformanceObserver` para `longtask` e `long-animation-frame`) e o evento `load` ocorreu em 185 ms.

Leitura: LCP e CLS são estáveis e bons. O TBT oscila demais nesta máquina para apontar uma causa no site, e a hipótese de custo de inicialização do Chrome headless não foi comprovada. Fica como pendência medir de novo depois da publicação, com o PageSpeed Insights e na execução do GitHub Actions.

## Não verificado

- Aparelhos reais: as larguras de celular foram emuladas.
- Safari e Firefox.
- Leitor de tela. A auditoria automática de acessibilidade não substitui esse teste.
- A preferência `prefers-reduced-motion` do sistema operacional. O caminho de código é o mesmo do botão de movimento, que foi testado.
- Execução dos workflows no GitHub Actions.
- O site publicado. Nenhuma publicação foi feita.
