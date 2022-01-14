import { useState } from 'react';

export const useTodos = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (value) => {
    const updatedTodos = [...todos, value];
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return { todos, addTodo, removeTodo };
};
