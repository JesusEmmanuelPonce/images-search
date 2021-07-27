import {
    GET_IMAGES,
    SET_SEARCH,
} from "../types";

const initialState = {
    allImages: [],
    search: {
        q: "general",
        lang: "",
        orientation: "",
        category: "",
        colors: "",
    }
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                allImages: action.payload.images,
            }
        case SET_SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    ...action.payload.data
                }
            }
        default:
            return state;
    }
}

export default searchReducer;