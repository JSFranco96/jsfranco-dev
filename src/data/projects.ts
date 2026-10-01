// Language-independent project data. The copy lives in src/i18n/translations.ts:
// `projects.items[i]` for the home card and `caseStudies[slug]` for the page.
export const projects = [
  {
    slug: 'ferrosmuz',
    stack: ['Odoo 17', 'Python', 'Docker', 'Caddy', 'Google Cloud', 'Astro', 'Tailwind CSS', 'Firebase'],
    links: [{ label: 'ferrosmuz.com', href: 'https://www.ferrosmuz.com' }],
  },
  {
    slug: 'ubicco',
    stack: ['Ionic', 'Angular', 'Capacitor', 'TypeScript', 'Firebase', 'Python', 'Astro'],
    links: [{ label: 'ubicco.app', href: 'https://www.ubicco.app' }],
    // Roles are translated in caseStudies.ubicco.team, in the same order.
    team: [
      { name: 'Alison J. Méndez F.', href: 'https://www.linkedin.com/in/alimendezf/' },
      { name: 'José González', href: 'https://github.com/jdgc14' },
      { name: 'Javier Franco' },
    ],
  },
  {
    slug: 'bellaglow',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'schema.org', 'Vercel'],
    links: [{ label: 'bellaglowstudio.lat', href: 'https://www.bellaglowstudio.lat' }],
  },
] as const;

export type ProjectSlug = (typeof projects)[number]['slug'];
