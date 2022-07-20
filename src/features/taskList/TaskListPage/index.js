import "../../../GlobalStyle.js";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Buttons from "./Buttons";
import MainContainer from "../../../common/MainContainer";


function TaskListPage() {


  return (
    <>
      <Header />
      <MainContainer>
        <Buttons />
        <Form />
        <Tasks />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default TaskListPage;
