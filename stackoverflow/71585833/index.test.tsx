import { act, fireEvent, waitFor, render } from '@testing-library/react';
import React from 'react';
import { Basic } from './';

async function flushPromises(rerender, ui) {
  await act(() => waitFor(() => rerender(ui)));
}

function dispatchEvt(node, type, data) {
  const event = new Event(type, { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
}

function mockData(files) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
}

describe('71585833', () => {
  test('should pass', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', { type: 'application/json' });
    const data = mockData([file]);
    const { container, rerender } = render(<Basic />);
    const dropzone = container.querySelector('div');
    dispatchEvt(dropzone, 'drop', data);
    await flushPromises(rerender, <Basic />);

    expect(container.querySelectorAll('li')).toHaveLength(1);
    expect(container.querySelectorAll('li')[0].textContent).toEqual('ping.json - 13 bytes');
  });
});
