import { render } from '@testing-library/react';
import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
	return state;
};

const TestComp = () => {
	const [state, dispatch] = useReducer(reducer, 0);
	useEffect(() => {
		dispatch(1);
	}, []);
	return state;
};

test('should pass', () => {
	render(<TestComp />);
});
