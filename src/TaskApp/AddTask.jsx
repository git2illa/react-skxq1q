/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTasksDispatch } from "../hooks/useTasks";

let nextId = 3;

export const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
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
