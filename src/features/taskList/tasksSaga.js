import {
  call,
  delay,
  put,
  select,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTaskList, selectTasks, } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

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
  const taskList = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, taskList.taskList);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksWorker);
  yield takeEvery("*", saveTasksInLocalStorageWorker);
}
