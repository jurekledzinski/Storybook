import * as React from 'react';
import { handlers } from '../src/mocks/handlers';
import { initialize, mswLoader } from 'msw-storybook-addon';
import type { Preview } from '@storybook/react';
import ThemeProvider from './stores/theme/ThemeProvider';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from './custom-viewports';
// import { CreateDocs } from './helpers';

initialize(
  {
    onUnhandledRequest: 'bypass', // Ignores asset requests
  },
  [...handlers]
);

// Ensure MSW starts in Storybook
// if (typeof global.process === 'undefined') {
//   worker.start();
// }

const preview: Preview = {
  parameters: {
    // In preview set backgrounds array and choose here which will be default for story example in sections stories in success version
    // backgrounds: {
    //   values: [
    //     { name: 'light', value: '#85144b' },
    //     { name: 'dark', value: '#F012BE' },
    //   ],
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    loaders: [mswLoader],
    // docs: {
    //   page: () => <CreateDocs />,
    // },
    // pageLayout added here and read in decorator funkcji przykład section story check
    // pageLayout: 'page',
    viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } },
  },
  tags: ['autodocs', 'autodocs'],
  decorators: [
    (Story, { parameters }) => {
      const { theme = 'light' } = parameters;

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
