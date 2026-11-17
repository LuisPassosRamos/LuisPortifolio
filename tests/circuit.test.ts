import { describe, expect, it } from 'vitest';
import { evaluateCircuit, heroCircuit, heroInitialInputs, project, signalDepths, ISO } from '../src/lib/circuit';

const combos = [0, 1, 2, 3, 4, 5, 6, 7].map((mask) => ({
  a: Boolean(mask & 4),
  b: Boolean(mask & 2),
  c: Boolean(mask & 1),
}));

describe('circuito do hero', () => {
  it('bate com as expressões booleanas nas oito combinações', () => {
    for (const { a, b, c } of combos) {
      const signals = evaluateCircuit(heroCircuit, { a, b, c });
      expect(signals.and).toBe(a && b);
      expect(signals.xor).toBe(b !== c);
      expect(signals.or).toBe((a && b) || b !== c);
      expect(signals.not).toBe(!c);
      expect(signals.l1).toBe(signals.or);
      expect(signals.l2).toBe(signals.not);
    }
  });

  it('acende as duas lâmpadas somente com B ligada e C desligada', () => {
    for (const { a, b, c } of combos) {
      const signals = evaluateCircuit(heroCircuit, { a, b, c });
      expect(Boolean(signals.l1 && signals.l2)).toBe(b && !c);
    }
  });

  it('cada cabo carrega o sinal do nó que o alimenta', () => {
    const signals = evaluateCircuit(heroCircuit, { a: true, b: true, c: true });
    for (const wire of heroCircuit.wires) expect(signals[wire.id]).toBe(signals[wire.from]);
  });

  it('o estado inicial não está resolvido', () => {
    const signals = evaluateCircuit(heroCircuit, heroInitialInputs);
    expect(signals.l1 && signals.l2).toBe(false);
    expect(signals.l2).toBe(true);
  });

  it('toda referência aponta para um nó declarado antes', () => {
    const seen = new Set<string>();
    for (const node of heroCircuit.nodes) {
      const refs = node.kind === 'GATE' ? node.inputs : node.kind === 'LAMP' ? [node.input] : [];
      for (const ref of refs) expect(seen.has(ref)).toBe(true);
      seen.add(node.id);
    }
    for (const wire of heroCircuit.wires) expect(seen.has(wire.from)).toBe(true);
  });

  it('o sinal avança em profundidade das alavancas até as lâmpadas', () => {
    const depth = signalDepths(heroCircuit);
    expect(depth.a).toBe(0);
    expect(depth['w-a']).toBeGreaterThan(depth.a!);
    expect(depth.or).toBeGreaterThan(depth.and!);
    expect(depth.l1).toBeGreaterThan(depth.or!);
  });

  it('todos os nós cabem na área do desenho', () => {
    for (const node of heroCircuit.nodes) {
      const { x, y } = project(node.at);
      expect(x).toBeGreaterThan(25);
      expect(x).toBeLessThan(ISO.width - 25);
      expect(y).toBeGreaterThan(40);
      expect(y).toBeLessThan(ISO.height - 15);
    }
  });
});
