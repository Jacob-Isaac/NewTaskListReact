import React from "react";
import "./style.css";

const Form = ({addNewTask}) => 
{

const [newTask, setNewTask] = React.useState("");

const onFormSubmit = (event) => {
  event.preventDefault();
  addNewTask(newTask.trim());
  setNewTask("");
};

  return (
    <form onSubmit = {onFormSubmit} >
      <p>
        <label>
          <input 
          value = {newTask} 
          onChange = {(event) => setNewTask(event.target.value)}
          maxlength={178} 
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
