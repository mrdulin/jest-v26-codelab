import React, { useEffect } from 'react';

export function MyComponent(props) {
  useEffect(() => {
    props.onHeaderChange(<button>Back</button>);
  }, []);

  return <div>My Component</div>;
}
