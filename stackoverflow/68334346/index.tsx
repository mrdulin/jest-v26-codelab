import React, { useState } from 'react';
import Container from './Container';

export function TestComponent() {
  const [visible, setVisible] = useState(true);
  return (
    <React.Fragment>
      {visible && (
        <Container>
          I'm Visible
          <button onClick={() => setVisible(false)}>click to close</button>
        </Container>
      )}
    </React.Fragment>
  );
}
