import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [pdf, setPdf] = useState();

  const fetchPdf = () => {
    axios
      .get('url/endpoint')
      .then((res) => {
        if (res.status === 200) {
          setPdf(res.data);
        }
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchPdf();
  }, []);

  return (
    <div className="App">
      <h1>My pdf from state: {pdf}</h1>
    </div>
  );
}
