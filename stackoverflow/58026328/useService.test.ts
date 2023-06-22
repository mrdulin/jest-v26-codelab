import { renderHook } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';
import { getChatLog } from './getChatLog';
import { useService } from './useService';

jest.mock('./getChatLog');

describe('58026328', () => {
	test('should pass', async () => {
		const mGetChatLog = mocked(getChatLog);
		mGetChatLog.mockRejectedValueOnce('error');
		const { result, waitForNextUpdate } = renderHook(useService);
		await waitForNextUpdate();
		expect(result.current.cancelRequest).toEqual(false);
		expect(result.current.error).toBe('error');
	});
});
