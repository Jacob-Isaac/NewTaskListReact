import React from "react";
import { FormButton } from "./styled";

const Form = ({addNewTask}) => 
{

const [newTask, setNewTask] = React.useState("");

const onFormSubmit = (event) => {
  event.preventDefault();
  addNewTask(newTask.trim());
  setNewTask("");
  document.getElementById("input").focus();
  if (newTask.length > 68)
  {
  document.getElementById("ul").classList.add("tasks__smallText");
  }
};

  return (
    <form onSubmit = {onFormSubmit} >
      <p>
        <label>
          <input 
          id = "input"
          value = {newTask} 
          onChange = {(event) => setNewTask(event.target.value)}
          maxLength= {178} 
         />
        </label>
      </p>
      <FormButton>
        DODAJ !
      </FormButton>
    </form>
  );
};


export default Form;
