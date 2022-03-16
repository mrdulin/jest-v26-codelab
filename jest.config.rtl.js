module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended'],
  setupFiles: [
    './jest.setup.js',
    // '@testing-library/react/dont-cleanup-after-each'
  ],
};
