import { cp, mkdir } from 'node:fs/promises';

const staticTargets = [
  ['assets/cutecat', 'dist/assets/cutecat'],
  ['assets/guide', 'dist/assets/guide'],
  ['assets/home', 'dist/assets/home'],
  ['assets/logo', 'dist/assets/logo'],
  ['assets/lu177-prrt-figures', 'dist/assets/lu177-prrt-figures'],
  ['assets/muga-paper-figures', 'dist/assets/muga-paper-figures'],
  ['assets/paper-figures', 'dist/assets/paper-figures'],
  ['ai-village', 'dist/ai-village'],
  ['patient-education', 'dist/patient-education'],
  ['nucmed-ai-research', 'dist/nucmed-ai-research'],
  ['nucmed-storylab', 'dist/nucmed-storylab'],
  ['nucmed-exam-review', 'dist/nucmed-exam-review']
];

await mkdir('dist', { recursive: true });

for (const [from, to] of staticTargets) {
  await cp(from, to, {
    recursive: true,
    force: true,
    errorOnExist: false
  });
}
