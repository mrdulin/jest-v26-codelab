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
  it('should pass', () => {
    const { getByTestId } = render(<ParentComp></ParentComp>);
    const openModalButton = getByTestId('open-modal-button');

    fireEvent.click(openModalButton);
    const myModal = getByTestId('my-modal');

    expect(myModal).toBeDefined();
  });
});
