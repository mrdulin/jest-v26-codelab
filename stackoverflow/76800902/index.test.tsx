import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

function Counter() {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<div>{count}</div>
			<div role='alert' aria-label='Please wait'>
				Please wait...
			</div>
			<div role='heading'>An example heading</div>
			<button onClick={() => setCount(count + 1)}>click me</button>
		</div>
	);
}

test('renders alert', async () => {
	render(<Counter />);
	const loadingScreen = await screen.findByRole('alert', {
		name: /Please wait/i,
	});
	expect(loadingScreen).toBeInTheDocument();

	const heading = await screen.findByRole('heading', { name: /An example heading/i });
	expect(heading).toBeInTheDocument();
});
