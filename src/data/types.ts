export interface ExternalLink {
  label: string;
  href: string;
}

/** Tecnologia sempre acompanhada do que ela faz no projeto. */
export interface StackItem {
  name: string;
  use: string;
}

export interface Block {
  title: string;
  text: string;
}

export interface DiagramNode {
  id: string;
  title: string;
  detail: string;
}

export interface DiagramLink {
  from: string;
  to: string;
  label: string;
}

/** Visual de cada case. Cada chave corresponde a um componente em src/components/visuals. */
export type VisualKind = 'olympus-flow' | 'logic-demo' | 'exam-flow' | 'system';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  /** Rótulo curto do tipo de trabalho, ex.: "Produto em uso". */
  kind: string;
  /** Os destaques aparecem primeiro e com composição própria na página inicial. */
  featured: boolean;
  /** Uma ou duas frases: o que o projeto resolve. */
  summary: string;
  role: string;
  period: string;
  status: string;
  /** Até três fatos verificáveis para a página inicial (somente destaques). */
  facts?: string[];
  stack: StackItem[];
  context: string[];
  users?: string;
  contribution: string[];
  /** Observação de autoria: templates, coautores, agentes automatizados. */
  attribution?: string;
  solution: Block[];
  decision?: { title: string; text: string[] };
  results?: string[];
  state: string;
  limits: string[];
  links: ExternalLink[];
  visual: VisualKind;
  visualCaption: string;
  diagram?: { nodes: DiagramNode[]; links: DiagramLink[] };
}

export interface ExperienceItem {
  period: string;
  place: string;
  role: string;
  text: string;
  /** Slug do case relacionado, quando existe. */
  project?: string;
}

export interface Capability {
  title: string;
  text: string;
  evidence: { project: string; note: string }[];
}
