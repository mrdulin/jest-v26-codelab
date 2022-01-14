import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchPosts } from './actionCreators';
import sinon from 'sinon';
import { expect } from 'chai';

const middlewares = [thunk];
const mockStore = createMockStore<{}, ThunkDispatch<{}, any, AnyAction>>(middlewares);

describe('46791110', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', () => {
    const store = mockStore({});
    const mRes = { json: sinon.stub().resolves({ data: { children: [{ data: 'jav' }, { data: 'big xx' }] } }) };
    const fetchStub = sinon.stub().resolves(mRes);
    const dateStub = sinon.stub(Date, 'now').returns(111);
    global.fetch = fetchStub;
    return store.dispatch(fetchPosts('nsfw')).then(() => {
      const actions = store.getActions();
      expect(actions).to.be.deep.equal([
        { type: 'REQUEST_POSTS', subreddit: 'nsfw' },
        {
          type: 'RECEIVE_POSTS',
          subreddit: 'nsfw',
          posts: ['jav', 'big xx'],
          receivedAt: 111,
        },
      ]);
      sinon.assert.calledOnceWithExactly(fetchStub, 'https://www.reddit.com/r/nsfw.json');
      sinon.assert.calledOnce(mRes.json);
      sinon.assert.calledOnce(dateStub);
    });
  });
});
