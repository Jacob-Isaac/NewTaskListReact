import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectAreTasksEmpty,
  hideAllTasks,
  doneAllTasks,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const {taskList, isTaskHide}= useSelector(selectTasks);
  const emptyTaskList = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();
  const ifEveryTaskDone = useSelector(selectIsEveryTaskDone);

  return (
    <Wrapper>
      <Button
        disabled={
          taskList.length >= 1 && taskList.some((task) => task.done === true)
            ? false
            : true
        }
        onClick={() => dispatch(hideAllTasks())}
      >
        {isTaskHide ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={emptyTaskList && true}
        onClick={() => dispatch(doneAllTasks())}
      >
        { ifEveryTaskDone ? "Odznacz" : "Ukończ"} wszystkie  
      </Button>
   </Wrapper>
  );
};

export default Buttons;
