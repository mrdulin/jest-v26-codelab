import DBConnector from './DBCon.js';

export function getProjectlist(projectList, callback) {
	DBConnector().query(projectList, (error, results, fields) => {
		if (error) {
			callback(new ApiError('fetch project failed', 10), 0);
		} else {
			callback(null, results);
		}
	});
}
