import styled, { css } from "styled-components";

export const Button = styled.button`
  margin-right: 11px;
  background-color: transparent;
  border: none;
  ${({ disabled }) =>
    disabled === false &&
    css`
      &:hover {
        color: rgb(158, 158, 158);
        cursor: pointer;
      }
      &:active {
        color: black;
        cursor: pointer;
      }
    `}
    @media (max-width: 800px) {
  font-size: 14px;
  margin: 15px;
}

`;
