import {Navigation, Button } from "./styled";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasksGet,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../features/taskList/tasksSlice";


const Header = ({ title }) => {
  const {ifLoading, ifLoading2, ifLoading3 }= useSelector(selectTasks);
  const dispatch = useDispatch();
return (
  <Navigation>
      {title}
      <NavLink exact to="/zadania">
        <Button><span>Zadania</span></Button>
      </NavLink>
      
      <Button onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading2}>
       {ifLoading2 ? "Ładowanie..." : "Zapisz" } 
      </Button>
     
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
       {ifLoading ? "Ładowanie..." : "Przykładowe zadania" } 
      </Button>
      <Button onClick={() => dispatch(fetchMyTasksGet())} disabled={ifLoading3}>
       {ifLoading3 ? "Ładowanie..." : "Załaduj" } 
      </Button>
      <Button onClick={() => dispatch(removeAllTasks())}><span>Usuń wszystko</span></Button>
      <NavLink exact to="/author">
      <Button>Autor</Button>
      </NavLink>
  </Navigation>
  // zrobic menu rozwijalne dla mobilek !!
);
};

export default Header;
