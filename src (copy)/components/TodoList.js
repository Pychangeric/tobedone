import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [todo, setTodo] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:9292/todos');
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = async () => {
    if (name.trim() !== '' && todo.trim() !== '') {
      const newTodo = { name, todo };
      try {
        const response = await fetch('http://localhost:9292/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });
        if (response.ok) {
          fetchTodos();
          setName('');
          setTodo('');
        }
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:9292/todos/${todoId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="todoInput">Todo:</label>
        <input
          type="text"
          id="todoInput"
          value={todo}
          onChange={handleTodoChange}
          placeholder="Enter a task"
        />
      </div>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <strong>{todo.name}:</strong> {todo.todo}
            </div>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
