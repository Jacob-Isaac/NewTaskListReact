import React from "react";
import { FormButton } from "./styled";

const Form = ({addNewTask}) => 
{
const focus = React.useRef(null);
const [newTask, setNewTask] = React.useState("");

React.useEffect(() => {
  focus.current.focus();
   }, []);

const onFormSubmit = (event) => {
  event.preventDefault();
  addNewTask(newTask.trim());
  setNewTask("");
  focus.current.focus();
};

  return (
    <form onSubmit = {onFormSubmit} >
      <p>
        <label>
          <input 
          id = "input"
          ref={focus}
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
