// app/TodoApp.js
"use client"; // Required since you're using useState

import { useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      mainTask.map((task, index) => ( <DraggableTask key={task.task} index={index} task={task} moveTask={(fromIndex, toIndex) => { const updatedTasks = [...mainTask]; const [movedTask] = updatedTasks.splice(fromIndex, 1); updatedTasks.splice(toIndex, 0, movedTask); setMainTask(updatedTasks); }} />
        <li key={i}>
          <div className="left">
            <h3>{t.task}</h3>
            <p>{t.desc}</p>
          </div>
          <button onClick={() => deleteHandler(i)}>Delete</button>
        </li>

const DraggableTask = ({ task, index, moveTask }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "TASK",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({

const DraggableTask = ({ task, index, moveTask }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "TASK",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="left">
        <h3>{task.task}</h3>
        <p>{task.desc}</p>
      </div>
      <button onClick={() => deleteHandler(index)}>Delete</button>
    </li>
  );
};

    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="left">
        <h3>{task.task}</h3>
        <p>{task.desc}</p>
      </div>
      <button onClick={() => deleteHandler(index)}>Delete</button>
    </li>
  );
};


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

const DraggableTask = ({ task, index, moveTask }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "TASK",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="left">
        <h3>{task.task}</h3>
        <p>{task.desc}</p>
      </div>
      <button onClick={() => deleteHandler(index)}>Delete</button>
    </li>
  );
};


return (
  <DndProvider backend={HTML5Backend}>
    {/* Rest of the TodoApp component */}
  </DndProvider>
);


};

export default TodoApp;
