import { css } from "styled-components";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const StandardBox = css`
  color: rgb(24, 24, 24);
  box-shadow: 0px 0px 8px;
  margin: auto;
  width: 50%;
  /* margin-top: 20px; */
  /* margin-bottom: 15px; */
  /* padding-top: 20px; */
  padding-bottom: 20px;
  background-color: rgb(255 255 255 / 80%);
  min-width: 250px;
  /* border-radius: 17px; */
  @media (max-width: 800px) {
    width: 90%;
}
`;





// export const Input = css`

// `;    zrobic inputa stylizowanego ktorego mozna wszedzie uzyc / przerzucić do common

// export const StyledNavLink = styled(NavLink)`
// &.active {
//   color: red;
// }
// `;

// zrobić style do kolorów