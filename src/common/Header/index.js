import {Navigation, Button } from "./styled";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
} from "../../features/taskList/tasksSlice";


const Header = ({ title }) => {
  const {ifLoading}= useSelector(selectTasks);
  const dispatch = useDispatch();
return (
  <Navigation>
      {title}
      <NavLink exact to="/zadania">
        <Button>Zadania</Button>
      </NavLink>
      <Button>
        <span>Zapisz</span>
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
  
);
};

export default Header;
