import "./style.css";

const Buttons = ({hideAllTasks, hideTasks}) => (
  <div className="buttonsFlex">
    <button onClick={hideAllTasks} className="buttonsFlex__button">{hideTasks ? "Pokaż" : "Ukryj"} ukończone</button>
    <button className="buttonsFlex__button">Ukończ wszystkie</button>
  </div>
);

export default Buttons;
