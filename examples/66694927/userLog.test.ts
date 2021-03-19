import { renderHook } from '@testing-library/react-hooks';
import { useLog } from './useLog';

test('should increment counter', () => {
  const logSpy = jest.spyOn(console, 'log');
  const { result } = renderHook(() => useLog());
  result.current.log();
  expect(logSpy).toBeCalledWith('hello World');
});
