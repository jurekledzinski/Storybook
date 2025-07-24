import { customViewports } from './custom-viewports';
import { handlers } from '../src/mocks/handlers';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Renderer } from 'storybook/internal/types';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/stories/main.css';
import type { Preview } from '@storybook/react';

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
  //   tags: ['autodocs'],
  //   decorators: [
  //     (Story, { parameters }) => {
  //       const { theme = 'light' } = parameters;

  //       return (
  //         <ThemeProvider theme={theme}>
  //           <Story />
  //         </ThemeProvider>
  //       );
  //     },
  //   ],
  decorators: [
    withThemeByDataAttribute<Renderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
      parentSelector: 'body',
    }),
  ],
};

export default preview;
