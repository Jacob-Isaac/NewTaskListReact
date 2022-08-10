import { Navigation, StyledNavLink, Span } from "../../common/Header/styled";

const AuthorNavigation = () => (
<Navigation>
      <StyledNavLink exact to="/zadania">
       <Span> Zadania</Span>
      </StyledNavLink>
      <StyledNavLink exact to="/author">
      <Span>Autor</Span>
      </StyledNavLink>
  </Navigation>
);

export default AuthorNavigation; 