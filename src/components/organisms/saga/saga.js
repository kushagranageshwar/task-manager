import { all } from 'redux-saga/effects';
import fetchSaga from './fetchSaga';
import editSaga from './editSaga';
import addSaga from './addSaga';
import deleteSaga from './deleteSaga';

export default function* rootSaga() {
yield all([
    fetchSaga(),
    editSaga(),
    addSaga(),
    deleteSaga()
    ]);
}