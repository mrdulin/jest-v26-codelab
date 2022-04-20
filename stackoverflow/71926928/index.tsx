import React, { lazy, Suspense } from 'react';

const MyComponent = lazy(() => import('./component').then(({ MyComponent }) => ({ default: MyComponent })));

export function App() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading&hellip;</h1>
        </div>
      }
    >
      <MyComponent />
    </Suspense>
  );
}
