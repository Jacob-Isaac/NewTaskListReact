import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Task = styled.span`
  display: flex;
  padding-bottom: 9px;
  margin-bottom: 9px;
  border-bottom: 1px solid rgb(158, 157, 157);
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;
export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  color: rgb(233, 233, 233);
  min-width: 33px;
  height: 30px;
  transition: background 0.25s;
  ${({ Green }) =>
    Green &&
    css`
      background-color: teal;
      &:hover {
        background-color: hsl(180, 100%, 28%);
      }
    `};
  ${({ Red }) =>
    Red &&
    css`
      background-color: #df1616;
      &:hover {
        background-color: #df4747;
      }
    `};
`;

export const Content = styled.span`
 text-align: justify;
  flex-grow: 1;
  margin: 5px;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const TaskList = styled.ul`
  text-align: left;
  list-style-type: none;
  margin-right: 35px;
  word-break: break-word;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(158, 158, 158);
  }
`;