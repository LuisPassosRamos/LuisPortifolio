import { describe, expect, it } from 'vitest';
import { capabilities, experience, profile } from '../src/data/profile';
import { featuredProjects, projects } from '../src/data/projects';

const slugs = projects.map((project) => project.slug);

describe('dados do portfólio', () => {
  it('slugs são únicos e seguros para URL', () => {
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it('a curadoria fica entre três e cinco projetos, com dois destaques', () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
    expect(projects.length).toBeLessThanOrEqual(5);
    expect(featuredProjects).toHaveLength(2);
    for (const project of featuredProjects) expect(project.facts?.length).toBeGreaterThan(0);
  });

  it('o projeto indicado no hero existe', () => {
    expect(slugs).toContain(profile.startWith);
  });

  it('todo case tem o mínimo para ser lido', () => {
    for (const project of projects) {
      expect(project.summary.length).toBeGreaterThan(40);
      expect(project.context.length).toBeGreaterThan(0);
      expect(project.contribution.length).toBeGreaterThan(0);
      expect(project.solution.length).toBeGreaterThan(0);
      expect(project.limits.length).toBeGreaterThan(0);
      expect(project.state.length).toBeGreaterThan(0);
    }
  });

  it('links externos usam https', () => {
    const links = [
      ...Object.values(profile.links),
      profile.repo,
      ...projects.flatMap((project) => project.links.map((link) => link.href)),
    ];
    for (const href of links) expect(href).toMatch(/^https:\/\//);
  });

  it('diagramas de sistema só ligam nós que existem', () => {
    for (const project of projects.filter((item) => item.visual === 'system')) {
      expect(project.diagram).toBeDefined();
      const ids = new Set(project.diagram!.nodes.map((node) => node.id));
      for (const link of project.diagram!.links) {
        expect(ids.has(link.from)).toBe(true);
        expect(ids.has(link.to)).toBe(true);
      }
    }
  });

  it('trajetória e competências apontam para cases existentes', () => {
    for (const item of experience) if (item.project) expect(slugs).toContain(item.project);
    for (const capability of capabilities) {
      expect(capability.evidence.length).toBeGreaterThan(0);
      for (const evidence of capability.evidence) expect(slugs).toContain(evidence.project);
    }
  });
});
