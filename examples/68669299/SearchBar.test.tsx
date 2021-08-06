import { mount } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';

describe('Search', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should call onSearch function', () => {
    const onSearch = jest.fn();
    const wrapper = mount(<SearchBar onSearch={onSearch} />);
    const searchBar = wrapper.find('[data-test="search"]').at(0);
    searchBar.simulate('change', { target: { value: 'test' } });
    expect(onSearch).toBeCalledTimes(1);
  });
});
