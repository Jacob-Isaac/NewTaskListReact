import { Wrapper, Title, Box, H1, BorderLine} from "./styled";

const MainContainer = ({ appTitle, title, children }) => (
  <>
  <Wrapper>
  <H1>{appTitle}</H1>
  </Wrapper>

  <Box as="main" id="StandardBox">
  <BorderLine><Title>{title}</Title></BorderLine>
    {children}
  </Box>
  </>
);

export default MainContainer;
