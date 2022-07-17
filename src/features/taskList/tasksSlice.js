import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: getTasksFromLocalStorage(),
    hideTask: false,
    showOrHide: false,
  },

  reducers: {
    addTask: (state, { payload: newTask }) => {
      state.taskList.push(newTask);
    },
    hideAllTasks: (state) => {
      state.hideTask = !state.hideTask;
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
      state.showOrHide = !state.showOrHide;
      if (state.showOrHide === true) {
        for (const task of state.taskList) {
          task.done = true;
        }
      } else {
        for (const task of state.taskList) {
          task.done = false;
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

export default taskListSlice.reducer;
