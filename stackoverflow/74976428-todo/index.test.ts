import { getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';

describe('index.html', () => {
	let container;
	beforeEach(() => {
		const dom = new JSDOM(fs.readFileSync(path.resolve(__dirname, 'index.html')), {
			runScripts: 'dangerously',
			resources: 'usable',
			url: `file://${path.resolve(__dirname)}/index.html`,
		});
		(global as any).window = dom.window;
		container = dom.window.document.body;
		console.log(container.innerHTML);
	});
	it('increment a value via JavaScript when the button is clicked', async () => {
		getByText(container, 'Increment').click();
		await waitFor(() => expect(container.querySelector('.output')).toHaveTextContent('1'));
	});
});
