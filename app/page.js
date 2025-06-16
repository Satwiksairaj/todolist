// app/TodoApp.js
"use client"; // Required since you're using useState

import { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const renderTask =
    mainTask.length === 0 ? (
      <h2>No Task available</h2>
    ) : (
      mainTask.map((t, i) => (
        <li key={i}>
          <div className="left">
            <h3>{t.task}</h3>
            <p>{t.desc}</p>
          </div>
          <button onClick={() => deleteHandler(i)}>Delete</button>
        </li>
      ))
    );

  return (
    <div className="main">
      <h1>Satwik's To do List</h1>
      <form onSubmit={submitHandler}>
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
        <button>Add task</button>
      </form>
      <div className="showtask">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default TodoApp;
