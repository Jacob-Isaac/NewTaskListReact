import React from "react";
import "./App.css";
import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainContainer from "./MainContainer";
import useTasks from "./useTasks.js";

function App() {
 
  const [hideTasks, setHide] = React.useState(false);
  const {taskList, showOrHide, addNewTask, doneAllTasks, removeTask, tickTask} = useTasks();

  const hideAllTasks = () => {
    setHide(hideTasks => !hideTasks);
  };

  return (
    <>
     <Header />
      <MainContainer>
        <Buttons
          hideTasks={hideTasks}
          hideAllTasks={hideAllTasks}
          showOrHide={showOrHide}
          doneAllTasks={doneAllTasks}
          taskList={taskList} />
        <Form addNewTask={addNewTask}/>
        <Tasks
          taskList={taskList}
          hideTasks={hideTasks}
          removeTask={removeTask}
          tickTask={tickTask} />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default App;
