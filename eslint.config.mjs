import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

// Rules sharpened by the ESLint 9 + Next 16 stack that the pre-existing
// component library predates. They're downgraded to warnings on legacy paths
// only — so `bun run lint` stays green and the debt stays visible — while newly
// authored code (src/app, src/components/site, src/lib) is held to the full
// error-level bar. Re-tighten by removing a glob as files migrate.
const LEGACY_GLOBS = [
  'src/components/common/**',
  'src/components/ui/**',
  'src/components/item-group.tsx',
  'src/hooks/**',
  'src/types/**',
  'src/mdx-components.tsx',
  '*.config.{ts,js,mjs}',
];

const GRANDFATHERED_RULES = {
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  '@typescript-eslint/no-namespace': 'warn',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-require-imports': 'warn',
  'react-hooks/refs': 'warn',
  'react-hooks/purity': 'warn',
  'react-hooks/static-components': 'warn',
  'react-hooks/set-state-in-effect': 'warn',
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/preserve-manual-memoization': 'warn',
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    '.open-next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.remember/**',
  ]),
  // the next-themes mounted-gate (setState in an effect) is a deliberate,
  // well-known hydration pattern — keep it a warning project-wide
  {
    rules: { 'react-hooks/set-state-in-effect': 'warn' },
  },
  {
    files: LEGACY_GLOBS,
    rules: GRANDFATHERED_RULES,
  },
]);

export default eslintConfig;
