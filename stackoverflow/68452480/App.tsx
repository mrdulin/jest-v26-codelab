import React, { useState } from 'react';

export function App() {
  const [values, setValues] = useState([]);

  async function onUpload(event) {
    if (event?.target.files?.length) {
      const data = await event.target.files[0].text();
      const json = JSON.parse(data);
      setValues(json);
    } else {
      throw new Error('couldnt get files');
    }
  }

  return (
    <div>
      {Boolean(!values.length) && (
        <input data-testid="upInput" accept="application/JSON" type="file" onChange={onUpload} />
      )}
      {Boolean(values.length) && <div data-testid="handler">ValuesHandler</div>}
    </div>
  );
}
