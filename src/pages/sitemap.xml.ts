import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { projectUrl, url } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const paths = [url(), ...projects.map((project) => projectUrl(project.slug))];
  const entries = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
