import type { Capability, ExperienceItem } from './types';

export const profile = {
  name: 'Luis Ramos',
  fullName: 'Luis Guilherme Passos Ramos',
  role: 'Desenvolvedor de software',
  location: 'Santo Antônio de Jesus, Bahia',
  headline: 'Sistemas, automações e experiências interativas feitos a partir de problemas reais.',
  lead: 'Sou estudante de Análise e Desenvolvimento de Sistemas no IFBA. Desenvolvi o sistema de gestão e caixa da Olympus 3D, empresa da qual sou sócio, e no TCC construo um mod de Hytale que ensina portas lógicas.',
  description:
    'Portfólio de Luis Ramos, desenvolvedor de software: sistema de gestão da Olympus 3D, mod educacional de portas lógicas para Hytale, automações e projetos acadêmicos.',
  /** Slug do projeto indicado como ponto de partida. */
  startWith: 'olympus-3d',
  links: {
    github: 'https://github.com/LuisPassosRamos',
    linkedin: 'https://www.linkedin.com/in/luis-guilherme-passos-ramos/',
  },
  repo: 'https://github.com/LuisPassosRamos/LuisPortfolio',
} as const;

export const about = {
  paragraphs: [
    'Meu nome é Luis Guilherme Passos Ramos. Estudo Análise e Desenvolvimento de Sistemas no IFBA, campus Santo Antônio de Jesus, com foco em desenvolvimento fullstack.',
    'Gosto de trabalho que começa em uma necessidade que dá para apontar: o caixa de uma empresa, a prova que precisa sair formatada, um conceito difícil de ensinar. O caminho até a solução costuma passar por interface, regra de negócio, banco de dados e automação, e é nesse percurso completo que eu trabalho.',
    'Fora do código, sou sócio da Olympus 3D, onde também cuido de parte da produção e do marketing, e produzo conteúdo sobre Hytale no canal SISSO. Jogos, modding e impressão 3D têm em comum o que me atrai em software: montar algo peça por peça e ver funcionar.',
  ],
} as const;

export const experience: ExperienceItem[] = [
  {
    period: 'abr. 2026 — hoje',
    place: 'Olympus 3D',
    role: 'Cofundador e sócio',
    text: 'Empresa de produtos personalizados feitos por impressão 3D para pessoas, empresas e eventos. Participo da produção local e do marketing e desenvolvi o sistema de gestão e caixa usado pela equipe.',
    project: 'olympus-3d',
  },
  {
    period: '2024 — hoje',
    place: 'Escola Madre Maria do Rosário de Almeida II',
    role: 'Estagiário de TI',
    text: 'Manutenção de equipamentos, rede e automações para a rotina da escola, como a montagem de provas no padrão institucional.',
    project: 'gerador-de-provas',
  },
  {
    period: 'ago. 2022 — hoje',
    place: 'IFBA, campus Santo Antônio de Jesus',
    role: 'Análise e Desenvolvimento de Sistemas',
    text: 'Trabalhos com APIs, sistemas distribuídos e IoT. Antes do tema atual do TCC, estudei um marketplace de serviços e contratos intermediados por blockchain, que ficaram como protótipos. O TCC em andamento é o mod educacional LogicGates.',
    project: 'logicgates',
  },
];

export const capabilities: Capability[] = [
  {
    title: 'Aplicações web completas',
    text: 'Da modelagem do banco à tela no celular, passando por autenticação, regras e publicação.',
    evidence: [
      { project: 'olympus-3d', note: 'Next.js, React, TypeScript e Turso em produção' },
      { project: 'iot-management-system', note: 'API em FastAPI com interface própria' },
    ],
  },
  {
    title: 'Regras de negócio com testes',
    text: 'Lógica isolada da interface e do ambiente, verificada por testes automatizados.',
    evidence: [
      { project: 'logicgates', note: 'avaliador de circuitos independente do jogo' },
      { project: 'olympus-3d', note: '60 testes de custos, estoque e caixa no build' },
    ],
  },
  {
    title: 'Comunicação entre sistemas',
    text: 'APIs REST, tempo real e troca de mensagens entre processos.',
    evidence: [
      { project: 'iot-management-system', note: 'REST, JWT e WebSocket' },
      { project: 'sisd', note: 'sockets TCP, gRPC e multicast UDP' },
    ],
  },
  {
    title: 'Automação e IA aplicada',
    text: 'Etapas repetitivas viram fluxo automático. IA entra onde ajuda, com alternativa quando não está disponível.',
    evidence: [
      { project: 'gerador-de-provas', note: 'prova montada a partir de texto sem formatação' },
      { project: 'olympus-3d', note: 'Gemini opcional, com organizador por regras' },
    ],
  },
  {
    title: 'Jogos e ensino',
    text: 'Mecânicas interativas usadas para explicar conceitos.',
    evidence: [{ project: 'logicgates', note: 'portas lógicas montadas dentro do Hytale' }],
  },
];
