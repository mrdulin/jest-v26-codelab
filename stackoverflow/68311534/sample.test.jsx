import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('68311534', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should pass', () => {
    const memoryHistory = createMemoryHistory();
    const pushSpy = jest.spyOn(memoryHistory, 'push');
    jest.doMock('./history', () => memoryHistory);
    const { default: Sample } = require('./sample');
    render(<Sample />);
    const button = screen.getByText('Click');
    userEvent.click(button);
    expect(pushSpy).toBeCalledWith('/login');
  });
});
