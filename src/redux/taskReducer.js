import { CREATE, DELETE, EDIT } from "./taskTypes";

const initialState = {tasks: []};

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE:
            console.log(state);
            return {
                tasks: [...state.tasks, action.payload.data]
            }
        case EDIT:
            console.log('hello');
            let newState = state;
            newState.tasks[action.payload.id] = action.payload.data;
            return {
                tasks: newState.tasks
            }
        case DELETE:
            return {
                tasks: state.tasks.filter((value, index) => index!=action.payload.id)
            }
        default:
            return state;
    }
}

export default taskReducer;