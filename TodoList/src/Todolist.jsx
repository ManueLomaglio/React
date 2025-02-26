import { useEffect, useState } from "react";

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim()) {
      // setTodos(todos.push(input));
      setTodos([...todos, input]);// op asincrona 
      setInput("");
    }
  };
  console.log(todos);
  
  const clear = () => {
    setTodos([]);
    console.log(todos);
  };
  const removeTodo = (index) => {
    // setTodos(todos.splice(index,1))//op non one line

    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your todos"
      />
      <button type="button" onClick={add}>
        Add Todos
      </button>
      <button type="button" onClick={clear}>
        {" "}
        Clear todos
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
