import { main } from './main';
import { Abc } from './some-module';

jest.mock('./some-module');

describe('76863882', () => {
	test('should pass 1', async () => {
		Abc.mockImplementation(() => {
			return {
				methodOne: async () => ({ message: { content: 'ABC' } }),
			};
		});
		const actual = await main();
		expect(actual).toBe('ABC');
	});

	test('should pass 2', async () => {
		Abc.mockImplementation(() => {
			return {
				methodOne: async () => ({ message: { content: 'XYZ' } }),
			};
		});
		const actual = await main();
		expect(actual).toBe('XYZ');
	});
});
