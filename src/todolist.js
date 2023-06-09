import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const handleSaveList = () => {
    // Save the to-do list to the backend or storage associated with the logged-in user
    console.log('Saving to-do list:', todos);
  };

  const handleLoadList = () => {
    // Retrieve the to-do list from the backend or storage associated with the logged-in user
    // Set the retrieved list in the state to display it in the UI
    const retrievedList = ['Task 1', 'Task 2', 'Task 3']; // Replace with your actual data retrieval code
    setTodos(retrievedList);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={handleSaveList}>Save List</button>
      <button onClick={handleLoadList}>Load List</button>
    </div>
  );
}

export default TodoList;
