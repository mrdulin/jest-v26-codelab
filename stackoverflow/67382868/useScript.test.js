import { useEffect, useState } from 'react';
import { useScript } from './useScript';

jest.mock('react');

const mockSetStatus = jest.fn();
const mockScriptSrc = 'https://code.jquery.com/jquery-3.6.0.slim.min.js';

describe('useScript', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should append the script to the document body', async () => {
    jest.spyOn(document.body, 'appendChild');
    useState.mockReturnValueOnce(['loading', mockSetStatus]);
    useScript(mockScriptSrc);
    const [effect] = useEffect.mock.calls[0];
    await effect();

    expect(document.body.appendChild).toBeCalledWith(expect.any(HTMLScriptElement));
  });
});
