import { GetChatList, MessagesActionTypes } from './thunk';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

interface AppState {}
type DispatchExts = ThunkDispatch<AppState, void, AnyAction>;
const mws = [thunk];
const mockStore = configureStore<AppState, DispatchExts>(mws);

describe('71296970', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: 'fake data' });
    const store = mockStore({});
    const expectedActions = [
      { type: MessagesActionTypes.GET_MESSAGES_LIST.REQUEST, payload: {} },
      { type: MessagesActionTypes.GET_MESSAGES_LIST.SUCCESS, payload: 'fake data' },
    ];

    return store.dispatch(GetChatList(1)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
