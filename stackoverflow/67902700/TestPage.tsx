import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [testData, setTestData] = useState('');

  useEffect(() => {
    const getSomeData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(res.data);
      setTestData(res.data[0]?.title);
    };
    getSomeData();
  }, []);

  return (
    <div className="test">
      <h1>{testData}</h1>
    </div>
  );
}
