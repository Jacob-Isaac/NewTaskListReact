import { Flex, FlexButton } from "./styled";

const Buttons = ({hideAllTasks, hideTasks, doneAllTasks, showOrHide}) => (
  <Flex>
    <FlexButton onClick={hideAllTasks}>{hideTasks ? "Pokaż" : "Ukryj"} ukończone</FlexButton>
    <FlexButton onClick={doneAllTasks}>{showOrHide ? "Odznacz" : "Ukończ"} wszystkie</FlexButton>
  </Flex>
);

export default Buttons;
