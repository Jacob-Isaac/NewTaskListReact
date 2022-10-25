import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Task = styled.span`
  display: flex;
  padding-bottom: 9px;
  margin-bottom: 9px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
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
      background-color: ${({ theme }) => theme.color.teal};
      &:hover {
        background-color: ${({ theme }) => theme.color.tealBrighter};
      }
    `};
  ${({ Red }) =>
    Red &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      &:hover {
        background-color: ${({ theme }) => theme.color.redBrighter};
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
    color: ${({ theme }) => theme.color.niceGray};
  }
`;