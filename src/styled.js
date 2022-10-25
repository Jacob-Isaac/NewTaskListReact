import { css } from "styled-components";

export const StandardBox = css`
  color: rgb(24, 24, 24);
  box-shadow: 0px 0px 8px;
  margin: auto;
  width: 50%;
  padding-bottom: 20px;
  background-color: rgb(255 255 255 / 90%);
  min-width: 250px;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
