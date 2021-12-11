import React, { useState, useEffect, useRef } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todoInputRef = useRef();

  useEffect(() => {
    getFromLocal();
    todoInputRef.current.focus();
  }, []);

  useEffect(() => {
    saveToLocal();
    filterTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filterStatus]);

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
    todoInputRef.current.focus();
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

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="todo-list-app">
      <h1 className="title">Todo List</h1>
      <div className="wrapper">
        <TodoForm
          todoInputRef={todoInputRef}
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
                filterStatus={filterStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
