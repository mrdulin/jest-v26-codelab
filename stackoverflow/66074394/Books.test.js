import React from 'react';
import { shallow } from 'enzyme';
import Books from './Books';
import BookList from './BookList';

describe('66074394', () => {
  it('should pass', () => {
    const mockProps = {
      books: [
        {
          name: 'ants',
          price: '$10',
        },
        {
          name: 'the secret',
          price: '$10',
        },
      ],
      searchField: 'a',
    };

    const wrapper = shallow(<Books {...mockProps} />);
    expect(wrapper.find(BookList).prop('books')).toEqual([{ name: 'ants', price: '$10' }]);
  });
});
