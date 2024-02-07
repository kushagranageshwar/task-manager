import { takeLatest, call } from 'redux-saga/effects';
import {EDIT} from '../redux/taskTypes';
import axios from 'axios';

function* editData(action) {
    try{
        yield call(axios.put, [`http://localhost:8000/tasks/${action.payload.id}`], action.payload.data);
    }
    catch(err){
        console.log(err);
    }
}

export default function* editSaga() {
    yield takeLatest(EDIT, (action)=>editData(action));
}
