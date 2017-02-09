const webpackConfig = require('./webpack.config.js');

delete webpackConfig.entry;

module.exports = function karmaConfig(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        files: [
            'test/index.js',
        ],
        preprocessors: {
            'test/index.js': ['webpack'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
    });
};
