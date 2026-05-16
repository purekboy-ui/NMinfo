import { cp, mkdir } from 'node:fs/promises';

const staticTargets = [
  ['assets/cutecat', 'dist/assets/cutecat'],
  ['assets/guide', 'dist/assets/guide'],
  ['assets/home', 'dist/assets/home'],
  ['assets/logo', 'dist/assets/logo'],
  ['assets/lu177-prrt-figures', 'dist/assets/lu177-prrt-figures'],
  ['patient-education', 'dist/patient-education']
];

await mkdir('dist', { recursive: true });

for (const [from, to] of staticTargets) {
  await cp(from, to, {
    recursive: true,
    force: true,
    errorOnExist: false
  });
}
