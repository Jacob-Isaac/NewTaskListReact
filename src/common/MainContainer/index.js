import { Title, Box, BorderLine, Wrappers} from "../TitleMainContainer/styled";
// import Buttons from "../../features/taskList/TaskListPage/Buttons";

const MainContainer = ({ buttons, title, children }) => {
  return (
  <Box as="main" id="StandardBox">
  <BorderLine>
    <Wrappers>
    <Title>{title}</Title>
    {buttons}
    </Wrappers>
    </BorderLine>
    {children}
  </Box>
  );
};

export default MainContainer;
