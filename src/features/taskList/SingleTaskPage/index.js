import { Wrapper } from "./styled";
import Footer from "../../../common/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice.js";

function SingleTaskPage() {
  const params = useParams();
  const task = useSelector((state) => getTaskById(state, params.id));
  return (
    <>
    <Wrapper>
        <b>Treść:</b> {task ? task.content : "Nie znaleziono zadania"}
        <br/><br/>
        <b>Ukończono:</b> {task.done ? "Tak" : "Nie"}
        </Wrapper>
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
    </>
  );
}

export default SingleTaskPage;
