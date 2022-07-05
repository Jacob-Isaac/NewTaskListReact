import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: [],
    hideTask: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    hideAllTasks: (state) => {
    state.hideTask = !state.hideTask;
    },
    tickTask: (state, action) => {
      const index = state.taskList.findIndex(task => task.id === action.payload);
   state.taskList[index].done = !state.taskList[index].done;
      },
     removeTask: (state, action) => {
      const index = state.taskList.findIndex(task => task.id === action.payload);
     state.taskList = [...state.taskList.slice(0, index), ...state.taskList.slice(index + 1)];
     },
    //  doneAllTasks: (state, action) => {
    //   setButtonText(showOrHide => !showOrHide)
    //   setTasks(taskList => taskList.map(task => {
    //     if (showOrHide === false) {
    //       return { ...task, done: true };
    //     }
    //     return { ...task, done: false };
    //   }));
    //  },
    },
});

// DONEALLTASKS
//+ NA KONCU ZALEZNOSCI KTORYCH NIE MA U KRZYSZTOFA A U MNIE SĄ

export const { addTask, hideAllTasks, tickTask, removeTask} = taskListSlice.actions;

export const selectTasks = (state) => state.taskList;

export default taskListSlice.reducer;
