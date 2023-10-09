import { Helpers } from './helpers';
import { getData, track } from './operations';

jest.mock('./operations');

describe('Helpers', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});


	it('Should return a id 1', async () => {
    const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }];
		getData.mockResolvedValue(mockData);
		const response = await Helpers.execute();
		expect(response.id).toBe(1);
	});

	it('Should return a id 1 with true flag', async () => {
    const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }];
		getData.mockResolvedValue(mockData);
		track.mockResolvedValue({});

		const response = await Helpers.execute(true);
		expect(response.id).toBe(1);
	});
});
