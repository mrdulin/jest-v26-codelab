import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { useUpdateCase } from './useUpdateCase';

const server = setupServer(
  rest.put(`/api/case/:caseId`, async (req, res, ctx) => {
    const sucessHeaders = [ctx.set('Content-Type', 'application/json'), ctx.status(200), ctx.body(JSON.stringify({}))];
    const errorHeaders = [
      ctx.status(503),
      ctx.json({
        errorMessage: 'Service Unavailable',
      }),
    ];

    const index = 1;
    const response = [sucessHeaders, errorHeaders];

    return res(...response[index]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('67902700', () => {
  test('loads and displays greeting', async () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
      },
      defaultOptions: {
        mutations: {
          retry: false,
          cacheTime: Infinity,
        },
      },
    });
    const { result, waitFor } = renderHook(() => useUpdateCase(1), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });
    result.current.mutation.mutate({ text: 'new text' });
    await waitFor(() => {
      expect(axios.isAxiosError(result.current.error)).toBeTrue();
      expect(result.current.error.response.data.errorMessage).toEqual('Service Unavailable');
    });
  });
});
