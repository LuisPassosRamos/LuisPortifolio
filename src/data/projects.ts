import type { Project } from './types';

/**
 * Conteúdo dos cases. A ordem deste arquivo é a ordem de exibição.
 * Regras de edição no README: nada de números sem fonte e toda tecnologia
 * acompanhada do que ela faz no projeto.
 */
export const projects: Project[] = [
  {
    slug: 'olympus-3d',
    title: 'Olympus 3D',
    subtitle: 'Sistema de gestão e caixa',
    kind: 'Produto em uso',
    featured: true,
    summary:
      'Painel web que reúne produtos, pedidos, caixa e estoque de uma empresa de impressão 3D e calcula o custo real de cada peça: filamento, energia, desgaste da máquina e hora de trabalho.',
    role: 'Sócio da empresa e desenvolvedor do sistema',
    period: 'Novembro de 2026',
    status: 'Em uso pela gestão, recebendo ajustes',
    facts: [
      'Lançado para a equipe em 16/11/2026 e usado por cinco gestores',
      '60 testes automatizados; o build só publica se todos passarem',
      'Funciona no celular como aplicativo instalável, com avisos de prazo',
    ],
    stack: [
      { name: 'Next.js 15 e React 19', use: 'telas e ações de servidor no mesmo projeto' },
      { name: 'TypeScript', use: 'tipos compartilhados entre telas, regras e testes' },
      { name: 'Turso (libSQL)', use: 'banco SQLite hospedado, incluindo as fotos comprimidas' },
      { name: 'Tailwind CSS 4', use: 'paleta e tipografia da marca em um só lugar' },
      { name: 'Netlify', use: 'hospedagem e funções agendadas de backup e avisos' },
      { name: 'Vitest', use: 'testes de custos, estoque, caixa, pedidos e acesso' },
      { name: 'Gemini (opcional)', use: 'organiza descrições de pedidos e edita roteiros em texto livre' },
    ],
    context: [
      'A Olympus 3D fabrica produtos personalizados por impressão 3D para pessoas, empresas e eventos. Cada pedido tem personalização, prazo, cores de filamento e uma impressora envolvida, e a empresa opera em mais de uma filial.',
      'Saber se uma peça dá lucro exige somar filamento, energia da impressora, desgaste do equipamento e tempo de trabalho. O sistema foi feito para concentrar esse cálculo, o estoque de cada filial e o registro de quem lançou cada venda em um lugar só, acessível pelo celular durante a produção.',
    ],
    users:
      'Os gestores da empresa. Hoje são cinco pessoas usando o painel, cada uma com seu perfil. Ainda não há medição de tempo economizado nem de impacto financeiro, então este case não traz números desse tipo.',
    contribution: [
      'Levantei os fluxos a partir da rotina da empresa: produtos, pedidos, produção, caixa e estoque.',
      'Defini onze critérios de qualidade com forma de medir (uso no celular, velocidade, backup, acesso e outros) e conduzi as rodadas de melhoria até cada um atingir a meta.',
      'Desenvolvi com apoio de assistentes de IA de programação, decidindo o que construir, validando cada entrega no uso e definindo as prioridades.',
      'Publiquei e mantenho o ambiente: hospedagem, banco de dados, backup e avisos.',
    ],
    solution: [
      {
        title: 'Custo de cada peça',
        text: 'O produto guarda tempo de impressão e filamentos usados. Custo e margem aparecem na hora, somando filamento, energia pela tarifa da filial, desgaste da impressora e hora de trabalho.',
      },
      {
        title: 'Do pedido ao caixa',
        text: 'Os pedidos andam por um quadro com quatro etapas. Ao marcar a entrega, a venda entra no caixa e o filamento sai do estoque. Voltar o pedido desfaz as duas coisas.',
      },
      {
        title: 'Estoque por filial',
        text: 'Filamentos e insumos são separados por filial, com transferência entre elas e alerta de estoque mínimo.',
      },
      {
        title: 'Quem fez o quê',
        text: 'Perfis individuais, histórico de ações, lixeira com 30 dias para desfazer e backup diário automático.',
      },
      {
        title: 'No celular',
        text: 'Instalável como aplicativo. Avisa quando um pedido vence no dia seguinte, quando atrasa e envia um resumo semanal.',
      },
      {
        title: 'Conteúdo e marketing',
        text: 'Um assistente por regras sugere formato e roteiro de publicação a partir do produto e do desempenho da conta no Instagram, lido pela API oficial.',
      },
    ],
    decision: {
      title: 'IA como opção, não como dependência',
      text: [
        'O assistente de marketing é um motor de regras: responde na hora, não tem custo por uso e funciona sempre. O Gemini entra em duas tarefas de texto livre: organizar a descrição de um pedido e atender a um pedido de edição escrito pelo gestor.',
        'Sem a chave configurada, um organizador por regras assume a primeira tarefa e os botões de edição rápida cobrem a segunda. Nos dois caminhos a alteração pode ser desfeita.',
        'O motivo é prático. O sistema roda em serviços gratuitos e não pode parar quando um limite de uso acaba.',
      ],
    },
    results: [
      'Publicado e compartilhado com a equipe em 16/11/2026.',
      '60 testes automatizados cobrem custos, estoque, caixa, pedidos e acesso. Tipos e testes rodam antes de cada publicação.',
      'O plano de melhorias do projeto registra auditorias Lighthouse no celular com desempenho entre 96 e 98 nas telas medidas e acessibilidade 100. São medições de laboratório, não dados de uso.',
    ],
    state: 'Em uso, com ajustes guiados pelo retorno dos gestores.',
    limits: [
      'Sem medição de impacto: não há números de tempo economizado ou de resultado financeiro.',
      'O controle de acesso é simples e pensado para uma equipe pequena. Contas individuais completas ficam para uma próxima etapa.',
      'Depende dos limites dos planos gratuitos de hospedagem e de banco.',
      'O código é privado e o painel exige login. Por isso este case usa um diagrama com dados fictícios no lugar de capturas de tela.',
    ],
    links: [],
    visual: 'olympus-flow',
    visualCaption: 'Diagrama explicativo com dados fictícios. Não é uma captura do sistema.',
  },
  {
    slug: 'logicgates',
    title: 'LogicGates',
    subtitle: 'Mod de Hytale para ensinar portas lógicas',
    kind: 'TCC em desenvolvimento',
    featured: true,
    summary:
      'Mod que leva alavancas, cabos, lâmpadas e portas lógicas para dentro do Hytale, para que estudantes montem circuitos e vejam no jogo a relação entre entradas e saídas.',
    role: 'Autor do mod e do trabalho de conclusão de curso',
    period: '2026',
    status: 'Mod na versão 1.3.3; pesquisa em andamento',
    facts: [
      'Sete portas lógicas, alavanca, cabo, lâmpada e bancada de fabricação',
      '751 testes JUnit na rodada registrada em 23/10/2026',
      'Turmas e atividades (Classroom) estão planejadas e ainda não foram implementadas',
    ],
    stack: [
      { name: 'Java (JDK 25)', use: 'plugin de servidor e avaliador de circuitos' },
      { name: 'Gradle', use: 'build, conferências e empacotamento' },
      { name: 'JUnit', use: 'regras das portas, ciclos e orientação dos blocos' },
      { name: 'Python', use: 'geradores de modelos e texturas e conferências do build' },
      { name: 'GitHub Actions', use: 'verificações em Windows e Linux' },
      { name: 'Typst', use: 'escrita do TCC, sobre o template do curso' },
    ],
    context: [
      'Portas lógicas costumam ser apresentadas com símbolos e tabelas. O TCC investiga o que acontece quando estudantes do ensino médio montam e analisam circuitos dentro de um jogo, prevendo e explicando o comportamento que observam.',
      'O recorte didático usa AND, OR e XOR com duas entradas e NOT com uma, em circuitos sem realimentação. O mod vai além desse recorte e é a base técnica da pesquisa.',
    ],
    users:
      'O público previsto são estudantes do ensino médio do IFBA, em uma aplicação exploratória com um ou dois participantes. Essa aplicação ainda não aconteceu.',
    contribution: [
      'Projetei as regras dos componentes: orientação pelo olhar do jogador, entradas opcionais, conexões compatíveis e comportamento em ciclos.',
      'Implementei o avaliador de circuitos, os componentes do jogo, os comandos de ajuda e inspeção e as traduções em português e inglês.',
      'Montei a automação de testes, incluindo a integração com um servidor real do jogo.',
      'Escrevo o TCC e a sequência de atividades para os estudantes.',
    ],
    attribution:
      'O repositório nasceu de um template comunitário de plugin para Hytale, e o texto do TCC usa o template Typst do curso. Nenhum dos dois é de minha autoria.',
    solution: [
      {
        title: 'Componentes',
        text: 'Alavanca, cabo, lâmpada e sete portas: AND, OR, NOT, NAND, NOR, XOR e XNOR. Cada porta aceita até três entradas e tem uma saída, marcadas com letras e seta no próprio bloco.',
      },
      {
        title: 'Avaliação',
        text: 'A cada mudança, o circuito é recalculado do zero a partir das alavancas. Só a posição da alavanca é salva; o resto é reconstruído quando o mundo carrega.',
      },
      {
        title: 'Ajuda dentro do jogo',
        text: 'Um comando mostra as regras e tabelas verdade calculadas pelo próprio avaliador. Outro explica por que uma porta específica está ligada ou desligada.',
      },
      {
        title: 'Fabricação',
        text: 'Uma bancada própria integra as peças ao sistema de fabricação do jogo.',
      },
    ],
    decision: {
      title: 'Um avaliador que não conhece o jogo',
      text: [
        'As regras dos circuitos ficam em um pacote sem nenhuma chamada à API do Hytale: ele recebe um mapa de blocos e devolve os sinais. Assim dá para testar centenas de combinações em instantes, sem abrir o jogo, e usar o mesmo código para gerar as tabelas de ajuda.',
        'A ligação com o jogo fica em outra camada, verificada por testes que sobem um servidor real, montam circuitos, reiniciam e conferem o resultado.',
      ],
    },
    results: [
      'Rodada local de 23/10/2026, registrada no repositório: 751 testes JUnit, 28 testes das ferramentas em Python e 64 grupos de verificação em servidor real.',
      'Teste manual com dois jogadores e fabricação em jogo aprovados na mesma data. Não é um teste de carga com uma turma.',
    ],
    state:
      'Etapa de circuitos concluída na versão 1.3.3. A aplicação com estudantes e a análise dos resultados fazem parte do TCC e ainda não foram realizadas.',
    limits: [
      'Classroom, a interface de turmas, atividades e entregas, existe como proposta documentada. Não há código dessa parte.',
      'As conexões são apenas horizontais. Ligações entre alturas diferentes estão no planejamento.',
      'Não há evidência de aprendizagem antes da aplicação com estudantes.',
      'Ainda sem imagens do jogo neste case. Os ícones mostrados são os dos itens do mod.',
    ],
    links: [
      { label: 'Código do mod no GitHub', href: 'https://github.com/LuisPassosRamos/LogicGatesMod' },
      { label: 'Texto do TCC no GitHub (em andamento)', href: 'https://github.com/LuisPassosRamos/tcc2026' },
    ],
    visual: 'logic-demo',
    visualCaption: 'Demonstração web inspirada no mod. Não executa o código do jogo.',
  },
  {
    slug: 'gerador-de-provas',
    title: 'Prova Pronta',
    subtitle: 'Automação para a rotina de uma escola',
    kind: 'Automação no estágio',
    featured: false,
    summary:
      'Aplicação que recebe provas em Word, PDF, fotos ou texto, permite conferir as questões lado a lado com o original e gera PDF e Word no padrão da escola.',
    role: 'Estagiário de TI e desenvolvedor da aplicação',
    period: 'Desde 2024',
    status: 'Código público e fluxo pensado para uso interno da escola',
    stack: [
      { name: 'Python e FastAPI', use: 'API de importação, edição e exportação' },
      { name: 'React e TypeScript', use: 'tela de conferência lado a lado com o original' },
      { name: 'Tesseract', use: 'reconhecimento de texto em fotos e documentos escaneados' },
      { name: 'python-docx e LibreOffice', use: 'diagramação em Word e conversão para PDF' },
    ],
    context: [
      'No estágio de TI da Escola Madre Maria do Rosário de Almeida II cuido de manutenção de equipamentos, rede e automações.',
      'As provas chegam em formatos diferentes, mas a impressão segue um modelo com cabeçalho e campos de identificação. A aplicação organiza o conteúdo e dá ao professor uma etapa de conferência antes da impressão.',
    ],
    contribution: [
      'Transformei a montagem manual de provas em um fluxo de importação, conferência, diagramação e envio para a impressão.',
      'Usei provas sintéticas para testar a extração, a estrutura das questões e a renderização de documentos.',
    ],
    solution: [
      { title: 'Importação', text: 'O professor envia Word, PDF ou fotos, cola o texto ou cria questões com IA opcional.' },
      { title: 'Conferência', text: 'O original fica ao lado das questões organizadas para revisar texto, alternativas e figuras.' },
      { title: 'Impressão', text: 'A aplicação gera Word e PDF no modelo da escola e pode encaminhar os arquivos para a equipe de impressão.' },
    ],
    decision: {
      title: 'Revisar o conteúdo antes de diagramar',
      text: [
        'A extração produz uma estrutura editável de questões, alternativas e imagens. O professor confere essa estrutura com o original antes de gerar os arquivos de impressão.',
        'O fluxo de importação e a diagramação funcionam sem credenciais de IA. O modo de teste guarda o e-mail em uma caixa de saída local.',
      ],
    },
    state: 'O repositório inclui amostras sintéticas e instruções para reproduzir o fluxo localmente.',
    limits: [
      'Por envolver documentos internos, a ilustração usa uma escola e questões fictícias.',
      'O OCR pode precisar de revisão em fotos e fórmulas. O professor pode recortar trechos do original para preservar a aparência.',
      'Não há medição de tempo economizado.',
    ],
    links: [{ label: 'Código, instalação e amostras', href: 'https://github.com/LuisPassosRamos/testMaker' }],
    visual: 'exam-flow',
    visualCaption: 'Ilustração com escola e questões fictícias.',
  },
  {
    slug: 'iot-management-system',
    title: 'IoT Management System',
    subtitle: 'Reserva de recursos com dispositivos simulados',
    kind: 'Projeto acadêmico',
    featured: false,
    summary:
      'Sistema de reserva de recursos compartilhados em que travas e sensores simulados recebem comandos do servidor e informam seu estado.',
    role: 'Autor',
    period: 'Setembro de 2025',
    status: 'Entregue',
    stack: [
      { name: 'FastAPI e Pydantic', use: 'API e validação dos dados' },
      { name: 'SQLAlchemy 2 e SQLite', use: 'modelos e persistência' },
      { name: 'JWT e bcrypt', use: 'autenticação e perfis de administrador e usuário' },
      { name: 'WebSocket', use: 'atualização das telas em tempo real' },
      { name: 'Bootstrap 5 e Chart.js', use: 'interface web sem framework' },
      { name: 'Python e httpx', use: 'simulador de dispositivos' },
      { name: 'pytest', use: 'testes da API e dos serviços' },
      { name: 'Docker Compose', use: 'execução dos três componentes' },
    ],
    context: [
      'Trabalho de curso sobre gestão de recursos com apoio de IoT. O desafio era ligar três partes independentes: uma API com regras de reserva, uma interface web e dispositivos que executam comandos.',
    ],
    contribution: ['Desenvolvi a API, a interface e o simulador de dispositivos.'],
    attribution:
      'O histórico tem 39 commits: 34 meus e 5 gerados por um agente automatizado de código.',
    solution: [
      {
        title: 'Reservas',
        text: 'Verificação de conflito, expiração automática e liberação forçada por administradores.',
      },
      {
        title: 'Fila de comandos',
        text: 'Travar e destravar viram comandos em uma fila. O simulador consome um por vez e informa o resultado.',
      },
      {
        title: 'Tempo real',
        text: 'Mudanças em recursos, reservas e dispositivos chegam às telas por WebSocket.',
      },
      { title: 'Auditoria', text: 'Cada ação fica registrada e pode ser exportada em CSV ou PDF.' },
    ],
    decision: {
      title: 'Fila de comandos em vez de chamada direta ao dispositivo',
      text: [
        'O servidor não chama o dispositivo. Ele grava o comando em uma tabela e o dispositivo pergunta, de tempos em tempos, se há algo a executar.',
        'Com isso o dispositivo pode ficar fora do ar sem que o comando se perca, e o mesmo desenho serviria a um equipamento real com conexão instável.',
      ],
    },
    results: ['14 testes automatizados da API e dos serviços.'],
    state: 'Entregue como trabalho acadêmico. Sem evolução prevista.',
    limits: [
      'Os dispositivos são simulados. Não houve integração com hardware.',
      'Banco local e credenciais de exemplo: não é uma implantação de produção.',
    ],
    links: [
      { label: 'Código no GitHub', href: 'https://github.com/LuisPassosRamos/IoT-Management-System' },
    ],
    visual: 'system',
    visualCaption: 'Componentes do sistema e como conversam entre si.',
    diagram: {
      nodes: [
        { id: 'web', title: 'Interface web', detail: 'Bootstrap e Chart.js' },
        { id: 'api', title: 'API', detail: 'FastAPI' },
        { id: 'db', title: 'Banco', detail: 'SQLite' },
        { id: 'sim', title: 'Simulador', detail: 'travas e sensores em Python' },
      ],
      links: [
        { from: 'web', to: 'api', label: 'HTTP com JWT' },
        { from: 'api', to: 'web', label: 'WebSocket: eventos em tempo real' },
        { from: 'api', to: 'db', label: 'reservas, fila de comandos e auditoria' },
        { from: 'sim', to: 'api', label: 'busca comandos e envia leituras' },
      ],
    },
  },
  {
    slug: 'sisd',
    title: 'SISD',
    subtitle: 'Sistema distribuído de sensores climáticos',
    kind: 'Projeto acadêmico',
    featured: false,
    summary:
      'Simulação de uma rede de sensores climáticos em que os nós trocam dados, elegem um coordenador e se recuperam de falhas.',
    role: 'Autor',
    period: 'Abril de 2025',
    status: 'Entregue',
    stack: [
      { name: 'Python', use: 'todos os nós do sistema' },
      { name: 'Sockets TCP', use: 'envio periódico das leituras' },
      { name: 'gRPC', use: 'heartbeat e eleição de coordenador' },
      { name: 'Multicast UDP', use: 'alertas para todos os nós' },
      { name: 'Flask', use: 'serviço que guarda réplicas de logs e checkpoints' },
      { name: 'Docker Compose', use: 'um contêiner por nó' },
    ],
    context: [
      'Trabalho final de Sistemas Distribuídos. A proposta era reunir em um único sistema os mecanismos estudados na disciplina, cada um com o tipo de comunicação adequado.',
    ],
    contribution: [
      'Implementei todos os componentes: sensores, cliente, monitor, serviço de réplica e módulo de alertas.',
    ],
    solution: [
      {
        title: 'Coleta',
        text: 'Cada sensor expõe um servidor TCP. O cliente recebe as leituras e registra em log.',
      },
      {
        title: 'Falhas e eleição',
        text: 'Um monitor recebe o heartbeat dos sensores por gRPC. Quando o coordenador cai, o algoritmo Bully escolhe outro.',
      },
      {
        title: 'Exclusão mútua',
        text: 'Um token circula entre os sensores. Só quem está com ele envia dados.',
      },
      {
        title: 'Recuperação',
        text: 'Sensores e cliente salvam checkpoints com o relógio de Lamport e voltam ao último estado ao reiniciar.',
      },
      { title: 'Alertas', text: 'Alertas climáticos chegam a todos os nós por multicast UDP.' },
    ],
    decision: {
      title: 'Um protocolo para cada tipo de conversa',
      text: [
        'Leituras contínuas usam TCP, que entrega em ordem. O controle entre nós, como heartbeat e eleição, usa gRPC com contrato definido em arquivos .proto.',
        'Alertas precisam chegar a todos de uma vez e usam multicast UDP. A réplica recebe logs e checkpoints por HTTP.',
      ],
    },
    state: 'Entregue como trabalho acadêmico.',
    limits: [
      'Tudo roda em contêineres na mesma máquina. Não foi testado em rede real.',
      'A autenticação com RSA é básica e serve apenas à demonstração.',
      'Os testes automatizados cobrem o serviço de réplica HTTP. A comunicação, a eleição e a recuperação entre os nós são exercitadas na execução com Docker.',
    ],
    links: [{ label: 'Código no GitHub', href: 'https://github.com/LuisPassosRamos/TrabalhoFinalSD' }],
    visual: 'system',
    visualCaption: 'Nós do sistema e o protocolo de cada ligação.',
    diagram: {
      nodes: [
        { id: 'sensor', title: 'Sensores', detail: 'três nós com leituras simuladas' },
        { id: 'client', title: 'Cliente', detail: 'coleta e snapshots' },
        { id: 'monitor', title: 'Monitor', detail: 'detecção de falhas' },
        { id: 'cloud', title: 'Réplica', detail: 'serviço Flask' },
      ],
      links: [
        { from: 'sensor', to: 'client', label: 'TCP: leituras' },
        { from: 'sensor', to: 'monitor', label: 'gRPC: heartbeat' },
        { from: 'sensor', to: 'sensor', label: 'gRPC: eleição Bully e token' },
        { from: 'sensor', to: 'cloud', label: 'HTTP: logs e checkpoints' },
        { from: 'client', to: 'cloud', label: 'HTTP: logs e checkpoints' },
      ],
    },
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Projeto não encontrado: ${slug}`);
  return project;
}

export const featuredProjects = projects.filter((item) => item.featured);
export const otherProjects = projects.filter((item) => !item.featured);
