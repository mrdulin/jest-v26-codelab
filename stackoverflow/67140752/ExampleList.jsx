import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ExampleList = (props) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    let response = await Axios.get('http://dummy.restapiexample.com/api/v1/employees');
    setList(response.data.data);
  };

  const renderList = () => {
    return list.map((item, index) => {
      return <li key={index}>{item.employee_name}</li>;
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ExampleList;
