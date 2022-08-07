import {Span, StyledNavLink, Navigation, Button, Img } from "./styled";
import React, {useState} from "react";
//  import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasksGet,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../features/taskList/tasksSlice";
import menu from "./menu.png";


const Header = ({ title }) => {
  const {ifLoading, ifLoading2, ifLoading3 }= useSelector(selectTasks);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive (current => !current);
    console.log(isActive);
  }
  

  
 
return (
  <Navigation>
      {title}

      <StyledNavLink exact to="/zadania">
       <Span> Zadania</Span>
      </StyledNavLink>
      
      <Button onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading2}>
       {ifLoading2 ? "Zapisywanie..." : <Span>Zapisz</Span> } 
      </Button>
     
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
       {ifLoading ? "Ładowanie..." : <Span>Przykładowe zadania</Span> } 
      </Button>
     
     <Button onClick={() => dispatch(fetchMyTasksGet())} disabled={ifLoading3}>
       {ifLoading3 ? "Ładowanie..." : <Span>Załaduj</Span> } 
      </Button>

      <Button onClick={() => dispatch(removeAllTasks())}><Span>Usuń wszystko</Span></Button>

      <StyledNavLink exact to="/author">
      <Span>Autor</Span>
      </StyledNavLink>

      <Img  onClick={handleClick} click={isActive} klik={!isActive} src={menu} alt="Ładujemy..."></Img>

  </Navigation>

/* <Navigation>
{title}

   <Img  onClick={handleClick} click={isActive} klik={!isActive} src={menu} alt="Ładujemy..."></Img>


<StyledNavLink exact to="/zadania">
 <Span> Zadania</Span>
</StyledNavLink>

<Button onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading2}>
 {ifLoading2 ? "Zapisywanie..." : <Span>Zapisz</Span> } 
</Button>

<Button onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
 {ifLoading ? "Ładowanie..." : <Span>Przykładowe zadania</Span> } 
</Button>
  <Img  onClick={handleClick} click={isActive} klik={!isActive} src={menu} alt="Ładujemy..."></Img>
<Button onClick={() => dispatch(fetchMyTasksGet())} disabled={ifLoading3}>
 {ifLoading3 ? "Ładowanie..." : <Span>Załaduj</Span> } 
</Button>

<Button onClick={() => dispatch(removeAllTasks())}><Span>Usuń wszystko</Span></Button>

<StyledNavLink exact to="/author">
<Span>Autor</Span>
</StyledNavLink>

</Navigation> */
  // zrobic menu rozwijalne dla mobilek !!
  
);

};

export default Header;
