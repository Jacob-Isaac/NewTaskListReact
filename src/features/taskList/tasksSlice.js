import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    //taskList: getTasksFromLocalStorage(),
    // next step :  getTasks tylko wtedy jak klikniemy , stworzyć osobny fetch getMyTasks
    taskList: [],
    isTaskHide: false,
    ifLoading: false,
    ifLoading2: false,
    ifLoading3: false,
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
    fetchExampleTasks: (state) => {
      state.ifLoading = true;
    },
    fetchMyTasksSave: (state) => {
      state.ifLoading2 = true;
    },
    fetchMyTasksGet: (state) => {
      state.ifLoading3 = true;
    },

    setTaskList: (state, { payload: tasks }) => {
      state.taskList = tasks;
      state.ifLoading = false;
      state.ifLoading3= false;
    },
    setLoading: (state) => {
      state.ifLoading2 = false;
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
  fetchMyTasksSave,
  fetchMyTasksGet,
  setTaskList,
  setLoading,
  setButtonText,
} = taskListSlice.actions;

export const selectTasks = (state) => state.taskList;
export const selectAreTasksEmpty = (state) => selectTasks(state).taskList.length === 0;
export const selectIsEveryTaskDone = (state) => selectTasks(state).taskList.every(({done}) => done);
export const selectIsTaskHide = (state) => selectTasks(state).isTaskHide;
export const getTaskById = (state, taskId) => selectTasks(state).taskList.find(({id}) => id === taskId);
 
 
 export const selectTasksByQuery = (state, query) => {
   const taskList = selectTasks(state);
   if (!query || query.trim() === "") {
      return taskList.taskList; 
 }
   return taskList.taskList.filter(({content}) => content.toUpperCase().includes(query.trim().toUpperCase()));
  
 }

export default taskListSlice.reducer;

