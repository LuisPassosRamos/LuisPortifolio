# Portfólio de Luis Ramos

Site estático com a apresentação, os cases e o contato de Luis Guilherme Passos Ramos. Feito com Astro 7, TypeScript, SVG e CSS, para publicação no GitHub Pages.

- Endereço previsto: https://luispassosramos.github.io/LuisPortfolio/
- Planejamento e decisões: [docs/PLANNING.md](docs/PLANNING.md)
- Referências: [docs/REFERENCES.md](docs/REFERENCES.md)
- Validações executadas: [docs/VALIDATION.md](docs/VALIDATION.md)

## Instalar e executar

Requisitos: Node.js 22.23.4 ou mais recente (exigência do Astro 7) e npm.

```bash
npm install
```

```bash
npm run dev
```

O servidor de desenvolvimento abre em `http://localhost:4321/LuisPortfolio/`.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run check` | Checagem de tipos dos arquivos `.astro` e `.ts` |
| `npm test` | Testes: tabela verdade, circuito do hero e integridade dos dados |
| `npm run build` | Gera o site em `dist/` |
| `npm run preview` | Serve o conteúdo de `dist/` como ele ficará publicado |
| `npm run validate` | `check`, `test` e `build` em sequência |

## Estrutura

```
src/
  data/          conteúdo: perfil, trajetória, competências e projetos
  lib/           lógica pura: portas, circuito do hero, caminhos
  scripts/       comportamento no navegador: movimento, circuito, demo
  components/    cabeçalho, rodapé, circuito, demo e visuais dos cases
  layouts/       estrutura comum das páginas
  pages/         página inicial, /projetos/[slug]/, 404 e sitemap
  styles/        tokens e estilos globais
public/          arquivos servidos como estão (favicon, imagens)
tests/           testes com Vitest
docs/            planejamento, referências e validação
```

## Editar o conteúdo

Todo o texto fica em `src/data/`. Os componentes só leem esses arquivos.

- **Apresentação, links, trajetória e competências:** `src/data/profile.ts`.
- **Projetos:** `src/data/projects.ts`. A ordem do arquivo é a ordem de exibição. Projetos com `featured: true` ganham destaque na página inicial e precisam de `facts`.
- **Novo projeto:** copie um objeto existente, troque o `slug` (minúsculas e hífens) e preencha os campos. A página `/projetos/<slug>/` é criada no build. Seções sem conteúdo (`users`, `decision`, `results`, `links`, `stack` vazio) não aparecem.
- **Visual do case:** o campo `visual` escolhe o componente em `src/components/visuals/`. Para um diagrama de sistema, use `visual: 'system'` e preencha `diagram` com nós e ligações. Para algo novo, crie o componente, acrescente a chave em `VisualKind` (`src/data/types.ts`) e a condição em `src/pages/projetos/[slug].astro`.

Regras que o conteúdo segue: nenhum número sem fonte, toda tecnologia acompanhada do que ela faz no projeto e limites declarados em cada case. Os testes em `tests/data.test.ts` conferem slugs, links e referências entre arquivos.

### Imagens

Coloque os arquivos em `public/img/` e monte o caminho com a função `url()` de `src/lib/paths.ts`, que acrescenta a base do site:

```astro
---
import { url } from '../lib/paths';
---
<img src={url('img/exemplo.webp')} alt="Descrição da imagem" width="1200" height="750" loading="lazy" />
```

Prefira WebP ou AVIF, informe `width` e `height` e escreva o texto alternativo. Capturas de sistemas reais devem usar dados fictícios.

### Circuito do hero e demo

- O circuito é definido como dado em `src/lib/circuit.ts` (`heroCircuit`). Mudar posições, portas ou cabos ali redesenha o SVG no build.
- As regras das portas ficam em `src/lib/logic.ts`. Os textos explicativos da demo também.

## Gerar e visualizar o build

```bash
npm run build
```

```bash
npm run preview
```

Abra `http://localhost:4321/LuisPortfolio/`. O `preview` serve o site sob o mesmo caminho do GitHub Pages, então links e arquivos se comportam como em produção.

## Publicar

A publicação é **manual**. O workflow `.github/workflows/ci.yml` valida cada envio; `.github/workflows/deploy.yml` só roda quando acionado.

1. No GitHub, abra **Settings → Pages** e escolha **Source: GitHub Actions**.
2. Abra **Actions → Publicar no GitHub Pages → Run workflow**, na branch `main`.
3. Ao terminar, o endereço aparece no resumo da execução e em **Settings → Pages**.

Observações:

- O workflow lê o endereço e o caminho informados pelo próprio Pages. O site publicado funciona com qualquer nome de repositório; o endereço `…/LuisPortfolio/` depende de o repositório se chamar exatamente `LuisPortfolio`.
- No plano gratuito do GitHub, o Pages exige repositório público.
- Recomendado: em **Settings → Environments → github-pages**, restrinja a publicação à branch `main`.
- Para publicar a cada envio à `main`, acrescente `push: { branches: [main] }` em `on:` no `deploy.yml`.

## Domínio próprio

1. Crie `public/CNAME` com uma linha contendo o domínio, por exemplo `luisramos.dev`.
2. Configure o DNS no provedor do domínio conforme a documentação do GitHub Pages.
3. Em **Settings → Pages**, informe o domínio em **Custom domain** e ative **Enforce HTTPS**.
4. Publique de novo. O workflow passa a gerar o site na raiz do domínio, sem alterar o código.

Para testar localmente como ficará no domínio (PowerShell):

```powershell
$env:SITE_URL = 'https://luisramos.dev'; $env:BASE_PATH = '/'; npm run build; npm run preview
```

Para tornar isso o padrão, altere `site` e `base` em `astro.config.mjs`.

## Decisões principais

- **Astro com páginas reais** em vez de SPA: o conteúdo existe no HTML sem JavaScript, e links diretos funcionam no Pages sem roteamento por hash.
- **Sem framework no navegador:** dois scripts pequenos em TypeScript cuidam do circuito e da demo (cerca de 7 KB no total).
- **SVG no lugar de Canvas ou WebGL:** o circuito é desenhado no build e animado por CSS. Se o script falhar, o desenho continua na página.
- **Cor com função:** o âmbar marca o que está energizado ou é a ação principal.
- **Movimento controlável:** botão no cabeçalho, com padrão vindo de `prefers-reduced-motion`. Animações pausam fora da tela e com a aba oculta.
- **Conteúdo curado localmente:** nenhuma chamada à API do GitHub, nenhum rastreador, fontes servidas pelo próprio site.

## Limitações conhecidas

- Os cases do Olympus 3D e do gerador de provas usam diagramas com dados fictícios, não capturas dos sistemas.
- O case do LogicGates ainda não tem imagens do jogo.
- Não há imagem de compartilhamento (`og:image`), currículo para download, e-mail nem formulário.
- O circuito do hero é decorativo para leitores de tela; a demo de portas lógicas é o equivalente acessível.
- A interface foi verificada em navegador baseado em Chromium. Safari e Firefox não foram testados.
- Pendências de conteúdo estão listadas no fim de [docs/PLANNING.md](docs/PLANNING.md).
