import { CatsService } from '.';

describe('76675025', () => {
	let service;
	let mockClientDB;
	const mockCatRepository = {
		findOne: jest.fn(),
	};

	beforeEach(() => {
		mockClientDB = {
			query: jest.fn().mockReturnThis(),
			promise: jest.fn(),
		};
		service = new CatsService(mockCatRepository, mockClientDB);
	});

	test('should pass', async () => {
		const mockInput = 'Peanut';
		const mockDynamoReturn = { Items: [{ name: 'Peanut', breed: 'Tabby' }] };
		mockClientDB.promise.mockResolvedValueOnce(mockDynamoReturn);
		await service.findCat(mockInput);
		expect(mockClientDB.query).toBeCalledWith('Peanut');
		expect(mockClientDB.promise).toBeCalledTimes(1);
	});
});
