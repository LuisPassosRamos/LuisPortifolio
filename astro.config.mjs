import { defineConfig } from 'astro/config';

// GitHub Pages de projeto: https://luispassosramos.github.io/LuisPortfolio/
// Para domínio próprio, defina SITE_URL e BASE_PATH=/ (veja o README).
const site = process.env.SITE_URL ?? 'https://luispassosramos.github.io';
const base = process.env.BASE_PATH ?? '/LuisPortfolio/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // O padrão do Astro 7 ('jsx') remove espaços entre elementos inline.
  compressHTML: true,
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
