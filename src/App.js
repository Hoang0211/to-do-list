import React, { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filterStatus]);

  // Form functions
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

  const changeFilterStatusHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  const filterTodos = () => {
    if (filterStatus === "all") {
      setFilteredTodos(todos);
    } else if (filterStatus === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (filterStatus === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else {
      console.log("Error from filter todos!");
    }
  };

  return (
    <div className="to-do-list">
      <h1 className="title">To Do List</h1>
      <div className="wrapper">
        <TodoForm
          todoInput={todoInput}
          todoInputChangeHandler={todoInputChangeHandler}
          addTodoHandler={addTodoHandler}
          changeFilterStatusHandler={changeFilterStatusHandler}
        />
        <div className="todos-container">
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
