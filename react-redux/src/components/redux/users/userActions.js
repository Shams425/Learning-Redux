import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payLoad: users,
  };
};

export const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payLoad: error,
  };
};
