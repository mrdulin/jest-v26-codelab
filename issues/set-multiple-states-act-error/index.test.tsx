import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useUser, api } from '.';

describe('useUser', () => {
  test('should pass', async () => {
    const getUserSpy = jest.spyOn(api, 'getUser').mockResolvedValueOnce({ name: 'fake user name' });
    const { result, waitForNextUpdate } = renderHook(() => useUser(), {
      wrapper: ({ children }) => <MemoryRouter initialEntries={['/home?id=123']}>{children}</MemoryRouter>,
    });
    await waitForNextUpdate();
    expect(result.current).toEqual({ name: 'fake user name' });
    expect(getUserSpy).toBeCalledWith('123');
  });
});
