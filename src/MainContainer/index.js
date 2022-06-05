import { StandardBox } from "../styled";

const MainContainer = ({children}) => (
<StandardBox as="main"> 
{children}
</StandardBox>
);

export default MainContainer;