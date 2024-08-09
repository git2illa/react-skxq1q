/* eslint-disable react/prop-types */

import { useState } from "react";
export const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task, onChange, onDelete }) => {
  const [isEditting, setIsEditting] = useState(false);
  let taskContent;
  if (isEditting) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {onChange({...task, text: e.target.value})}}
        />
        <button onClick={() => setIsEditting(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditting(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChange({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};
