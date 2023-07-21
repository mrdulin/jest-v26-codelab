import fs from 'fs';

export const getDirectoryFiles = async (directory) => {
	return fs
		.readdirSync(directory, { withFileTypes: true })
		.filter((dirent) => !dirent.isDirectory())
		.map((dirent) => dirent.name);
};
