import { Box } from "./styled";

const MainContainer = ({ title, children }) => (
  <Box as="main" id="StandardBox">
    {title}
    {children}
  </Box>
);

export default MainContainer;
