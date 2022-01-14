import { useRouter } from 'next/router';
import { renderHook } from '@testing-library/react-hooks';
import { useCustomHook } from './useCustomHook';
import { mocked } from 'ts-jest/utils';
import { NextRouter } from 'next/dist/next-server/lib/router/router';

jest.mock('next/router');

const useMockRouter = mocked(useRouter);

describe('68660313', () => {
  test('should pass', () => {
    const countSpy = jest.spyOn(console, 'count');
    const query1 = ({ query: { id: '1' } } as unknown) as NextRouter;
    const query2 = ({ query: { id: '2' } } as unknown) as NextRouter;

    useMockRouter.mockReturnValue(query1);
    const { result, rerender } = renderHook(() => useCustomHook());
    expect(result.current).toEqual({ id: '1' });
    useMockRouter.mockReturnValue(query2);
    rerender();
    expect(result.current).toEqual({ id: '2' });
    expect(countSpy).toBeCalledTimes(2);
  });
});
