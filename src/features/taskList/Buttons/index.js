import { Wrapper, Button } from "./styled";
import {useSelector, useDispatch} from "react-redux";
import { selectTasks, hideAllTasks } from "../tasksSlice";



const Buttons = ({doneAllTasks, showOrHide }) => {

  const {taskList, hideTask} = useSelector(selectTasks);
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

    <Button disabled={taskList.length === 0 && true} onClick={doneAllTasks}>
      {showOrHide ? "Odznacz" : "Ukończ"} wszystkie
    </Button>

  </Wrapper>
  );
}

export default Buttons;


