import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { onValue } from './Firebase';
import Acerca from './Acerca';

jest.mock('./Firebase');

describe('Acerca', () => {
  test('should pass', async () => {
    const data = { feature: { title: 'New feature' } };
    const snapshot = { val: () => data };
    onValue.mockImplementation((ref, callback) => {
      callback(snapshot);
      return jest.fn();
    });
    const container = document.createElement('div');
    await act(async () => {
      render(<Acerca />, container);
    });
    expect(container.querySelector('h3').textContent).toBe(data.feature.title);
  });
});
