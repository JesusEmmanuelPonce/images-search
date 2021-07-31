import {
    GET_IMAGES,
    SET_SEARCH,
    SET_TOTAL_PAGES,
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

export const SetTotalPagesAction = pages => ({
    type: SET_TOTAL_PAGES,
    payload: {
        pages,
    }
});