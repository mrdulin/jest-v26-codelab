import UnitTest from './MyComponent';
import axios from 'axios';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

const whenStable = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
};

describe('67885144', () => {
  it('should pass', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { title: 'delectus aut autem' } });
    const wrapper = mount(<UnitTest />);
    await whenStable();

    expect(wrapper.find('p').text()).toEqual('delectus aut autem');
    expect(axiosGetSpy).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    axiosGetSpy.mockRestore();
  });
});
