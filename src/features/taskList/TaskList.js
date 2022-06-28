import React from "react";
// import { useSelector } from "react-redux";
import "../../index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Buttons from "./Buttons";
import MainContainer from "../../common/MainContainer";
import useTasks from "../../useTasks.js";
// import { selectTasks } from "./tasksSlice";

function TaskList() {

  // const [hideTasks, setHide] = React.useState(false);
  const {
    showOrHide,
    doneAllTasks,
    removeTask,
    tickTask,
  } = useTasks();
  
//  const {taskList} = useSelector(selectTasks);
 



  // const hideAllTasks = () => {
  //   setHide((hideTasks) => !hideTasks);
  // };

  return (
    <>
      <Header />
      <MainContainer>
        <Buttons
          showOrHide={showOrHide}
          doneAllTasks={doneAllTasks}
        />
        <Form/>
        <Tasks
          removeTask={removeTask}
          tickTask={tickTask}
        />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default TaskList;
