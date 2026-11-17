/**
 * Comportamentos globais: controle de movimento e revelação na rolagem.
 * O valor inicial de data-motion é definido por um script inline no <head>.
 */
const root = document.documentElement;

function setMotion(value: 'on' | 'off', persist: boolean): void {
  root.dataset.motion = value;
  if (persist) {
    try {
      localStorage.setItem('motion', value);
    } catch {
      /* armazenamento indisponível: vale só para esta página */
    }
  }
  syncToggles();
  document.dispatchEvent(new CustomEvent('motionchange', { detail: value }));
}

function syncToggles(): void {
  const on = root.dataset.motion !== 'off';
  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(on));
    const state = button.querySelector('[data-motion-state]');
    if (state) state.textContent = on ? 'ligado' : 'desligado';
  });
}

document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    setMotion(root.dataset.motion === 'off' ? 'on' : 'off', true);
  });
});
syncToggles();

// Sem preferência salva, acompanha mudanças do sistema durante a visita.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
reduced.addEventListener('change', (event) => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem('motion');
  } catch {
    saved = null;
  }
  if (!saved) setMotion(event.matches ? 'off' : 'on', false);
});

const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-in'));
}
