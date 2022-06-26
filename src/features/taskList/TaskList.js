import React from "react";
import "../../index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Buttons from "./Buttons";
import MainContainer from "../../common/MainContainer";
import useTasks from "../../useTasks.js";

function TaskList() {
 
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

export default TaskList;
