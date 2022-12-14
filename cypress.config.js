const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFilename: "[datetime]-[status]_Automationreport",
    timestamp: "longData",
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
    code: false,

  },
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    watchForFileChanges: true,

    retries: {
      runMode: 2,
      openMode: 1,

    }
  },
});