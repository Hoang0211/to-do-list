import React, { useState, useEffect, useRef, useCallback } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todoInputRef = useRef();

  useEffect(() => {
    const getFromLocal = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    };

    getFromLocal();
    todoInputRef.current.focus();
  }, []);

  useEffect(() => {
    const saveToLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    const filterTodos = () => {
      if (filterStatus === "all") {
        setFilteredTodos(todos);
      } else if (filterStatus === "completed") {
        const newFilteredTodos = todos.filter((todo) => todo.completed);
        setFilteredTodos(newFilteredTodos);
      } else if (filterStatus === "uncompleted") {
        const newFilteredTodos = todos.filter((todo) => !todo.completed);
        setFilteredTodos(newFilteredTodos);
      } else {
        console.log("Error from filter todos!");
      }
    };

    saveToLocal();
    filterTodos();
  }, [todos, filterStatus]);

  // Form functions
  const todoInputChangeHandler = useCallback((e) => {
    setTodoInput(e.target.value);
  }, []);

  const addTodoHandler = useCallback(
    (e) => {
      e.preventDefault();
      setTodos((prevTodos) => [...prevTodos, { id: new Date().getTime(), content: todoInput, completed: false }]);
      setTodoInput("");
      todoInputRef.current.focus();
    },
    [todoInput]
  );

  const changeFilterStatusHandler = useCallback((e) => {
    setFilterStatus(e.target.value);
  }, []);

  // Todo functions
  const checkTodoHandler = useCallback(
    (todoId) => {
      const newTodos = todos.map((todo) => {
        if (todoId === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const updateTodoContentHandler = useCallback(
    (todoId, newContent) => {
      const newTodos = todos.map((todo) => {
        if (todoId === todo.id) {
          todo.content = newContent;
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const deleteTodoHandler = useCallback(
    (todoId) => {
      const newTodos = todos.filter((todo) => todoId !== todo.id);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <div className="wrapper">
        <TodoForm
          todoInputRef={todoInputRef}
          todoInput={todoInput}
          todoInputChangeHandler={todoInputChangeHandler}
          addTodoHandler={addTodoHandler}
          changeFilterStatusHandler={changeFilterStatusHandler}
        />
        <ul className="todos__list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              checkTodoHandler={checkTodoHandler}
              updateTodoContentHandler={updateTodoContentHandler}
              deleteTodoHandler={deleteTodoHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
