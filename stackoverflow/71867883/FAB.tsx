import React, { useEffect, useState } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    $visible?: boolean;
  }
}

const CTA_REVEAL_TIME = 5000;
export default function FAB() {
  const [showCTA, setShowCTA] = useState(false);
  const [mountCTA, setMountCTA] = useState(false);

  useEffect(() => {
    const mountCTATimer = setTimeout(() => setMountCTA(true), CTA_REVEAL_TIME - 1000);
    return () => clearTimeout(mountCTATimer);
  }, []);

  useEffect(() => {
    const CTATimer = setTimeout(() => setShowCTA((prevState) => !prevState), CTA_REVEAL_TIME);
    return () => clearTimeout(CTATimer);
  }, []);

  return <>{mountCTA && <p $visible={showCTA}>this</p>}</>;
}
