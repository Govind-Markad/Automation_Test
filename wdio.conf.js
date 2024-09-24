// import fsExtra from 'fs-extra';
import video from 'wdio-video-reporter';


// wdio.conf.js
export const config =  {
    runner: 'local',
    specs: ['./tests/googleTest.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    reporters: [
        // 'spec',
        // ['allure', {
        //     outputDir: 'allure-results',
        //     disableWebdriverStepsReporting: true,
        //     disableWebdriverScreenshotsReporting: false,
        // }],
        [video, {
            saveAllVideos: true,
            videoSlowdownMultiplier: 1,
            reporterSyncTimeout: 3000,
            outputDir: './public/video',
            videoRenderTimeout: 120, // Max seconds to wait for a video to finish rendering
            screenshotIntervalSecs: 3,
        }]
    ],
    // beforeSession: function () {
    //     const fsExtra = require('fs-extra');
    //     const { removeSync } = fsExtra;
    //     removeSync('allure-results');
    // },
};

