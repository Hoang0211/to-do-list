import "./todoForm.scss";

function TodoForm(props) {
  return (
    <form className="todos__form">
      <input
        className="todos__input"
        type="text"
        placeholder="Add todo"
        value={props.todoInput}
        onChange={props.todoInputChangeHandler}
        ref={props.todoInputRef}
      />
      <button className="todos__add" onClick={props.addTodoHandler}>
        Add
      </button>
      <select className="todos__filter" onChange={props.changeFilterStatusHandler}>
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

export default TodoForm;
