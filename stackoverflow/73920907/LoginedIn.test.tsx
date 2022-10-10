import React from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import LoggedIn from './LoginedIn';
import * as api from './api';

const queryClient = new QueryClient();

test('should make api call upon loading', async () => {
  const spy = jest.spyOn(api, 'getRecipes').mockResolvedValueOnce([1, 2, 3]);
  render(
    <QueryClientProvider client={queryClient}>
      <LoggedIn />
    </QueryClientProvider>
  );
  expect(spy).toBeCalledWith('1');
});
