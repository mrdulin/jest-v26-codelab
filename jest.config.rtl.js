module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-extended',
    // '@testing-library/react/dont-cleanup-after-each'
  ],
  setupFiles: ['./jest.setup.js']
};
