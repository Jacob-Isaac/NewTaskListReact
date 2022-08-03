import "../../../GlobalStyle.js";
import Form from "./Form";
import Tasks from "./Tasks";
import Footer from "../../../common/Footer";
import Buttons from "./Buttons";
import Search from "./Search";
import MainContainer from "../../../common/MainContainer";

function TaskListPage() {
  return (
    <>
      <MainContainer appTitle={<>Lista zadań</>} title={<>Dodaj nowe zadanie</>}>
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
  );
}

export default TaskListPage;
