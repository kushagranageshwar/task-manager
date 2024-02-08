import { takeLatest, put } from "redux-saga/effects";
import { FETCH, TASKS_RECEIVED } from "../redux/taskTypes";
import axios from "axios";

function* fetchData() {
  try {
    const json = yield axios
      .get("http://localhost:8000/tasks")
      .then((response) => response.data);
    yield put({ type: TASKS_RECEIVED, json: json });
  } catch (error) {
    console.log(error);
  }
}

export default function* fetchSaga() {
  yield takeLatest(FETCH, fetchData);
}
