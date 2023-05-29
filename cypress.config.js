const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

const { defineConfig } = require("cypress");

const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

const { sqlQueryPlugin } = require('cypress-multiple-db-sql-server');

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({

  // reporter: 'cypress-mochawesome-reporter',

  projectId: "8zmr6n",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  taskTimeout: 80000,
  pageLoadTimeout: 150000,

  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,

  //   reportDir: 'test-report',
  //   overwrite: false,
  //   saveJson: true,
  //   saveHtml: true,

  //   reportFilename: 'cypressreport',
  //   timestamp: 'yyyy_mm_dd_hh_MM',


  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },

  reporter: 'cypress-multi-reporters',
  reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
  reporterOptions: {
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      saveJson: true,
      saveHtml: true,

      reportFilename: "cypressreport",
      timestamp: "yyyy_mm_dd_hh_MM",
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    mochaJunitReporterReporterOptions: {
      mochafile: "cypress/reports/junitreport-[hash].xml",
      toConsole: true,
    },
  },


  env: {
    envurl: 'env2',
    appUrl: 'https://www.amazon.in',
    titlekeyword: "Online",
    env1: 'https://www.amazon.in',
    env2: 'https://flipkart.com',

    db: {
      authentication: {
        type: 'default',
        options: {
          userName: 'sa',
          password: 'sqladmin@123'
        }
      },
      server: '172.16.0.56',
      options: {
        database: '',
        encrypt: true,
        rowCollectionOnRequestCompletion: true,
        trustServerCertificate: true,
        port: 1433, // Default Port
      }
    }

  },

  e2e: {

    env: {
      allureReuseAfterSpec: true,
    },

    specPattern: ["cypress/e2e/features/*.feature", "cypress/e2e/*.cy.js"],

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', { downloadFile })
      on('task', { ...sqlQueryPlugin });
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      allureWriter(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;

      // implement node event listeners here
    },
  },
});

