import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todoInputChangeHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: new Date().getTime(), content: todoInput, completed: false },
    ]);
    setTodoInput("");
  };

  return (
    <div className="to-do-list">
      <h1 className="title">To Do List</h1>
      <div className="wrapper">
        <TodoForm
          todoInput={todoInput}
          todoInputChangeHandler={todoInputChangeHandler}
          addTodoHandler={addTodoHandler}
        />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
