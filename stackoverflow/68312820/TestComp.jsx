import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export const TestComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('/../someURL').then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <table>
      <tbody>
        {data.map((d) => (
          <tr key={d.req_id}>
            <th>{d.req_id}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
3;
