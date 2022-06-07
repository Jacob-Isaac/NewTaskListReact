import { TasksList, Task, Button, Content } from "./styled";

const Tasks = (props) => (
  <TasksList id="ul">
    {props.taskList.map((task) => (
      <Task
        key={task.id}
        hide = {task.done && props.hideTasks}
      >
        <Button onClick={() => props.tickTask(task.id)}>✔</Button>
        <Content done = {task.done}>&nbsp;&nbsp;{task.content}</Content>
        <Button onClick={() => props.removeTask(task.id)}>🗑️</Button>
        <p></p>
      </Task>
    ))}
  </TasksList>
);

export default Tasks;
