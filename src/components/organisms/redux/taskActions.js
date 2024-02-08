import {CREATE, EDIT, DELETE, FETCH} from './taskTypes.js';

function createTask(data){
    return {type: CREATE, payload: {data: data}}
}

function editTask(id, data){
    return {type: EDIT, payload: {id: id, data: data}}
}

function deleteTask(id){
    return {type: DELETE, payload: {id: id}}
}

function fetchTasks(){
    return {type: FETCH}
}

export {createTask, editTask, deleteTask, fetchTasks};