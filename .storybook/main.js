/** @type { import('@storybook/react-vite').StorybookConfig } */
import { withoutVitePlugins } from "@storybook/builder-vite"

const config = {
  stories: [
		"../src/**/*.mdx",
	"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	"../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
	viteFinal: async (config) => {
		return {
			...config,
			plugins: await withoutVitePlugins(config.plugins, [
				"vite:lib-inject-css",
			]),
		};
	},
};
export default config;
