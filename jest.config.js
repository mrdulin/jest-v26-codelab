module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'enzyme',
  setupFilesAfterEnv: ['jest-enzyme'],
  setupFiles: ['./jest.setup.js'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
};
