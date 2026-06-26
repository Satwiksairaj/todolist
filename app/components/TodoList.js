import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TodoList;