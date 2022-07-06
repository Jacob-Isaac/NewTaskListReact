import { configureStore } from "@reduxjs/toolkit";

import taskListReducer from "./features/taskList/tasksSlice";

export default configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
