const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn(),
});

window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

describe('70793614', () => {
  test('App works', async () => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'www.google.com');
  });
});
