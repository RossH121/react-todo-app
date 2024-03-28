import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [error, setError] = useState('');

  const addTodo = () => {
    const trimmedTodo = currentTodo.trim();

    // Validation checks
    if (!trimmedTodo) {
      setError('Todo text should not be blank.');
      return;
    } else if (trimmedTodo.length > 255) {
      setError('Todo text should be no more than 255 characters.');
      return;
    } else if (todos.includes(trimmedTodo)) {
      setError('Duplicate todo items are not allowed.');
      return;
    }

    setTodos([...todos, trimmedTodo]);
    setCurrentTodo('');
    setError(''); // Clear any previous error messages
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span className="p-2 bg-gray-100 rounded-md">{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
