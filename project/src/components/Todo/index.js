import React, { useState, useEffect, useRef, memo } from "react";
import { RiCheckLine, RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import "./todo.scss";

function Todo({ todo, checkTodoHandler, updateTodoContentHandler, deleteTodoHandler }) {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.content);

  const editTextRef = useRef();

  useEffect(() => {
    if (editTextRef.current) {
      editTextRef.current.focus();
    }
  }, [editing]);

  const checkHandler = () => {
    checkTodoHandler(todo.id);
  };

  const editHandler = () => {
    setEditing(true);
  };

  const contentOnChangeHandler = (e) => {
    setEditingText(e.target.value);
  };

  const updateContentHandler = () => {
    updateTodoContentHandler(todo.id, editingText);
    setEditing(false);
  };

  const deleteHandler = () => {
    deleteTodoHandler(todo.id);
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
          <p className="todo__content">{todo.content}</p>
          <div className="todo__icons">
            <RiEdit2Line className="todo__edit icon" onClick={editHandler} />
            <RiDeleteBinLine className="todo__delete icon" onClick={deleteHandler} />
            <input className="todo__check icon" type="checkbox" checked={todo.completed} onChange={checkHandler} />
          </div>
        </>
      )}
    </li>
  );
}

export default memo(Todo);
