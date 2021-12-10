import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="to-do-list">
      <h1 className="title">To Do List</h1>
      <div className="wrapper">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
