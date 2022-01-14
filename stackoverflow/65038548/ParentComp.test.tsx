import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ParentComp } from './ParentComp';

function MockedMyModal({ onClose, showModal }) {
  return (
    showModal && (
      <>
        <div>This is a mocked modal</div>
        <button data-testid="my-modal" onClick={onClose}>
          Close
        </button>
      </>
    )
  );
}

jest.mock('./MyModal', () => {
  return { MyModal: MockedMyModal };
});

describe('65038548', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should open the modal', () => {
    const { getByTestId } = render(<ParentComp></ParentComp>);
    const openModalButton = getByTestId('open-modal-button');

    fireEvent.click(openModalButton);
    const myModal = getByTestId('my-modal');

    expect(myModal).toBeDefined();
  });

  it('should close the modal', () => {
    const { getByTestId, queryByText } = render(<ParentComp></ParentComp>);
    const openModalButton = getByTestId('open-modal-button');
    fireEvent.click(openModalButton);

    const closeModalButton = getByTestId('my-modal');
    expect(closeModalButton).toBeDefined();

    fireEvent.click(closeModalButton);

    expect(queryByText('This is a mocked modal')).toBeNull();
  });
});
