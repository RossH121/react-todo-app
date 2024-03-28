import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList'; // Ensure the path matches your project structure

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-4">
        <img src={logo} className="w-32 mx-auto" alt="logo" />
        <h1 className="text-xl font-bold text-gray-700 mt-2">React Todo List</h1>
      </header>
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
