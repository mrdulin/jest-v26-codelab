import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import WorkflowForm from './WorkflowForm';
import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

afterEach(cleanup);

const mockStore = configureMockStore();
const store = mockStore({
  data: { userID: '121' },
  ui: { userObj: 'Name' },
});

describe('Test suits for WorkflowForm', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <WorkflowForm />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
