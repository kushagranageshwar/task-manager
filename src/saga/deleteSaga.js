import { takeLatest, put, call } from 'redux-saga/effects';
import {DELETE, FETCH} from '../redux/taskTypes';
import axios from 'axios';

function* deleteData(action) {
    try{
        const response = yield call(axios.delete, [`http://localhost:8000/tasks/${action.payload.id}`]);
        yield put({type: FETCH});
    }
    catch(err){
        console.log(err);
    }
}

export default function* deleteSaga() {
    yield takeLatest(DELETE, (action)=>deleteData(action));
}