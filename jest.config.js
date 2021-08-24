module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  // comment when use react-testing-library, otherwise will get "TypeError: MutationObserver is not a constructor"
  // testEnvironment: 'enzyme',
  // setupFilesAfterEnv: [
  // 'jest-enzyme',
  // '/Users/dulin/workspace/github.com/mrdulin/jest-v26-codelab/examples/66341555/axios.mock.js',
  // ],
  setupFiles: ['./jest.setup.js'],
  // testEnvironmentOptions: {
  //   enzymeAdapter: 'react16',
  // },
  // transform: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/examples/68838761/fileTransformer.js',
  // },
};
