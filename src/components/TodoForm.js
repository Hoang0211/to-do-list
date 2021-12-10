function TodoForm() {
  return (
    <form className="todo-form">
      <input className="todo-input" type="text" placeholder="Add todo" />
      <button className="todo-add">Add</button>
      <select className="todos-filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default TodoForm;
