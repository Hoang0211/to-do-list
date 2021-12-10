function TodoForm(props) {
  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add todo"
        value={props.todoInput}
        onChange={props.todoInputChangeHandler}
      />
      <button className="todo-add" onClick={props.addTodoHandler}>
        Add
      </button>
      <select className="todos-filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default TodoForm;
