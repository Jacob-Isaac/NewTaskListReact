import {Navigation, Button } from "./styled";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasks,
} from "../../features/taskList/tasksSlice";


const Header = ({ title }) => {
  const {ifLoading, ifLoading2 }= useSelector(selectTasks);
  const dispatch = useDispatch();
return (
  <Navigation>
      {title}
      <NavLink exact to="/zadania">
        <Button><span>Zadania</span></Button>
      </NavLink>
      
      <Button onClick={() => dispatch(fetchMyTasks())} disabled={ifLoading2}>
       {ifLoading2 ? "Ładowanie . . . . . . ." : "Zapisz" } 
      </Button>
     
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
       {ifLoading ? "Ładowanie . . . . . . ." : "Przykładowe zadania" } 
      </Button>
      <Button>
        <span>Załaduj</span>
      </Button>
      <Button>
        <span>Usuń wszystko</span>
      </Button>
      <NavLink exact to="/author">
      <Button>Autor</Button>
      </NavLink>
  </Navigation>
  // zrobic menu rozwijalne dla mobilek !!
);
};

export default Header;
