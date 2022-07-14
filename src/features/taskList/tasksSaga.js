import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTaskList } from "./tasksSlice";

function* fetchExampleTasksWorker() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTaskList(exampleTasks));
  } catch (error) {
    yield call(alert("coś poszło nie tak!")); //sprawdzic czy działa tradycyjne wywoływanie funkcji - tak ale tylko w alercie
  }
}

export function* watchFetchExampleTasks() {
  console.log("jest git panowie");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksWorker);
}

//dokończyć , czyli 16:00 w 14.03