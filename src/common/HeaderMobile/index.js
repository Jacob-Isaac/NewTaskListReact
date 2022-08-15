import React from "react";
import { NavLink} from "react-router-dom";
import { Button, Span } from "../Header/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  fetchExampleTasks,
  fetchMyTasksGet,
  fetchMyTasksSave,
  removeAllTasks,
} from "../../features/taskList/tasksSlice";
import { Wrapper, WrapperUl, Input, Content, ContentTitle,MenuButton, Close, LabelSpan } from "./styled.js";

const HeaderMobile = () => {
  const {ifLoading}= useSelector(selectTasks);
  const dispatch = useDispatch();

return (
    <>
    <Input type="checkbox" id="active"/>
    <MenuButton htmlFor="active"><LabelSpan></LabelSpan></MenuButton>
    <Close htmlFor="active"></Close>
    <Wrapper>
      <WrapperUl>
      <label htmlFor="active">
     <li><NavLink exact to="/zadania"><Button Mobile>Zadania</Button></NavLink></li>
     <li><Button Mobile onClick={() => dispatch(fetchMyTasksSave())} disabled={ifLoading}>
      {ifLoading ? "Zapisz" : <Span >Zapisz</Span> } 
      </Button></li>
     
      <li><Button Mobile onClick={() => dispatch(fetchExampleTasks())} disabled={ifLoading}>
       {ifLoading ? "Przykłady" : <Span Mobile>Przykłady</Span> } 
      </Button></li>
     
      <li><Button Mobile onClick={() => dispatch(fetchMyTasksGet())} disabled={ifLoading}>
     {ifLoading ? "Załaduj" : <Span Mobile>Załaduj</Span> } 
      </Button></li>

      <li><Button Mobile onClick={() => dispatch(removeAllTasks())} disabled={ifLoading}>
        {ifLoading ? "Usuń wszystko" : <Span Red Mobile>Usuń wszystko</Span> } 
        </Button></li>
<li><NavLink exact to="/author"><Button Mobile>Autor</Button></NavLink></li>
</label>
</WrapperUl>

</Wrapper>
<Content>
      <ContentTitle>
Lista zadań</ContentTitle>
</Content>
</>
 
);

};

export default HeaderMobile;
