module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
