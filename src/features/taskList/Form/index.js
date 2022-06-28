import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { SubmitButton } from "./styled";


const Form = () => {
  const focus = React.useRef(null);
  const [newTask, setNewTask] = React.useState("");
  const newTaskTrimmed = newTask.trim();
  const dispatch = useDispatch();

  React.useEffect(() => {
    focus.current.focus();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskTrimmed === "") {
      focus.current.focus();
      return null;
    }

    dispatch(
      addTask({
        content: newTaskTrimmed,
        done: false,
        id: nanoid(),
      })
    );

    setNewTask("");
    focus.current.focus();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p>
        <label>
          <input
            id="input"
            ref={focus}
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            maxLength={178}
          />
        </label>
      </p>
      <SubmitButton>DODAJ !</SubmitButton>
    </form>
  );
};

export default Form;
