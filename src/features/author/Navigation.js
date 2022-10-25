import {
  Navigation,
  StyledNavLink,
  Span,
} from "../../common/Navigation/styled";

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
