import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test('arrow key navigation', () => {
  const { getByLabelText } = render(
    <div>
      <label htmlFor="apple">
        Apple
        <input type="radio" value="apple" id="apple" name="fruit" />
      </label>
      <label htmlFor="banana">
        Banana
        <input type="radio" value="banana" id="banana" name="fruit" />
      </label>
    </div>
  );

  const apple = getByLabelText('Apple');
  const banana = getByLabelText('Banana');

  userEvent.tab();
  expect(apple).toHaveFocus();
  userEvent.type(banana, '{arrowright}');
  expect(banana).toHaveFocus();
});
