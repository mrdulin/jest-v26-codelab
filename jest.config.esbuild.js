module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['jest-extended'],
  // coverageProvider: 'v8',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
