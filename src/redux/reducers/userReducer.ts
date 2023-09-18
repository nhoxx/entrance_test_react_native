import {
  SET_USER_INFOR,
  SET_MODAL_LOADING
} from '../actions/actionTypes';

const INTIAL_STATE = {
  user: null,
  isModalLoading: false
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_INFOR:
      return { ...state, user: action.payload };
    case SET_MODAL_LOADING:
      return { ...state, isModalLoading: action.payload };
    default:
      return state;
  }
};
export default userReducer;