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
	test('should pass 3', () => {
		Object.assign(obj, { items: [1], a: 1 });
		expect(obj.items).toHaveLength(1);
		expect(obj.a).toBe(1);
		expect(jest.isMockFunction(obj.search)).toBeTrue();
	});
});
