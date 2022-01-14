import React from 'react';
import { useTodos } from './hooks';

export default function MyComponent() {
  const { todos, addTodo, removeTodo } = useTodos();
  return (
    <div>
      {todos.map((todo, i) => (
        <p key={i}>
          {todo}
          <button type="button" onClick={() => removeTodo(i)}>
            Remove
          </button>
        </p>
      ))}
      <button type="button" onClick={() => addTodo('have a drink')}>
        Add
      </button>
    </div>
  );
}
