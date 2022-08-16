import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { StyledNavLink, Navigation, Button, Img, Span } from "../Header/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../features/taskList/tasksSlice";

const HeaderMobile = () => {
  const {ifLoading, ifLoading2, ifLoading3 }= useSelector(selectTasks);
  const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive (current => !current);
    console.log(isActive);
  }

return (
  <>
    <div class="cos">
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
      <label for="active">
     <li><NavLink exact to="/zadania">Zadania</NavLink></li>
     <li><Button onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading}>
      {ifLoading ? "Zapisz" : <Span>Zapisz</Span> } 
      </Button></li>

      <li><Button disabled={ifLoading}>
       {ifLoading ? "Przykładowe zadania" : <Span>Przykładowe zadania</Span> } 
      </Button></li>

      <li><Button disabled={ifLoading}>
     {ifLoading ? "Załaduj" : <Span>Załaduj</Span> } 
      </Button></li>

      <li><Button onClick={() => dispatch(removeAllTasks())} disabled={ifLoading}>
        {ifLoading ? "Usuń wszystko" : <Span Red>Usuń wszystko</Span> } 
        </Button></li>
<li><NavLink exact to="/author">Autor</NavLink></li>
</label>
</ul>

</div>
<div class="content">
      <div class="title">
Lista zadań</div>
</div>
</div>
<div class="hihi"></div>
</>

);
};

export default HeaderMobile;