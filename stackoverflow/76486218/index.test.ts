import { getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';

function add(url) {
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'childList') {
				const newLinks = document.body.querySelectorAll('a');
				newLinks.forEach(function (link) {
					link.setAttribute('href', url);
				});
			}
		});
	});

	observer.observe(document.body, { childList: true, subtree: true });
}

test('should pass', async () => {
	add('https://google.com?id=123');
	document.body.innerHTML = `<div><a href="https://google.com">google</a></div>`;
	await waitFor(() => {
		const link = (getByText(document.body, 'google') as unknown) as HTMLLinkElement;
		console.log(link.href);
		expect(link).toHaveAttribute('href', 'https://google.com?id=123');
	});
});
