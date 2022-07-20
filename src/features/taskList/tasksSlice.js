import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";


const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: getTasksFromLocalStorage(),
    isTaskHide: false,
  },

  reducers: {
    addTask: (state, { payload: newTask }) => {
      state.taskList.push(newTask);
    },
    hideAllTasks: (state) => {
     state.isTaskHide = !state.isTaskHide;
    },
    tickTask: (state, { payload: id }) => {
      const index = state.taskList.findIndex((task) => task.id === id);
      state.taskList[index].done = !state.taskList[index].done;
    },
    removeTask: (state, { payload: id }) => {
      const index = state.taskList.findIndex((task) => task.id === id);
      state.taskList = [
        ...state.taskList.slice(0, index),
        ...state.taskList.slice(index + 1),
      ];
    },
    doneAllTasks: (state) => {
      if (state.taskList.every(({done}) => done)) {
          for (const task of state.taskList) {
            task.done = false;
          }
      } else {
        for (const task of state.taskList) {
          task.done = true;
        }
      }
    },
    fetchExampleTasks: () => {},
    setTaskList: (state, { payload: exampleTasks }) => {
      state.taskList = exampleTasks;
    },
  },
});


export const {
  addTask,
  hideAllTasks,
  tickTask,
  removeTask,
  doneAllTasks,
  fetchExampleTasks,
  setTaskList,
} = taskListSlice.actions;

export const selectTasks = (state) => state.taskList;
export const selectAreTasksEmpty = (state) =>
  selectTasks(state).taskList.length === 0;
  export const selectIsEveryTaskDone = (state) => selectTasks(state).taskList.every(({done}) => done);
export const getTaskById = (state, taskId) =>
selectTasks(state).taskList.find(({id}) => id === taskId);
 export const selectHideDone = (state) => selectTasks(state).taskList.isTaskHide;
export const selectTasksByQuery = (state, query) => {
  const taskList = selectTasks(state);
  if (!query || query.trim() === "") {
    return taskList.taskList;
  }
  return taskList.taskList.filter(({content}) => content.toUpperCase().includes(query.trim().toUpperCase()));
  
}


export default taskListSlice.reducer;
// continue 20:00 14.05
