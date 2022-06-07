import React from "react";
import "./App.css";
import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainContainer from "./MainContainer";

function App() {
 
  const [hideTasks, setHide] = React.useState(false);
  const [showOrHide, setButtonText] = React.useState(false);
  const [taskList, setTasks] = React.useState(JSON.parse(localStorage.getItem("taskList")) || []);

   React.useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
     }, [taskList]);
  
  const hideAllTasks = () => {
    setHide(hideTasks => !hideTasks);
  };

  const addNewTask = (newTask) => {
   if (newTask === "")  
    return null 
      setTasks(taskList => [...taskList,
      {
        id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
        content: newTask,
        done: false
      },
      ]);
  };

  const doneAllTasks = () => {
    setButtonText(showOrHide => !showOrHide)
    setTasks(taskList => taskList.map(task => {
      if (showOrHide === false) {
        return { ...task, done: true };
      }
      return { ...task, done: false };
    }));
  };

  const removeTask = (id) => {
    setTasks(taskList => taskList.filter(task => task.id !== id));
  };

  const tickTask = (id) => {
    setTasks(taskList => taskList.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
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
