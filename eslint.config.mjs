import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  // 1. Глобальні ігнорування (в ESLint 9 це окремий об'єкт з ключем ignores)
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },

  // 2. Базові правила конфігу Next.js
  ...nextVitals,

  // 3. Фікс для плагіна React (прописуємо версію, щоб лінтер знову не впав)
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default eslintConfig;