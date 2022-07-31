import { css } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StandardBox = css`
  color: rgb(24, 24, 24);
  box-shadow: 5px 5px 10px;
  margin: auto;
  margin-top: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(255 255 255 / 80%);
  min-width: 250px;
  width: 80%;
  border-radius: 17px;
`;

// export const Input = css`

// `;    zrobic inputa stylizowanego ktorego mozna wszedzie uzyc / przerzucić do common

export const StyledNavLink = styled(NavLink)`
&.active {
  color: red;
}
`;
