export default function sitemap() {
  const base = 'https://www.danielanapoli.com';

  const routes = [
    '',
    '/academic',
    '/academic/publications',
    '/academic/talks',
    '/academic/toolkit',
    '/contact',
    '/research-tools',
    '/research-tools/formula-builder',
    '/resume',
    '/user-research',
    '/user-research/automation',
    '/user-research/benchmarking',
    '/user-research/concept-testing',
    '/user-research/discovery',
    '/user-research/surveys',
    '/user-research/usability-testing',
    '/user-research/workflows',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
