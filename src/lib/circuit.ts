/**
 * Circuito do hero: três alavancas, quatro portas e duas lâmpadas.
 * A definição é dado puro. O componente desenha a partir dela e o script
 * reavalia o mesmo objeto quando uma alavanca muda.
 */
import { evaluateGate, type Gate } from './logic';

/** Posição na malha isométrica: [coluna, linha]. */
export type Cell = [number, number];

export interface Lever {
  kind: 'LEVER';
  id: string;
  label: string;
  at: Cell;
}

export interface GateNode {
  kind: 'GATE';
  id: string;
  gate: Gate;
  at: Cell;
  inputs: string[];
}

export interface Lamp {
  kind: 'LAMP';
  id: string;
  at: Cell;
  input: string;
}

export type CircuitNode = Lever | GateNode | Lamp;

export interface Wire {
  id: string;
  /** Nó que alimenta o cabo. */
  from: string;
  /** Um ou mais trechos, cada um uma sequência de células. */
  segments: Cell[][];
}

export interface Circuit {
  cols: number;
  rows: number;
  /** Em ordem de avaliação: toda entrada aparece antes de quem a usa. */
  nodes: CircuitNode[];
  wires: Wire[];
}

export type Signals = Record<string, boolean>;

export const heroCircuit: Circuit = {
  cols: 9,
  rows: 8,
  nodes: [
    { kind: 'LEVER', id: 'a', label: 'A', at: [0, 1] },
    { kind: 'LEVER', id: 'b', label: 'B', at: [0, 3] },
    { kind: 'LEVER', id: 'c', label: 'C', at: [0, 5] },
    { kind: 'GATE', id: 'and', gate: 'AND', at: [3, 2], inputs: ['a', 'b'] },
    { kind: 'GATE', id: 'xor', gate: 'XOR', at: [3, 4], inputs: ['b', 'c'] },
    { kind: 'GATE', id: 'not', gate: 'NOT', at: [4, 7], inputs: ['c'] },
    { kind: 'GATE', id: 'or', gate: 'OR', at: [6, 3], inputs: ['and', 'xor'] },
    { kind: 'LAMP', id: 'l1', at: [9, 3], input: 'or' },
    { kind: 'LAMP', id: 'l2', at: [8, 7], input: 'not' },
  ],
  wires: [
    { id: 'w-a', from: 'a', segments: [[[0, 1], [3, 1], [3, 2]]] },
    { id: 'w-b', from: 'b', segments: [[[0, 3], [3, 3]], [[3, 2], [3, 4]]] },
    { id: 'w-c', from: 'c', segments: [[[0, 5], [3, 5], [3, 4]], [[1, 5], [1, 7], [4, 7]]] },
    { id: 'w-and', from: 'and', segments: [[[3, 2], [6, 2], [6, 3]]] },
    { id: 'w-xor', from: 'xor', segments: [[[3, 4], [6, 4], [6, 3]]] },
    { id: 'w-or', from: 'or', segments: [[[6, 3], [9, 3]]] },
    { id: 'w-not', from: 'not', segments: [[[4, 7], [8, 7]]] },
  ],
};

/** Estado inicial desenhado no build: uma lâmpada acesa, outra apagada. */
export const heroInitialInputs: Signals = { a: true, b: false, c: false };

/** Calcula o valor de cada nó e de cada cabo a partir das alavancas. */
export function evaluateCircuit(circuit: Circuit, inputs: Signals): Signals {
  const signals: Signals = {};
  for (const node of circuit.nodes) {
    if (node.kind === 'LEVER') {
      signals[node.id] = inputs[node.id] ?? false;
    } else if (node.kind === 'GATE') {
      const [first, second] = node.inputs.map((id) => signals[id] ?? false);
      signals[node.id] = evaluateGate(node.gate, first ?? false, second ?? false);
    } else {
      signals[node.id] = signals[node.input] ?? false;
    }
  }
  for (const wire of circuit.wires) {
    signals[wire.id] = signals[wire.from] ?? false;
  }
  return signals;
}

/**
 * Distância de cada nó e cabo até as alavancas, em etapas.
 * Usada para atrasar a transição e dar a sensação de sinal percorrendo o circuito.
 */
export function signalDepths(circuit: Circuit): Record<string, number> {
  const depth: Record<string, number> = {};
  for (const node of circuit.nodes) {
    if (node.kind === 'LEVER') depth[node.id] = 0;
    else if (node.kind === 'GATE') {
      depth[node.id] = Math.max(...node.inputs.map((id) => depth[id] ?? 0)) + 2;
    } else depth[node.id] = (depth[node.input] ?? 0) + 2;
  }
  for (const wire of circuit.wires) depth[wire.id] = (depth[wire.from] ?? 0) + 1;
  return depth;
}

/** Projeção isométrica da malha para coordenadas do SVG (ladrilho de 56 × 34). */
export const ISO = { tileW: 56, tileH: 34, originX: 266, originY: 56, width: 560, height: 350 } as const;

export function project([col, row]: Cell): { x: number; y: number } {
  return {
    x: ISO.originX + ((col - row) * ISO.tileW) / 2,
    y: ISO.originY + ((col + row) * ISO.tileH) / 2,
  };
}
