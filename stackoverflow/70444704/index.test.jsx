import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('70444704', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test('should pass', () => {
    act(() => {
      require('./');
    });
    expect(container.textContent).toBe('app');
  });
});
