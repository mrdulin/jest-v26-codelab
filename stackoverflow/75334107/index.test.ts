import { makeReducerSetState } from '.';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('75334107', () => {
  test('should pass', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const actionType = 'EDITION_MODAL_REDUCER_TYPES.SET_SELECTED_STEPS';
    makeReducerSetState(store.dispatch)(actionType)(1);
    expect(store.getActions()).toEqual([{ type: actionType, payload: 1 }]);
  });
});
