import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  fetchMyTasksSave,
  fetchMyTasksGet,
  setTaskList,
  selectTasks,
  setLoading,
  removeAllTasks,
} from "./tasksSlice";
import {
  saveTasksInLocalStorage,
  getTasksFromLocalStorage,
} from "./tasksLocalStorage";

function* fetchExampleTasksWorker() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTaskList(exampleTasks));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}
function* saveTasksInLocalStorageWorker() {
  try {
    yield delay(1000);
    const taskList = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, taskList.taskList);
    yield put(setLoading());
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}
function* getTasksFromLocalStorageWorker() {
  try {
    yield delay(1000);
    yield put(setTaskList(getTasksFromLocalStorage()));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}
function* removeAllTasksWorker() {
  try {
    yield delay(1000);
    yield put(setLoading());
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksWorker);
  yield takeLatest(fetchMyTasksSave.type, saveTasksInLocalStorageWorker);
  yield takeLatest(fetchMyTasksGet.type, getTasksFromLocalStorageWorker);
  yield takeLatest(removeAllTasks.type, removeAllTasksWorker);
}
