import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="todos-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
