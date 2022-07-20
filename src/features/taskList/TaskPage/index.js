import "../../../GlobalStyle.js";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import MainContainer from "../../../common/MainContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice.js";

function TaskPage() {
  const params = useParams();
  const task = useSelector((state) => getTaskById(state, params.id));
  return (
    <>
      <Header title={<h3>Szczegóły Zadania</h3>}></Header>
      <MainContainer>
        <b>Treść:</b> {task ? task.content : "Nie znaleziono zadania"}
        <br />
        <b>Ukończono:</b> {task.done ? "Tak" : "Nie"}
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default TaskPage;
