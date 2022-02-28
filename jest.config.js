module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
  coverageProvider: 'v8',
};
