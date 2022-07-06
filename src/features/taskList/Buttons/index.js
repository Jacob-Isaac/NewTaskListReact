import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, hideAllTasks, doneAllTasks } from "../tasksSlice";



const Buttons = () => {

  const {taskList, hideTask, showOrHide} = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
  <Wrapper>

    <Button 
       disabled={
         taskList.length >= 1 && taskList.some((task) => (task.done === true))
           ? false
           : true
         }
      onClick={() => dispatch(hideAllTasks())}>
      {hideTask ? "Pokaż" : "Ukryj"} ukończone
    </Button>

    <Button disabled={taskList.length === 0 && true} onClick={() => dispatch(doneAllTasks())}>
      {showOrHide ? "Odznacz" : "Ukończ"} wszystkie
    </Button>

  </Wrapper>
  );
}

export default Buttons;


