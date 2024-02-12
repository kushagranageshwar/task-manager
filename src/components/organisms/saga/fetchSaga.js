import { takeLatest, put } from "redux-saga/effects";
import { FETCH, TASKS_RECEIVED } from "../redux/taskTypes";
import axios from "axios";
import { response } from "msw";

function* fetchData() {
  try {
    const response = yield axios.get("http://localhost:8000/tasks");
    if (response?.status === 200) {
      yield put({ type: TASKS_RECEIVED, json: response?.data || [] });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* fetchSaga() {
  yield takeLatest(FETCH, fetchData);
}
