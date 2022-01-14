import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import useTokenExpirationCheck from './useTokenExpirationCheck';

describe('useTokenExpirationCheck', () => {
  test('should dispatch logout action after delay', async () => {
    let exp = 6000;
    jest.spyOn(Date, 'now').mockReturnValue(5900 * 1000);
    const mockStore = createMockStore([]);
    const store = mockStore({});
    jest.useFakeTimers();
    const { rerender } = renderHook(() => useTokenExpirationCheck(exp), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    jest.advanceTimersByTime(100 * 1000);
    expect(store.getActions()).toEqual([{ type: 'LOGOUT' }]);

    exp = 6100;
    rerender();
    jest.advanceTimersByTime(200 * 1000);
    expect(store.getActions()).toEqual([{ type: 'LOGOUT' }, { type: 'LOGOUT' }]);
  });
});
