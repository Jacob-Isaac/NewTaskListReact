import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/taskList/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
