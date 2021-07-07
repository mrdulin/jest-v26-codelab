import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { mocked } from 'ts-jest/utils';
import PostJobComponent from './';
import { watchPostJobSaga } from './redux/postJobSaga';
import { postJobService } from './services/postJobServices';

const sagaMiddleware = createSagaMiddleware();
const mws = [sagaMiddleware];
const mockStore = createMockStore(mws);

jest.mock('./services/postJobServices');

const mockedPostJobService = mocked(postJobService);

function flushPromises() {
  return new Promise((resolve) => setImmediate(resolve));
}

describe('68233094', () => {
  it('should handle form submit', async () => {
    const store = mockStore({});
    sagaMiddleware.run(watchPostJobSaga);

    mockedPostJobService.mockResolvedValueOnce({ success: true });
    const wrapper = mount(
      <Provider store={store}>
        <PostJobComponent></PostJobComponent>
      </Provider>
    );
    wrapper.find('form').simulate('submit', {
      target: {
        title: { value: 'mocked title' },
        location: { value: 'mocked location' },
      },
    });
    await flushPromises();
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'POST_JOB_REQUEST',
        payload: { title: 'mocked title', location: 'mocked location' },
      },
      { type: 'POST_JOB_SUCCESS', response: { success: true } },
    ]);
  });
});
