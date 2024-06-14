import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {

  // if version not defined, use local
  const version = config.env.version || 'local'
  // load env from json
  config.env = require(`./cypress/config/${version}.json`);
  // change baseUrl
  config.baseUrl = config.env.baseUrl

  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});