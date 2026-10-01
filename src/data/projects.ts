// Language-independent project data. The copy lives in src/i18n/translations.ts:
// `projects.items[i]` for the home card and `caseStudies[slug]` for the page.
export const projects = [
  {
    slug: 'ferrosmuz',
    stack: ['Odoo 17', 'Python', 'Docker', 'Google Cloud', 'Astro', 'Tailwind CSS', 'Firebase'],
    links: [{ label: 'ferros-muz-web.vercel.app', href: 'https://ferros-muz-web.vercel.app' }],
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
] as const;

export type ProjectSlug = (typeof projects)[number]['slug'];
