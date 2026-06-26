// app/TodoApp.js
"use client"; // Required since you're using useState

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="main">
      <h1>Satwik's To do List</h1>
      <TodoForm addTask={addTask} />
      {tasks.length === 0 ? <EmptyState /> : <TodoList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
};

export default TodoApp;
