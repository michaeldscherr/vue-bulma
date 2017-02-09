module.exports = function karmaConfig(config) {
    config.set({
        basePath: './src',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        files: [
            '**/**/test.js',
        ],
    });
};
