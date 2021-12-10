import Todo from "./Todo";

function TodoList() {
  return (
    <div className="todos-container">
      <ul className="todo-list">
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}

export default TodoList;
