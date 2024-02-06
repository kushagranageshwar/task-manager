import { CREATE, DELETE, EDIT, FETCH, TASKS_RECEIVED } from "./taskTypes";
import {fromJS} from 'immutable';

const initialState = fromJS({tasks: []});

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH: 
            return state
        case TASKS_RECEIVED:
            return state.set(
                'tasks', [action.json]
            )
        case CREATE:
            return state
        case EDIT:
            return state
        case DELETE:
            return state
        default:
            return state;
    }
}

export default taskReducer;