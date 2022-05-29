import React from "react";
import "./style.css";

const Form = ({addNewTask, taskList}) => 
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
      <p className="formButton">
        <button>DODAJ !</button>
      </p>
    </form>
  );
};


export default Form;
