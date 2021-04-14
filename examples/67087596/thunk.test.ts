import { myFunc } from './thunk';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

describe('67087596', () => {
  it('should pass', async () => {
    const nameAndEmail = {
      name: 'John Smith',
      email: '123@123.com',
    };
    const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { id: '1' } });
    const store = configureStore({
      reducer: function (state = '', action) {
        switch (action.type) {
          case 'returns ID/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(myFunc(nameAndEmail));
    expect(postSpy).toBeCalledWith('/backendroute', nameAndEmail);
    const state = store.getState();
    expect(state).toEqual('1');
  });
});
