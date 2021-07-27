import {
    GET_IMAGES,
    SET_SEARCH,
} from "../types";

export const GetImagesAction = images => ({
    type: GET_IMAGES,
    payload: {
        images,
    }
});

export const SetSearchAction = data => ({
    type: SET_SEARCH,
    payload: {
        data,
    }
});