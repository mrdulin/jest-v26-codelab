import { screen, render, fireEvent } from '@testing-library/react'
import React from 'react'
import { Button } from './'

describe('69029886', () => {
    test('should pass', () => {
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<Button type='submit' text='submit' />, { wrapper: ({ children }) => <form onSubmit={onSubmit}>{children}</form> })
        const button = screen.getByLabelText(/submit/)
        fireEvent.click(button)
        expect(onSubmit).toBeCalled();
    })
})
