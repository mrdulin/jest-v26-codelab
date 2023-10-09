import { calculateMetrics } from './tradeEvaluator';
import * as fs from 'fs/promises';

jest.mock('fs/promises');

describe('calculateMetrics', () => {
	const readdirMock = fs.readdir as jest.MockedFunction<typeof fs.readdir>;

	beforeEach(() => {
		readdirMock.mockResolvedValue([])
	});

	it('should skip invalid JSON files', async () => {
		await calculateMetrics('./data');
		expect(readdirMock).toHaveBeenCalledTimes(1);
	});
});
