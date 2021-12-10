import React, { useState, useEffect } from "react";

import { RiCheckLine, RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(props.todo.content);

  // If new todo is added or filter status is changed when editing, return the old value
  useEffect(() => {
    setEditing(false);
    setEditingText(props.todo.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.todos, props.filterStatus]);

  const checkHandler = () => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === props.todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const editHandler = () => {
    setEditing(true);
  };

  const contentOnChangeHandler = (e) => {
    setEditingText(e.target.value);
  };

  const updateContentHandler = () => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === props.todo.id) {
          todo.content = editingText;
        }
        return todo;
      })
    );
    setEditing(false);
  };

  const deleteHandler = () => {
    props.setTodos(props.todos.filter((todo) => todo.id !== props.todo.id));
  };

  return (
    <>
      {editing ? (
        <li className="todo-edit">
          <input
            className="todo-edit__content"
            type="text"
            value={editingText}
            onChange={contentOnChangeHandler}
          />
          <RiCheckLine
            className="todo-edit__update icons"
            onClick={updateContentHandler}
          />
        </li>
      ) : (
        <li className="todo">
          <div className="todo__content">{props.todo.content}</div>
          <RiEdit2Line className="todo__edit icons" onClick={editHandler} />
          <RiDeleteBinLine
            className="todo__delete icons"
            onClick={deleteHandler}
          />
          <input
            className="todo__check"
            type="checkbox"
            checked={props.todo.completed}
            onChange={checkHandler}
          />
        </li>
      )}
    </>
  );
}

export default Todo;
