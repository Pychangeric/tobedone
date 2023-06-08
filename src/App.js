import React, { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newToDo]);

    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  const fetchUserData = () => {
    fetch("http://localhost:9292/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>

      {/* Display user data */}
      <h2>User Data:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


