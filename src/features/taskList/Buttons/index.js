import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectAreTasksEmpty,
  hideAllTasks,
  doneAllTasks,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const { taskList, hideTask, showOrHide } = useSelector(selectTasks);
  const isTaskListEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

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
        {hideTask ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={isTaskListEmpty && true}
        onClick={() => dispatch(doneAllTasks())}
      >
        {showOrHide ? "Odznacz" : "Ukończ"} wszystkie  
        {/* ustawić żeby odznacz było tylko jesli przynajmniej jeden jest zaznaczony i ukończ tylko jeżeli przynajmniej jeden jest nieukończony */}
      </Button>
    </Wrapper>
  );
};

export default Buttons;
