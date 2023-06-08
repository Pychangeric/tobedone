import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

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

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, []);

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
    </div>
  );
}

export default App;
