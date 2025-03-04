const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ttoywa",
    baseUrl: "https://automationexercise.com",
    includeShadowDom: true,
    chromeWebSecurity: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
});
