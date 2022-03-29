import { render, screen } from '@testing-library/react';
import React from 'react';
import { MyEl } from '.';

describe('71648378', () => {
  it('Should not have custom class', () => {
    render(<MyEl />);

    const mainEl = screen.getByText('some content');
    expect(mainEl.className).toEqual(expect.not.stringContaining('my-custom-class-'));
  });

  it('Should  have custom class', () => {
    render(<MyEl someCondition customClassName="abc" />);

    const mainEl = screen.getByText('some content');
    expect(mainEl.className).toEqual(expect.stringContaining('my-custom-class-'));
  });
});
