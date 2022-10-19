import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import React from "react"
import { useContext } from "react"
import { ModalContext, ModalProvider } from "."

describe('74101831', () => {
  test('should pass', () => {
    const TestComp = () => {
      const { isOpen, titleText, contentText, hideCloseButton, showModal } = useContext(ModalContext);

      return <div>
        <dialog open={isOpen} title={titleText} >
          <div>{contentText}</div>
          {!hideCloseButton && <button>close</button>}
        </dialog>

        <button onClick={() => showModal('dialog title', 'dialog content', false)}>show modal</button>
      </div>
    }

    render(<ModalProvider><TestComp /></ModalProvider>);

    fireEvent.click(screen.getByRole('button', { name: 'show modal' }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveAttribute('title', 'dialog title');
    expect(screen.getByRole('dialog')).toHaveAttribute('open');
    expect(screen.getByRole('button', { name: 'close' })).toBeInTheDocument();
    expect(screen.getByText('dialog content')).toBeInTheDocument();
  });
})