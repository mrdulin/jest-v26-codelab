import { shallow } from 'enzyme';
import axios from 'axios';
import App from './App';
import { act } from 'react-dom/test-utils';

async function flushEffects() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

jest.mock('axios', () => {
  const mAxiosInstance = { get: jest.fn() };
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});

describe('66465749', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    axios.create().get.mockResolvedValueOnce({ name: 'teresa teng' });
    const wrapper = shallow(<App></App>);
    expect(wrapper.state('user')).toEqual({ name: '' });
    await flushEffects();
    expect(wrapper.state('user')).toEqual({ name: 'teresa teng' });
  });
});
