// const { JSDOM } = require('jsdom');
// const { window } = new JSDOM();
// const { document, DocumentFragment } = window;

// If testEnvironment: 'enzyme', it will got error:
// TypeError: Cannot read property 'adoptNode' of undefined
// If testEnvironment: 'jsdom', it will work.

describe('65261222', () => {
  it('should pass', () => {
    const mockElement = document.createElement('div');
    mockElement.setAttribute('id', 'foo');
    console.log(mockElement);
    const mockObject = { someProperty: mockElement };
    const frag = new DocumentFragment();
    console.log(frag);
    frag.appendChild(mockObject.someProperty);
  });
});
