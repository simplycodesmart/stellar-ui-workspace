import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "./../src/stories/**.stories.ts",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
