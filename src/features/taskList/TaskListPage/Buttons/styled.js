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
    `}
`;
