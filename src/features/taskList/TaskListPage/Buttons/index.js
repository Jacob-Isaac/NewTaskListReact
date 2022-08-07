import { Button, Span } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectAreTasksEmpty,
  hideAllTasks,
  doneAllTasks,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const { taskList, isTaskHide } = useSelector(selectTasks);
  const emptyTaskList = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();
  const ifEveryTaskDone = useSelector(selectIsEveryTaskDone);

  return (
    <>
      <Button
        disabled={
          taskList.length >= 1 && taskList.some((task) => task.done === true)
            ? false
            : true
        }
        onClick={() => dispatch(hideAllTasks())}
      >
        <Span
          disabled={
            taskList.length >= 1 && taskList.some((task) => task.done === true)
              ? false
              : true
          }
        >
          {isTaskHide ? "Pokaż" : "Ukryj"} ukończone
        </Span>
      </Button>
      <Button
        disabled={emptyTaskList && true}
        onClick={() => dispatch(doneAllTasks())}
      >
        <Span disabled={emptyTaskList && true}>
          {ifEveryTaskDone ? "Odznacz" : "Ukończ"} wszystkie
        </Span>
      </Button>
    </>
  );
};

export default Buttons;
