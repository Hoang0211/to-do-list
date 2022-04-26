import { memo } from "react";

import "./todoForm.scss";

function TodoForm({ todoInput, todoInputRef, todoInputChangeHandler, addTodoHandler, changeFilterStatusHandler }) {
  return (
    <form className="todos__form">
      <input className="todos__input" type="text" placeholder="Add todo" value={todoInput} onChange={todoInputChangeHandler} ref={todoInputRef} />
      <button className="todos__add" onClick={addTodoHandler}>
        Add
      </button>
      <select className="todos__filter" onChange={changeFilterStatusHandler}>
        <option className="filter__option" value="all">
          All
        </option>
        <option className="filter__option" value="completed">
          Completed
        </option>
        <option className="filter__option" value="uncompleted">
          Uncompleted
        </option>
      </select>
    </form>
  );
}

export default memo(TodoForm);
