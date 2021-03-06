import { Box } from "./styled";

const MainContainer = ({ children }) => (
  <Box as="main">
    {/* StandardBox */}
    {children}
  </Box>
);

export default MainContainer;
