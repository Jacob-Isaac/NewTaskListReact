import "../../../GlobalStyle.js";
import Form from "./Form";
import Tasks from "./Tasks";
import Footer from "../../../common/Footer";
import Buttons from "./Buttons";
import Search from "./Search";
import MainContainer from "../../../common/MainContainer";
import HeaderMobile from "../../../common/HeaderMobile/index.js";
import Header from "../../../common/Header/index.js";
import useWindowDimensions from "../../../common/customHooks/useWindowDimensions.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasksGet,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../taskList/tasksSlice";
import LoadingScreen from "../../../common/LoadingScreen/LoadingScreen.js";
import { HashRouter, Switch, Route } from "react-router-dom";



function TaskListPage() {
  const {ifLoading} = useSelector(selectTasks);
  const dimensions = useWindowDimensions();
  let content;
  let header;
  let appTitle;
  if (dimensions.width < 860) {
    // header = <HeaderMobile contentTitle={<LoadingScreen/>}/>;
    appTitle = "";
    ifLoading ? header = <LoadingScreen/> : header = <HeaderMobile contentTitle={<>Lista zadań</>} />;
    content = <Tasks/>
  } else {
    header = <Header />;
    appTitle = "Lista zadań";
    ifLoading ? content = <LoadingScreen/> : content = <Tasks/>;
  }

  return (
    <>

      {header}
      <MainContainer
        appTitle={appTitle}
        title={<>Dodaj nowe zadanie</>}
      >
        <Form />
      </MainContainer>

      <MainContainer title={<>Wyszukiwarka</>}>
        <Search />
      </MainContainer>

   
      <MainContainer buttons={<Buttons />} title={<>Lista zadań</>}>
      {content} 
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>

    </>
  );
}

export default TaskListPage;
