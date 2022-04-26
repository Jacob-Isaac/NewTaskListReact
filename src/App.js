import React from "react";
import "./App.css";
import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import BodyContainer from "./BodyContainer";
import MainContainer from "./MainContainer";

function App() {

  const [hideTasks, setHide] = React.useState(false);
  const [taskList, setTasks] = React.useState([
    { id: 1, content: "zjeść ciastko", done: false },
    { id: 2, content: "zjeść bułkę", done: true },
  ]);

  const hideAllTasks = () => {
    setHide(hideTasks => !hideTasks);
  };

  const removeTask = (id) => {
    setTasks(taskList => taskList.filter(task => task.id !== id));
  };

  return (
    <BodyContainer>
      <Header />
      <MainContainer>
        <Buttons hideTasks={hideTasks} hideAllTasks={hideAllTasks} />
        <Form />
        <Tasks taskList={taskList} hideTasks={hideTasks} removeTask={removeTask} />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </BodyContainer>
  );
}

export default App;
