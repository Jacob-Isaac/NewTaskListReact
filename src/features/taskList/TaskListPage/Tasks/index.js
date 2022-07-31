import { TaskList, Task, Button, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { tickTask, removeTask, selectIsTaskHide, selectTasksByQuery } from "../../tasksSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Tasks = () => {

   const location = useLocation();
   const query = (new URLSearchParams(location.search)).get("szukaj");
  const taskList = useSelector(state => selectTasksByQuery(state,query));
  const isTaskHide= useSelector(selectIsTaskHide);
  const dispatch = useDispatch();


  return (
    <TaskList>
      {taskList.map((task) => (
        <Task key={task.id} hide={task.done === true && isTaskHide === true}>
          <Button onClick={() => dispatch(tickTask(task.id))}>✔</Button>
          <Content done={task.done}><Link to={`/zadania/${task.id}`}>&nbsp;&nbsp;{task.content}</Link></Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑️</Button>
          <p></p>
        </Task>
      ))}
    </TaskList>
  );
};

export default Tasks;
