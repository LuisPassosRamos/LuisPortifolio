/**
 * Interação do circuito do hero.
 * - O estado visual vive em atributos data-on; o CSS cuida das transições.
 * - Movimento do ponteiro é tratado dentro de requestAnimationFrame.
 * - Pausa fora da tela, com a aba oculta e com o movimento desligado.
 */
import { ISO, evaluateCircuit, heroCircuit, heroInitialInputs, project, type Signals } from '../lib/circuit';
import { bit } from '../lib/logic';

const HOVER_RADIUS = 30;
const CLICK_RADIUS = 46;
const LIFT_RADIUS = 92;
const IDLE_BEFORE_AUTOPLAY = 9000;
const AUTOPLAY_INTERVAL = 2800;
const AUTOPLAY_SEQUENCE = ['b', 'c', 'a', 'c', 'b', 'a'];

const HINT_DEFAULT = 'Circuito de verdade. Mexa nas alavancas e tente acender as duas lâmpadas.';
const HINT_COMPLETE = 'As duas lâmpadas acesas: B ligada e C desligada resolvem o circuito.';

function init(root: HTMLElement): void {
  const svg = root.querySelector<SVGSVGElement>('svg');
  if (!svg) return;

  const signalEls = Array.from(root.querySelectorAll<SVGElement>('[data-signal]'));
  const nodeEls = new Map<string, SVGElement>();
  root.querySelectorAll<SVGElement>('[data-node]').forEach((el) => {
    if (el.dataset.node) nodeEls.set(el.dataset.node, el);
  });
  const readoutEl = root.querySelector<HTMLElement>('[data-hero-readout]');
  const hintEl = root.querySelector<HTMLElement>('[data-hero-hint]');

  const centers = heroCircuit.nodes.map((node) => ({ id: node.id, kind: node.kind, ...project(node.at) }));
  const levers = centers.filter((center) => center.kind === 'LEVER');

  const latched: Signals = { ...heroInitialInputs };
  let hovered: string | null = null;
  let committed: string | null = null;
  let visible = true;
  let lastUserAction = performance.now();
  let autoplayStep = 0;
  let autoplayTimer: number | undefined;
  let frame = 0;
  let pointer: { x: number; y: number } | null = null;
  const lifts = new Map<string, number>();

  const motionOn = () => document.documentElement.dataset.motion !== 'off';

  /** Aproximar o ponteiro mostra a alavanca invertida; o clique confirma. */
  function shown(id: string): boolean {
    const value = latched[id] ?? false;
    return hovered === id && committed !== id ? !value : value;
  }

  function render(): void {
    const inputs: Signals = {};
    for (const lever of levers) inputs[lever.id] = shown(lever.id);
    const signals = evaluateCircuit(heroCircuit, inputs);
    for (const el of signalEls) {
      const id = el.dataset.signal;
      if (id) el.dataset.on = String(signals[id] ?? false);
    }
    const complete = Boolean(signals.l1 && signals.l2);
    root.dataset.complete = String(complete);
    if (readoutEl) {
      readoutEl.textContent = `A=${bit(inputs.a ?? false)} B=${bit(inputs.b ?? false)} C=${bit(inputs.c ?? false)}`;
    }
    if (hintEl) hintEl.textContent = complete ? HINT_COMPLETE : HINT_DEFAULT;
  }

  function toSvg(clientX: number, clientY: number): { x: number; y: number } {
    const rect = svg!.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * ISO.width,
      y: ((clientY - rect.top) / rect.height) * ISO.height,
    };
  }

  function nearestLever(point: { x: number; y: number }, radius: number): string | null {
    let best: string | null = null;
    let bestDistance = radius;
    for (const lever of levers) {
      const distance = Math.hypot(point.x - lever.x, point.y - (lever.y - 8));
      if (distance < bestDistance) {
        bestDistance = distance;
        best = lever.id;
      }
    }
    return best;
  }

  function setHovered(id: string | null): void {
    if (id === hovered) return;
    if (committed && committed !== id) committed = null;
    hovered = id;
    render();
  }

  function resetPointerEffects(): void {
    pointer = null;
    root.style.removeProperty('--px');
    root.style.removeProperty('--py');
    for (const [id] of lifts) nodeEls.get(id)?.style.removeProperty('--lift');
    lifts.clear();
    setHovered(null);
  }

  function onFrame(): void {
    frame = 0;
    if (!pointer) return;
    if (!motionOn()) {
      setHovered(nearestLever(pointer, HOVER_RADIUS));
      return;
    }
    root.style.setProperty('--px', ((pointer.x / ISO.width) * 2 - 1).toFixed(3));
    root.style.setProperty('--py', ((pointer.y / ISO.height) * 2 - 1).toFixed(3));
    for (const center of centers) {
      const distance = Math.hypot(pointer.x - center.x, pointer.y - center.y);
      const lift = Math.max(0, 1 - distance / LIFT_RADIUS);
      const previous = lifts.get(center.id) ?? 0;
      if (Math.abs(lift - previous) > 0.04 || (lift === 0 && previous !== 0)) {
        lifts.set(center.id, lift);
        const el = nodeEls.get(center.id);
        if (lift === 0) el?.style.removeProperty('--lift');
        else el?.style.setProperty('--lift', lift.toFixed(2));
      }
    }
    setHovered(nearestLever(pointer, HOVER_RADIUS));
  }

  root.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    pointer = toSvg(event.clientX, event.clientY);
    lastUserAction = performance.now();
    if (!frame) frame = requestAnimationFrame(onFrame);
  });

  root.addEventListener('pointerleave', resetPointerEffects);

  root.addEventListener('click', (event) => {
    const id = nearestLever(toSvg(event.clientX, event.clientY), CLICK_RADIUS);
    if (!id) return;
    lastUserAction = performance.now();
    latched[id] = !(latched[id] ?? false);
    if (hovered === id) committed = id;
    render();
  });

  function autoplayTick(): void {
    if (!visible || document.hidden || !motionOn()) return;
    if (performance.now() - lastUserAction < IDLE_BEFORE_AUTOPLAY) return;
    const id = AUTOPLAY_SEQUENCE[autoplayStep % AUTOPLAY_SEQUENCE.length];
    autoplayStep += 1;
    if (!id) return;
    latched[id] = !(latched[id] ?? false);
    render();
  }

  function syncActivity(): void {
    const active = visible && !document.hidden;
    root.dataset.active = String(active);
    const shouldRun = active && motionOn();
    if (shouldRun && autoplayTimer === undefined) {
      autoplayTimer = window.setInterval(autoplayTick, AUTOPLAY_INTERVAL);
    } else if (!shouldRun && autoplayTimer !== undefined) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = undefined;
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        syncActivity();
      },
      { threshold: 0.05 },
    ).observe(root);
  }
  document.addEventListener('visibilitychange', syncActivity);
  document.addEventListener('motionchange', () => {
    if (!motionOn()) {
      root.style.removeProperty('--px');
      root.style.removeProperty('--py');
      for (const [id] of lifts) nodeEls.get(id)?.style.removeProperty('--lift');
      lifts.clear();
    }
    syncActivity();
  });

  render();
  syncActivity();
}

const heroRoot = document.querySelector<HTMLElement>('[data-hero-circuit]');
if (heroRoot) {
  try {
    init(heroRoot);
  } catch (error) {
    // O SVG gerado no build continua na página como desenho estático.
    console.warn('Circuito do hero indisponível:', error);
  }
}
