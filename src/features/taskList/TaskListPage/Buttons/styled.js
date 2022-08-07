import styled, { css } from "styled-components";

export const Button = styled.button`
  margin-right: 11px;
  background-color: transparent;
  border: none;
  color: black;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: rgb(158, 158, 158);
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 14px;
    margin: 15px;
  }
`;
export const Span = styled.span`
  color: black;
  ${({ disabled }) =>
    disabled === true &&
    css`
      color: rgb(158, 158, 158);
      &:hover {
        cursor: context-menu;
      }
    `}
`;
