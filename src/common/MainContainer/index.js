import {H1, Box, Wrapper, Title, Space} from "./styled";

const MainContainer = ({ appTitle, buttons, title, children }) => {
  return (
    <>
      <H1>{appTitle}</H1>
      <Box as="main" id="StandardBox">
        <Wrapper>
          <Title>{title}</Title>
          <Space />
          {buttons}
        </Wrapper>
        {children}
      </Box>
    </>
  );
};

export default MainContainer;
