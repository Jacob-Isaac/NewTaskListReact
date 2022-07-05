import { TaskList, Task, Button, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTasks, tickTask, removeTask } from "../tasksSlice";


const Tasks = () => {

  const {taskList, hideTask} = useSelector(selectTasks);
  const dispatch = useDispatch();

return (
  <TaskList>
     {taskList.map((task) => (
      <Task
        key = {task.id}
        hide = {task.done && hideTask}
      >
        <Button onClick={() => dispatch(tickTask(task.id))}>✔</Button>
        <Content done = {task.done}>&nbsp;&nbsp;{task.content}</Content>
        <Button onClick={() => dispatch(removeTask(task.id))}>🗑️</Button>
        <p></p>
      </Task>
    ))} 
  </TaskList>
  );
}

export default Tasks;
