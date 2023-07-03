import React, { useContext } from 'react';

jest.mock('react', () => ({
	...(jest.requireActual('react') as typeof import('react')),
	useContext: jest.fn(),
}));

const useContextMock = useContext as jest.MockedFunction<typeof useContext>;

const MyContext = React.createContext(null);
const func1 = () => useContext(MyContext);

it('with mock', () => {
	useContextMock.mockImplementation((ctx) => ({ someKey: 'someVal' }));
	expect(func1()).toEqual({ someKey: 'someVal' });
});
