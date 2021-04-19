module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  // comment when use react-testing-library, otherwise will get "TypeError: MutationObserver is not a constructor"
  // testEnvironment: 'enzyme',
  setupFilesAfterEnv: [
    // 'jest-enzyme',
    // '/Users/dulin/workspace/github.com/mrdulin/jest-v26-codelab/examples/66341555/axios.mock.js',
  ],
  setupFiles: ['./jest.setup.js'],
  testEnvironmentOptions: {
    // enzymeAdapter: 'react16',
  },
};
