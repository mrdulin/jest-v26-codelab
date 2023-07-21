import fs, { Dirent, constants } from 'fs';
import { getDirectoryFiles } from './';

describe('76733429', () => {
	test('should pass', async () => {
		const directory = new Dirent('directory', constants.UV_DIRENT_DIR);
		const fsMock = jest.spyOn(fs, 'readdirSync');
		fsMock.mockReturnValue([directory]);
		const files = await getDirectoryFiles('/dir/stuff');
		expect(files).not.toBeNull;
		fsMock.mockRestore();
	});
});
