import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const useDebounce = (newValue) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(newValue);
    }, 500);
    return () => clearTimeout(timeout);
  }, [newValue]);
  return value;
};

export const fetcher = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export default function App() {
  const [query, setQuery] = useState('react');
  const searchQuery = useDebounce(query);
  const { data: repos } = useSWR(
    `https://api.github.com/search/repositories?q=${searchQuery}&per_page=1&page=1`,
    fetcher
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        data-testid="search"
        id="search-input"
        placeholder="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      {!repos ? (
        <div data-testid="loader">
          <h2 id="loading">loading</h2>
        </div>
      ) : (
        repos?.items?.map((user) => {
          console.log('user: ', user);
          return (
            <div key={user.id} data-testid="repo-item">
              {user.name}
            </div>
          );
        })
      )}
    </div>
  );
}
