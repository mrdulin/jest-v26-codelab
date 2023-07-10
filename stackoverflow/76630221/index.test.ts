import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('76630221', () => {
	test('should pass', async () => {
		const { post } = await import('./');
		mock.onPost('http://test.com/api').reply(200, {
			code: 0,
			message: null,
		});
		const data = await post('http://test.com/api', { name: 'nick' });
		expect(data).toEqual({ code: 0, message: null });
	});
});
