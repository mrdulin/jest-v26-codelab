import simpleGit from 'simple-git';
import myFunction from './my-module';

jest.mock('simple-git');

const simpleGitMock = simpleGit as jest.Mock;

describe('myFunction', () => {
	it('should call checkout with the correct branch', () => {
		const gitMock = {
			checkout: jest.fn(),
		};
		simpleGitMock.mockReturnValue(gitMock);
		myFunction();
		expect(gitMock.checkout).toHaveBeenCalledWith('my-branch');
	});
});
