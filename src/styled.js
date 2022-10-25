import { css } from "styled-components";

export const StandardBox = css`
  box-shadow: 0px 0px 8px;
  margin: auto;
  width: 50%;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.color.transparentWhite};
  min-width: 250px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 90%;
  }
`;
