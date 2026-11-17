/**
 * Demo de portas lógicas: lê os controles, calcula com src/lib/logic.ts e
 * escreve o resultado em atributos e textos. O CSS cuida do visual.
 */
import { GATES, bit, evaluateGate, explain, inputCount, summary, type Gate } from '../lib/logic';

type InputName = 'a' | 'b';

function isGate(value: string): value is Gate {
  return (GATES as readonly string[]).includes(value);
}

function init(root: HTMLElement): void {
  const radios = Array.from(root.querySelectorAll<HTMLInputElement>('input[type="radio"]'));
  const tables = Array.from(root.querySelectorAll<HTMLTableElement>('[data-table]'));
  const summaryEl = root.querySelector<HTMLElement>('[data-summary]');
  const explainEl = root.querySelector<HTMLElement>('[data-explain]');
  const gateNameEl = root.querySelector<SVGTextElement>('[data-gate-name]');

  const checked = radios.find((radio) => radio.checked)?.value ?? 'AND';
  let gate: Gate = isGate(checked) ? checked : 'AND';
  const inputs: Record<InputName, boolean> = {
    a: root.dataset.a === 'true',
    b: root.dataset.b === 'true',
  };

  function render(): void {
    const single = inputCount(gate) === 1;
    const out = evaluateGate(gate, inputs.a, inputs.b);

    root.dataset.gate = gate;
    root.dataset.a = String(inputs.a);
    root.dataset.b = String(inputs.b);
    root.dataset.out = String(out);
    root.dataset.single = String(single);

    for (const name of ['a', 'b'] as const) {
      const button = root.querySelector<HTMLButtonElement>(`[data-in="${name}"]`);
      button?.setAttribute('aria-pressed', String(inputs[name]));
      root.querySelectorAll<HTMLElement | SVGElement>(`[data-val="${name}"]`).forEach((el) => {
        el.textContent = bit(inputs[name]);
      });
    }
    root.querySelectorAll<SVGElement>('[data-val="out"]').forEach((el) => {
      el.textContent = bit(out);
    });

    if (gateNameEl) gateNameEl.textContent = gate;
    if (summaryEl) summaryEl.textContent = summary(gate, inputs.a, inputs.b);
    if (explainEl) explainEl.textContent = explain(gate, inputs.a, inputs.b);

    const currentRow = single ? bit(inputs.a) : bit(inputs.a) + bit(inputs.b);
    for (const table of tables) {
      const active = table.dataset.table === gate;
      table.hidden = !active;
      table.querySelectorAll<HTMLTableRowElement>('tr[data-row]').forEach((row) => {
        if (active && row.dataset.row === currentRow) row.dataset.current = 'true';
        else delete row.dataset.current;
      });
    }
  }

  function toggle(name: InputName): void {
    if (name === 'b' && inputCount(gate) === 1) return;
    inputs[name] = !inputs[name];
    render();
  }

  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.checked && isGate(radio.value)) {
        gate = radio.value;
        render();
      }
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-in]').forEach((button) => {
    button.addEventListener('click', () => toggle(button.dataset.in === 'b' ? 'b' : 'a'));
  });

  // Atalho para ponteiro: clicar na entrada desenhada no esquema.
  root.querySelectorAll<SVGElement>('[data-stage-in]').forEach((node) => {
    node.addEventListener('click', () => toggle(node.dataset.stageIn === 'b' ? 'b' : 'a'));
  });

  render();
}

document.querySelectorAll<HTMLElement>('[data-logic-demo]').forEach((root) => {
  try {
    init(root);
  } catch (error) {
    console.warn('Demo de portas lógicas indisponível:', error);
  }
});
