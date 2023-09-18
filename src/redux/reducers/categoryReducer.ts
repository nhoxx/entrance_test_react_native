import {
    SET_CATEGORY
} from '../actions/actionTypes';

const INTIAL_STATE = {
    categories: null,
    isModalLoading: false
};

const categoryReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};
export default categoryReducer;