import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "./styled.css";
import { StyledNavLink, Navigation, Button, Img } from "../Header/styled";
// import "./input";
import menu from "../Header/menu.png"

const HeaderMobile = () => {

    const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive (current => !current);
    console.log(isActive);
  }
 
return (
    <>
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
<li><a><NavLink exact to="/zadania">Zadania</NavLink></a></li>
<li><a href="#">Zapisz</a></li>
<li><a href="#">Przykłady</a></li>
<li><a href="#">Załaduj</a></li>
<li><a href="#">Usuń Wszystko</a></li>
<li><a href="#"><NavLink exact to="/author">Autor</NavLink></a></li>
</ul>
</div>
<div class="content">
      <div class="title">
Lista zadań</div>
</div>
</>
 
);

};

export default HeaderMobile;
