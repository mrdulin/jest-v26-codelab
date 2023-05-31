import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTest } from './test-hook';
import * as testApi from './api';
import React from 'react';

jest.mock('./api');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('useTestHook', () => {
  it('should return a test', async () => {
    testApi.getTestByUid.mockResolvedValue({ name: 'secret test' });
    testApi.getTestStatusesByUid.mockResolvedValue(['in_progress', 'ready_for_approval', 'rejected']);

    const { result, waitForNextUpdate } = renderHook(() => useTest('bb450409-d778-4d57-a4b8-70fcfe2087bd'), {
      wrapper,
    });

    await waitForNextUpdate();
    expect(result.current.test).toEqual({ name: 'secret test' });
    expect(result.current.testStatuses).toEqual(['in_progress', 'ready_for_approval', 'rejected']);
  });
});
