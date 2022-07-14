import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
// import reducer from "./reducer";
// import saga from "./saga";
import taskListReducer from "./features/taskList/tasksSlice";
import {watchFetchExampleTasks} from "./features/taskList/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;