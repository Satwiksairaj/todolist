import { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ task: task.trim(), desc: desc.trim() });
    setTask('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        placeholder="Enter task here"
      />
      <br />
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        type="text"
        placeholder="Enter description here"
      />
      <br />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TodoForm;