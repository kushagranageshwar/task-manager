import { createSelector } from "reselect";

export const taskSelector = createSelector((state) => state.get('tasks') , (obj) => {
    return obj;
});