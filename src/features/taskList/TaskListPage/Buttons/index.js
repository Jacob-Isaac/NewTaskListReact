import { Wrapper, Button } from "./styled";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectHideDone,
  selectAreTasksEmpty,
  hideAllTasks,
  doneAllTasks,
  fetchExampleTasks,
  selectIsEveryTaskDone,
  selectTasksByQuery
} from "../../tasksSlice";

const Buttons = () => {
  const {taskList, isTaskHide}= useSelector(selectTasks);
  const emptyTaskList = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();
  const ifEveryTaskDone = useSelector(selectIsEveryTaskDone)

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        POBIERZ TASKI MORDO
      </Button>
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
