import styled, { css } from "styled-components";

export const Task = styled.span`
  display: flex;
  margin-bottom: 8px;
  border-bottom: 1px solid rgb(158, 157, 157);
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  block-size: 25px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Content = styled.span`
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
