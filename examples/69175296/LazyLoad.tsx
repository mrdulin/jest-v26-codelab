import React, { lazy, useState } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

const LazyLoad = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      <div> Lazy component is here: </div>
      <button onClick={() => setShowContent(!showContent)}>Toggle Content</button>
      {showContent && (
        <React.Suspense fallback={null}>
          <LazyComponent />
        </React.Suspense>
      )}
    </div>
  );
};

export default LazyLoad;
