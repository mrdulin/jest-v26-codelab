module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  // transform: {
  // '\\.[jt]sx?$': 'esbuild-jest',
  // },
  // coverageProvider: 'v8',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
