import { TaskList, Task, Button, Content } from "./styled";
import { useSelector} from "react-redux/es/exports";
import {selectTasks } from "../tasksSlice";


const Tasks = ({tickTask, removeTask}) => {

  const {taskList, hideTasks} = useSelector(selectTasks);

return (
  <TaskList>
     {taskList.map((task) => (
      <Task
        key = {task.id}
        hide = {task.done && hideTasks}
      >
        <Button onClick={() => tickTask(task.id)}>✔</Button>
        <Content done = {task.done}>&nbsp;&nbsp;{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑️</Button>
        <p></p>
      </Task>
    ))} 
  </TaskList>
  );
}

export default Tasks;
