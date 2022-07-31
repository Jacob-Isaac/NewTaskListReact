import styled from "styled-components";
import {css} from "styled-components";

export const Buttons = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 40px;
  min-width: 250px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
    /* color: black; */
    font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  padding: 15px;
  font-family: "Montserrat", cursive, sans-serif;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  &:hover {
    color: rgb(158, 158, 158);
    cursor: pointer;
  }
  &:active {
    color: rgb(158, 158, 158);
    transform: scale(0.8);
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
      &:hover {
        color: rgb(158, 158, 158);
      cursor: auto;
      }
      &:active {
    color: rgb(158, 158, 158);
    transform: none;
  }
    `}
`;
