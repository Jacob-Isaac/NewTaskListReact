import {Span, StyledNavLink, Navigation, Button} from "./styled";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasksGet,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../features/taskList/tasksSlice";


const Header = ({ title }) => {
  const {ifLoading} = useSelector(selectTasks);
  const dispatch = useDispatch();
  

  
 
return (
  <Navigation>
      {title}

      <StyledNavLink exact to="/zadania">
       <Span> Zadania</Span>
      </StyledNavLink>
      
      <Button onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading}>
      {ifLoading ? "Zapisz" : <Span>Zapisz</Span> } 
      </Button>
     
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
       {ifLoading ? "Przykładowe zadania" : <Span>Przykładowe zadania</Span> } 
      </Button>
     
     <Button onClick={() => dispatch(fetchMyTasksGet())} disabled={ifLoading}>
     {ifLoading ? "Załaduj" : <Span>Załaduj</Span> } 
      </Button>

      <Button onClick={() => dispatch(removeAllTasks())} disabled={ifLoading}>{ifLoading ? "Usuń wszystko" : <Span Red>Usuń wszystko</Span> } </Button>

      <StyledNavLink exact to="/author">
      <Span>Autor</Span>
      </StyledNavLink>

  </Navigation>
  
);

};

export default Header;
