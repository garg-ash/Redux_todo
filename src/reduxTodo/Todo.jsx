import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, handleSubmit } from "./slice";

function Todo() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.reduce;
  });

//   console.log(initState.tasks);

  return (
    <>
      <h1>Todo</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleSubmit());
        }}
      >
        <input
          type="text"
          value={initState.value}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        <button>Add Task</button>
      </form>

      <ul>
        {initState.tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
