const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://circula-qa-challenge.vercel.app", //  baseUrl here
    //viewportWidth: 1280, //  viewportWidth here
    //viewportHeight: 720, //  viewportHeight here
    setupNodeEvents(on, config) {
    },
  },
});