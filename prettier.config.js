// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  /* general prettier rules */
  singleQuote: true,
  /* rules for @ianvs/prettier-plugin-sort-imports*/
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/env(.*)$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/schemas/(.*)$',
    '^@/lib/(.*)$',
    '^@/store/(.*)$',
    '^@/atoms/(.*)$',
    '^@/context/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '^@/server/(.*)$',
    '^@/public/(.*)$',
    '',
    '^[.]',
  ],
  /* rules for prettier-plugin-tailwindcss */
  tailwindFunctions: ['cn', 'twMerge', 'cva'],
  tailwindAttributes: ['class', 'className', '.*[cC]lassName'],
  /* plugins */
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
