import {
  call,
  delay,
  put,
  select,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks,fetchMyTasks, setTaskList, selectTasks, setLoading } from "./tasksSlice";
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
  try {
    yield delay(1000);
    const taskList = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, taskList.taskList);
    yield put(setLoading());

  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }

}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksWorker);
  yield takeLatest(fetchMyTasks.type, saveTasksInLocalStorageWorker);
  // yield takeLatest("*", saveTasksInLocalStorageWorker);
  // zamiast gwiazdki fetchMyTasks.type, i potem to co już jest  - stworzyć ten 
  //fetch w tasks Slice !
}
