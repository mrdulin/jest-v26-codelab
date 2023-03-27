const { JSDOM } = require('jsdom');

function getURLSFromHTML(htmlBody) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const LinkElements = dom.window.document.querySelectorAll('a');
  for (const link of LinkElements) {
    urls.push(link.href);
  }
  return urls;
}

test('getURLSFromHTML', () => {
  const inputHTMLBody = `
    <html>
    <body>
        <a href="https://www.soumdatta.live/">
        Go to Boot.dev>
        </a>
    </body>
  </html>
  `;

  const actual = getURLSFromHTML(inputHTMLBody);
  const expected = ['https://www.soumdatta.live/'];
  expect(actual).toEqual(expected);
});
