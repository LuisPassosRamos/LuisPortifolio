/**
 * Portas lógicas da demonstração web.
 * Funções puras: usadas pela demo, pelo circuito do hero e pelos testes.
 */

export const GATES = ['AND', 'OR', 'XOR', 'NOT'] as const;
export type Gate = (typeof GATES)[number];

export interface TruthRow {
  a: boolean;
  /** Ausente em portas de uma entrada (NOT). */
  b?: boolean;
  out: boolean;
}

/** NOT usa só a entrada A. As demais usam A e B. */
export function inputCount(gate: Gate): 1 | 2 {
  return gate === 'NOT' ? 1 : 2;
}

export function evaluateGate(gate: Gate, a: boolean, b = false): boolean {
  switch (gate) {
    case 'AND':
      return a && b;
    case 'OR':
      return a || b;
    case 'XOR':
      return a !== b;
    case 'NOT':
      return !a;
  }
}

/** Linhas em ordem binária crescente: 00, 01, 10, 11 (ou 0, 1 para NOT). */
export function truthTable(gate: Gate): TruthRow[] {
  if (inputCount(gate) === 1) {
    return [false, true].map((a) => ({ a, out: evaluateGate(gate, a) }));
  }
  const rows: TruthRow[] = [];
  for (const a of [false, true]) {
    for (const b of [false, true]) {
      rows.push({ a, b, out: evaluateGate(gate, a, b) });
    }
  }
  return rows;
}

export const bit = (value: boolean): '0' | '1' => (value ? '1' : '0');

/** Frase curta que explica por que a saída ficou ligada ou desligada. */
export function explain(gate: Gate, a: boolean, b = false): string {
  const out = evaluateGate(gate, a, b);
  switch (gate) {
    case 'AND':
      return out
        ? 'As duas entradas estão ligadas, então a saída liga.'
        : 'AND só liga quando A e B estão ligadas ao mesmo tempo.';
    case 'OR':
      return out
        ? 'Pelo menos uma entrada está ligada, então a saída liga.'
        : 'Nenhuma entrada está ligada, então a saída fica desligada.';
    case 'XOR':
      if (out) return 'Só uma das entradas está ligada, então a saída liga.';
      return a
        ? 'As duas entradas estão ligadas. XOR desliga quando elas são iguais.'
        : 'As duas entradas estão desligadas. XOR desliga quando elas são iguais.';
    case 'NOT':
      return out
        ? 'A entrada está desligada. NOT inverte o sinal e liga a saída.'
        : 'A entrada está ligada. NOT inverte o sinal e desliga a saída.';
  }
}

/** Resumo no formato "A = 1, B = 0 → AND = 0". */
export function summary(gate: Gate, a: boolean, b = false): string {
  const out = bit(evaluateGate(gate, a, b));
  return inputCount(gate) === 1
    ? `A = ${bit(a)} → NOT = ${out}`
    : `A = ${bit(a)}, B = ${bit(b)} → ${gate} = ${out}`;
}
