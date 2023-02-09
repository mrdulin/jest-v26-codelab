import { act, renderHook } from '@testing-library/react-hooks';
import { useFileDownload } from './useFileDownload';

describe('useFileDownload', () => {
  it('should create refs', async () => {
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();
    const mockRequest = jest.fn().mockResolvedValue({ data: 'url/to/pdf' });
    const { result, waitForNextUpdate } = renderHook(() => useFileDownload({ apiResponse: mockRequest, fileName: 'sample.pdf' }));

    // option 1
    // await act(async () => {
    //   await result.current.download();
    // });

    // option 2
    result.current.download();
    await waitForNextUpdate();

    expect(result.current.name).toBe('sample.pdf');
    expect(mockRequest).toBeCalledTimes(1);
  });
});
