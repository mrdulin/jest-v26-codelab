[`baseElement`](https://testing-library.com/docs/react-testing-library/api/#baseelement-1) is different with `container` and its default element is `document.body`.

> If you don't specify the `baseElement` in the options of render, it will default to `document.body`.

The default element of `container` is `div` element appended inside `baseElement`, see source code [v13.4.0/src/pure.js#L172](https://github.com/testing-library/react-testing-library/blob/v13.4.0/src/pure.js#L172):

```typescript
if (!container) {
  container = baseElement.appendChild(document.createElement('div'));
}
```

> the queries returned by the render looks into `baseElement`, so you can use queries to test your portal component without the `baseElement`.

See [/v13.4.0/src/pure.js#L152](https://github.com/testing-library/react-testing-library/blob/v13.4.0/src/pure.js#L152):

```typescript
{
  baseElement,
  // ...
  ...getQueriesForElement(baseElement, queries),
}
```

These [quries](https://testing-library.com/docs/queries/about#types-of-queries) are bound to `baseElement`, you can use queries returned by `render` function like this:
