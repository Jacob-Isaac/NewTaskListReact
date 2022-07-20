import { StandardBox } from "../../styled";
import styled from "styled-components";

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
  background-color: transparent;
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  padding: 15px;
  font-family: "Montserrat", cursive, sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: black;
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
`;

export const NavigationBox = styled.header`
${StandardBox}
font-family: "Montserrat", cursive, sans-serif;
  font-size: 30px;
  color: black;
  font-weight: bolder;
`;

