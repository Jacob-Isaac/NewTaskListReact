import { Box } from "./styled";

const MainContainer = ({children}) => (
<Box as="main"> 
{children}
</Box>
);

export default MainContainer;