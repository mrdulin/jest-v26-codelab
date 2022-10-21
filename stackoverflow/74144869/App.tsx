import React from 'react';
import { useFetch } from 'usehooks-ts'

const FETCH_URL = 'http://localhost:3000/api';
export default function App() {
  const { data, error } = useFetch<any[]>(FETCH_URL)
  console.log(data, error);

  if (error) return <p>Error</p>
  if (!data) return <p>Loading...</p>

  return (
    <div className="App">
      <h1>Welcome</h1>
      {data.map(d => <div key={d}>{d}</div>)}
    </div>
  )
}