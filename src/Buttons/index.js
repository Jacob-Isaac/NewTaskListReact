import "./style.css";

const Buttons = ({hideAllTasks, hideTasks, doneAllTasks, showOrHide}) => (
  <div className="buttonsFlex">
    <button onClick={hideAllTasks} className="buttonsFlex__button">{hideTasks ? "Pokaż" : "Ukryj"} ukończone</button>
    <button onClick={doneAllTasks} className="buttonsFlex__button">{showOrHide ? "Odznacz" : "Ukończ"} wszystkie</button>
  </div>
);

export default Buttons;
