import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import App from './App';

describe('74144869', () => {
  test('should pass', async () => {
    const mData = [1, 2]
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mData)
    }
    global.fetch = jest.fn().mockResolvedValue(mResponse as unknown as Response);
    render(<App />);
    expect(await screen.findByText(1)).toBeInTheDocument();
  })
})