import {legacy_createStore as createStore} from 'redux';
import taskReducer from './taskReducer';

const store = createStore(taskReducer);

export default store;