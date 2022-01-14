import axios from 'axios';
import React from 'react';

const UnitTest = () => {
  const [todo, set_todo] = React.useState({});

  React.useEffect(() => {
    const onMounted = async () => {
      const getTodo = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      set_todo(getTodo.data);
    };
    onMounted();
  }, []);

  return (
    <div id="UnitTest">
      <p>{todo.title}</p>
    </div>
  );
};

export default UnitTest;
