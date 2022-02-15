import { MutableRefObject, useEffect, useState } from 'react';

export default function useNearScreen(elementRef: MutableRefObject<HTMLDivElement>, margin = 80) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const el: IntersectionObserverEntry = entries[0];
      if (el.isIntersecting) {
        setShow(true);

        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: `${margin}px`,
    });

    observer.observe(elementRef.current as Element);

    return () => observer.disconnect();
  });
  return show;
}
