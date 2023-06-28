import { obj } from './obj';

jest.mock('./obj');

describe('76570418', () => {
	test('should pass 0', () => {
		expect(obj.items).toHaveLength(0);
		expect(jest.isMockFunction(obj.search)).toBeTrue();
	});
	test('should pass 1', () => {
		obj.items = [1, 2, 3];
		expect(obj.items).toHaveLength(3);
		expect(jest.isMockFunction(obj.search)).toBeTrue();
	});
	test('should pass 2', () => {
		obj.items = [];
		expect(obj.items).toHaveLength(0);
		expect(jest.isMockFunction(obj.search)).toBeTrue();
	});
});
