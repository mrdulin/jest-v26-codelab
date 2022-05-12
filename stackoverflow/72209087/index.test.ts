import { renderHook, act } from '@testing-library/react-hooks';
import { useStep } from '.';

describe('72209087', () => {
  it('should change step value when `changeStep` is called', async () => {
    const { result } = renderHook(useStep);
    expect(result.current.step).toBe('sending');
    act(() => {
      result.current.changeStep('verifying');
    });
    expect(result.current.step).toBe('verifying');
  });
});
