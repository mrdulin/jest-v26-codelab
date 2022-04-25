import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MyComponent } from '.';

describe('71995270', () => {
  test('it renders the back button', () => {
    const onHeaderChange = jest.fn();
    render(<MyComponent onHeaderChange={onHeaderChange} />);

    const expectedElement = React.createElement('button', null, 'Back');
    console.log('expectedElement: ', expectedElement);
    expect(onHeaderChange).toHaveBeenCalledWith(expectedElement);
    expect(onHeaderChange).toHaveBeenCalledWith(<button>Back</button>);
  });

  test('it renders the back button - 2', () => {
    let buttonElement;
    const onHeaderChange = jest.fn().mockImplementation((element) => {
      buttonElement = element;
    });
    render(<MyComponent onHeaderChange={onHeaderChange} />);

    const { getByRole } = render(buttonElement);
    expect(getByRole('button')).toHaveTextContent('Back');
  });
});
