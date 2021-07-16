import axios from 'axios';
import React, { useState } from 'react';

export function PersonsList() {
  const [person, setPeople] = useState();
  const [error, setError] = useState(false);

  const getPeople = () => {
    const url = 'https://randomuser.me/api/?results=10';
    axios(url)
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <button
        className="actions__modify-list"
        onClick={() => {
          getPeople();
        }}
        id="reset"
      ></button>
    </div>
  );
}
