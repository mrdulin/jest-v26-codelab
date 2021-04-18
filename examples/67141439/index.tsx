import React, { Suspense } from 'react';

export const object = {
  component: React.lazy(() => import('./OtherComponent')),
};

export function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <object.component />
      </Suspense>
    </div>
  );
}
