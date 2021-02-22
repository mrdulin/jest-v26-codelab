import axios from 'axios';
import { createAccount, ErrorResponse, User } from './api';
import { AsyncThunkAction } from '@reduxjs/toolkit';

jest.mock('axios');

describe('user account', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should return data if status code equals 200', async () => {
    const dispatch = jest.fn();
    const result = {
      status: 200,
      data: {},
    };
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce(result);
    const createAccountAsyncThunkAction: AsyncThunkAction<ErrorResponse, User, {}> = createAccount({
      id: '1',
      firstName: 'first name',
      lastName: 'last name',
      email: 'email',
      phone: 'phone',
    });

    const actual = await createAccountAsyncThunkAction(dispatch, () => {}, undefined);
    expect(actual.meta.arg).toEqual({
      id: '1',
      firstName: 'first name',
      lastName: 'last name',
      email: 'email',
      phone: 'phone',
    });
    expect(actual.payload).toEqual({ status: 200, data: {} });
    expect(axios.post).toBeCalledWith('http://localhost:3000/users.json', {
      id: '1',
      firstName: 'first name',
      lastName: 'last name',
      email: 'email',
      phone: 'phone',
    });
  });
});
