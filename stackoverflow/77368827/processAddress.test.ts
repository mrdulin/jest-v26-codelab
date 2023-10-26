import { EntityManager, getLoaders } from './getLoaders';
import { processAddress } from './processAddress';

jest.mock('dataloader', () => {
	return jest.fn().mockImplementation(() => {
		return {
			load: jest.fn(),
			loadMany: jest.fn(),
		};
	});
});

describe('processAddress', () => {
	const loadersMock = getLoaders({} as EntityManager);

	it('should call load with first mock', async () => {
		(loadersMock.addressById.load as any).mockImplementation(() => Promise.resolve({ name: 'mocked value 1' }));

		const result = await processAddress(1, loadersMock);

		expect(loadersMock.addressById.load).toHaveBeenCalled();
		expect(loadersMock.addressById.load).toHaveBeenCalledWith(1);
		expect(result).toBe('mocked value 1');
	});

	it('should call load with second mock', async () => {
		(loadersMock.addressById.load as any).mockImplementation(() => Promise.resolve({ name: 'mocked value 2' }));

		const result = await processAddress(2, loadersMock);

		expect(loadersMock.addressById.load).toHaveBeenCalled();
		expect(loadersMock.addressById.load).toHaveBeenCalledWith(2);
		expect(result).toBe('mocked value 2');
	});
});
