const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
    env:{
    deviceTypeThreshold: 1150,
    testDataFile: 'dataFile/userData',
    "baseUrl": "https://demoqa.com/",
    
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
       allureWriter(on, config);
      on("file:preprocessor", cucumber());
    },
  },
});
    