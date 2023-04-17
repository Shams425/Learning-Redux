import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payLoad,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payLoad,
      };
    default:
      return state;
  }
};
