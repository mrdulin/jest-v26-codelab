module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['./jest.setup.js'],
	// testMatch: ['<rootDir>/stackoverflow/75262784/src/**/__unit__/**/?(*.)+(spec|test).[jt]s?(x)'],
};
