import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import React, { useEffect } from 'react';
import { Route, Router, useParams } from 'react-router-dom';

function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

const MeowComponent = ({ fetch }) => {
  const { number } = useParams<{ number: string }>();
  console.log('number', number);
  useEffect(() => {
    fetch(number, false, false);
  }, [number]);
  return null;
};

describe('72495434', () => {
  test('should pass', async () => {
    const fetch = jest.fn();
    const history = createMemoryHistory();
    history.push('/meow/3');
    mount(
      <Router history={history}>
        <Route path="/meow/:number">
          <MeowComponent fetch={fetch} />
        </Route>
      </Router>
    );
    expect(fetch).toHaveBeenNthCalledWith(1, '3', false, false);
    history.push('/meow/2');
    await flushPromises();
    expect(fetch).toHaveBeenNthCalledWith(2, '2', false, false);
  });
});
