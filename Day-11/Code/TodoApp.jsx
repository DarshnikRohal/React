// src/TodoApp.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Redux Toolkit Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 mb-4">Add</button>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border p-2">
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)} className="text-red-500">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
