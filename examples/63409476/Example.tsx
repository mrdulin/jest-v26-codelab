import React from 'react';
import { usePageTracking } from './usePageTracking';

export function Example() {
  usePageTracking();
  return <div>example</div>;
}
