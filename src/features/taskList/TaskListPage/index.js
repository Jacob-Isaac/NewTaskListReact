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
  let header;
  let appTitle;
  if (dimensions.width < 1000) {
    header = <HeaderMobile />;
    appTitle = "";
  } else {
    header = <Header />;
    appTitle = "Lista zadań";
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
      {ifLoading ? <LoadingScreen/> : <Tasks /> } 
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>

    </>
  );
}

export default TaskListPage;
