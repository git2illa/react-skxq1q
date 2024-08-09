/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useState } from "react";
import { TasksDispatchContext } from "../context/TaskContext";

let nextId = 3;

export const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext)
  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};
