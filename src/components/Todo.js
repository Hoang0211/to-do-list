function Todo(props) {
  return (
    <div className="todo">
      <div className="todo__content">{props.todo.content}</div>
      <input
        className="todo__check"
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.checkHandler(props.todo.id)}
      />
    </div>
  );
}

export default Todo;
