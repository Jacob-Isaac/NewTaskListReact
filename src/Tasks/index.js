import { TasksList, Task, Button, Content } from "./styled";

const Tasks = ({taskList, hideTasks, tickTask, removeTask}) => (
  <TasksList id="ul">
    {taskList.map((task) => (
      <Task
        key={task.id}
        hide = {task.done && hideTasks}
      >
        <Button onClick={() => tickTask(task.id)}>✔</Button>
        <Content done = {task.done}>&nbsp;&nbsp;{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑️</Button>
        <p></p>
      </Task>
    ))}
  </TasksList>
);

export default Tasks;
