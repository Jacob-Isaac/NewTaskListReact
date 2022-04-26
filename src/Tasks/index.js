import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.taskList.map((task) => (
      <li
        key={task.id}
        className={`${
          task.done && props.hideTasks === true
            ? "taskHide"
            : "tasks__flex tasks__border-bottom"
        }`}
      >
        <button className="js-tickTask tasks__buttonProperties">✔</button>
        <span
          className={`${
            task.done
              ? "taskDone tasks__flexGrowContent"
              : "tasks__flexGrowContent"
          }`}
        >
          &nbsp;&nbsp;{task.content}
        </span>
        <button 
        className="js-removeTask tasks__buttonProperties"  
        onClick={() => props.removeTask(task.id)}>🗑️</button>
        <p></p>
      </li>
    ))}
  </ul>
);

export default Tasks;
