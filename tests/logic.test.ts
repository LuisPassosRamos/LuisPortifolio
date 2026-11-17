import { describe, expect, it } from 'vitest';
import { GATES, evaluateGate, explain, inputCount, summary, truthTable, type Gate } from '../src/lib/logic';

/** Tabelas escritas à mão, independentes da implementação. Ordem: 00, 01, 10, 11. */
const EXPECTED: Record<Exclude<Gate, 'NOT'>, [number, number, number, number]> = {
  AND: [0, 0, 0, 1],
  OR: [0, 1, 1, 1],
  XOR: [0, 1, 1, 0],
};

describe('tabela verdade', () => {
  for (const [gate, outputs] of Object.entries(EXPECTED) as [Exclude<Gate, 'NOT'>, number[]][]) {
    it(`${gate} cobre as quatro combinações`, () => {
      const rows = truthTable(gate);
      expect(rows.map((row) => [Number(row.a), Number(row.b)])).toEqual([
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ]);
      expect(rows.map((row) => Number(row.out))).toEqual(outputs);
    });
  }

  it('NOT inverte a única entrada', () => {
    const rows = truthTable('NOT');
    expect(rows).toEqual([
      { a: false, out: true },
      { a: true, out: false },
    ]);
    expect(inputCount('NOT')).toBe(1);
  });

  it('NOT ignora a entrada B', () => {
    expect(evaluateGate('NOT', true, true)).toBe(false);
    expect(evaluateGate('NOT', false, true)).toBe(true);
  });

  it('as portas de duas entradas declaram duas entradas', () => {
    for (const gate of GATES.filter((item) => item !== 'NOT')) expect(inputCount(gate)).toBe(2);
  });
});

describe('textos da demo', () => {
  it('o resumo mostra entradas e saída', () => {
    expect(summary('AND', true, false)).toBe('A = 1, B = 0 → AND = 0');
    expect(summary('XOR', true, false)).toBe('A = 1, B = 0 → XOR = 1');
    expect(summary('NOT', false)).toBe('A = 0 → NOT = 1');
  });

  it('há explicação para toda combinação de toda porta', () => {
    for (const gate of GATES) {
      for (const a of [false, true]) {
        for (const b of [false, true]) {
          expect(explain(gate, a, b).length).toBeGreaterThan(20);
        }
      }
    }
  });

  it('a explicação acompanha o resultado', () => {
    expect(explain('AND', true, true)).toContain('a saída liga');
    expect(explain('OR', false, false)).toContain('desligada');
    expect(explain('XOR', true, true)).toContain('iguais');
    expect(explain('NOT', true)).toContain('desliga');
  });
});
