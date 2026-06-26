const TodoItem = ({ task, index, deleteTask }) => {
  return (
    <li>
      <div className="left">
        <h3>{task.task}</h3>
        <p>{task.desc}</p>
      </div>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;