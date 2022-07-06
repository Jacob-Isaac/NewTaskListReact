import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: [],
    hideTask: false,
    showOrHide: false,
  },

  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    hideAllTasks: (state) => {
      state.hideTask = !state.hideTask;
    },
    tickTask: (state, action) => {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
      state.taskList[index].done = !state.taskList[index].done;
    },
    removeTask: (state, action) => {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
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
  },
});

export const { addTask, hideAllTasks, tickTask, removeTask, doneAllTasks } =
  taskListSlice.actions;

export const selectTasks = (state) => state.taskList;
export const selectAreTasksEmpty = (state) =>
  selectTasks(state).taskList.length === 0;

export default taskListSlice.reducer;
