import React, { useState, useEffect, useRef } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");

  const todoInputChangeHandler = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div className="to-do-list">
      <h1 className="title">To Do List</h1>
      <div className="wrapper">
        <TodoForm
          todoInput={todoInput}
          todoInputChangeHandler={todoInputChangeHandler}
        />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
