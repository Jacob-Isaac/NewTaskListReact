import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
  width: 100%;
  /* height: 80px; */
  margin-bottom: 50px;
  background-color: rgb(255 255 255 / 80%);
  color: rgb(24, 24, 24);
  box-shadow: 0.5px 0px 8px;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
 @media (min-width: 1280px) {
  width: 14%;
  }
  font-size: 15px;
  background-color: transparent;
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  &:visited {
    color: black;
  }
  &:hover {
    color: rgb(97, 97, 97);
    cursor: pointer;
  }
  &:active {
    color: rgb(97, 97, 97);
    transform: scale(0.8);
    background-color:none;
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
     color: rgb(158, 158, 158);
      &:hover {
        color: rgb(158, 158, 158);
        cursor: auto;
      }
      &:active {
        color: rgb(158, 158, 158);
        transform: none;
      }
    `}
    ${({ Mobile }) =>
    Mobile &&
    css`
font-size: 23px;
font-weight: normal;
      `};
    
`;
export const Span = styled.span`
 color:black;
 &:hover {
  color: rgb(97, 97, 97);
      }
 ${({ Red }) =>
    Red &&
    css`
      color: #df1616;
      &:hover {
        color: #8a0000;
      }
      `};
     
    `;
    
export const StyledNavLink = styled(NavLink)`
 @media (min-width: 1380px) {
  width: 14%;
  }
  font-size: 15px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: black;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 22px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  &:visited {
    color: black;
    background-color:none;
  }
  &:hover {
    color: rgb(97, 97, 97);
    cursor: pointer;
  }
  &:active {
    color: rgb(97, 97, 97);
    transform: scale(0.8);
    background-color:none;
    color: black;
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
      &:hover {
        color: rgb(97, 97, 97);
        cursor: auto;
      }
      &:active {
        color: rgb(97, 97, 97);
        transform: none;
      }
    `}
 
    background-color:none;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  -webkit-tap-highlight-color: transparent;
  ${({ click }) =>
   click === true &&
    css`
  transition-duration: 0.5s;
  transition-property: transform;
  transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -webkit-tap-highlight-color: transparent;
    `}
    ${({ klik }) =>
   klik === true &&
    css`
  transition-duration: 0.5s;
  transition-property: transform;
  transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -webkit-tap-highlight-color: transparent;
    `}

`;

// export const Navigation = styled.div`
//   display: flex;
//   justify-content: center;
//   min-width: 200px;
//   width: 100%;
//   margin-bottom: 50px;
//   background-color: rgb(255 255 255 / 80%);
//   color: rgb(24, 24, 24);
//   box-shadow: 0.5px 0px 8px;
//   @media (max-width: 850px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;