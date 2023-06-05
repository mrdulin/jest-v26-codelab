import { ErrorBoundary } from "react-error-boundary";
import { useAxios } from "./useAxios";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from "axios";
import React, { Suspense } from "react";

describe('76404248', () => {
  test('should pass', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => { })
    const requestSpy = jest.spyOn(axios, 'request').mockRejectedValueOnce(new Error('test error'))
    const TestComp = () => {
      useAxios({})
      return null;
    }
    render(
      <ErrorBoundary
        fallbackRender={({ error }) => <p>{error.message}</p>}
      >
        <Suspense fallback={<p>loading</p>}>
          <TestComp />
        </Suspense>
      </ErrorBoundary>
    )

    expect(await screen.findByText(/test error/i)).toBeInTheDocument();
    screen.debug();
    errorSpy.mockRestore();
    requestSpy.mockRestore();
  })
})