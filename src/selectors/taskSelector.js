import { createSelector } from "reselect";

export const taskSelector = createSelector((state) => state.get('tasks') , (obj) => {
    // console.log(obj);
    return obj;
});