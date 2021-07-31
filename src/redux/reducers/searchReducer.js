import {
    GET_IMAGES,
    SET_SEARCH,
    SET_TOTAL_PAGES,
} from "../types";

const initialState = {
    allImages: {},
    isImages: false,
    totalPages: 1,
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
                isImages: true,
            }
        case SET_SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    ...action.payload.data
                }
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload.pages
            }
        default:
            return state;
    }
}

export default searchReducer;