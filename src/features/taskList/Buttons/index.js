import { Flex, FlexButton } from "./styled";

const Buttons = ({ taskList, disabled, hideAllTasks, hideTasks, doneAllTasks, showOrHide }) => (
  <Flex>

    <FlexButton 
      disabled={
        taskList.length >= 1 && taskList.some((task) => (task.done === true))
          ? false
          : true
        }
      onClick={hideAllTasks}>
      {hideTasks ? "Pokaż" : "Ukryj"} ukończone
    </FlexButton>

    <FlexButton disabled={taskList.length === 0 && true} onClick={doneAllTasks}>
      {showOrHide ? "Odznacz" : "Ukończ"} wszystkie
    </FlexButton>

  </Flex>
);

export default Buttons;


