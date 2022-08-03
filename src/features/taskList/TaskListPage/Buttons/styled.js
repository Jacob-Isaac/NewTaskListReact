import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: center; */
  /* @media (max-width: 800px) {
    flex-direction: column;
  } */
`;


export const Button = styled.button`
  /* max-width: 100px; */
  /* margin: 10px; */
  /* display: flex ; */
  /* flex-grow: 3;  */
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
