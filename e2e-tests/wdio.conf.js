const fs = require('fs');

const args = require('yargs').argv;
const platform = args.platform || 'android';


exports.config = {
    
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   
    maxInstances: 10,
    capabilities: [

        platform === 'android'
            ? {
                platformName: 'Android',
                'appium:deviceName': 'emulator-5554',
                'appium:platformVersion': '16',
                'appium:automationName': 'UiAutomator2',
                'appium:appPackage': 'host.exp.exponent',
                'appium:appActivity': '.MainActivity',
                'appium:fullReset': false,   // Deletes app before running
                'appium:noReset': true,  
            }
        : {
                platformName: 'iOS',
                'appium:deviceName': 'iPhone 16',
                'appium:platformVersion': '18.3',
                'appium:automationName': 'XCUITest',
                'appium:bundleId': 'host.exp.Exponent',
                'appium:noReset': true,
                'appium:autoAcceptAlerts': true, // Auto-accepts system alerts
                'appium:newCommandTimeout': 300,
                'appium:includeSafariInWebviews': true,
                'appium:connectHardwareKeyboard': true
 
           }
    ],
    services: ['appium'],
  appium: {
    command: 'appium',
  },

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    
    bail: 0,

    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    
    reporters: ['spec'],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // =====
    // Hooks
    // =====

    

    /** Hook: Runs before each test */
    before: async function (capabilities, specs) {
        console.log('Running before hook...');
        
        const platform = capabilities.platformName.toLowerCase();
        let url;

        await driver.startRecordingScreen({
            videoType: 'mp4',
            timeLimit: 180,
            bitRate: 5000000,
            resolution: '1280x720'
          });

        const deepLink = 'exp://192.168.68.127:8081';
            await driver.execute('mobile: deepLink', {
                url: deepLink,
                package: 'host.exp.exponent'
        });

        if (platform === "android") {
            // TBD
        } else if (platform === "ios") {
            //await driver.hideKeyboard();

        }

        if (url) {
            console.log(`Opening URL for ${platform}: ${url}`);
            await driver.url(url);
        }
    },

    after: async function (test, context) {
        const videoBase64 = await driver.stopRecordingScreen();
          
        const fileName = `./test-videos/recording-test.mp4`;
        fs.writeFileSync(fileName, videoBase64, { encoding: 'base64' });
        console.log(`Test recording saved: ${fileName}`);
          
        }
/*
    before: function (capabilities, specs) {
        console.log('Starting test execution...');
        const deepLinkUrl = 'exp://192.168.68.127:8081';  // Use the appropriate hostname or IP

        // Open the deep link in Expo app
         driver.execute('mobile:deeplink', { url: deepLinkUrl });

        // Optionally, wait for the app to load and perform assertions
         driver.pause(5000); // Adjust timing as necessary
        const screenText =  driver.$('//*[@resource-id="text_view"]');
         screenText.getText().then(text => {
            console.log(text); // You can add more assertions here
  });
    },
    
    */

    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context, hookName) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
    /**
    * Hook that gets executed before a WebdriverIO assertion happens.
    * @param {object} params information about the assertion to be executed
    */
    // beforeAssertion: function(params) {
    // }
    /**
    * Hook that gets executed after a WebdriverIO assertion happened.
    * @param {object} params information about the assertion that was executed, including its results
    */
    // afterAssertion: function(params) {
    // }
}
