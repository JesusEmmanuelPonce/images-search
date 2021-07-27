import { SET_SEARCH } from "../types";

export const SetSearchAction = data => ({
    type: SET_SEARCH,
    payload: {
        data,
    }
})