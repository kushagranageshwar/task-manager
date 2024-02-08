import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './taskReducer';
import rootSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(taskReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;