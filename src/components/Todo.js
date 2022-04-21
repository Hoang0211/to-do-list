import React, { useState, useEffect, useRef } from "react";

import { RiCheckLine, RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(props.todo.content);

  const editTextRef = useRef();

  useEffect(() => {
    if (editTextRef.current) {
      editTextRef.current.focus();
    }
  }, [editing]);

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
    <li className={`todo ${editing && "todo-edit"}`}>
      {editing ? (
        <>
          <input className="todo-edit__content" type="text" value={editingText} onChange={contentOnChangeHandler} ref={editTextRef} />
          <RiCheckLine className="todo-edit__update icon" onClick={updateContentHandler} />
        </>
      ) : (
        <>
          <p className="todo__content">{props.todo.content}</p>
          <div className="todo__icons">
            <RiEdit2Line className="todo__edit icon" onClick={editHandler} />
            <RiDeleteBinLine className="todo__delete icon" onClick={deleteHandler} />
            <input className="todo__check icon" type="checkbox" checked={props.todo.completed} onChange={checkHandler} />
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
