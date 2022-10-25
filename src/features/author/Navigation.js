import {
  Wrapper,
  StyledNavLink,
  Span,
} from "../../common/Navigation/styled";

const AuthorNavigation = () => (
  <Wrapper>
    <StyledNavLink exact to="/zadania">
      <Span> Zadania</Span>
    </StyledNavLink>
    <StyledNavLink exact to="/author">
      <Span>Autor</Span>
    </StyledNavLink>
  </Wrapper>
);

export default AuthorNavigation;
