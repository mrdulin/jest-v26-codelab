// import React from 'react';
// import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
// import App from './index';

// describe('67900373', () => {
//   it('should pass', () => {
//     const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON[];
//     console.log(tree);
//     tree.forEach((node) => {
//       expect(node.children?.length).toBe(1);
//     });
//   });
// });

import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import App from './index';

describe('67900373', () => {
  it('should pass', () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    console.log(tree);
    expect(tree.children?.length).toBe(1);
  });
});
