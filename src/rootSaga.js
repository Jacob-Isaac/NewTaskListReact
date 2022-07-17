import {all} from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/taskList/tasksSaga";


export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ]);
}