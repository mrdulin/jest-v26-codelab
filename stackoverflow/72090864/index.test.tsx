import { prettyDOM, render } from "@testing-library/react";
import React from "react";

test('should pass', () => {
  const HelloWorld = () => <h1>Hello World</h1>;
  const { container, asFragment } = render(<HelloWorld />);
  const treeStr = prettyDOM(container);
  console.log(treeStr);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1>
        Hello World
      </h1>
    </DocumentFragment>
  `);
});
