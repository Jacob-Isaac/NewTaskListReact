import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: [],
    hideTask: false,
  },
  reducers: {
    addTask: (previousState, action) => {
      previousState.taskList.push(action.payload);
    },
    hideAllTasks: (state) => {
    state.hideTask = !state.hideTask;
    },
    // removeTask: (state) => {
    //   (taskList => taskList.filter(task => task.id !== id));
    //   state.hideTasks = !state.hideTasks;
    //   },
  },
});

// DODAĆ TICKTASK, REMOVETASK, HIDESHOWTASKS 
//+ NA KONCU ZALEZNOSCI KTORYCH NIE MA U KRZYSZTOFA A U MNIE SĄ

export const { addTask, hideAllTasks} = taskListSlice.actions;

export const selectTasks = (state) => state.taskList;

export default taskListSlice.reducer;
