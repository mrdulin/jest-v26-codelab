import { fireEvent, render } from '@testing-library/react';
import React, { useState } from 'react';
import FormCheckBox from './';

describe('73184212', () => {
  test('should pass', () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      return <FormCheckBox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)} />;
    };
    const { container } = render(<Wrap />);
    const checkbox = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});

