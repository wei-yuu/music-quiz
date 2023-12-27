import { resolve } from 'path';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const mergedConfig = mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          '@': resolve(__dirname, '../'),
        },
      },
    });
    return mergedConfig;
  },
};
export default config;
