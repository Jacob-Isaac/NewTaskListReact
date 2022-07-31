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
      <MainContainer title={<h3>Dodaj nowe zadanie</h3>}>
        <Buttons />
        <Form />
      </MainContainer>

      <MainContainer title={<h3>Wyszukiwarka</h3>}>
        <Search />
      </MainContainer>

      <MainContainer title={<h3>Lista zadań</h3>}>
        <Tasks />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default TaskListPage;
