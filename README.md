# MochaAwesomeReporter
#install cypress-mochawesome-reporter

npm i --save-dev cypress-mochawesome-reporter


#Change cypress reporter 
Edit config file (cypress.config.js by default)
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFilename: "[datetime]-[name]-[status]_report",
    timestamp: "longData",
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
    code: false,

  }

#Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

# Run : 
npx cypress run --browser chrome

Task 2 - Execute all test in Chrome Headed Mode and generate report

npx cypress run --browser chrome
npx cypress run --spec "cypress/e2e/registration.cy.js" --headed --browser chrome --no-exit 


Task 3 - Execute only course creation test in Firefox headed mode and generate report
npx cypress run --spec "cypress/e2e/Assignment_cy_6_1.cy.js" --headed --browser firefox --no-exit 


Task 4 - Execute all login test in electron headless mode and generate report*/

npx cypress run --browser electron --no-exit 
