import { AnyAction } from 'redux';
import configureStore, { MockStoreCreator } from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { logIn } from './thunk';
import { Api } from "./api";
import { registrationFormSlice } from './registration';

type RootState = any;

const middlewares = [thunk]
type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>
const mockStoreCreator: MockStoreCreator<RootState, DispatchExts> =
  configureStore<RootState, DispatchExts>(middlewares)


describe('thunk', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })
  test('should pass', () => {
    jest.spyOn(Api.auth, 'logIn').mockResolvedValue({ status: 200 } as unknown as Response)
    const store = mockStoreCreator();
    return store.dispatch(logIn('example@gmail.com', '123')).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([registrationFormSlice.actions.reset()])
    })
  })
})