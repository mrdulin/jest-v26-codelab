module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'enzyme',
  setupFilesAfterEnv: [
    'jest-enzyme',
    // '/Users/dulin/workspace/github.com/mrdulin/jest-v26-codelab/examples/66341555/axios.mock.js',
  ],
  setupFiles: ['./jest.setup.js'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
};
