import { useHistory } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useHistory: jest.fn(),
}));

describe('MyComponent', () => {
  test('should pass', () => {
    (useHistory as jest.Mock).mockReturnValue({ location: { pathname: '/test' } });
    const history = useHistory();
    expect(history.location.pathname).toBe('/test');
  });
});
