/** Prefixa caminhos internos com a base do site (ex.: /LuisPortfolio/). */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}

export function projectUrl(slug: string): string {
  return url(`projetos/${slug}/`);
}
