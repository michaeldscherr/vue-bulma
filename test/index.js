// test/index.js
// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context

// https://vue-loader.vuejs.org/en/workflow/testing.html

const testsContext = require.context('../src/', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
