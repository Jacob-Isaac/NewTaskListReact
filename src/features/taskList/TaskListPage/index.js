import "../../../GlobalStyle.js";
import Form from "./Form";
import Tasks from "./Tasks";
import Footer from "../../../common/Footer";
import Buttons from "./Buttons";
import Search from "./Search";
import MainContainer from "../../../common/MainContainer";
import NavigationMobile from "../../../common/NavigationMobile/index.js";
import Navigation from "../../../common/Navigation/index.js";
import useWindowDimensions from "../../../common/customHooks/useWindowDimensions.js";
import { useSelector } from "react-redux";
import { selectTasks } from "../../taskList/tasksSlice";
import LoadingScreen from "../../../common/LoadingScreen/LoadingScreen.js";

function TaskListPage() {
  const { ifLoading } = useSelector(selectTasks);
  const dimensions = useWindowDimensions();
  let variable;
  let appTitle;

  if (dimensions.width < 800) {
    appTitle = "";
    ifLoading
      ? (variable = <LoadingScreen />)
      : (variable = (
          <>
            <NavigationMobile contentTitle={<>Lista zadań</>} />
            <MainContainer appTitle={appTitle} title={<>Dodaj nowe zadanie</>}>
              <Form />
            </MainContainer>

            <MainContainer title={<>Wyszukiwarka</>}>
              <Search />
            </MainContainer>

            <MainContainer buttons={<Buttons />} title={<>Lista zadań</>}>
              <Tasks />
              <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
            </MainContainer>
          </>
        ));
  } else {
    appTitle = "Lista zadań";
    ifLoading
      ? (variable = (
          <>
            <Navigation />
            <MainContainer appTitle={appTitle} title={<>Dodaj nowe zadanie</>}>
              <Form />
            </MainContainer>

            <MainContainer title={<>Wyszukiwarka</>}>
              <Search />
            </MainContainer>

            <MainContainer buttons={<Buttons />} title={<>Lista zadań</>}>
              <LoadingScreen/>
              <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
            </MainContainer>
          </>
        ))
      : (variable = (
          <>
            <Navigation />
            <MainContainer appTitle={appTitle} title={<>Dodaj nowe zadanie</>}>
              <Form />
            </MainContainer>

            <MainContainer title={<>Wyszukiwarka</>}>
              <Search />
            </MainContainer>

            <MainContainer buttons={<Buttons />} title={<>Lista zadań</>}>
              <Tasks/>
              <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
            </MainContainer>
          </>
        ));
  }
  return variable;
}

export default TaskListPage;
