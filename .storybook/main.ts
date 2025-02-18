import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/test-runner',
    'msw-storybook-addon',
    '@storybook/addon-viewport',
    '@storybook/addon-coverage',
    '@storybook/preview-api',
  ],
  features: {
    // this flag ensure that all updates related to a test are processed and applied before making assertions, like a11y checks in react
    // a11y checks sometimes run too early, before the component finishes rendering, leading to false negatives (no reported violations even if they exist).
    // that is why this flag is used to make sure the async data are before run assertions in play functions test storybook
    developmentModeForBuild: true,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../public'],

  docs: {},

  typescript: {
    // Ta flaga daje większe wsparcie dla typescript ale może mieć wpływ na preformance, normalnie można to zakomentować i jest użyty podstawowy typescript
    // ale nie zawsze to może wystarczyć przy bardziej skomplikowanych typach ale ponoć w większości przypadków działa
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;

// Storybook test runner turns all of your stories into executable tests. It is powered by Jest and Playwright.

// For those without a play function: it verifies whether the story renders without any errors.
// For those with a play function: it also checks for errors in the play function and that all assertions passed.
