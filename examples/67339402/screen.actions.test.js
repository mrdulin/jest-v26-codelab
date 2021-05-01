import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './screen.actions';

const mws = [thunk];
const mockStore = configureStore(mws);

describe('67339402', () => {
  it('should pass', async () => {
    Object.defineProperty(window, 'location', {
      set(val) {
        this._href = val;
      },
      get() {
        return this._href;
      },
    });
    const store = mockStore({});
    await store.dispatch(actions.loadScreen());
    expect(window.location).toEqual('www.google.com');
  });
});
