import { takeLatest, put, call } from 'redux-saga/effects';
import {CREATE} from '../redux/taskTypes';
import axios from 'axios';

function* addData(action) {
    try{
        const response = yield call(axios.post, ["http://localhost:8000/tasks"], action.payload.data);
        
    }
    catch(err){
        console.log(err);
    }
}

export default function* addSaga() {
    yield takeLatest(CREATE, addData);
}