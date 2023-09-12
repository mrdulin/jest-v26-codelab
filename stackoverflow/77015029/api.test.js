import { getProjectlist } from './api';
import DBConnector from './DBCon';

jest.mock('./DBCon');

it('query succeeds', (done) => {
	const pool = {
		query: (query, callback) => {
			callback(null, 'mocked-results');
		},
	};
	DBConnector.mockImplementation(() => pool);

	const callback = (error, data) => {
		expect(error).toBeNull();
		expect(data).toBe('mocked-results');
		done();
	};
	getProjectlist('SELECT 1 + 1 AS solution', callback);
});
