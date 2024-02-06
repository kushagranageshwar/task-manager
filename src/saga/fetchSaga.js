import { takeLatest, put, get } from 'redux-saga/effects';
import {FETCH, TASKS_RECEIVED} from '../redux/taskTypes';

function* fetchData() {
    try{
        const json = yield fetch('http://localhost:8000/tasks')
                .then(response => response.json());
        yield put({type: TASKS_RECEIVED, json: json});
    }catch(error){
        console.log(error);
    }
}

export default function* fetchSaga() {
    yield takeLatest(FETCH, fetchData);
}
