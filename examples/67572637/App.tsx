import React from 'react';
import { useEffect, useState } from 'react';

export default function App() {
  const [urlChanged, setUrlChanged] = useState(false);
  const handleURLSearchChange = () => {
    window.location.search = '?' + new URLSearchParams({ foo: 'bar' }).toString();
    if (window.location.search.length !== 0) {
      setUrlChanged(true);
    }
  };
  useEffect(() => {
    if (window.location.search.length !== 0) {
      setUrlChanged(true);
    }
  }, []);
  return (
    <div>
      <button aria-label="change" onClick={handleURLSearchChange}>
        Change URL search
      </button>
      <p aria-label="URL Status">{urlChanged ? 'Changed!' : 'Not yet'}</p>
    </div>
  );
}
