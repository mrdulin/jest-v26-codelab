import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import AddToAlbumButton from './';

const mockStore = createMockStore();

jest.mock('./components/ContentAddToAlbumModal', () => {
  return function ContentAddToAlbumModal() {
    return <div>ContentAddToAlbumModal</div>;
  };
});

jest.mock('./components/AddSection', () => {
  return function AddSection({ onClick }) {
    return <div onClick={onClick}>AddSection</div>;
  };
});

describe('AddToAlbumButton', () => {
  test('should pass', () => {
    const store = mockStore({});
    const content = {
      get(key) {
        return '123';
      },
    };
    render(
      <Provider store={store}>
        <AddToAlbumButton content={content} />
      </Provider>
    );
    fireEvent.click(screen.getByText(/AddSection/));
    expect(store.getActions()).toEqual([{ type: 'MODAL_CONTENT_ADD_TO_ALBUM', payload: { id: '123' } }]);
  });
});
