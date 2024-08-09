/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTasks, useTasksDispatch } from "../hooks/useTasks";

export const TaskList = () => {
  const tasks = useTasks();
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task }) => {
  const dispatch = useTasksDispatch();

  const [isEditting, setIsEditting] = useState(false);
  let taskContent;
  if (isEditting) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
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
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          })
        }
      />
      {taskContent}
      <button onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  );
};
